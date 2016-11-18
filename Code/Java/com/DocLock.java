package com;
// Doclock is Developed by Fredrik Norling XPageDeveloper.com
import java.util.HashMap;
import java.io.Serializable;
public class DocLock implements Serializable{
	private static final long serialVersionUID = 2L;
	private HashMap<String, String> _map;
	   
	  // ---------------------------------------------------------
	   
	  public DocLock() {
		  this._map = new HashMap<String, String>();
	  }
	   
	  // ---------------------------------------------------------
	  public boolean isLocked(String UNID){
		  boolean ret=false;
		  synchronized(this._map){
			 ret=this._map.containsKey(UNID);
		  }
		  return ret;
	  }
	  public void addLock(String UNID,String Key){
		  synchronized(this._map){
			  this._map.put(UNID,Key);
		  }
	  }
	  public String getLock(String UNID){
		  String ret;
		  ret=this._map.get(UNID);
		  return ret;
	  }
	  public void removeLock(String UNID){
		  synchronized(this._map){
			  this._map.remove(UNID);
		  }
	  }
	  public void setMap(HashMap<String, String> map){
		  synchronized(this._map){
			  this._map = map;
		  }
	  }
	   
	  // ---------------------------------------------------------
	   
	  public HashMap<String, String> getMap(){
	    return _map;
	  }
	  
}
