import React from 'react'

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {
        completedTasksCount + activeTasksCount > 0 && (
          <div className='text-center'>
            <p className='text-sm text-muted-foreground'>
              {
                completedTasksCount > 0 && (
                  <>
                    Tuyệt vời bạn đã hoàn thành {completedTasksCount} nhiệm vụ!
                    {
                      activeTasksCount > 0 && (
                        <> Còn {activeTasksCount} nhiệm vụ đang chờ bạn hoàn thành.</>
                      )
                    }
                  </>
                )
              }
              {
                completedTasksCount === 0 && (
                  <>Bạn có {activeTasksCount} nhiệm vụ đang chờ bạn hoàn thành. Cố lên nhé!</>
                )
              }
            </p>
          </div>
        )
      }
    </>
  )
}

export default Footer
