(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{"6XJn":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Networking/Subnetting-Fundamentals.md"}});var s={_frontmatter:o},l=i.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(l,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"subnetting-fundamentals"},"Subnetting Fundamentals"),Object(a.b)("h2",{id:"basic-scenarios"},"Basic Scenarios"),Object(a.b)("h3",{id:"a-computer-using-hotspot"},"A Computer Using Hotspot"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Computer is initiating communication over whatever netowrk medium is connected."),Object(a.b)("li",{parentName:"ol"},"The computer is tethered to a cell phone for connectivity."),Object(a.b)("li",{parentName:"ol"},"The cellphone is connected to a tower nearby for upstream connectivity."),Object(a.b)("li",{parentName:"ol"},"Cell phone service provider functions as an ",Object(a.b)("inlineCode",{parentName:"li"},"Internet Service Provider (ISP)")," permitting the computer to access the internet.")),Object(a.b)("h3",{id:"a-computer-using-a-router"},"A Computer Using A Router"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Computer is initiating communication over whatever netowrk medium is connected."),Object(a.b)("li",{parentName:"ol"},"The computer has a ",Object(a.b)("inlineCode",{parentName:"li"},"Network Interface Card (NIC)"),"."),Object(a.b)("li",{parentName:"ol"},"NIC is connected to router for upstream connectivity."),Object(a.b)("li",{parentName:"ol"},"Router is connected to ISP permitting internet access.")),Object(a.b)("h3",{id:"client-computers-on-a-local-network"},"Client Computers on a Local Network"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Client computers are connected via ethernet from their NICs to the local switch."),Object(a.b)("li",{parentName:"ol"},"Switch is connected to all devices on te local network. It will forward packets within the local network."),Object(a.b)("li",{parentName:"ol"},"A router is connected to the local network and the internet. It will forward packets within the local network."),Object(a.b)("li",{parentName:"ol"},"The router forwards packets upon request to upstream network eg ISP.")),Object(a.b)("h2",{id:"component-definitions"},"Component Definitions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Network Interface Card: Hardware available to the computer for the purpose of networking. It connects via some medium (ethernet, fiber, radio/wireless)."),Object(a.b)("li",{parentName:"ul"},"Switch: Can be a stand-alone device or provided by the router if it has switching functionality. The switch is a member of the LAN and permits LAN communication."),Object(a.b)("li",{parentName:"ul"},"Router: Connected to the upstream network. Router device is a member of two (or more) networks and facilitates communication between networks. The router may connect to an ISP granting access to the internet. The internet itself comprises of many different, discreet networks.")),Object(a.b)("h2",{id:"network-traffic"},"Network Traffic"),Object(a.b)("p",null,"There are three important methods of network traffic:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Unicast (one-to-one): Traffic is sent for a single source to a single destination. This is the most common form. Examples include a connection from a client web browser to a remote web server."),Object(a.b)("li",{parentName:"ol"},"Multicast (one-to-many): Traffic is sent from a single source to multiple destinations. Example client sending updates to multiple devices at the same time as a single data stream. Traditionally handled by a discreet multicast network."),Object(a.b)("li",{parentName:"ol"},"Broadcast (one-to-all): Traffic is sent from a single source to all destinations. Example being the ",Object(a.b)("inlineCode",{parentName:"li"},"Address Resolution Protocol")," that uses broadcast to map MAC addresses to IP addresses.")),Object(a.b)("h2",{id:"osi-layers-in-network-traffic"},"OSI Layers in Network Traffic"),Object(a.b)("p",null,"Open Systems Interconnection Model."),Object(a.b)("h3",{id:"layer-1-physical"},"Layer 1: Physical"),Object(a.b)("p",null,"Represents the bit-level transmission between network nodes over the connection medium."),Object(a.b)("p",null,"Data: Bits across the wire (1s and 0s) as pulse of electricity or light."),Object(a.b)("h3",{id:"layer-2-data-link"},"Layer 2: Data Link"),Object(a.b)("p",null,"Data Link Layer handles communications between adjacents network nodes via physical addressing (MAC)."),Object(a.b)("p",null,"Data: Frames."),Object(a.b)("h3",{id:"layer-3-network"},"Layer 3: Network"),Object(a.b)("p",null,"Handles routing messages (packets) via the best route to reach its destination based on IP address."),Object(a.b)("p",null,"Data: Packets."),Object(a.b)("h3",{id:"layer-4-transport"},"Layer 4: Transport"),Object(a.b)("p",null,"Defines how data will be sent providing validation and security."),Object(a.b)("p",null,"Data: Segments."),Object(a.b)("h3",{id:"layer-5-7-application-presentation-session"},"Layer 5-7: Application, Presentation, Session"),Object(a.b)("p",null,"Layers 5-7 are typically managed by the application itself, providing the interface for the user to communicate."),Object(a.b)("p",null,"Data: Data."),Object(a.b)("h2",{id:"data-in-a-tcpip-example"},"Data in a TCP/IP Example"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Data Link Layer (2): Frame = Frame Header + Frame Data"),Object(a.b)("li",{parentName:"ul"},"Network Layer (3): Packet = IP Header + IP Data"),Object(a.b)("li",{parentName:"ul"},"Transport Layer (4): Segment = TCP Header + Application Data"),Object(a.b)("li",{parentName:"ul"},"Application Layer (5-7): Data = App Header + User Data")),Object(a.b)("h2",{id:"network-segmention"},"Network Segmention"),Object(a.b)("p",null,"There can be multiple switches within a small corporate network that isolate different department computers and servers."),Object(a.b)("h3",{id:"isolation"},"Isolation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Bad Actor: Could compromise netowrk resources it has access to."),Object(a.b)("li",{parentName:"ul"},"Limiting: In a single-scroped network, bandwidth competition could lead to quality of servie issues for important services and hosts.")),Object(a.b)("h3",{id:"scaling"},"Scaling"),Object(a.b)("p",null,"The benefits of segregation in a larger network:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Improve network performance and speed"),Object(a.b)("li",{parentName:"ul"},"Reduce network congestion"),Object(a.b)("li",{parentName:"ul"},"Enhance security"),Object(a.b)("li",{parentName:"ul"},"Controlled expansion"),Object(a.b)("li",{parentName:"ul"},"Maintenance and Administraion")),Object(a.b)("h2",{id:"addressing"},"Addressing"),Object(a.b)("h3",{id:"ipv4"},"IPv4"),Object(a.b)("p",null,"IPv4 address are 32bit with an octet each consisting of 8 bits (hence the 255.255.255.255 limit)."),Object(a.b)("h3",{id:"ipv6"},"IPv6"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Leading 0s can be compressed"),Object(a.b)("li",{parentName:"ul"},"Groups of zeroes can be removed (once) and represented by ",Object(a.b)("inlineCode",{parentName:"li"},"::"))),Object(a.b)("p",null,"Example of an ",Object(a.b)("inlineCode",{parentName:"p"},"IPv6")," address: ",Object(a.b)("inlineCode",{parentName:"p"},"2001:0DB8:AC10:FE01:0000:0000:0000:0000")," which can be further compressed to be represented as ",Object(a.b)("inlineCode",{parentName:"p"},"2001:0DB8:AC10:FE01::"),"."),Object(a.b)("p",null,"The main advantage of IPv6 over IPv4 is the larger address space."),Object(a.b)("p",null,"Each segment is represented by 16 bits."),Object(a.b)("h3",{id:"media-access-control-mac-address"},"Media Access Control (MAC) Address"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Within range to max address ",Object(a.b)("inlineCode",{parentName:"li"},"FF:FF:FF:FF:FF:FF"),"."),Object(a.b)("li",{parentName:"ul"},"48 bit address."),Object(a.b)("li",{parentName:"ul"},"First three sections represent the Organizationally Unique Identifier (OUI) - number deontes the manufacturer and whether this is a ",Object(a.b)("inlineCode",{parentName:"li"},"universal")," or ",Object(a.b)("inlineCode",{parentName:"li"},"local")," MAC address."),Object(a.b)("li",{parentName:"ul"},"The MAC addresses are mapped to IP addresses through the ",Object(a.b)("inlineCode",{parentName:"li"},"Address Resolution Protocol (ARP)"),".")),Object(a.b)("h3",{id:"address-resolution-protocol-arp"},"Address Resolution Protocol (ARP)"),Object(a.b)("p",null,"When requestion a resolution to an address, a member of the LAN network sends out a broadcast on the network to all devices asking for a ",Object(a.b)("inlineCode",{parentName:"p"},"Target")," IP but no ",Object(a.b)("inlineCode",{parentName:"p"},"Target")," MAC address."),Object(a.b)("p",null,"The device with the ",Object(a.b)("inlineCode",{parentName:"p"},"Target")," IP would then respond with a Unicast to the original device provide the ",Object(a.b)("inlineCode",{parentName:"p"},"Target")," MAC address that was requested.."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Broadcast => who has IP 192.168.1.212? No ",Object(a.b)("inlineCode",{parentName:"li"},"Target")," MAC address as it is a broadcast"),Object(a.b)("li",{parentName:"ol"},"Unicast back => I have the IP 192.168.1.212. Has all ",Object(a.b)("inlineCode",{parentName:"li"},"Sender")," and ",Object(a.b)("inlineCode",{parentName:"li"},"Target")," addresses")),Object(a.b)("h2",{id:"network-masks"},"Network Masks"),Object(a.b)("p",null,"Designates which sections of the IP address apply to the network, and which apply to the host."),Object(a.b)("p",null,"Example, for ",Object(a.b)("inlineCode",{parentName:"p"},"192.168.001.101")," we could have Network Portion ",Object(a.b)("inlineCode",{parentName:"p"},"255.255.255")," and Host Portion ",Object(a.b)("inlineCode",{parentName:"p"},".101"),". Only the ",Object(a.b)("inlineCode",{parentName:"p"},"101")," part of this address is the host portion, so in the above case we know the network is ",Object(a.b)("inlineCode",{parentName:"p"},"192.168.001"),". The network mask determines the network size and ",Object(a.b)("inlineCode",{parentName:"p"},"range"),"."),Object(a.b)("p",null,"In this example the ",Object(a.b)("inlineCode",{parentName:"p"},"range")," is ",Object(a.b)("inlineCode",{parentName:"p"},"192.168.001.0 - 192.168.001.255"),"."),Object(a.b)("p",null,"Note that in a classful network, the ",Object(a.b)("inlineCode",{parentName:"p"},".0")," is not a valid IP as it represents a network."),Object(a.b)("p",null,"The highest IP in the range isn't used for host assignment as it is consider the ",Object(a.b)("inlineCode",{parentName:"p"},"broadcast IP")," for broadcasting a packet to an entire IPv4 subnet."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"broadcast")," address also cannot be an even number."),Object(a.b)("p",null,"Common network masks include ",Object(a.b)("inlineCode",{parentName:"p"},"255.255.255.0"),", ",Object(a.b)("inlineCode",{parentName:"p"},"255.255.0.0")," and ",Object(a.b)("inlineCode",{parentName:"p"},"255.0.0.0")," where the 255s represent the network portion and the 0s represent the host portion. The are also the submasks of the ",Object(a.b)("inlineCode",{parentName:"p"},"A, B and C networks"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"network portion")," means we can have many networks."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"host portion")," defines how many devices or how many portions you can have on your LAN. This is the only part of the address on a LAN that changes."),Object(a.b)("h3",{id:"calculating-subnet-hosts"},"Calculating Subnet Hosts"),Object(a.b)("p",null,"Formula is ",Object(a.b)("inlineCode",{parentName:"p"},"2^n - 2")," where n is the number of host bits."),Object(a.b)("p",null,"We subtract 2 addresses for the host ID and the broadcast."),Object(a.b)("h3",{id:"calculating-subnet-range"},"Calculating Subnet Range"),Object(a.b)("p",null,"We take an IP address and the subnet mask and use an AND calculation on their respective binary representations to figure out the initial IP in the range."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"192.168.100.200 => 11000000 10101000 01100100 11001000\n255.255.255.224 => 11111111 11111111 11111111 11100000 (2^5 = 32)\n==============================================================\n11000000 10101000 01100100 11000000\n\n192.168.100.192 32 addressess = 224\n\nNetwork Address: 192.168.100.192\nBroadcast Address: 192.168.100.223\n")),Object(a.b)("h3",{id:"calculating-subnets"},"Calculating Subnets"),Object(a.b)("p",null,"Formula is ",Object(a.b)("inlineCode",{parentName:"p"},"2^b / n+2")," where:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"b: number of bits in the host portion"),Object(a.b)("li",{parentName:"ul"},"n: number of hosts per subnet")),Object(a.b)("h2",{id:"cidr---classless-inter-domain-routing"},"CIDR -> Classless Inter-Domain Routing"),Object(a.b)("p",null,"This is a replacement for classful networking."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"does no use classes for network assignment or sizing"),Object(a.b)("li",{parentName:"ul"},"entire unicast range (0-233 in first octet) can be segmented into any sized network"),Object(a.b)("li",{parentName:"ul"},"subnet masks not limited to ",Object(a.b)("inlineCode",{parentName:"li"},"255.255.255.0"),", ",Object(a.b)("inlineCode",{parentName:"li"},"255.255.0.0")," or ",Object(a.b)("inlineCode",{parentName:"li"},"255.0.0.0"))),Object(a.b)("p",null,"CIDR blocks are denoted with an IP address followed by a ",Object(a.b)("inlineCode",{parentName:"p"},"/n")," where n is a number between 0 and 32 that notes the side of the ",Object(a.b)("inlineCode",{parentName:"p"},"host portion"),"."),Object(a.b)("p",null,"Example address ",Object(a.b)("inlineCode",{parentName:"p"},"192.168.100.1/24")," would be a network that supports 256 host addresses (the last octet)."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"192.168.100.1/23")," would support 512 host addresses and so on and so forth."),Object(a.b)("h2",{id:"flsm-and-vlsm"},"FLSM and VLSM"),Object(a.b)("p",null,"Classful networking and CIDR apply to IP assignments, FLSM and VLSM apply to how subnets are assigned within an infrastructure and if the routing protocol send the subnet mask. FLSM is uncommon and has been replaced by VLSM."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"FLSM = Fixed Length Subnet Mask"),Object(a.b)("li",{parentName:"ul"},"VLSM = Variable Length Subnet Mask")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Networking/Subnetting-Fundamentals.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-networking-subnetting-fundamentals-md-3f01b64f9f66afde3171.js.map