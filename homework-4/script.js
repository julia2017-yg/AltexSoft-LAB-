document.addEventListener('DOMContentLoaded', function () {

const baseUrl = 'http://localhost:3000';
const iconCloseBtn = document.querySelector('.icon-close-btn');
const headCheckbox = document.querySelector('.head-checkbox');
const tableBody = document.querySelector('.table-body');
const companyName = document.querySelector('.company-name');
const contactName = document.querySelector('.contact-name');
const address = document.querySelector('.address');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const usersBtn = document.querySelector('.add-users');
const updateUsers = document.querySelector('.update-users');
const addCumstomerBtn = document.querySelector('.add-customer-btn');
const close = document.querySelector('.close');
const addName = document.querySelector('.add-name');
const addContact = document.querySelector('.add-contact');
const addAddress = document.querySelector('.add-address');
const addCity = document.querySelector('.add-city');
const addCountry = document.querySelector('.add-country');
const modalAdd = document.querySelector('.modal-add');

fetch(`${baseUrl}/posts`)
.then(data => data.json())
.then(res => 
  res.map(function(element) {
    createNewTaskElement(element);
        
    const deleteBtn = document.querySelectorAll('.delete');
    for (let i = 0, len = deleteBtn.length; i < len; i++) {       
      deleteBtn[i].addEventListener('click', (ele) => {
        let targetElement = ele.currentTarget;         
        let id = targetElement.getAttribute('data-id');
        deleteElement(id);
      });
    }   
  })
);

addCumstomerBtn.addEventListener('click', () => {   
  modalAdd.style.display = 'block';
});

close.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    modalAdd.style.display = 'none';
  } 
});

usersBtn.addEventListener('click', () => {
  fetch(`${baseUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({      
      company: addName.value,
      name: addContact.value,     
      address: addAddress.value,
      city: addCity.value,
      country: addCountry.value,  
    }),
  })   
  .then(resp => resp.json())
  .then(data => data);
});
    
headCheckbox.addEventListener('change',  toggleCheckbox);
function toggleCheckbox() {
  const checkboxes = document.querySelectorAll('.checkbox-tr');
  if (headCheckbox.checked) {      
    iconCloseBtn.style.display = 'block';

    for (let i = 0, len = checkboxes.length; i < len; i++) {
      checkboxes[i].checked = true;
    }      
  } else {
    iconCloseBtn.style.display = 'none';
    for (let i = 0, len = checkboxes.length; i < len; i++) {
      checkboxes[i].checked = false;
    }  
  }
}

iconCloseBtn.addEventListener('click', (e) => {

let addTR = document.querySelectorAll('.add-tr');
  for (let i = 0, len = addTR.length; i < len; i++) {
    addTR[i].remove();
  }    
});

//New task list item
function createNewTaskElement(element) {
 
  let tr = document.createElement('tr');
  let tdCompanyName = document.createElement('td');
  let tdContactName = document.createElement('td');
  let tdAddress = document.createElement('td');
  let tdCity = document.createElement('td');
  let tdCountry = document.createElement('td');
  let checkBox = document.createElement('input');
  let editButton = document.createElement('button');
  let deleteButton = document.createElement('button');
  checkBox.type='checkbox';
  checkBox.className = 'checkbox-tr';
  
  deleteButton.type='button';
  editButton.type='button';
  deleteButton.setAttribute('data-id', element.id);
  editButton.setAttribute('data-id', element.id);
  editButton.setAttribute('data-name', element.name);
  editButton.setAttribute('data-company', element.company);
  editButton.setAttribute('data-address', element.address);
  editButton.setAttribute('data-city', element.city);
  editButton.setAttribute('data-country', element.country);
  deleteButton.setAttribute("disabled", true);

  checkBox.addEventListener('change', function (element) {
    if (element.currentTarget.checked) { 
      deleteButton.removeAttribute("disabled", false);
    }   
  });

  editButton.addEventListener('click', (ele) => {
    const modalEditObject = document.querySelector('.modal-edit-object');
    modalEditObject.style.display = 'block';
    let targetElement = ele.currentTarget;
    let id = targetElement.getAttribute('data-id');

    contactName.value = targetElement.getAttribute('data-name');
    companyName.value = targetElement.getAttribute('data-company');
    address.value = targetElement.getAttribute('data-address');
    city.value = targetElement.getAttribute('data-city');
    country.value = targetElement.getAttribute('data-country');

    updateUsers.addEventListener('click', () => {
      editElement(id);    
    });              
});


  tr.appendChild(checkBox);
  tr.appendChild(tdCompanyName);
  tr.appendChild(tdContactName);
  tr.appendChild(tdAddress);
  tr.appendChild(tdCity);
  tr.appendChild(tdCountry);
  tr.appendChild(editButton);
  tr.appendChild(deleteButton);
  tableBody.appendChild(tr);

  tdCompanyName.innerText = element.name;
  tdContactName.innerText = element.company;
  tdAddress. innerText = element.address;
  tdCity.innerText = element.city;
  tdCountry.innerText = element.country;
  deleteButton.innerHTML = '<i class="fa fa-close icon-close">';
  editButton.innerHTML = '<i class="fa fa-pen icon-pen">'; //innerText encodes special characters, HTML does not.
  editButton.className = 'edit';
  deleteButton.className ='delete';
  tdCompanyName.className ='name';
  tr.className = 'add-tr';

}

// Edit element

function editElement(id) {
  fetch(`${baseUrl}/posts/${id}`, {
    method: 'PUT',
    headers: {
       "Content-type": "application/json",
    },
    body: JSON.stringify({
      company: companyName.value,
      name: contactName.value,     
      address: address.value,
      city: city.value,
      country: country.value,  
    }),
  })
   .then(data => data.json())
   .then(res => res);
}

// Delete element.
function deleteElement(id) {
  fetch(`${baseUrl}/posts/${id}`, {
    method: 'DELETE',
  })
  .then(data => data.json())
  .then(res => res);
}

//Get the modal

const modal = document.querySelector('.modal-edit-object');
const modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-close')) {
    modal.style.display = 'none';
  }
  
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

//filter

let filter = function() {
  let inputs = document.querySelector('.input');
  //console.log(inputs);
  inputs.addEventListener('keyup', () =>  {    

      let filterCostomer = inputs.value.toUpperCase();
        const filterElements = document.querySelectorAll('.table-body tr');
        filterElements.forEach(item => {
          if (item.innerHTML.toUpperCase().charAt(0).indexOf(filterCostomer) > -1) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        })
    })
}

filter();
const filterButton = document.querySelector('.filter-button');

filterButton.addEventListener('click', filter);

});


