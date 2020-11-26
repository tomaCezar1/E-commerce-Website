import { Flex, Icon } from '@chakra-ui/react';
import styled from 'styled-components';
import MailIcon from '../../../../public/svg/MailIcon.svg';
import MapIcon from '../../../../public/svg/MapIcon.svg';
import PhoneIcon from '../../../../public/svg/PhoneIcon.svg';

function ContactBox(props) {
    return (
        <>
            <Flex >
                <div className='box-containers'>
                    <Title>{props.title}</Title>
                    <List>
                        <Flex flexDirection='row'>
                            <Icon as={MapIcon} mr={21} className='svg' />
                            {props.location}
                        </Flex>
                    </List>
                    <List>
                        <Icon as={MailIcon} mr={21} className='svg' />
                        {props.email}
                    </List>
                    <List>
                        <Icon as={PhoneIcon} mr={21} className='svg' />
                        {props.phone}
                    </List>
                </div>
            </Flex>
        </>
    )
}

const List = styled.li`
    list-style: none;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #000000;
    padding-bottom: 1rem;
`
const Title = styled.h1`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 24px;
margin-bottom: 1rem;
`

export default ContactBox;