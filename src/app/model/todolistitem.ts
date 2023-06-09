export interface Itodoitem {
    iscomplete: boolean;
    isimportant:boolean;
    text: string;
    deadline?: Date;
};

export const TODO_MOCK: Itodoitem[] = [
    {iscomplete:false, isimportant:false, text:"Hit the gym",deadline: new Date(2023, 4, 1)},  
    {iscomplete:true, isimportant:true, text:"Pay bills"},  
    {iscomplete:false, isimportant:false, text:"Meet John"},  
    {iscomplete:false, isimportant:true, text:"Buy eggs",deadline: new Date(2023, 3, 29)},  
    {iscomplete:true, isimportant:false, text:"Read a book"},  
    {iscomplete:false, isimportant:false, text:"Organize office"},
    {iscomplete:false, isimportant:false, text:"Eat dinner"},    
    {iscomplete:false, isimportant:true, text:"Buy apples",deadline: new Date(2023, 4, 5)},  
    {iscomplete:false, isimportant:true, text:"Meet George"},  
    {iscomplete:false, isimportant:false, text:"Feed the cat"},  
    {iscomplete:true, isimportant:false, text:"Write a letter"},  
    {iscomplete:false, isimportant:false, text:"Run 1 km",deadline: new Date(2023, 1, 15)},  
];