cmd_Release/obj.target/mathematic.node := g++ -shared -pthread -rdynamic -m64  -Wl,-soname=mathematic.node -o Release/obj.target/mathematic.node -Wl,--start-group Release/obj.target/mathematic/hello.o -Wl,--end-group 
