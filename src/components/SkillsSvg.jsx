import React from 'react'

const SkillsSvg = ({type}) => {

  const svg = {
    figma: "M197.5 1.04263e-05H42.5C40.1162 1.04263e-05 37.7422 0.199229 35.4024 0.59376C33.7359 0.87501 32.0869 1.25392 30.4644 1.73048C29.0303 2.14845 27.6167 2.64845 26.2295 3.22267C21.0708 5.35939 16.3838 8.48829 12.4361 12.4375C8.48879 16.3828 5.35842 21.0703 3.22463 26.2305C1.09035 31.3867 -0.00535144 36.918 1.96513e-05 42.5V191.5C-0.00535144 197.082 1.09035 202.613 3.22463 207.77C5.35842 212.93 8.48879 217.617 12.4361 221.563C16.3838 225.512 21.0708 228.641 26.2295 230.777C31.3887 232.91 36.9175 234.004 42.5 234H197.5C203.083 234.004 208.611 232.91 213.77 230.777C218.929 228.641 223.616 225.512 227.564 221.563C231.511 217.617 234.642 212.93 236.775 207.77C238.91 202.613 240.005 197.082 240 191.5V42.5C240.005 36.918 238.91 31.3867 236.775 26.2305C234.642 21.0703 231.511 16.3828 227.564 12.4375C223.616 8.48829 218.929 5.35939 213.77 3.22267C208.611 1.08985 203.083 -0.00389582 197.5 1.04263e-05ZM120 167C120 180.809 108.807 192 95 192C81.1929 192 70 180.809 70 167C70 153.191 81.1929 142 95 142C81.1929 142 70 130.809 70 117C70 103.191 81.1929 92 95 92C81.1929 92 70 80.8086 70 67C70 53.1914 81.1929 42 95 42H120H145C158.807 42 170 53.1914 170 67C170 80.8086 158.807 92 145 92H120V117V142V167ZM120 117C120 103.191 131.193 92 145 92C158.807 92 170 103.191 170 117C170 130.809 158.807 142 145 142C131.193 142 120 130.809 120 117Z", 
    photoshop: "M42.5 1.04263e-05H197.5C203.083 -0.00389582 208.611 1.08985 213.77 3.22267C218.929 5.35939 223.616 8.48829 227.564 12.4375C231.511 16.3828 234.642 21.0703 236.775 26.2305C238.91 31.3867 240.005 36.918 240 42.5V191.5C240.005 197.082 238.91 202.613 236.775 207.77C234.642 212.93 231.511 217.617 227.564 221.563C223.616 225.512 218.929 228.641 213.77 230.777C208.611 232.91 203.083 234.004 197.5 234H42.5C36.9175 234.004 31.3887 232.91 26.2295 230.777C21.0708 228.641 16.3838 225.512 12.4361 221.563C8.48879 217.617 5.35842 212.93 3.22463 207.77C1.09035 202.613 -0.00535144 197.082 1.96512e-05 191.5V42.5C-0.00535144 36.918 1.09035 31.3867 3.22463 26.2305C5.35842 21.0703 8.48879 16.3828 12.4361 12.4375C16.3838 8.48829 21.0708 5.35939 26.2295 3.22267C31.3887 1.08985 36.9175 -0.00389582 42.5 1.04263e-05ZM54 164.102V61.1992C54 60.5 54.2998 60.1016 55 60.1016C56.7002 60.1016 58.2998 60.1016 60.6001 60C61.8164 59.9453 63.1167 59.9219 64.4712 59.8945C65.6778 59.8711 66.9278 59.8477 68.2002 59.8008C69.521 59.75 70.8897 59.7266 72.3062 59.7031L72.9981 59.6914C74.2613 59.668 75.562 59.6445 76.8999 59.6016C80 59.5 83 59.5 86 59.5C94.2002 59.5 101 60.5 106.6 62.6016C111.62 64.3047 116.197 67.1055 120 70.8008C123.222 74.0313 125.712 77.9219 127.3 82.1992C128.814 86.3672 129.592 90.7656 129.6 95.1992C129.6 103.801 127.6 110.898 123.6 116.5C119.582 122.094 113.971 126.344 107.5 128.699C100.7 131.199 93.2002 132.102 85 132.102C83.6963 132.102 82.6284 132.102 81.7647 132.086C81.0386 132.07 80.4566 132.047 80 132C79 131.898 77.6001 131.898 75.7002 131.898V164C75.709 164.066 75.7124 164.133 75.7105 164.199C75.708 164.297 75.6939 164.398 75.668 164.492C75.6431 164.582 75.6084 164.672 75.564 164.754C75.5303 164.816 75.4907 164.875 75.4463 164.934C75.3438 165.063 75.2158 165.172 75.0703 165.254C74.9253 165.332 74.7652 165.383 74.6001 165.398H55.2002C54.3999 165.398 54 165 54 164.102ZM75.7998 79.3984V113C77.2002 113.102 78.5 113.199 79.7002 113.199H85C88.9038 113.203 92.7842 112.598 96.5 111.398C99.688 110.461 102.536 108.621 104.7 106.102C106.8 103.602 107.8 100.199 107.8 95.8008C107.894 92.6758 107.096 89.5899 105.5 86.8984C103.833 84.3047 101.38 82.3086 98.5 81.1992C94.7461 79.7305 90.729 79.0469 86.7002 79.1992C84.1001 79.1992 81.7998 79.1992 79.8999 79.3008C78.5332 79.2109 77.1612 79.2422 75.7998 79.3984ZM182.4 103.5C185.747 104.164 188.98 105.309 192 106.898C192.582 107.109 193.218 107.109 193.8 106.898C193.957 106.785 194.084 106.633 194.17 106.461C194.257 106.285 194.302 106.094 194.3 105.898V89.6016C194.282 89.1914 194.215 88.7891 194.1 88.3984C193.899 87.9805 193.54 87.6563 193.1 87.5C190.342 86.3711 187.453 85.5977 184.5 85.1992C180.394 84.6016 176.25 84.3008 172.1 84.3008C165 84.3008 159.1 85.3984 154.4 87.8008C150.086 89.7891 146.44 92.9844 143.9 97C141.69 100.648 140.515 104.832 140.5 109.102C140.414 112.637 141.204 116.141 142.8 119.301C144.67 122.664 147.267 125.566 150.4 127.801C154.799 130.809 159.573 133.23 164.6 135C169.5 136.898 172.8 138.398 174.4 139.699C176 141 176.8 142.301 176.8 143.699C176.796 144.586 176.54 145.449 176.062 146.191C175.584 146.938 174.903 147.527 174.1 147.898C172.3 148.801 169.6 149.301 165.8 149.301C161.819 149.309 157.853 148.801 154 147.801C149.636 146.824 145.452 145.172 141.6 142.898C141.48 142.789 141.329 142.719 141.167 142.703C141.004 142.684 140.841 142.719 140.7 142.801C140.567 142.906 140.462 143.047 140.393 143.203C140.323 143.359 140.292 143.527 140.3 143.699V161.102C140.278 161.488 140.371 161.875 140.566 162.215C140.761 162.551 141.051 162.824 141.4 163C144.643 164.516 148.073 165.59 151.6 166.199C156.079 167.082 160.635 167.52 165.2 167.5C172.4 167.5 178.4 166.398 183.3 164.301C187.819 162.484 191.711 159.391 194.5 155.398C197.121 151.465 198.481 146.828 198.4 142.102C198.497 138.527 197.707 134.988 196.1 131.801C194.2 128.418 191.484 125.566 188.2 123.5C183.372 120.469 178.203 118.02 172.8 116.199C170.4 115.199 168 114.102 165.7 112.898C164.402 112.23 163.248 111.313 162.3 110.199C161.697 109.461 161.347 108.551 161.3 107.602C161.318 106.645 161.595 105.711 162.1 104.898C162.85 103.871 163.955 103.16 165.2 102.898C167.153 102.367 169.176 102.129 171.2 102.199C174.969 102.23 178.724 102.668 182.4 103.5Z", 
    illustrator: "M42.5 1.04263e-05H197.5C203.083 -0.00389582 208.611 1.08985 213.77 3.22267C218.929 5.35939 223.616 8.48829 227.564 12.4375C231.511 16.3828 234.642 21.0703 236.775 26.2305C238.91 31.3867 240.005 36.918 240 42.5V191.5C240.005 197.082 238.91 202.613 236.775 207.77C234.642 212.93 231.511 217.617 227.564 221.563C223.616 225.512 218.929 228.641 213.77 230.777C208.611 232.91 203.083 234.004 197.5 234H42.5C36.9175 234.004 31.3887 232.91 26.2295 230.777C21.0708 228.641 16.3838 225.512 12.4361 221.563C8.48879 217.617 5.35842 212.93 3.22463 207.77C1.09035 202.613 -0.00535144 197.082 1.96513e-05 191.5V42.5C-0.00535144 36.918 1.09035 31.3867 3.22463 26.2305C5.35842 21.0703 8.48879 16.3828 12.4361 12.4375C16.3838 8.48829 21.0708 5.35939 26.2295 3.22267C31.3887 1.08985 36.9175 -0.00389582 42.5 1.04263e-05ZM116.3 140.398H79.1001L71.5 163.898C71.4151 164.328 71.1729 164.711 70.8213 164.969C70.6714 165.078 70.5064 165.164 70.3325 165.223C70.0987 165.301 69.8491 165.328 69.6001 165.301H50.7998C50.2305 165.301 49.875 165.141 49.7071 164.816C49.5503 164.516 49.5557 164.078 49.7002 163.5L81.8999 70.8008L82.169 69.8867C82.3863 69.1406 82.6182 68.3438 82.8999 67.5C83.3023 65.3555 83.5034 63.1797 83.5 61C83.4702 60.75 83.5357 60.4961 83.6841 60.293C83.772 60.1719 83.8848 60.0742 84.0137 60.0039C84.1026 59.9531 84.1988 59.918 84.2998 59.8984H110.2C110.336 59.8984 110.461 59.9063 110.575 59.9219C111.128 60.0078 111.417 60.2852 111.5 60.6992L148 163.699C148.3 164.801 148 165.301 147 165.301H126.1C125.747 165.336 125.393 165.242 125.1 165.043C124.807 164.84 124.595 164.543 124.5 164.199L116.3 140.398ZM84.8999 120.102H110.3C109.7 118 108.9 115.5 108 112.898C107.388 111.133 106.776 109.184 106.165 107.172L105.31 104.336L105.3 104.301L104.809 102.684L104.373 101.281C103.735 99.2383 103.067 97.168 102.4 95.1016C101.4 92 100.5 89.1016 99.7002 86.1992C98.8999 83.3008 98.2002 80.8008 97.5 78.3984H97.2998C96.4014 82.7578 95.2661 87.0664 93.8999 91.3008L92.292 96.4922L92.1851 96.8438C91.2461 99.8984 90.2925 103 89.2998 106.102C87.8999 111.199 86.3999 115.898 84.8999 120.102ZM164.999 76.1445C166.526 76.7461 168.159 77.0352 169.8 77C171.479 77.1016 173.16 76.8399 174.73 76.2383C176.3 75.6328 177.722 74.6992 178.9 73.5C180.068 72.2774 180.98 70.8359 181.582 69.2539C182.183 67.6758 182.461 65.9883 182.4 64.3008C182.47 61.9727 181.897 59.6914 180.769 57.6992C180.304 56.8789 179.746 56.1055 179.1 55.3984C176.9 53.1016 173.9 51.8984 170 51.8984C166.693 51.875 163.503 53.1289 161.1 55.3984C159.908 56.5469 158.972 57.9336 158.351 59.4649C157.902 60.5781 157.626 61.75 157.53 62.9375C157.494 63.3906 157.484 63.8438 157.5 64.3008C157.389 67.6914 158.609 70.9961 160.9 73.5C162.077 74.6445 163.47 75.543 164.999 76.1445ZM158.6 86.8008V163.801C158.569 164.008 158.586 164.223 158.649 164.422C158.712 164.625 158.819 164.809 158.963 164.961C159.108 165.117 159.285 165.234 159.482 165.313C159.679 165.387 159.89 165.418 160.1 165.398H179.7C180.6 165.398 181 164.898 181 163.801V86.8008C181 85.8984 180.6 85.3984 179.7 85.3984H159.9C159 85.3984 158.6 85.8008 158.6 86.8008Z", 
    lightroom: "M42.5 1.04263e-05H197.5C203.083 -0.00389582 208.611 1.08985 213.77 3.22267C218.929 5.35939 223.616 8.48829 227.564 12.4375C231.511 16.3828 234.642 21.0703 236.775 26.2305C238.91 31.3867 240.005 36.918 240 42.5V191.5C240.005 197.082 238.91 202.613 236.775 207.77C234.642 212.93 231.511 217.617 227.564 221.563C223.616 225.512 218.929 228.641 213.77 230.777C208.611 232.91 203.083 234.004 197.5 234H42.5C36.9175 234.004 31.3887 232.91 26.2295 230.777C21.0708 228.641 16.3838 225.512 12.4361 221.563C8.48879 217.617 5.35842 212.93 3.22463 207.77C1.09035 202.613 -0.00535144 197.082 1.96513e-05 191.5V42.5C-0.00535144 36.918 1.09035 31.3867 3.22463 26.2305C5.35842 21.0703 8.48879 16.3828 12.4361 12.4375C16.3838 8.48829 21.0708 5.35939 26.2295 3.22267C31.3887 1.08985 36.9175 -0.00389582 42.5 1.04263e-05ZM126 165.398H62.6001C61.5 165.398 61 164.801 61 163.602V61.3984C60.9776 61.2344 60.9888 61.0664 61.0322 60.9063C61.0532 60.8281 61.0816 60.7539 61.1167 60.6836C61.1543 60.6094 61.2002 60.5352 61.2539 60.4688C61.3565 60.3359 61.4839 60.2266 61.6294 60.1484C61.7749 60.0664 61.9351 60.0156 62.1001 60H82.1001C82.2251 59.9766 82.3535 59.9805 82.4776 60.0078L82.5752 60.0352C82.6626 60.0664 82.7456 60.1094 82.8213 60.1641C82.9238 60.2383 83.0108 60.3359 83.0757 60.4453C83.1133 60.5078 83.1431 60.5742 83.1651 60.6484C83.1812 60.6992 83.1929 60.75 83.2002 60.8008V145.102H129.4C130.4 145.102 130.7 145.602 130.5 146.5L127.6 163.898C127.584 164.129 127.523 164.355 127.42 164.559C127.317 164.766 127.174 164.949 127 165.102C126.707 165.305 126.356 165.406 126 165.398ZM159.5 85.3984H142C141.911 85.3555 141.842 85.332 141.784 85.3281C141.711 85.3203 141.656 85.3438 141.6 85.3984C141.538 85.4141 141.478 85.4336 141.421 85.4609C141.368 85.4844 141.318 85.5117 141.271 85.543C141.171 85.6133 141.086 85.7031 141.022 85.8047L140.996 85.8516C140.944 85.9375 140.909 86.0352 140.892 86.1406C140.871 86.2578 140.874 86.3828 140.9 86.5C141.2 88.6992 141.4 90.8984 141.5 93.1016C141.6 95.6992 141.6 98.3008 141.7 100.898C141.8 103.5 141.8 106 141.8 108.398V164.199C141.812 164.297 141.833 164.395 141.865 164.484C141.894 164.566 141.93 164.648 141.975 164.727C142.068 164.891 142.193 165.031 142.343 165.145C142.492 165.254 142.663 165.336 142.845 165.379C143.027 165.426 143.215 165.43 143.4 165.398H162.9C163.8 165.398 164.2 165 164.2 164V113C165.739 111.426 167.574 110.168 169.6 109.301C175.539 106.676 182.019 105.512 188.5 105.898C189.028 105.898 189.418 105.832 189.68 105.672C189.965 105.5 190.1 105.219 190.1 104.801V84.8984C190.083 84.7344 190.033 84.5742 189.952 84.4297C189.872 84.2852 189.763 84.1563 189.633 84.0547C189.502 83.9492 189.353 83.875 189.192 83.832C189.032 83.7891 188.865 83.7774 188.7 83.8008C183.504 83.6836 178.369 84.9219 173.8 87.3984C169.731 89.5781 166.103 92.4961 163.1 96C163.1 94.6992 163 93.3984 162.9 92.3984C162.8 91.3984 162.6 90.3008 162.4 89.3008C162.285 88.4883 162.014 87.707 161.6 87C161.463 86.5469 161.187 86.1484 160.81 85.8594C160.556 85.668 160.266 85.5313 159.959 85.457C159.809 85.4219 159.655 85.4024 159.5 85.3984Z",
    indesign: "M42.5 1.04263e-05H197.5C203.083 -0.00389582 208.611 1.08985 213.77 3.22267C218.929 5.35939 223.616 8.48829 227.564 12.4375C231.511 16.3828 234.642 21.0703 236.775 26.2305C238.91 31.3867 240.005 36.918 240 42.5V191.5C240.005 197.082 238.91 202.613 236.775 207.77C234.642 212.93 231.511 217.617 227.564 221.563C223.616 225.512 218.929 228.641 213.77 230.777C208.611 232.91 203.083 234.004 197.5 234H42.5C36.9175 234.004 31.3887 232.91 26.2295 230.777C21.0708 228.641 16.3838 225.512 12.4361 221.563C8.48879 217.617 5.35842 212.93 3.22463 207.77C1.09035 202.613 -0.00535144 197.082 1.96512e-05 191.5V42.5C-0.00535144 36.918 1.09035 31.3867 3.22463 26.2305C5.35842 21.0703 8.48879 16.3828 12.4361 12.4375C16.3838 8.48829 21.0708 5.35939 26.2295 3.22267C31.3887 1.08985 36.9175 -0.00389582 42.5 1.04263e-05ZM87.2002 61.1992V163.801C87.2002 164.898 86.7002 165.398 85.7998 165.398H66.2002C65.6426 165.398 65.2769 165.207 65.0791 164.801C64.958 164.551 64.8999 164.219 64.8999 163.801V61.1992C64.8999 60.3008 65.3999 59.8984 66.2998 59.8984H85.7998L85.9776 59.8867C86.0708 59.8867 86.1641 59.8984 86.2554 59.9219C86.4038 59.9609 86.5435 60.0274 86.6651 60.1211C86.7866 60.2149 86.8877 60.332 86.9629 60.4649C87.0376 60.5977 87.084 60.7461 87.1001 60.8984L87.1553 60.9766L87.1836 61.0391C87.2012 61.0899 87.2066 61.1445 87.2002 61.1992ZM123.3 162.5C130.042 165.586 137.388 167.121 144.8 167C149.965 166.988 155.118 166.52 160.2 165.602C165.795 164.609 171.262 163 176.5 160.801C176.813 160.672 177.078 160.449 177.257 160.16C177.437 159.875 177.522 159.539 177.5 159.199C177.459 158.512 177.403 157.793 177.343 157.035C177.255 155.918 177.16 154.711 177.1 153.398L177.072 152.801C176.982 150.836 176.9 149.035 176.9 147.398V52C176.852 51.7774 176.722 51.5859 176.537 51.4531C176.352 51.3242 176.124 51.2695 175.9 51.3008H155.6C154.9 51.3008 154.6 51.6992 154.6 52.3984V84C154.033 83.9531 153.51 83.9258 153.022 83.9024C152.477 83.875 151.975 83.8516 151.5 83.8008C150.803 83.7266 150.102 83.6914 149.4 83.6992C139.5 83.6992 131.1 85.6016 124.1 89.5C117.491 93.1289 111.995 98.4844 108.2 105C104.499 111.41 102.599 118.699 102.7 126.102C102.7 135.199 104.5 142.801 108.2 148.898C111.771 154.832 117.028 159.566 123.3 162.5ZM154.6 103V147C153.931 147.246 153.235 147.406 152.529 147.48C152.022 147.531 151.511 147.539 151 147.5C149.7 147.602 148.3 147.699 146.8 147.699C143.981 147.715 141.179 147.277 138.5 146.398C137.178 145.988 135.914 145.422 134.734 144.715C133.644 144.059 132.626 143.281 131.7 142.398C129.703 140.387 128.167 137.965 127.2 135.301C125.99 132.004 125.413 128.508 125.5 125C125.5 119.801 126.6 115.5 128.8 112.301C130.957 109.148 133.883 106.602 137.3 104.898C140.806 103.148 144.68 102.254 148.6 102.301C149.7 102.301 150.8 102.398 151.9 102.5C152.808 102.617 153.709 102.785 154.6 103Z",
    javascript: "M197.5 1.04263e-05H42.5C36.9174 -0.00525127 31.3885 1.09045 26.2297 3.22441C21.071 5.35838 16.3838 8.4887 12.4362 12.4362C8.48871 16.3838 5.35838 21.071 3.22442 26.2297C1.09046 31.3885 -0.00524205 36.9174 1.96513e-05 42.5V191.5C-0.00524205 197.083 1.09046 202.612 3.22442 207.77C5.35838 212.929 8.48871 217.616 12.4362 221.564C16.3838 225.511 21.071 228.642 26.2297 230.776C31.3885 232.91 36.9174 234.005 42.5 234H197.5C203.083 234.005 208.612 232.91 213.77 230.776C218.929 228.642 223.616 225.511 227.564 221.564C231.511 217.616 234.642 212.929 236.776 207.77C238.91 202.612 240.005 197.083 240 191.5V42.5C240.005 36.9174 238.91 31.3885 236.776 26.2297C234.642 21.071 231.511 16.3838 227.564 12.4362C223.616 8.4887 218.929 5.35838 213.77 3.22441C208.612 1.09045 203.083 -0.00525127 197.5 1.04263e-05ZM184 53H56V181H184V53ZM142.943 154.424C145.59 158.744 149.034 161.919 155.124 161.919C160.241 161.919 163.51 159.363 163.51 155.831C163.51 151.599 160.151 150.1 154.52 147.638L151.432 146.314C142.522 142.519 136.602 137.766 136.602 127.717C136.602 118.46 143.658 111.413 154.686 111.413C162.538 111.413 168.182 114.144 172.249 121.295L162.634 127.466C160.516 123.672 158.232 122.177 154.686 122.177C151.069 122.177 148.777 124.47 148.777 127.466C148.777 131.169 151.072 132.668 156.37 134.962L159.457 136.283C169.949 140.78 175.873 145.365 175.873 155.673C175.873 166.785 167.139 172.873 155.41 172.873C143.942 172.873 136.533 167.411 132.908 160.251L142.943 154.424ZM99.3212 155.493C101.261 158.934 103.026 161.842 107.268 161.842C111.325 161.842 113.885 160.255 113.885 154.086V112.117H126.233V154.253C126.233 167.033 118.736 172.85 107.794 172.85C97.907 172.85 92.1812 167.736 89.2694 161.576L99.3212 155.493Z",
    dimensions: "M42.5 1.04263e-05H197.5C203.083 -0.00389582 208.611 1.08985 213.77 3.22267C218.929 5.35939 223.616 8.48829 227.564 12.4375C231.511 16.3828 234.642 21.0703 236.775 26.2305C238.91 31.3867 240.005 36.918 240 42.5V191.5C240.005 197.082 238.91 202.613 236.775 207.77C234.642 212.93 231.511 217.617 227.564 221.563C223.616 225.512 218.929 228.641 213.77 230.777C208.611 232.91 203.083 234.004 197.5 234H42.5C36.9175 234.004 31.3887 232.91 26.2295 230.777C21.0708 228.641 16.3838 225.512 12.4361 221.563C8.48879 217.617 5.35842 212.93 3.22463 207.77C1.09035 202.613 -0.00535144 197.082 1.96513e-05 191.5V42.5C-0.00535144 36.918 1.09035 31.3867 3.22463 26.2305C5.35842 21.0703 8.48879 16.3828 12.4361 12.4375C16.3838 8.48829 21.0708 5.35939 26.2295 3.22267C31.3887 1.08985 36.9175 -0.00389582 42.5 1.04263e-05ZM35 163.801V61.3984C34.9893 61.2578 35.0025 61.1172 35.0386 60.9844C35.0845 60.8164 35.167 60.6602 35.2827 60.5234C35.4888 60.2813 35.7822 60.1289 36.1001 60.1016H36.2002C37.7998 60 40.2002 59.8984 43.2998 59.8984C46.189 59.8984 49.5991 59.8164 53.3687 59.7227L54.2002 59.6992C58.2998 59.6016 62.7998 59.6016 67.6001 59.6016C80.5 59.6016 91.2002 61.8008 99.6001 66.1992C107.626 70.1992 114.275 76.5 118.7 84.3008C123.048 92.4453 125.251 101.566 125.1 110.801C125.209 117.773 124.093 124.711 121.8 131.301C119.773 136.945 116.722 142.164 112.8 146.699C109.055 150.926 104.668 154.539 99.7998 157.398C94.9732 160.254 89.7495 162.379 84.2998 163.699C78.9663 165.016 73.4937 165.688 68 165.699H56C51.7998 165.699 47.7998 165.699 44.2002 165.602C42.4912 165.555 40.9624 165.527 39.6353 165.504C38.167 165.477 36.9453 165.453 36 165.398C35.7832 165.398 35.6045 165.34 35.4614 165.23C35.1431 164.992 35 164.492 35 163.801ZM57.2002 79.3984V146.102C58.2676 146.078 59.336 146.113 60.3999 146.199C60.9097 146.25 61.4195 146.277 61.9292 146.305L62.4448 146.328C62.7632 146.348 63.0816 146.367 63.3999 146.398C64.3999 146.5 65.6001 146.5 66.8999 146.5C71.7656 146.59 76.6084 145.813 81.2002 144.199C85.3369 142.801 89.0996 140.477 92.2002 137.398C95.355 134.27 97.7793 130.477 99.2998 126.301C101.027 121.492 101.874 116.41 101.8 111.301C101.907 106.488 101.092 101.703 99.3999 97.1992C97.9229 93.3125 95.52 89.8477 92.3999 87.1016C89.2652 84.3047 85.5391 82.2539 81.5 81.1016C76.9888 79.7695 72.3028 79.1289 67.6001 79.1992C65.5 79.1992 63.7002 79.1992 62.2002 79.3008C60.5327 79.2344 58.8633 79.2695 57.2002 79.3984ZM134.8 104V163.898V164.199C134.817 164.363 134.868 164.523 134.948 164.672C135.028 164.816 135.137 164.945 135.267 165.047C135.398 165.148 135.548 165.223 135.708 165.27C135.868 165.313 136.036 165.324 136.2 165.301H155.8C156.7 165.301 157.1 164.898 157.1 163.898V108.199C158.87 106.602 160.899 105.316 163.1 104.398C165.516 103.438 168.099 102.961 170.7 103C173 102.848 175.29 103.422 177.246 104.645C179.202 105.863 180.725 107.668 181.6 109.801C182.613 112.41 183.089 115.199 183 118V164.102C183.009 164.18 183.025 164.258 183.048 164.336C183.079 164.438 183.121 164.535 183.174 164.629C183.232 164.727 183.302 164.816 183.382 164.902C183.432 164.953 183.485 165 183.542 165.043C183.692 165.156 183.863 165.234 184.045 165.281C184.227 165.324 184.416 165.332 184.6 165.301H204.1C204.615 165.301 204.966 165.168 205.172 164.867C205.327 164.645 205.4 164.328 205.4 163.898V116.102C205.4 109.602 204.6 104.199 203 100.102C201.77 96.6328 199.76 93.4961 197.124 90.9297C194.489 88.3633 191.298 86.4375 187.8 85.3008C184.767 84.3008 181.593 83.793 178.4 83.8008C174.286 83.8125 170.2 84.4883 166.3 85.8008C162.412 87.1914 158.817 89.293 155.7 92C155.597 90.9844 155.396 89.9766 155.1 89C154.945 88.3828 154.731 87.7656 154.55 87.2422L154.4 86.8008C154.359 86.5664 154.266 86.3477 154.127 86.1563C153.988 85.9688 153.808 85.8086 153.6 85.6992C153.296 85.5781 152.98 85.4922 152.657 85.4453C152.44 85.4141 152.22 85.3984 152 85.3984H135.4C135.043 85.3906 134.693 85.4961 134.4 85.6992C134.28 85.832 134.198 85.9961 134.163 86.1719C134.128 86.3477 134.141 86.5313 134.2 86.6992C134.3 87.8984 134.4 89.5 134.5 91.5C134.6 93.5 134.6 95.6992 134.7 97.8984C134.8 100.102 134.8 102.199 134.8 104Z", 
    shopify: "M42.5 1.04263e-05H197.5C203.083 -0.00389582 208.611 1.08985 213.77 3.22267C218.929 5.35939 223.616 8.48829 227.564 12.4375C231.511 16.3828 234.642 21.0703 236.775 26.2305C238.91 31.3867 240.005 36.918 240 42.5V191.5C240.005 197.082 238.91 202.613 236.775 207.77C234.642 212.93 231.511 217.617 227.564 221.563C223.616 225.512 218.929 228.641 213.77 230.777C208.611 232.91 203.083 234.004 197.5 234H42.5C36.9175 234.004 31.3887 232.91 26.2295 230.777C21.0708 228.641 16.3838 225.512 12.4361 221.563C8.48879 217.617 5.35842 212.93 3.22463 207.77C1.09035 202.613 -0.00535144 197.082 1.96512e-05 191.5V42.5C-0.00535144 36.918 1.09035 31.3867 3.22463 26.2305C5.35842 21.0703 8.48879 16.3828 12.4361 12.4375C16.3838 8.48829 21.0708 5.35939 26.2295 3.22267C31.3887 1.08985 36.9175 -0.00389582 42.5 1.04263e-05ZM164.718 73.1524C164.209 73.1094 153.437 72.3086 153.437 72.3086C153.435 72.3086 147.079 66 145.442 64.3672C145.303 64.2266 145.199 64.125 145.135 64.0625C144.311 63.2383 142.707 63.4883 142.084 63.6719L137.897 64.9649C135.397 57.7734 130.987 51.1641 123.228 51.1641L122.885 51.1719L122.573 51.1875C120.366 48.2695 117.633 47 115.272 47C97.1973 47 88.562 69.5938 85.8545 81.0781L73.2046 85C69.2842 86.2305 69.1607 86.3555 68.646 90.0469C68.2578 92.8438 58 172.172 58 172.172L137.936 187.148L181.241 177.777L172.823 120.863L165.941 74.2891C165.887 73.8906 165.668 73.5938 165.396 73.4024C165.357 73.375 165.317 73.3516 165.277 73.3281C165.096 73.2266 164.9 73.168 164.718 73.1524ZM133.479 66.332L129.874 67.4453L126.716 68.4102L126.721 66.9649C126.721 62.4961 126.1 58.8984 125.105 56.0469C129.103 56.5469 131.766 61.0938 133.479 66.332ZM120.146 56.9297C121.257 59.7149 121.98 63.7149 121.98 69.1055L121.975 69.8906L116.25 71.6641L108.007 74.2149C110.696 63.8359 115.738 58.8242 120.146 56.9297ZM114.775 51.8477C115.556 51.8477 116.341 52.1133 117.093 52.6289C111.301 55.3555 105.092 62.2227 102.47 75.9297L100.409 76.5703L91.4287 79.3516C94.5 68.8945 101.793 51.8477 114.775 51.8477ZM123.228 97.0781L117.888 112.961C117.888 112.961 113.209 110.465 107.474 110.465C99.0659 110.465 98.6426 115.742 98.6426 117.07C98.6426 119.938 101.596 122.105 105.169 124.73C110.637 128.742 117.555 133.82 117.555 144.102C117.555 157.469 109.075 166.078 97.6406 166.078C83.9199 166.078 76.9038 157.539 76.9038 157.539L80.5777 145.402C80.5777 145.402 87.7896 151.594 93.876 151.594C97.8526 151.594 99.4702 148.461 99.4702 146.176C99.4702 142.027 96.4907 139.617 93.1426 136.906C88.8511 133.438 83.9551 129.473 83.9551 120.738C83.9551 107.652 93.3491 94.9844 112.312 94.9844C119.619 94.9844 123.228 97.0781 123.228 97.0781Z",
    tailwind: "M197.5 1.04263e-05H42.5C36.9175 -0.00389582 31.3887 1.08985 26.2295 3.22267C21.0708 5.35939 16.3838 8.48829 12.4361 12.4375C8.48879 16.3828 5.35842 21.0703 3.22463 26.2305C1.09035 31.3867 -0.00535144 36.918 1.96513e-05 42.5V191.5C-0.00535144 197.082 1.09035 202.613 3.22463 207.77C5.35842 212.93 8.48879 217.617 12.4361 221.563C16.3838 225.512 21.0708 228.641 26.2295 230.777C31.3887 232.91 36.9175 234.004 42.5 234H197.5C203.083 234.004 208.611 232.91 213.77 230.777C218.929 228.641 223.616 225.512 227.564 221.563C231.511 217.617 234.642 212.93 236.775 207.77C238.91 202.613 240.005 197.082 240 191.5V42.5C240.005 36.918 238.91 31.3867 236.775 26.2305C234.642 21.0703 231.511 16.3828 227.564 12.4375C223.616 8.48829 218.929 5.35939 213.77 3.22267C208.611 1.08985 203.083 -0.00389582 197.5 1.04263e-05ZM82.749 101.664C87.6499 81.8906 99.8994 72 119.5 72C137.716 72 146.058 80.543 153.264 87.9219C157.688 92.4531 161.685 96.5469 167.274 97.957C177.076 100.43 185.651 96.7227 193 86.832C188.101 106.609 175.85 116.5 156.251 116.5C138.033 116.5 129.693 107.957 122.487 100.578C118.063 96.0469 114.066 91.9492 108.475 90.5391C98.6753 88.0703 90.1001 91.7774 82.749 101.664ZM46 146.168C50.8989 126.387 63.1504 116.5 82.749 116.5C100.967 116.5 109.307 125.043 116.513 132.422C120.938 136.953 124.934 141.051 130.525 142.457C140.325 144.93 148.9 141.223 156.251 131.332C151.35 151.109 139.101 161 119.5 161C101.284 161 92.9419 152.457 85.7364 145.074C81.3115 140.547 77.3155 136.453 71.7256 135.043C61.9243 132.57 53.3491 136.277 46 146.168Z",
    html: "M197.5 1.04263e-05H42.5C36.9175 -0.00389582 31.3887 1.08985 26.2295 3.22267C21.0708 5.35939 16.3838 8.48829 12.4361 12.4375C8.48879 16.3828 5.35842 21.0703 3.22463 26.2305C1.09035 31.3867 -0.00535144 36.918 1.96513e-05 42.5V191.5C-0.00535144 197.082 1.09035 202.613 3.22463 207.77C5.35842 212.93 8.48879 217.617 12.4361 221.563C16.3838 225.512 21.0708 228.641 26.2295 230.777C31.3887 232.91 36.9175 234.004 42.5 234H197.5C203.083 234.004 208.611 232.91 213.77 230.777C218.929 228.641 223.616 225.512 227.564 221.563C231.511 217.617 234.642 212.93 236.775 207.77C238.91 202.613 240.005 197.082 240 191.5V42.5C240.005 36.918 238.91 31.3867 236.775 26.2305C234.642 21.0703 231.511 16.3828 227.564 12.4375C223.616 8.48829 218.929 5.35939 213.77 3.22267C208.611 1.08985 203.083 -0.00389582 197.5 1.04263e-05ZM75.0371 167.094L65.0322 55H174.968L164.953 167.105L119.933 179.492L75.0371 167.094ZM153.531 88.7109L154.158 81.5391L154.488 78H85.5489L85.878 81.8828L89.2613 120H136.959L135.355 137.578L120 141.453V142H119.957L104.67 137.918L103.691 127H89.876L91.7891 148.207L119.966 155.629L120 155.609L148.196 147.859L148.434 145.59L151.667 109.473L152.003 106H101.847L100.59 92H153.255L153.531 88.7109Z",
    typescript: "M197.5 1.04263e-05H42.5C36.9175 -0.00389582 31.3887 1.08985 26.2295 3.22267C21.0708 5.35939 16.3838 8.48829 12.4361 12.4375C8.48879 16.3828 5.35842 21.0703 3.22463 26.2305C1.09035 31.3867 -0.00535144 36.918 1.96512e-05 42.5V191.5C-0.00535144 197.082 1.09035 202.613 3.22463 207.77C5.35842 212.93 8.48879 217.617 12.4361 221.563C16.3838 225.512 21.0708 228.641 26.2295 230.777C31.3887 232.91 36.9175 234.004 42.5 234H197.5C203.083 234.004 208.611 232.91 213.77 230.777C218.929 228.641 223.616 225.512 227.564 221.563C231.511 217.617 234.642 212.93 236.775 207.77C238.91 202.613 240.005 197.082 240 191.5V42.5C240.005 36.918 238.91 31.3867 236.775 26.2305C234.642 21.0703 231.511 16.3828 227.564 12.4375C223.616 8.48829 218.929 5.35939 213.77 3.22267C208.611 1.08985 203.083 -0.00389582 197.5 1.04263e-05ZM60 179.41V116.91V54.4102H185V179.41H60ZM168.55 116.41C166.445 114.172 163.724 112.605 160.73 111.91C157.598 111.367 154.398 111.277 151.24 111.672C144.42 112.961 139.75 117.309 138.42 123.539C138.063 126.203 138.138 128.902 138.64 131.539C139.313 133.848 140.484 135.98 142.07 137.789C144.61 140.531 147.39 142.25 153.84 145.031C159.43 147.469 161.43 148.641 162.43 150.031C163.143 151.082 163.464 152.352 163.338 153.613C163.212 154.879 162.646 156.059 161.74 156.949C159.04 159.379 153.58 159.672 149.58 157.57C147.716 156.383 146.106 154.84 144.84 153.031L144.09 151.922L140.5 154L135.9 156.641C135.5 156.855 135.115 157.098 134.75 157.371C134.61 157.609 136.85 160.922 138 162.191C141.428 165.664 145.872 167.957 150.69 168.738C153.847 169.168 157.045 169.203 160.21 168.84C167.14 167.672 172.04 164.141 174.04 158.941C175.84 154.16 175.25 147.699 172.59 143.699C170.21 140.09 166.38 137.551 157.43 133.699C152.57 131.602 151.02 130.57 150.19 128.84C149.805 128.121 149.619 127.313 149.65 126.5C149.63 123.23 152.07 121.238 155.86 121.5C157.057 121.543 158.223 121.891 159.25 122.508C160.276 123.125 161.129 123.992 161.73 125.031C162.26 125.82 162.74 126.34 162.86 126.262C163.847 125.648 165.024 124.891 166.189 124.125C168.905 122.344 171.55 120.523 171.55 120.41C170.716 118.961 169.709 117.617 168.55 116.41ZM131.39 122.27V117.148L131.33 112H109.52C97.52 111.98 87.5801 112.02 87.52 112.102C87.3833 113.816 87.3364 115.539 87.3799 117.262V122.262H103.65V168.5H115.16V122.27H131.39Z",
    css: "M197.5 1.04263e-05H42.5C36.9175 -0.00389582 31.3887 1.08985 26.2295 3.22267C21.0708 5.35939 16.3838 8.48829 12.4361 12.4375C8.48879 16.3828 5.35842 21.0703 3.22463 26.2305C1.09035 31.3867 -0.00535144 36.918 1.96513e-05 42.5V191.5C-0.00535144 197.082 1.09035 202.613 3.22463 207.77C5.35842 212.93 8.48879 217.617 12.4361 221.563C16.3838 225.512 21.0708 228.641 26.2295 230.777C31.3887 232.91 36.9175 234.004 42.5 234H197.5C203.083 234.004 208.611 232.91 213.77 230.777C218.929 228.641 223.616 225.512 227.564 221.563C231.511 217.617 234.642 212.93 236.775 207.77C238.91 202.613 240.005 197.082 240 191.5V42.5C240.005 36.918 238.91 31.3867 236.775 26.2305C234.642 21.0703 231.511 16.3828 227.564 12.4375C223.616 8.48829 218.929 5.35939 213.77 3.22267C208.611 1.08985 203.083 -0.00389582 197.5 1.04263e-05ZM75.0552 168.883L65 56H175.48L165.417 168.836L120.173 181.465L75.0552 168.883ZM151.244 119.469L154.591 81.8633L154.922 78H85.6411L85.9732 81.8281L86.6031 88.9609L86.8799 92H139.806L138.542 106H103.793L104.124 109.828L104.755 116.957L105.032 120H137.315L135.683 138L120.244 142.223L104.858 138.055L103.873 127H89.9903L91.9072 148.738L120.218 156.629L120.24 156.605L148.6 148.762L148.862 146.426L151.24 120.137L151.254 119.672L151.244 119.469Z",
    react: "M42.5 1.04263e-05H197.5C203.083 -0.00389582 208.611 1.08985 213.77 3.22267C218.929 5.35939 223.616 8.48829 227.564 12.4375C231.511 16.3828 234.642 21.0703 236.775 26.2305C238.91 31.3867 240.005 36.918 240 42.5V191.5C240.005 197.082 238.91 202.613 236.775 207.77C234.642 212.93 231.511 217.617 227.564 221.563C223.616 225.512 218.929 228.641 213.77 230.777C208.611 232.91 203.083 234.004 197.5 234H42.5C36.9175 234.004 31.3887 232.91 26.2295 230.777C21.0708 228.641 16.3838 225.512 12.4361 221.563C8.48879 217.617 5.35842 212.93 3.22463 207.77C1.09035 202.613 -0.00535144 197.082 1.96513e-05 191.5V42.5C-0.00535144 36.918 1.09035 31.3867 3.22463 26.2305C5.35842 21.0703 8.48879 16.3828 12.4361 12.4375C16.3838 8.48829 21.0708 5.35939 26.2295 3.22267C31.3887 1.08985 36.9175 -0.00389582 42.5 1.04263e-05ZM120 128.398C126.296 128.398 131.4 123.297 131.4 117C131.4 110.703 126.296 105.602 120 105.602C113.704 105.602 108.6 110.703 108.6 117C108.6 123.297 113.704 128.398 120 128.398ZM159.879 97C161.045 97.3906 162.185 97.793 163.3 98.1992C175.8 103 182.6 109.602 182.6 117C182.6 124.398 175.8 131 163.3 135.801C161.1 136.699 158.8 137.398 156.4 138.102C157 140.5 157.5 142.898 157.9 145.199C160 158.301 157.7 167.602 151.3 171.301C150.172 171.953 148.974 172.395 147.684 172.645C146.801 172.816 145.875 172.898 144.9 172.898C137.9 172.898 129 167.699 120 159C111.1 167.699 102.2 172.898 95.1001 172.898C92.7002 172.898 90.6001 172.398 88.7002 171.301C82.2998 167.699 80 158.398 82.1001 145.199C82.5 142.898 83 140.5 83.6001 138.102C81.2002 137.398 78.8999 136.602 76.7002 135.801C64.2998 131 57.3999 124.398 57.3999 117C57.3999 109.602 64.2002 103 76.7002 98.1992C77.8965 97.7109 79.1226 97.2813 80.3784 96.8789C81.4317 96.5391 82.5054 96.2188 83.6001 95.8984C83 93.5 82.5 91.1016 82.1001 88.8008C80 75.6992 82.2998 66.3984 88.7002 62.6992C90.6001 61.6016 92.7002 61.1016 95.1001 61.1016C102.1 61.1016 111 66.3008 120 75C129 66.3008 137.9 61.1016 144.9 61.1016C147.3 61.1016 149.4 61.6016 151.3 62.6992C157.7 66.3008 160 75.6016 157.9 88.8008C157.5 91.1016 157 93.5 156.4 95.8984C157.584 96.2461 158.744 96.6172 159.879 97ZM152.3 88C154 77.5 152.6 70.1016 148.5 67.6992C147.806 67.2852 147.015 67.0156 146.161 66.8867C145.785 66.8281 145.397 66.8008 145 66.8008C138.9 66.8008 131.4 71.8008 124 79.1016C127.5 83 131 87.3008 134.4 92.1016C140.2 92.6016 145.7 93.3984 150.9 94.6016C151.5 92.3008 152 90.1016 152.3 88ZM135.043 130.785C135.834 129.523 136.59 128.262 137.3 127C138.696 124.504 139.984 122.059 141.244 119.629L142.6 117C141 113.699 139.2 110.301 137.3 107C136.317 105.254 135.275 103.508 134.173 101.758C133.257 100.305 132.299 98.8516 131.3 97.3984C127.7 97.1016 124 97 120.1 97C116.3 97 112.6 97.1016 108.9 97.3984C106.7 100.602 104.6 103.801 102.8 107C100.9 110.301 99.1001 113.699 97.5 117C99.1001 120.301 100.9 123.699 102.8 127C104.6 130.199 106.6 133.398 108.8 136.602C112.4 136.898 116.1 137 120 137C122.057 137 124.085 136.969 126.1 136.895C127.807 136.832 129.503 136.738 131.2 136.602C132.533 134.66 133.829 132.723 135.043 130.785ZM149.4 134C148.3 130.602 147.1 127.199 145.6 123.699C144.5 125.699 143.4 127.801 142.2 129.898C141.1 132 139.8 134 138.6 135.898C142.4 135.398 146 134.801 149.4 134ZM116.953 147.336C117.95 148.523 118.966 149.68 120 150.801C121.419 149.262 122.804 147.652 124.154 145.996C125.086 144.852 126.001 143.684 126.9 142.5C124.6 142.602 122.3 142.699 120 142.699C117.7 142.699 115.4 142.602 113.1 142.5C114.352 144.148 115.636 145.766 116.953 147.336ZM90.6001 133.898C94 134.699 97.6001 135.301 101.4 135.801C100.699 134.633 99.9971 133.496 99.2954 132.316C98.7969 131.477 98.2984 130.613 97.7998 129.699C97.1577 128.629 96.544 127.531 95.9439 126.438C95.4224 125.484 94.9112 124.531 94.3999 123.602C93.668 125.309 93.0078 127.016 92.3955 128.699C91.753 130.469 91.1636 132.211 90.6001 133.898ZM90.6001 100C91.7002 103.398 92.8999 106.801 94.3999 110.301C94.7857 109.602 95.1714 108.887 95.5611 108.164C96.2837 106.828 97.0205 105.465 97.7998 104.102C98.7676 102.254 99.8906 100.484 100.964 98.7891L101.4 98.1016C97.6001 98.6016 94 99.1992 90.6001 100ZM124.542 88.4805C123.07 86.6563 121.556 84.8867 120 83.1992C117.6 85.8008 115.3 88.6016 113.1 91.5L115.967 91.3828C117.312 91.3359 118.656 91.3008 120 91.3008C122.3 91.3008 124.6 91.3984 126.9 91.5C126.126 90.4805 125.34 89.4727 124.542 88.4805ZM138.6 98.1992L142.2 104.199C143.384 106.172 144.471 108.246 145.556 110.316L145.6 110.398C147.1 106.898 148.3 103.398 149.4 100.102C148.05 99.7852 146.668 99.5 145.255 99.2383C143.109 98.8399 140.891 98.5 138.6 98.1992ZM91.5 67.6992C87.3999 70.1016 86 77.5 87.7002 88L87.8115 88.5859C88.1763 90.5117 88.5557 92.5156 89.1001 94.6016C94.2998 93.5 99.7998 92.6016 105.6 92.1016C109 87.3008 112.5 82.8984 116 79.1016C108.5 71.6992 101 66.8008 95 66.8008C93.7002 66.8008 92.5 67.1016 91.5 67.6992ZM78.7002 103.602C68.7002 107.301 63 112.301 63 117C63 122.602 71.2998 128.602 85.1001 132.602C86.6001 127.602 88.7002 122.398 91.1001 117.102C88.7002 111.801 86.7002 106.5 85.1001 101.5C83.6592 101.895 82.2183 102.328 80.8335 102.805C80.104 103.059 79.3902 103.324 78.7002 103.602ZM87.7002 146C86 156.5 87.3999 163.898 91.5 166.301C92.5 166.898 93.7002 167.199 95 167.199C101.1 167.199 108.6 162.199 116 154.898C112.5 151 109 146.699 105.6 141.898C99.7998 141.398 94.2998 140.602 89.1001 139.398C88.5 141.699 88 143.898 87.7002 146ZM148.5 166.301C152.6 163.898 154 156.5 152.3 146L152.188 145.414C151.824 143.488 151.444 141.484 150.9 139.398C145.7 140.5 140.2 141.398 134.4 141.898C131 146.699 127.5 151.102 124 154.898C131.5 162.301 139 167.199 145 167.199C146.3 167.199 147.5 166.898 148.5 166.301ZM154.9 132.5C157.1 131.898 159.3 131.199 161.3 130.398C171.2 126.699 177 121.699 177 117C177 111.398 168.7 105.398 154.9 101.398C153.4 106.398 151.3 111.602 148.9 116.898C151.3 122.199 153.3 127.5 154.9 132.5Z"
  }
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 234" fill="currentColor" className='object-cover'>
  <path fill-rule="evenodd" clip-rule="evenodd" d={svg[type]} fill="currentColor"/>
</svg>
  )
}

export default SkillsSvg
