let myname : any = document.getElementById("name");
let Desig  : any = document.getElementById("Desig");
let Phone  : any= document.getElementById("Phone");
let Email  : any = document.getElementById("Email");
let add  : any = document.getElementById("add");
let pass  : any = document.getElementById("pass");
let deg  : any = document.getElementById("deg");
let uni : any  = document.getElementById("uni");
let skill1 : any  = document.getElementById("skill1");
let skill2  : any = document.getElementById("skill2");
let skill3 : any  = document.getElementById("skill3");
let lang1  : any = document.getElementById("lang1");
let lang2  :any = document.getElementById("lang2");
let styear : any  = document.getElementById("styear");
let endyear : any = document.getElementById("endyear");
let company : any  = document.getElementById("company");
let comlocation : any = document.getElementById("comlocation");
let jobtitle : any = document.getElementById("jobtitle");
let achv1  : any = document.getElementById("achv1");
let achv2  : any = document.getElementById("achv2");
let achv3 : any = document.getElementById("achv3");
let pic : any = document.getElementById("pic");


let submitbtn =  document.getElementById('submitbtn') 
let form =  document.getElementById('form') 


form?.addEventListener('submit', (e)=>{
    e.preventDefault()

    localStorage.setItem("name", myname.value)
    localStorage.setItem("Desig", Desig.value)
    localStorage.setItem("Phone", Phone.value)
    localStorage.setItem("Email", Email.value)
    localStorage.setItem("add", add.value) 
    localStorage.setItem("pass", pass.value)
    localStorage.setItem("deg", deg.value)
    localStorage.setItem("uni", uni.value)
    localStorage.setItem("skill1 ", skill1.value)
    localStorage.setItem("skill2 ", skill2.value)
    localStorage.setItem("skill3 ", skill3.value)
    localStorage.setItem("lang1", lang1.value)
    localStorage.setItem(" lang2", lang2.value)
    localStorage.setItem("styear", styear.value)
    localStorage.setItem("endyear", endyear.value)
    localStorage.setItem("company", company.value)
    localStorage.setItem("comlocation", comlocation.value)
    localStorage.setItem("jobtitle", jobtitle.value)
    localStorage.setItem("achv1", achv1.value)
    localStorage.setItem("achv2", achv2.value)
    localStorage.setItem("achv3", achv3.value)


     if(pic.files && pic.files[0]){
        let reader = new FileReader()
        reader.addEventListener("load" , ()=>{
            let textimg : any = reader.result
            localStorage.setItem("profile_pic", textimg)
        })
        reader.readAsDataURL(pic.files[0])
     }
    
    
    window.location.href = "./resume/resume.html"

})

