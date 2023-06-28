import styled from 'styled-components'

export const SectionTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: 40px;
    padding: 10px 20px;
    border-bottom: 4px solid #413f3f;
    @media (max-width: 768px) {
        font-size: 22px;
    }
`

export const SubTitle = styled.span`
    font-weight: bold;
`

export const ItemList = styled.ul`
    margin-top: 5px;
    list-style: none;
    padding-left: 0;
    margin-left: 0;
`

export const BoldText = styled.span`
    font-weight: bold;
`

export const StackList = styled.ul`
    margin-top: 5px;
    list-style: square inside;
    padding-left: 0;
    margin-left: 0;
    line-height: 1.8;
`

export const Item = styled.li`
`

export const Date = styled.em`
    color: #888;
    font-size: 16px;
`

export const ItalicText = styled.span`
    font-style: italic;
`

export const Tech = styled.span`
    font-weight: bold;
    font-size: 17px;
    border-radius: 3px;
    padding: 2px 7px;
`

export const Bash = styled.span`
    background-color: #300a24;
    color: #7dd033;
    font-family: "Cascadia Code";
    font-size: 17px;
    border-radius: 3px;
    padding: 2px 7px;
`
export const Bash2 = styled.span`
    background-color: #300a24;
    color: #d8d6d0;
    font-family: "Cascadia Code";
    font-size: 17px;
    border-radius: 3px;
    padding: 2px 5px;
`

export const PS = styled.span`
    background-color: #012456;
    color: #e2dfd7;
    font-family: "Lucida Console";
    font-size: 17px;
    border-radius: 3px;
    padding: 3px 7px;
`