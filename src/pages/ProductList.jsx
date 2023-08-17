import React, { useState, useEffect} from 'react'
import { useLocation, Link,useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import ColorNav from '../components/ColorNav'
import Products from '../components/Products'
import ItemOne from '../components/ItemOne'
import SearchIcon from '@mui/icons-material/Search';
import { mobile } from "../responsive"
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { resetItem, resetSearch } from "../redux/designRedux"
import { getListItemSecondaryActionClassesUtilityClass } from '@mui/material'

const Container = styled.div`
margin: 20px;
`
const ContainerOne = styled.div`
padding:20px;
justify-content: space-between;
`

const Title = styled.h2`
  margin: 20px;
  margin-top: 80px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  display: flex;
  ${mobile({ margin: "0px 20px", flexDirection: "column" })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`

const FilterTextOne = styled.h4`
  margin-left: 70px;
  padding-top: 20px;
  ${mobile({ marginRight: "0px" })}
`


const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`
const Input = styled.input`
  font-size: 18px;
  padding: 9px;
  margin-left: 45px;
  width: 300px;
  background: #c8cdcf;
  border: 1px solid #c8cdcf;
  outline: none;
  border-radius: 5px;
  opacity: 1;
  float: right;
  transition: all .75s ease-in;
  ::placeholder {
    color: #FFFFFF;
  }
  ${mobile({ margin: "10px 0px" })}
`

const Div = styled.div`
    margin-top: 26px;
    margin-left: 10px;
    width: 220px;
    height: 500px;
    background-color: transparent;
    position: sticky;
    top: 100px;
`
const DivOne = styled.div`
    width: 170px;
    margin-left: 50px;
    margin-top: 7px;
    background-color: #32549b;
    padding: 7px 5px 7px 8px;
    color: white;
    border-radius: 5px;
    &:hover {
        background-color: #2258ce;
    }
`
const Btn = styled.button`
    border-radius: 5px;
    margin-left: 2px;
    background: #c8cdcf;
    border: none;
`
const A = styled.a`
    color: white;
`

const Option = styled.option``

const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  // const cat_name = location.pathname.split("/")[3];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState('');
  const [fil, setFil] = useState(0);
  const [cat_id, setCatId] = useState(1);
  const [click, setClick] = useState(false);
  const [subcat, setSubCat] = useState([]);
  const [cate, setCate] = useState([]);
  const url = useSelector(state => state.user.url);
  const hsearch = useSelector(state => state.design.homesearch);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const family = (val) => {
    axios.get(url+"/api/category_all/"+val)
        .then((response) => {
            setItems(response.data.items);
            setSubCat(response.data.subs);
            console.log(response.data.items);
        })
    setCatId(val);
    setFil(0);
    setClick(false);
  }

  useEffect(() =>{
    getItems();
    homesearchitem();
    categories();
    subcategories();
},[]);

  const homesearchitem = () => {
     
      if(hsearch == true){
        setClick(true);
      setItems(location.state.itemsS);
      dispatch(resetSearch());
      }     
  }

  const getItems = () => {
    axios.get(url+"/api/item_api")
        .then((response) => {
            setItems(response.data.items);
        })
  }

  const categories = () => {
    axios.get(url+"/api/category_all")
        .then((response) => {
            setCate(response.data);
            console.log(response.data);
        })
  }

  const subcategories = () => {
    axios.get(url+"/api/subcategory_api")
        .then((response) => {
            setSubCat(response.data.data);
        })
  }
 
  const SearchItems = () => {
    setFil(0);
    setClick(true);
    axios.post(url + '/api/searchitem', {
      item: search
    }).then(res => {
      setItems(res.data);
    }
    
    ).catch(err => {
      console.log('error');
    });
  }

  const handleFilters = (e) => {
    // alert(e.target.value);
    axios.get(url+"/api/category_api/"+cat_id+'/'+e.target.value)
    .then((response) => {
        setItems(response.data.items);
        console.log(response.data.items);
    }) 
    setFil(e.target.value);
    setClick(false);
    // alert(e.target.value);
    // setFilters(() => e.target.value)
    // const value = e.target.value;
    // setFilters({
    //   ...filters,
    //   [e.target.name]: value,
    // });
    // navigate('/products/1/family%20hospital')
  };

  return (
    <div>
      <Container id="top">

        <ColorNav />
        {/* <Slider/> */}

        <Title>Product Line
          
        </Title>

        <FilterContainer>
          <Filter>
            <FilterText>Filter Products: </FilterText>

            <Select name="color" onChange={handleFilters}>
              <Option>Type</Option>
              {
                subcat.map((sub)=>(
                  <Option key={sub.id} value={sub.id}>{sub.name}</Option>
                ))
              }
              {/* <Option>Pant 2</Option> */}
            </Select>

            {/* <Select name="part" onChange={handleFilters}>
              <Option disabled>Gender</Option>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select> */}

          </Filter>


          <Filter>
            {/* <FilterText>Sort Porducts: </FilterText>
            <Select onChange={e => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select> */}
           
            <Input placeholder='Search Items.........' onChange={(e) => setSearch(e.target.value)}></Input>
            <Btn onClick={SearchItems}><A><SearchIcon /></A></Btn>
          </Filter>

        </FilterContainer>
      </Container>
      <Container>
        <div className='row'>
          <div className='col-md-2'>
            <Div>
              <FilterTextOne>Brands</FilterTextOne>
              { cate.map(ca => (
                <div>
                <a className='text-decoration-none text-white' href='#' onClick={() => family(ca.id)}><DivOne>{ca.category_name}</DivOne></a>
                </div>
              ))}
            </Div>
          </div>
          <div className='col-md-10'>
            {
              click == true ?
                <ContainerOne>
                  <div className='row'>
                    {items.map(item => (

                      <div className='col-md-4'>
                        <ItemOne item={item} key={item.id} />
                      </div>

                    ))}
                  </div>
                  <br></br>
                </ContainerOne>

                :
                <ContainerOne>
                  <div className='row'>
                    {items.map(item => (
                      <div className='col-md-4'>
                        <ItemOne item={item} key={item.id} />
                      </div>
                    ))}
                  </div>
                  <br></br>
                </ContainerOne>
                // <Products cat={cat} filters={filters} sort={sort} fil={fil}/>
            }

          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default ProductList