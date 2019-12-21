// Code generated by protoc-gen-go. DO NOT EDIT.
// source: proto/hashit/hashit.proto

package go_micro_srv_hashit

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Request struct {
	Value                string   `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Request) Reset()         { *m = Request{} }
func (m *Request) String() string { return proto.CompactTextString(m) }
func (*Request) ProtoMessage()    {}
func (*Request) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6aacac7a276b393, []int{0}
}

func (m *Request) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Request.Unmarshal(m, b)
}
func (m *Request) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Request.Marshal(b, m, deterministic)
}
func (m *Request) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Request.Merge(m, src)
}
func (m *Request) XXX_Size() int {
	return xxx_messageInfo_Request.Size(m)
}
func (m *Request) XXX_DiscardUnknown() {
	xxx_messageInfo_Request.DiscardUnknown(m)
}

var xxx_messageInfo_Request proto.InternalMessageInfo

func (m *Request) GetValue() string {
	if m != nil {
		return m.Value
	}
	return ""
}

type Response struct {
	Hash                 string   `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Response) Reset()         { *m = Response{} }
func (m *Response) String() string { return proto.CompactTextString(m) }
func (*Response) ProtoMessage()    {}
func (*Response) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6aacac7a276b393, []int{1}
}

func (m *Response) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Response.Unmarshal(m, b)
}
func (m *Response) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Response.Marshal(b, m, deterministic)
}
func (m *Response) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Response.Merge(m, src)
}
func (m *Response) XXX_Size() int {
	return xxx_messageInfo_Response.Size(m)
}
func (m *Response) XXX_DiscardUnknown() {
	xxx_messageInfo_Response.DiscardUnknown(m)
}

var xxx_messageInfo_Response proto.InternalMessageInfo

func (m *Response) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func init() {
	proto.RegisterType((*Request)(nil), "go.micro.srv.hashit.Request")
	proto.RegisterType((*Response)(nil), "go.micro.srv.hashit.Response")
}

func init() { proto.RegisterFile("proto/hashit/hashit.proto", fileDescriptor_d6aacac7a276b393) }

var fileDescriptor_d6aacac7a276b393 = []byte{
	// 148 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2c, 0x28, 0xca, 0x2f,
	0xc9, 0xd7, 0xcf, 0x48, 0x2c, 0xce, 0xc8, 0x2c, 0x81, 0x52, 0x7a, 0x60, 0x31, 0x21, 0xe1, 0xf4,
	0x7c, 0xbd, 0xdc, 0xcc, 0xe4, 0xa2, 0x7c, 0xbd, 0xe2, 0xa2, 0x32, 0x3d, 0x88, 0x94, 0x92, 0x3c,
	0x17, 0x7b, 0x50, 0x6a, 0x61, 0x69, 0x6a, 0x71, 0x89, 0x90, 0x08, 0x17, 0x6b, 0x59, 0x62, 0x4e,
	0x69, 0xaa, 0x04, 0xa3, 0x02, 0xa3, 0x06, 0x67, 0x10, 0x84, 0xa3, 0x24, 0xc7, 0xc5, 0x11, 0x94,
	0x5a, 0x5c, 0x90, 0x9f, 0x57, 0x9c, 0x2a, 0x24, 0xc4, 0xc5, 0x02, 0xd2, 0x06, 0x55, 0x00, 0x66,
	0x1b, 0x05, 0x70, 0xb1, 0x79, 0x80, 0x8d, 0x12, 0x72, 0xe3, 0x62, 0x75, 0x2e, 0xaa, 0x2c, 0x28,
	0x11, 0x92, 0xd1, 0xc3, 0x62, 0x93, 0x1e, 0xd4, 0x1a, 0x29, 0x59, 0x1c, 0xb2, 0x10, 0x3b, 0x94,
	0x18, 0x92, 0xd8, 0xc0, 0xce, 0x35, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0xfd, 0xf7, 0xa4, 0xd5,
	0xcb, 0x00, 0x00, 0x00,
}