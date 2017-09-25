#include <node.h> 
#include <v8.h> 
#include <iostream> 
#include <cmath>

using namespace v8; 
using namespace std; 

void Kramer(const FunctionCallbackInfo<Value>& args) { 
    Isolate* isolate = args.GetIsolate(); 

    // arguments length judgement 
    if (args.Length() < 7) { 
        isolate->ThrowException(Exception::TypeError( 
            String::NewFromUtf8(isolate, "bad"))); 
        return; 
    } 

    // arguments type judgement 
    if (!args[0]->IsString() || !args[1]->IsNumber() || !args[2]->IsNumber() || !args[3]->IsNumber() || !args[4]->IsNumber() || !args[5]->IsNumber() || !args[6]->IsNumber()) { 
        //throw exception 
        isolate->ThrowException(Exception::TypeError( 
            String::NewFromUtf8(isolate, "bad"))); 
    }
    

    // js String type convert to v8 String type 
    Local<String> str = Local<String>::Cast(args[0]); 
    String::Utf8Value utfValue(str); 
    
    if (string(*utfValue) == "kramer") {
        double delta = (args[1]->NumberValue() * args[5]->NumberValue()) - (args[2]->NumberValue() * args[4]->NumberValue());
        double delta_l = (args[3]->NumberValue() * args[5]->NumberValue()) - (args[2]->NumberValue() * args[6]->NumberValue());
        double delta_ll = (args[3]->NumberValue() * args[4]->NumberValue()) - (args[1]->NumberValue() * args[6]->NumberValue());
         Local<Array> arr = Array::New(isolate); 
        // Array Assignment 
        arr->Set(0, Number::New(isolate, delta_l / delta)); 
        arr->Set(1, Number::New(isolate, delta_ll / delta)); 
        args.GetReturnValue().Set(arr);
    }
}


void Init(Local <Object> exports, Local <Object> module) {
    NODE_SET_METHOD(module, "exports", Kramer);
} 

NODE_MODULE(NODE_GYP_MODULE_NAME, Init)