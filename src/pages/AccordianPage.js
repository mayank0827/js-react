import Accordion from "../components/Accordion";
function AccordianPage(){
    const items =[
        {
            id: 'abc',
          label: 'Can i use react on a project ?  ',
          content:'you can use react on any project you want. you can use react on any project you want. you can use react on any project you want'  
        },
        {
            id: 'def',
          label: 'Can i use javascript on a project ?',
          content:'you can use javascript on any project you want'  
        },
        {
            id: 'ghi',
          label: 'Can i use CSS on a project ?',
          content:'you can use CSS on any project you want'  
        }
    ];

    return <Accordion items={items}/>
    
}

export default AccordianPage;