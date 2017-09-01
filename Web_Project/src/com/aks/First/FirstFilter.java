package com.aks.First;

import java.util.*;
import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
public class FirstFilter implements Filter{
	public void init(FilterConfig config) {
		System.out.println("Init");
	}
	public void doFilter(ServletRequest request,ServletResponse response,FilterChain chain) {
		System.out.println("Hello"+ request.getRemoteAddr());
	}
	public void destroy() {
		System.out.println("Destroy");
	}
}