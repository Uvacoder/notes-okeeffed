(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{P9G3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/COMP3520-OS/Pthread.md"}});var l={_frontmatter:o},c=r.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"pthreads"},"Pthreads"),Object(n.b)("h2",{id:"pthreads-api"},"Pthreads API"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Defined in the ANSI/IEEE Posix 1003.1 - 1995 standard"),Object(n.b)("li",{parentName:"ul"},"Subroutines comprise the Pthreads API can be informally grouped into three major classes:")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Thread management"),Object(n.b)("li",{parentName:"ol"},"Mutexes "),Object(n.b)("li",{parentName:"ol"},"Condition variables")),Object(n.b)("h1",{id:"1-thread-management"},"1: Thread Management"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"first class of functions work directly on threads - creating, detatching, joining etc "),Object(n.b)("li",{parentName:"ul"},"also include funcs to set/query thread attributes (joinable, scheduling etc)")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Create Threads")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"initially, single default thread - others must be explicitly created")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"pthread_create(thread, attr, startRoutine, arg)\n// thread - unique identifier for the new thread (pthread_t)\n// attr - attr object used to set thread attributes (pthread_attr) - you can specify a thread attributes object, or NULL for the default values\n// startRoutine - C routine that the thread will execute \n// arg - single arg that may be passed to startRoutine - it must be passed by reference (pointer to struct) and NULL may be used if no arg is to be passed\n\n/*\n    If successful, the pthread_create() function shall return zero; otherwise, an error number shall be returned to indicate the error\n */\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Thread Attributes")),Object(n.b)("p",null,"By default, a thread is created with certain attributes."),Object(n.b)("p",null,"pthread_attr_init(attr) and pthread_attr_destroy(attr) are used to initialize/destroy the thread attribute object."),Object(n.b)("p",null,"Other routines are then used to query/set specific attributes in the thread attribute object."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Terminating Thread")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Thread makes call to the pthread_exit() subroutine "),Object(n.b)("li",{parentName:"ol"},"Thread is cancelled by another thread via pthread_cancel() routine "),Object(n.b)("li",{parentName:"ol"},"Entire process is terminated due to call to exit subroutine ")),Object(n.b)("p",null,"Routine: ",Object(n.b)("inlineCode",{parentName:"p"},"pthread_exit(status)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"used to explicitly exit the thread"),Object(n.b)("li",{parentName:"ul"},"programmer may optionalyl specify a termination status, which is stored as a void pointer for any thread that may join the calling thread")),Object(n.b)("p",null,"Cleanup: ",Object(n.b)("inlineCode",{parentName:"p"},"pthread_exit()")," does not close files; any files opened inside the thread will remain open after the thread is terminated."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-c"}),'#include <pthread.h>\n#include <stdio.h>\n#include <stdlib.h>\n#define NUM_THREADS 5\n\nvoid *PrintHello(void *threadid) {\n    int *tid;\n    tid = (int *)threadid;\n    printf("Hello World! It\'s me, thread #%d!\\n", *tid);\n    pthread_exit(NULL);\n}\n\nint main(int argc, char *argv[]) {\n    pthread_t threads[NUM_THREADS];\n    int rc, t, tids[NUM_THREADS];\n    for (t=0; t< NUM_THREADS; t++) {\n        printf("In main: creating thread %d\\n", t);\n        tids[t] = t;\n        rc = pthread_create(&threads[t], NULL, PrintHello, (void *)&tids[t]);\n\n        if (rc) {\n            printf("ERROR; return code from pthread_create() is %d\\n", rc);\n            exit(-1);\n        }\n    }\n    pthread_exit(NULL); \n}\n')),Object(n.b)("h2",{id:"passing-arguments-to-threads"},"Passing Arguments to Threads"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"pthread_create()")," routine permits the programmer to pass one argument to the thread start routine."),Object(n.b)("p",null,"For cases where multiple args must be passed, we can create a struct and use the reference pointer as an arg."),Object(n.b)("p",null,"All args passed by reference must be cast to (void *)"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-c"}),"struct two_args {\n    int arg1;\n    int arg2;   \n};\n\nvoid *needs_2_args(void *ap) {\n    struct two_args *argp;\n    int a1, a2;\n\n    argp = (struct two_args *) ap;\n\n    // do stuff here\n    \n    a1 = argp->arg1;\n    a2 = argp->arg2;\n    \n    // do stuff here \n\n    free(argp);\n    pthread_exit(NULL);\n}\n\nint main(int argc, char *argv[]) {\n    pthread_t t;\n    struct two_args *ap;\n    int rc;\n\n    // do stuff here \n\n    ap = (struct two_args *)malloc(sizeof(struct two_args));\n    ap->arg1 = 1;\n    ap->arg2 = 2;\n    rc = pthread_create(&t, NULL, needs_2_args, (void *) ap);\n\n    // do stuff here \n\n    pthread_exit(NULL);\n}\n")),Object(n.b)("h2",{id:"joining-and-detatching-threads"},"Joining and Detatching Threads"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Routines")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"pthread_join(threadid, status)"),Object(n.b)("li",{parentName:"ol"},"pthread_detach(threadit, status)"),Object(n.b)("li",{parentName:"ol"},"pthread_attr_setdatachstate(attr, detachstate)"),Object(n.b)("li",{parentName:"ol"},"pthread_attr_getdetachstate(attr, detachstate)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'"joining" is one way to accomplish synchronization between threads'),Object(n.b)("li",{parentName:"ul"},"the ",Object(n.b)("inlineCode",{parentName:"li"},"pthread_join()")," subroutine blocks the calling thread until the specified threadid thread terminates"),Object(n.b)("li",{parentName:"ul"},"The programmer is able to obtain the target thread's termination return status if it was specified in the target thread's call to ",Object(n.b)("inlineCode",{parentName:"li"},"pthread_exit()")),Object(n.b)("li",{parentName:"ul"},"When a thread if created, one of its attributes defines whether it is joinable or detached."),Object(n.b)("li",{parentName:"ul"},"Only threads that are create as joinable can be joined.")),Object(n.b)("p",null,"To explicitly create a thread as joinable or detached, the attr argument in the ",Object(n.b)("inlineCode",{parentName:"p"},"pthread_create()")," routine is used:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Declare a pthread attribute ariable of the ",Object(n.b)("inlineCode",{parentName:"li"},"pthread_attr_t data")," type "),Object(n.b)("li",{parentName:"ol"},"Initialize the attribute ariable with ",Object(n.b)("inlineCode",{parentName:"li"},"pthread_attr_init()")),Object(n.b)("li",{parentName:"ol"},"Set the attribute detached status with ",Object(n.b)("inlineCode",{parentName:"li"},"pthread_attr_setdetachedstate()")),Object(n.b)("li",{parentName:"ol"},"When done, ree library resources used by the attribute with ",Object(n.b)("inlineCode",{parentName:"li"},"pthread_attr_destroy()"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-c"}),'void *BusyWork(void *null) {\n    // do stuff \n    pthread_exit((void *) 0);\n}\n\nint main(int argc, char *argv[]) {\n    pthread_attr_t attr;\n    int rc, t;\n    void *status;\n\n    /* init and set thread detached attribute */\n    pthread_attr_init(&attr);\n    pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_JOINABLE);\n\n    /* free attribute and wait for the other threads */\n    pthread_attr_destory(&attr);\n    for (t=0; t< NUM_THREADS; t++) {\n        rc = pthread_join(thread[t], &status);\n        // do stuff \n        printf("Completed join with thred %d status = %ld\\n", t, (long)status);\n    }\n    pthread_exit(NULL);\n}\n')),Object(n.b)("h2",{id:"syncronisation-issues"},"Syncronisation Issues"),Object(n.b)("p",null,"When multiple threads attempt to manipulate the same data item, the results can often be incoherent if proper care is not take ie. race conditions."),Object(n.b)("h1",{id:"2-mutexes"},"2: Mutexes"),Object(n.b)("p",null,'The second class of functions deal with synchronization - called a "mutex", which is an abbreviation for mutual exclusion.'),Object(n.b)("h2",{id:"creating-and-destroying-mutexes"},"Creating and Destroying Mutexes"),Object(n.b)("h2",{id:"routines"},"Routines"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutex_init(mutex, attr)"),"\n",Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutex_destroy(mutex)"),"\n",Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutexattr_init(attr)"),"\n",Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutexattr_destroy(attr)")),Object(n.b)("p",null,"A mutex must be declared with type ",Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutex_t"),", and must be initialized before they can be used."),Object(n.b)("p",null,"There are two ways to init a mutex variable:\n1. Statically, when declared eg ",Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutex_t mymutex = PTHREAD_MUTEX_INITIALIZER"),"\n2. Dynamically, with the ",Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutex_init()")," routine. This method permits setting mutex object attributes, ",Object(n.b)("inlineCode",{parentName:"p"},"attr")," (which my be specified as NULL to accept defaults)."),Object(n.b)("p",null,"The mutex is initially unlocked."),Object(n.b)("h2",{id:"locking--unlocking-mutexes"},"Locking & Unlocking Mutexes"),Object(n.b)("h2",{id:"routines-1"},"Routines"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutex_lock(mutex)"),"\n",Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutex_unlock(mutex)"),"\n",Object(n.b)("inlineCode",{parentName:"p"},"pthread_mutex_trylock(mutex)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"pthread_mutex_lock(mutex)")," will lock the specified mutex"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"pthread_mutex_unlock(mutex)")," will unlock a mutex if called by the owning thread\n- throws an error if already unlocked or owned by another thread"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"pthread_mutex_trylock(mutex)"),' will attempt to lock a mutex, however if the mutex is already locked it will return a "EBUSY" error code.\n- May be useful to prevent deadlocks!')),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example 1")),Object(n.b)("p",null,"We can now write our previously incorrect code segment as..."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-c"}),"pthread_mutex_t min_value_lock;\n\nmain() {\n    ...\n    pthread_mutex_init(&min_value_lock, NULL);\n    ...\n}\n\nvoid *find_min(void *list_ptr) {\n    ...\n    pthread_mutex_lock(&min_value_lock);\n    if (my_cost < best_cost) {\n        best_cost = my_cost;\n    }   \n    pthread_mutex_unlock(&min_value_lock);\n}\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example 2")),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"producer-consumer")," scenario imposes the following constraints:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The producer thread must not overwrite the shared buffer when the previous task has no been picked up by a consumer thread."),Object(n.b)("li",{parentName:"ol"},"The consumer threads must not pick up tasks until there is something present in the shared data structure."),Object(n.b)("li",{parentName:"ol"},"Individual consumer threads should pick up tasks one at a time.")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-c"}),"pthread_mutex_t task_queue_lock;\nint task_available;\n\nmain() {\n    task_available = 0;\n    pthread_mutex_init(&task_queue_lock, NULL);\n}\n\nvoid *producer(void *producer_thread_data) {\n    ...\n    while (!done()) {\n        inserted = 0;\n        create_task(&my_task);\n        while (inserted == 0) {\n            pthread_mutex_lock(&task_queue_lock);\n            if (task_available == 0) {\n                insert_into_queue(my_task);\n                task_available = 1;\n                inserted = 1;\n            }\n            pthread_mutex_unlock(&task_queue_lock);\n        }\n    }\n}\n\nvoid *consumer(void *consumer_thread_data) {\n    ...\n    while (!done()) {\n        extracted = 0;\n        while (extracted == 0) {\n            pthread_mutex_lock(&task_queue_lock);\n            if (task_available == 1) {\n                extract_from_queue(&my_task);\n                task_available = 0;\n                extracted = 1;\n            }\n            pthread_mutex_unlock(&task_queue_lock);\n        }\n        process_task(my_task);\n    }\n}\n")),Object(n.b)("h2",{id:"overheads-of-locking"},"Overheads of Locking"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Locks represent serialization points since critical sections must be executed by threads one after another."),Object(n.b)("li",{parentName:"ul"},"Encapsulating large segments of the program within locks can lead to significant performance degradation."),Object(n.b)("li",{parentName:"ul"},"It is often possible to reduce the idling overhead associated with locks using ",Object(n.b)("inlineCode",{parentName:"li"},"pthread_mutex_trylock"),".")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Alleviating Locking Overhead")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-c"}),"pthread_mutex_t tryLock_lock = PTHREAD_MUTEX_INITIALIZER;\n\nlock_status = pthread_mutex_trylock(&tryLock_lock)\nif (lock_status == EBUSY) {\n    /* do something else */\n    ...\n} else {\n    /* do one thing */\n    ...\n    pthread_mutex_unlock(&tryLock_lock);\n}\n")),Object(n.b)("h2",{id:"monitors"},"Monitors"),Object(n.b)("p",null,"Mutexes provide powerful sync tools, but..."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"lock() and unlock() are scatteed among several threads, therefore it is difficult to understand their effects"),Object(n.b)("li",{parentName:"ul"},"usage must be correct in all the threads "),Object(n.b)("li",{parentName:"ul"},"one bad thread (or one programming error) can kill the whole system")),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"monitor")," is a high-level abstraction that may provide a convenient and effective mechanism for thread synchronization."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"local data variables are accessible only by the monitor "),Object(n.b)("li",{parentName:"ul"},"thread enters monitor by invoking one of its procedures "),Object(n.b)("li",{parentName:"ul"},"only one thread may be executing in a the monitor at a time")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Monitor and Condition Variables")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Monitor does not need to code certain sync constraints explicitly."),Object(n.b)("li",{parentName:"ul"},"However, it is not sufficiently powerful for modeling some other synchronization schemes."),Object(n.b)("li",{parentName:"ul"},"An additional sync mechanism ie ",Object(n.b)("inlineCode",{parentName:"li"},"condition variable")," is required.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Condition Variables")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The third class of functions address communications between threads that share a mutex"),Object(n.b)("li",{parentName:"ul"},"A condition variable allows a thread to block itself until specified data reaches a predefined state."),Object(n.b)("li",{parentName:"ul"},"A condition variable indicates an event and has no value\n- One cannot store a value into nor retrieve a value from a condition variable.\n- If a thread must wait for an event to occur, that tread waits on the corresponding condition variable.\n- A condition variable has a queue for those threads that are waiting the corresponding event to occur to wait on.\n- If another thread causes the event to occur, that thread simply signal the corresponding condition variable."),Object(n.b)("li",{parentName:"ul"},"This class includes funcs to ",Object(n.b)("inlineCode",{parentName:"li"},"create"),", ",Object(n.b)("inlineCode",{parentName:"li"},"destroy"),", ",Object(n.b)("inlineCode",{parentName:"li"},"wait")," and ",Object(n.b)("inlineCode",{parentName:"li"},"signal")," based on specified variable values."),Object(n.b)("li",{parentName:"ul"},"Funcs to set/quey cond variable attrs are also included."),Object(n.b)("li",{parentName:"ul"},"Cond variable is always used in conjunction with a ",Object(n.b)("inlineCode",{parentName:"li"},"mutex lock"))),Object(n.b)("h2",{id:"create--destroying-cond-variables"},"Create & Destroying Cond Variables"),Object(n.b)("h2",{id:"routines-2"},"Routines"),Object(n.b)("p",null,"pthread_cond_init(condition, attr)\npthread_cond_destroy(condition)\npthread_condattr_init(attr)\npthread_condattr_destroy(attr)"),Object(n.b)("p",null,"Condition variables must be declared with type ",Object(n.b)("inlineCode",{parentName:"p"},"pthread_cont_t"),", and must be initialized before they can be used."),Object(n.b)("p",null,"2 Ways to declare:\n1. Statically\n2. Dynamically "),Object(n.b)("h2",{id:"waiting-and-signaling-on-condition-variable"},"Waiting and Signaling on Condition Variable"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"pthread_cond_signal()")," is used to signal (or wake up) another thread which is waiting on the condition variable and should be called after the ",Object(n.b)("inlineCode",{parentName:"p"},"mutex")," is locked."),Object(n.b)("p",null,"It must unlock ",Object(n.b)("inlineCode",{parentName:"p"},"mutex")," in order for ",Object(n.b)("inlineCode",{parentName:"p"},"pthread_cond_wait()")," routine to complete."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"pthread_cond_broadcast()")," routine unlocks all of the threads blocked on the condition variable."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Proper locking and unlocked of mutex is essential for these routines\n- Failing to lock may cause it NOT to block\n- Failing to unlock the mutex may not allow a matching ",Object(n.b)("inlineCode",{parentName:"li"},"pthread_cond_wait()")," routine to complete (it will remain blocked)")),Object(n.b)("h2",{id:"producer-consumer-using-condition-variables"},"Producer-Consumer Using Condition Variables"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-c"}),"pthread_cond_t cond_queue_empty, cond_queue_full;\npthread_mutex_t task_queue_cond_lock;\nint task_available;\n// other data structures here \n\nmain() {\n    // declarations and initializations \n    task_available = 0;\n    pthread_cond_init(&cond_queue_empty, NULL);\n    pthread_cond_init(&cond_queue_full, NULL);\n    pthread_mutex_init(&task_queue_cond_lock, NULL);\n    // create and join producer and consumer threads\n}\n\nvoid *producer(void *producer_thread_data) {\n    while(!done()) {\n        create_task();\n        pthread_mutex_lock(&task_queue_cond_lock);\n        \n        while (task_available == 1) {\n            pthread_cond_wait(&cond_queue_empty,\n                &task_queue_cond_lock);\n        }\n\n        insert_into_queue();\n        task_available = 1;\n        pthread_cond_signal(&cond_queue_full);\n        pthread_mutex_unlock(&task_queue_cond_lock);\n    }\n}\n\nvoid *consumer(void *consumer_thread_data) {\n    while(!done()) {\n        pthread_mutex_lock(&task_queue_cond_lock);\n        while (task_available == 0) {\n            pthread_cond_wait(&cond_queue_full,\n                &task_queue_cond_lock);\n        }\n\n        my_task = extract_from_queue();\n        task_available = 0;\n        pthread_cond_signal(&cond_queue_empty);\n        pthread_mutex_unlock(&task_queue_cond_lock);\n        process_task(my_task);\n    }\n}\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/COMP3520-OS/Pthread.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-comp-3520-os-pthread-md-eaec153e6bce5c5da871.js.map