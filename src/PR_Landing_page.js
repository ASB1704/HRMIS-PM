import React from 'react'
import '../src/CSS/PR_Landing_page.css'
export const PR_Landing_page = () => {
  return (
    <div className='PR_Landing_page'>
        <div className='PRS_Navbar'>
            Performance Management System
      </div>
      <div className='PRS_Main'>
       <div className='PRS_cards'>360-Degree Performance Review</div>
       <div className='PRS_cards'>Dashboard and Reporting</div>
       <div className='PRS_cards'>Employee Surveys</div>
       <div className='PRS_cards'>Feedback Management</div>
       <div className='PRS_cards'>Goal Management</div>
       <div className='PRS_cards'>Talent Management</div>
       <div className='PRS_cards'>APAR Management</div>
       <div className='PRS_cards'>KPI Management</div>
       <div className='PRS_cards'>Employee periodic review schedule</div>
      </div>
    </div>
  )
}
