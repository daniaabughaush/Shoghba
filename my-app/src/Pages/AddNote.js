import React from 'react'

const AddNote = () => {
  return (
    <div>
    <form class="text-center border border-light p-5" action="#!">
    
        <p class="h4 mb-4">اضف ملاحظاتك</p>
    

        <div class="form-group">
            <textarea class=" rounded-0 noteText" id="exampleFormControlTextarea2" rows="3" placeholder="اضف اي طلبات خاصة"></textarea>
        </div>
    
       
     
    
    </form>
  </div>
  )
}

export default AddNote