import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CssBaseline, Divider, Stack } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Button from '@mui/material/Button';
import { Link, useHistory, useLocation } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: '0px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "24px",
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

const Shop = ({ menuData, handleClose, handleActive }) => {
  const history = useHistory();
  return (
    <>
      <Box sx={{
        width: { md: "380px", sm: "100%" },
        px: 2,
        // backgroundColor: '#ffffffe8',
        // backdropFilter: 'blur(10px)', 
      }}>
        <Box sx={{
          padding: '14px 0 0 0',
          borderBottom: "2px solid #000000",
          // position: "relative"
        }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {/* <Typography 
           sx={{
            fontWeight: '800',
            fontSize: '10px',
            lineHeight: '24px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#2A3592',
            position: 'absolute',
            right: '10px',
            top: '20px',
           }}>
           Advanced
           </Typography> */}
        </Box>
        <Box sx={{
          display: "none",
          '@media (max-width: 768px)': {
            display: "none",
          }
        }}>
          <Typography
            onClick={() => {
              history.push("/reviews");
              handleClose();
            }}
            sx={{
              py: 2,
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "-.02em",
              fontFamily: "Newspirit",
              cursor: "pointer",
            }}
          >
            Reviews
          </Typography>
          <Divider sx={{ borderWidth: "1px" }} />
        </Box>
        {menuData.level == "1" &&
          menuData.collection.map((item, index) => {
            return (
              <React.Fragment key={`collection-${index}`}>
                <Typography
                  onClick={() => {
                    history.push(`/allProductList/${item.name}`);
                    handleClose();
                  }}
                  sx={{
                    py: 2,
                    fontSize: "24px",
                    fontWeight: 600,
                    letterSpacing: "-.02em",
                    fontFamily: "Newspirit",
                    cursor: "pointer",
                  }}
                >
                  {item.name}
                </Typography>
                <Divider sx={{ borderWidth: "1px" }} />
              </React.Fragment>
            );
          })}
      </Box>
      <Box sx={{
        width: { md: "380px", sm: "100%" },
        px: 2,
      }}>
        {menuData.categories.map((item, index) => {
          return (
            <React.Fragment key={`categories-${index}`}>
              {menuData.level == "1" && (
                <>
                  <Stack
                    sx={{ cursor: "pointer" }}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={() =>
                      handleActive(
                        item?.parentId,
                        index,
                        "2",
                        item.sub_cateogries.length > 0
                      )
                    }
                  >
                    <Typography
                      sx={{
                        py: 1.5,
                        fontSize: "24px",
                        fontWeight: 600,
                        letterSpacing: "-.02em",
                        fontFamily: "Newspirit",
                      }}
                    >
                      {item.name}
                    </Typography>
                    {item.sub_cateogries.length > 0 && (
                      <Typography>
                        <svg
                          width="22"
                          height="25"
                          viewBox="0 0 22 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.80005 2.13184L20.147 12.4788L9.80005 22.8513"
                            stroke="black"
                            strokeWidth="1.7"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M0.800049 12.5044H19.7267"
                            stroke="black"
                            strokeWidth="1.7"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </Typography>
                    )}
                  </Stack>
                  <Divider sx={{ borderWidth: "1px" }} />
                </>
              )}
              {(menuData.level == "2" || menuData.level == "3") && (
                <>
                  {index == menuData.selectedCategoriesIndex &&
                    menuData.level == "2" && (
                      <>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          pb={0.5}
                          pt={2}
                        >
                          <Button
                            sx={{
                              fontSize: "14px !important",
                              textTransform: "capitalize",
                              fontWeight: 600,
                            }}
                            onClick={() =>
                              handleActive(item?.parentId, -1, "1")
                            }
                            color="inherit"
                            startIcon={<KeyboardBackspaceIcon />}
                          >
                            Back
                          </Button>
                          <Button
                            onClick={() => {
                              history.push(`/allProduct/${item?.sub_cateogries?.[0]?.parentId}`);
                              handleClose();
                            }}
                            sx={{
                              fontSize: "14px !important",
                              textTransform: "capitalize",
                              fontWeight: 600,
                              color: "#000",
                            }}
                            // color="inherit"
                            startIcon={<NorthEastIcon />}
                          >
                            Shop All
                          </Button>
                        </Stack>
                        <Divider sx={{ borderWidth: "1px" }} />
                      </>
                    )}
                  {index == menuData.selectedCategoriesIndex &&
                    item.sub_cateogries.map((subcategory, subIndex) => {
                      return (
                        <>
                          {menuData.level == "2" && (
                            <Box
                              sx={{ cursor: "pointer" }}
                              key={`itemsub-${subIndex}`}
                            >
                              <Stack
                                sx={{ cursor: "pointer" }}
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                onClick={() =>
                                  handleActive(
                                    subcategory?.parentId,
                                    subIndex,
                                    "3",
                                    subcategory.categories.length > 0,
                                    true,
                                    subcategory.name
                                  )
                                }
                              >
                                <Typography
                                  sx={{
                                    py: 1.5,
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    letterSpacing: "-.02em",
                                    fontFamily: "Newspirit",
                                  }}
                                >
                                  {subcategory.name}
                                </Typography>
                                {subcategory.categories.length > 0 && (
                                  <Typography>
                                    <svg
                                      width="22"
                                      height="25"
                                      viewBox="0 0 22 25"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.80005 2.13184L20.147 12.4788L9.80005 22.8513"
                                        stroke="black"
                                        strokeWidth="1.7"
                                        strokeMiterlimit="10"
                                      />
                                      <path
                                        d="M0.800049 12.5044H19.7267"
                                        stroke="black"
                                        strokeWidth="1.7"
                                        strokeMiterlimit="10"
                                      />
                                    </svg>
                                  </Typography>
                                )}
                              </Stack>
                              <Divider sx={{ borderWidth: "1px" }} />
                            </Box>
                          )}
                          {subIndex == menuData.selectedSubCategoriesIndex &&
                            menuData.level == "3" && (
                              <>
                                <Stack
                                  direction="row"
                                  justifyContent="space-between"
                                  pb={0.5}
                                  pt={2}
                                >
                                  <Button
                                    sx={{
                                      fontSize: "14px !important",
                                      textTransform: "capitalize",
                                      fontWeight: 600,
                                    }}
                                    onClick={() =>
                                      handleActive(
                                        subcategory?.parentId,
                                        menuData.selectedCategoriesIndex,
                                        "2"
                                      )
                                    }
                                    color="inherit"
                                    startIcon={<KeyboardBackspaceIcon />}
                                  >
                                    Back
                                  </Button>
                                  <Button
                                    onClick={() => {
                                      history.push(`/allProduct/${subcategory?.categories?.[0]?.parentId}`);
                                      handleClose();
                                    }}
                                    sx={{
                                      fontSize: "14px !important",
                                      textTransform: "capitalize",
                                      fontWeight: 600,
                                      color: "#000",
                                    }}
                                    // color="inherit"
                                    startIcon={<NorthEastIcon />}
                                  >
                                    Shop All
                                  </Button>
                                </Stack>
                                <Divider sx={{ borderWidth: "1px" }} />
                                {subcategory.categories.map(
                                  (category, catIndex) => {
                                    return (
                                      <Box
                                        sx={{ cursor: "pointer" }}
                                        key={`itemsub-${catIndex}`}
                                      >
                                        <Typography
                                          onClick={() => {
                                            handleActive(
                                              category?.parentId,
                                              menuData.selectedCategoriesIndex,
                                              "3",
                                              false,
                                              false,
                                              category.name
                                            );
                                          }}
                                          sx={{
                                            py: 1.5,
                                            fontSize: "24px",
                                            fontWeight: 600,
                                            letterSpacing: "-.02em",
                                            fontFamily: "Newspirit",
                                          }}
                                        >
                                          {category.name}
                                        </Typography>
                                        <Divider sx={{ borderWidth: "1px" }} />
                                      </Box>
                                    );
                                  }
                                )}
                              </>
                            )}
                        </>
                      );
                    })}
                </>
              )}
            </React.Fragment>
          );
        })}
        <Box
          sx={{
            padding: "12px 0",
            justifyContent: "space-between",
            alignItems: "center",
            display: 'none',
            '@media (max-width: 768px)': {
              display: "flex",
            }
          }}
        >
          <Link to="/clubHome">
            <Box sx={{
              display: "flex",
              alignItems: "center",
            }}
              onClick={() => handleClose()}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_7644_574)">
                  <path d="M21.17 20.1601L16.87 15.8601V6.66005C16.87 3.56005 14.35 1.04005 11.25 1.04005C8.76 1.04005 6.65 2.66005 5.91 4.90005L3.38 2.37005L4.38 1.37005L3.18 0.180054L0 3.36005L1.19 4.55005L2.19 3.55005L5.64 7.00005V16.2001C5.64 19.3001 8.16 21.8201 11.26 21.8201C13.75 21.8201 15.86 20.2001 16.6 17.9601L19.99 21.3501L21.18 20.1601H21.17ZM11.25 2.72005C13.42 2.72005 15.18 4.48005 15.18 6.65005V14.1701L7.33 6.32005C7.5 4.31005 9.19 2.72005 11.25 2.72005ZM11.25 20.1301C9.08 20.1301 7.32 18.3701 7.32 16.2001V8.68005L15.17 16.5301C15 18.5401 13.31 20.1301 11.25 20.1301Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_7644_574">
                    <rect width="21.17" height="21.64" fill="white" transform="translate(0 0.180054)" />
                  </clipPath>
                </defs>
              </svg>
              <Typography sx={{
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '14px',
                letterSpacing: '-0.02em',
                color: '#000000',
                marginLeft: "4px",
              }}>
                Club
              </Typography>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '14px',
                  textAlign: 'center',
                  letterSpacing: '-0.02em',
                  color: '#9A9EB0',
                  marginLeft: "10px",
                }}
              >
                Workshops, events & deals
                <FiberManualRecordIcon fontSize="14px" sx={{ color: "#5E9EFF", marginLeft: "6px" }} />
              </Typography>
            </Box>
          </Link>
          <Box onClick={() => { handleClose(); history.push("/login"); }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_7644_583)">
                <path d="M12.0001 23.1501C18.1581 23.1501 23.1501 18.158 23.1501 12.0001C23.1501 5.84209 18.1581 0.850067 12.0001 0.850067C5.84212 0.850067 0.850098 5.84209 0.850098 12.0001C0.850098 18.158 5.84212 23.1501 12.0001 23.1501Z" stroke="black" strokeWidth="1.7" stroke-miterlimit="10" />
                <path d="M11.9998 13.8601C14.1703 13.8601 15.9298 12.1005 15.9298 9.93006C15.9298 7.75958 14.1703 6.00006 11.9998 6.00006C9.82935 6.00006 8.06982 7.75958 8.06982 9.93006C8.06982 12.1005 9.82935 13.8601 11.9998 13.8601Z" stroke="black" strokeWidth="1.7" stroke-miterlimit="10" />
                <path d="M17.7498 21.5401C17.9098 21.0101 17.9898 20.4401 17.9898 19.8601C17.9898 16.5501 15.3098 13.8701 11.9998 13.8701C8.68977 13.8701 6.00977 16.5501 6.00977 19.8601C6.00977 20.4401 6.09977 21.0101 6.24977 21.5401" stroke="black" strokeWidth="1.7" stroke-miterlimit="10" />
              </g>
              <defs>
                <clipPath id="clip0_7644_583">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Shop;
