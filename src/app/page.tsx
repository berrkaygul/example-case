"use client"

import CardItem from "@/components/card";
import { CardListResponseModel } from "@/models/global";
import { Box, Container, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {

    const [cardList, setCardList] = useState<CardListResponseModel[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    const filteredCard = cardList.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://6679b9a218a459f639513510.mockapi.io/api/cardlist/test");
            if (!!data) {
                setCardList(data)
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Container className="p-4">
            <div className="search-input w-full flex justify-center mb-16">
                <Box className="relative w-full lg:w-[50%]" sx={{ width: '100%' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            style: {
                                backgroundColor: '#F8F4EA',
                                borderRadius: '32px',
                                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                                height: "40px"
                            },
                        }}
                    />
                </Box>
            </div>


            <div className="card-list grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-x-48 lg:gap-y-16 ">
                {filteredCard.length > 0 ? <>
                    {
                        filteredCard.map((cardItem, index) => (
                            <CardItem card={cardItem} key={index} />
                        ))
                    }
                </> : <div>No card found...</div>}
            </div>
        </Container>
    );
}
