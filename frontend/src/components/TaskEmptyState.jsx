import { Circle } from 'lucide-react'
import React from 'react'
import { Card } from './ui/card'

const TaskEmptyState = ({filter}) => {
  return (
    <Card className='p-8 text-center border-0 bg-gradient-card shadow-custom-md relative z-10'>
        <div className='space-y-3'>
            <Circle className='size-12 mx-auto text-muted-foreground' />
            <div>
                <h3 className='font-medium text-foreground'>
                    {
                        filter === "active" ? "Không có nhiệm vụ đang làm."
                        : filter === "completed" ? "Chưa có nhiệm vụ đã hoàn thành."
                        : "Chưa có nhiệm vụ."
                    }
                </h3>
                <p className='text-sm text-muted-foreground'>
                    {
                        filter === "all" ? "Hãy thêm nhiệm vụ mới để bắt đầu quản lý công việc của bạn.":
                        `Chuyển sang "tất cả" để thấy những nhiệm vụ ${filter === "active" ? "đã hoàn thành." : "đang làm."}`
                    }
                </p>
            </div>
        </div>
    </Card>
  )
}

export default TaskEmptyState
