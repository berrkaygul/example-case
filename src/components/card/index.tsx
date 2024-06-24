"use client"
import { CardListResponseModel } from '@/models/global'
import Image from 'next/image'
import React from 'react'
import { IoStar } from "react-icons/io5";
type Props = {
    card: CardListResponseModel
}

const CardItem = (props: Props) => {
    return (
        <div className='bg-[#F8F4EA] p-6 rounded-2xl'>
            <div className="title text-lg md:text-xl font-semibold">
                {props.card.title}
            </div>
            <div className="description text-sm leading-5 font-400 mt-4 mb-6">{props.card.description}</div>
            <div className="another-skils flex gap-2 flex-wrap">
                <span className='text-base font-medium'>{props.card.level} |</span>
                <span className='text-base font-medium'>{props.card.language} |</span>
                <span className='text-base font-medium'>{props.card.questions} |</span>
                <span className='text-base font-medium'>{props.card.duration}</span>
            </div>

            <div className="tested-skills mt-6 mb-4">
                <div className="title text-base font-medium mb-2">Tested Skills:</div>
                <div className="skill-card-list flex flex-wrap gap-3">
                    {
                        props.card.skilList.map((skill, idx) => (
                            <div className="skill-card bg-[#ECE8DD] px-3 py-1 text-center rounded-md">
                                {skill}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="coverage flex">
                <div className="title text-base font-medium">Coverage:</div>
                <span className='text-base font-medium text-red-600 ml-1'>%{props.card.coverage}</span>
            </div>

            <div className="owner flex items-center justify-between  mt-6 cursor-pointer">
                <div className="owner-info flex items-center gap-3">
                    <div className="img-container w-[32px] h-[32px]">
                        <Image src={props.card.ownerLogo} alt='' width={100} height={100} aria-hidden={true} />
                    </div>
                    <div className="title text-base font-medium underline underline-gray">{props.card.ownerName}</div>
                </div>
                <div className="raiting flex items-center gap-2">
                    <IoStar size={24} color='yellow' />
                    <span className='text-base text-green-600'>{props.card.raiting.toFixed(1).replace(".", ",")}</span>
                </div>
            </div>

        </div>
    )
}

export default CardItem