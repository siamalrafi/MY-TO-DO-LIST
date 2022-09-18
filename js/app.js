const inputValueFunction = (id) => {
    const inputFiled = document.getElementById(id);
    const inputFiledValue = inputFiled.value;
    inputFiled.value = '';
    return inputFiledValue;
}

document.getElementById('btn-add').addEventListener('click', function () {
    const inputValue = (inputValueFunction('input-filed'));
    const Container = document.getElementById('container');

    if (inputValue === '') {
        alert('Please Input Something')
    }
    else {
        const containerSection = document.createElement('div');
        containerSection.innerHTML = `
    <div class="flex justify-center py-5">
       <div class="card w-96 bg-base-100 shadow-xl">
           <div class="card-body text-center">
               <h2 class="card-title text-center">YOUR TO-DO TO-DO-LIST!</h2>
               <div>
                <p>${inputValue}
                </p>
               </div>
           </div>
       </div>
    </div>
    `;
        Container.appendChild(containerSection);
    }
})
