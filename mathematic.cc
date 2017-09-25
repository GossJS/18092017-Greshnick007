#include <node.h> 
#include <v8.h> 
#include <iostream> 
#include <cmath>

using namespace v8; 
using namespace std; 

void Mathematic(const FunctionCallbackInfo<Value>& args) { 
    Isolate* isolate = args.GetIsolate(); 

    // arguments length judgement 
    if (args.Length() < 3) { 
        isolate->ThrowException(Exception::TypeError( 
            String::NewFromUtf8(isolate, "bad"))); 
        return; 
    } 

    // arguments type judgement 
    if (!args[0]->IsString() || !args[1]->IsNumber() || !args[2]->IsNumber()) { 
        //throw exception 
        isolate->ThrowException(Exception::TypeError( 
            String::NewFromUtf8(isolate, "bad"))); 
    }
    

    // js String type convert to v8 String type 
    Local<String> str = Local<String>::Cast(args[0]); 
    String::Utf8Value utfValue(str); 
    if (string(*utfValue) == "add") {
        double value = args[1]->NumberValue() + args[2]->NumberValue();
        Local<Number> num = Number::New(isolate, value); 
        args.GetReturnValue().Set(num);   
    }

    if (string(*utfValue) == "subtract") {
        double value = args[1]->NumberValue() - args[2]->NumberValue();
        Local<Number> num = Number::New(isolate, value); 
        args.GetReturnValue().Set(num);   
    }

    if (string(*utfValue) == "multiply") {
        double value = args[1]->NumberValue() * args[2]->NumberValue();
        Local<Number> num = Number::New(isolate, value); 
        args.GetReturnValue().Set(num);   
    }

    if (string(*utfValue) == "divide") {
        double value = args[1]->NumberValue() / args[2]->NumberValue();
        Local<Number> num = Number::New(isolate, value); 
        args.GetReturnValue().Set(num);   
    }

    if (string(*utfValue) == "pow") {
        double value = pow(args[1]->NumberValue(), args[2]->NumberValue());
        Local<Number> num = Number::New(isolate, value); 
        args.GetReturnValue().Set(num);   
    }
    
    if (string(*utfValue) == "kramer") {
        double value = pow(args[1]->NumberValue(), args[2]->NumberValue());
        Local<Number> num = Number::New(isolate, value); 
        args.GetReturnValue().Set(num);   
    }
}


void Init(Local <Object> exports, Local <Object> module) {
    NODE_SET_METHOD(module, "exports", Mathematic);
} 

NODE_MODULE(NODE_GYP_MODULE_NAME, Init)