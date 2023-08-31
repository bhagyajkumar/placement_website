import React from "react"
import StudyMaterial from "../../components/StudyMaterial/StudyMaterial"
import StudyMaterialsByCategory from "../../components/StudyMaterial/StudyMaterialCategory"
import Header from "../../components/Header";

const Civil = () => {

    const studyMaterials = [
        {
            id: 1,
            title: '[Robert_Lafore]_Object-oriented_programming_in_C++',
            category: 'SEM 3/4',
            downloadLink: 'https://drive.google.com/file/d/1u72DRuOPBiLtgQ3FQaCW8we2NMNNE-uM/view'
        },
        {
            id: 2,
            title: 'Constructor, Virtual class, Virtual Function notes',
            category: 'SEM 3/4',
            downloadLink: 'https://drive.google.com/file/d/1ZC6hK3xLtwAknpEVmbA0igoRSLosc9aP/view?usp=drive_link'
        },
        {
            id: 3,
            title: 'Object Oriented Programming 2017 May (2015 Ad)',
            category: 'SEM 3/4',
            downloadLink: 'https://drive.google.com/file/d/1KX8EFD-96UKjnhSJztx82hhy3GG6KWaW/view?usp=drive_link'
        },
        {
            id: 4,
            title: 'OOPS notes',
            category: 'SEM 3/4',
            downloadLink: 'https://drive.google.com/file/d/1NhwKkCCzBFDzxx6jkm76mCF3bhfxByKe/view?usp=drive_link'
        },
        {
            id: 5,
            title: "Object oriented programming 2017 Nov (2015 Ad)",
            category: "SEM 3/4",
            downloadLink: "https://drive.google.com/file/d/1S6uS43PiS7WBBqKqBb8KtVelZWi0mLXN/view?usp=drive_link"
        }
        // Add more study materials here
    ];

    const categories = ['all', 'SEM 1/2', 'SEM 3/4', 'SEM 5/6', 'SEM 7/8'   ];

    return (
        <>
            <Header />
            <div style={{paddingTop: "100px"}} className="container">
                <StudyMaterialsByCategory studyMaterials={studyMaterials} categories={categories} />
            </div>
        </>
    )
}

export default Civil