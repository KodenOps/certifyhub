const kcnaQuestions = [
	{
		question:
			'Which of the following best describes a container in cloud-native computing?',
		options: [
			'A lightweight virtual machine',
			'An isolated unit of software that packages code and dependencies',
			'A physical server dedicated to one application',
			'A function as a service (FaaS) instance',
		],
		answer: 1,
		short_explanation:
			'Containers package applications and their dependencies into isolated, portable units, unlike VMs which include an entire OS.',
	},
	{
		question:
			'Which Kubernetes object is responsible for maintaining the desired number of pod replicas?',
		options: ['ConfigMap', 'ReplicaSet', 'Service', 'Secret'],
		answer: 1,
		short_explanation:
			'ReplicaSet ensures a specified number of pod replicas are running at all times.',
	},
	{
		question: 'In Kubernetes, what does a Service of type NodePort do?',
		options: [
			'Exposes the service on a cluster-internal IP',
			'Exposes the service externally on each node\u2019s IP at a static port',
			'Provides DNS entries for pods',
			'Exposes the service through an Ingress controller',
		],
		answer: 1,
		short_explanation:
			'NodePort exposes the service on each node\u2019s IP at a static port, making it accessible externally.',
	},
	{
		question:
			'Which command would you use to view all pods across all namespaces in Kubernetes?',
		options: [
			'kubectl get pods',
			'kubectl get all',
			'kubectl get pods --all-namespaces',
			'kubectl describe pods',
		],
		answer: 2,
		short_explanation:
			'The --all-namespaces flag ensures you view pods from every namespace.',
	},
	{
		question: 'Which CNCF project provides a service mesh implementation?',
		options: ['Prometheus', 'Envoy', 'Istio', 'Fluentd'],
		answer: 2,
		short_explanation:
			'Istio is a CNCF service mesh project, while Envoy is a proxy it often uses.',
	},
	{
		question: 'What is the primary role of kube-scheduler in Kubernetes?',
		options: [
			'Schedules jobs inside containers',
			'Assigns pods to appropriate nodes',
			'Maintains desired replica count',
			'Monitors node health',
		],
		answer: 1,
		short_explanation:
			'kube-scheduler assigns newly created pods to nodes based on resource and policy constraints.',
	},
	{
		question:
			'Which YAML field defines the desired state of a Kubernetes object?',
		options: ['status', 'spec', 'metadata', 'config'],
		answer: 1,
		short_explanation:
			"The 'spec' field declares the desired state, while 'status' reflects the current state.",
	},
	{
		question: "What does 'kubectl apply -f deployment.yaml' do?",
		options: [
			'Creates or updates resources defined in deployment.yaml',
			'Only creates resources if they don\u2019t exist',
			'Deletes and recreates resources',
			'Validates syntax without applying',
		],
		answer: 0,
		short_explanation:
			'kubectl apply ensures resources match the YAML definition, updating them if needed.',
	},
	{
		question: 'Which CNCF project focuses on logging?',
		options: ['Prometheus', 'Fluentd', 'Harbor', 'Jaeger'],
		answer: 1,
		short_explanation:
			'Fluentd is the CNCF project for log aggregation and processing.',
	},
	{
		question:
			'Which Kubernetes object stores sensitive data such as passwords or tokens?',
		options: ['ConfigMap', 'Secret', 'Volume', 'Ingress'],
		answer: 1,
		short_explanation:
			'Secrets are designed to store sensitive information securely in Kubernetes.',
	},
	{
		question:
			'Which of the following best describes a sidecar container pattern?',
		options: [
			'Running multiple pods on one node',
			'Attaching storage volumes to pods',
			'A secondary container that extends or enhances the primary container',
			'Using DaemonSets to run monitoring agents',
		],
		answer: 2,
		short_explanation:
			'The sidecar pattern deploys an additional container alongside the main one to provide supporting features.',
	},
	{
		question:
			'Which Kubernetes object is used to manage a rolling update of pods?',
		options: ['ReplicaSet', 'DaemonSet', 'Deployment', 'StatefulSet'],
		answer: 2,
		short_explanation:
			'Deployments manage ReplicaSets and support rolling updates and rollbacks.',
	},
	{
		question: 'What is the default Kubernetes Service type?',
		options: ['ClusterIP', 'NodePort', 'LoadBalancer', 'ExternalName'],
		answer: 0,
		short_explanation:
			'ClusterIP is the default Service type, exposing the service on an internal cluster IP.',
	},
	{
		question:
			'Which Kubernetes component maintains the cluster state by interacting with etcd?',
		options: [
			'kubelet',
			'kube-apiserver',
			'kube-scheduler',
			'controller-manager',
		],
		answer: 1,
		short_explanation:
			'The kube-apiserver communicates with etcd to persist and retrieve cluster state.',
	},
	{
		question:
			'Which tool is commonly used to monitor metrics in a Kubernetes cluster?',
		options: ['Fluentd', 'Prometheus', 'Harbor', 'Jaeger'],
		answer: 1,
		short_explanation:
			'Prometheus is the CNCF project focused on monitoring and metrics collection.',
	},
	{
		question: 'What does a DaemonSet ensure in Kubernetes?',
		options: [
			'A pod runs on every node',
			'A fixed number of replicas run',
			'Pods persist storage data',
			'Pods are load balanced',
		],
		answer: 0,
		short_explanation:
			'DaemonSets ensure one pod runs on each node, useful for logging and monitoring agents.',
	},
	{
		question: 'What does CNCF stand for?',
		options: [
			'Cloud Native Computing Foundation',
			'Cloud Networking and Containers Forum',
			'Containerized Networking and Cloud Federation',
			'Cloud-Native Containers Federation',
		],
		answer: 0,
		short_explanation:
			'CNCF stands for Cloud Native Computing Foundation, which hosts cloud-native projects like Kubernetes.',
	},
	{
		question:
			'Which storage type in Kubernetes ensures data persists even if a pod is deleted?',
		options: ['emptyDir', 'hostPath', 'PersistentVolumeClaim', 'ConfigMap'],
		answer: 2,
		short_explanation:
			'PersistentVolumeClaims bind to PersistentVolumes to ensure data persists beyond pod lifecycle.',
	},
	{
		question: 'Which command creates a new namespace in Kubernetes?',
		options: [
			'kubectl create ns mynamespace',
			'kubectl new namespace mynamespace',
			'kubectl add namespace mynamespace',
			'kubectl config namespace mynamespace',
		],
		answer: 0,
		short_explanation: "The correct syntax is 'kubectl create ns <name>'.",
	},
	{
		question: 'Which CNCF project is used for distributed tracing?',
		options: ['Prometheus', 'Fluentd', 'Jaeger', 'Harbor'],
		answer: 2,
		short_explanation:
			'Jaeger is the CNCF project for distributed tracing and observability.',
	},
	{
		question:
			'Which command backs up an etcd cluster snapshot (using etcdctl)?',
		options: [
			'etcdctl backup --all',
			'etcdctl snapshot save backup.db',
			'kubectl snapshot etcd --save backup.db',
			'etcdctl save --snapshot backup.db',
		],
		answer: 1,
		short_explanation:
			"etcdctl snapshot save <file> creates a snapshot of the etcd data; syntax varies by etcdctl version but 'snapshot save' is correct.",
	},
	{
		question:
			'Which Kubernetes object would you use to persist cluster-level configuration data (non-sensitive)?',
		options: ['Secret', 'ConfigMap', 'PersistentVolume', 'ServiceAccount'],
		answer: 1,
		short_explanation:
			'ConfigMaps store non-sensitive configuration data that pods can consume as env vars or files.',
	},
	{
		question:
			'Which of these ensures a pod is restarted when it fails inside Kubernetes?',
		options: [
			'RestartPolicy set to Never',
			'RestartPolicy set to OnFailure or Always managed by controller',
			'Readiness probe',
			'NetworkPolicy',
		],
		answer: 1,
		short_explanation:
			'RestartPolicy and controllers like Deployments/ReplicaSets determine how and when pods are restarted; OnFailure or Always are used to restart containers.',
	},
	{
		question:
			"Which command creates a service account named 'podsa' in namespace 'test'?",
		options: [
			'kubectl create serviceaccount podsa -n test',
			'kubectl new sa podsa --namespace=test',
			'kubectl apply sa podsa -n test',
			'kubectl create account podsa --namespace test',
		],
		answer: 0,
		short_explanation:
			'kubectl create serviceaccount <name> -n <namespace> is the correct syntax.',
	},
	{
		question:
			'Can multiple pods share a single PersistentVolumeClaim (PVC) at the same time?',
		options: [
			'Never \u2014 a PVC can only be bound to one pod',
			'Yes, if the underlying PV supports ReadWriteMany access mode',
			'Only within the same node',
			'Only if using hostPath',
		],
		answer: 1,
		short_explanation:
			'Sharing a PVC across pods requires the PV to support ReadWriteMany; ReadWriteOnce restricts to a single node or single consumer.',
	},
	{
		question:
			'Which resource enforces network-level isolation between pods when configured?',
		options: [
			'NetworkPolicy',
			'PodDisruptionBudget',
			'ServiceAccount',
			'ResourceQuota',
		],
		answer: 0,
		short_explanation:
			'NetworkPolicy is used to allow or deny traffic between pods and/or to/from external endpoints.',
	},
	{
		question: 'Will NetworkPolicy work without a CNI network plugin installed?',
		options: [
			'Yes \u2014 Kubernetes implements NetworkPolicy in the API server',
			'No \u2014 an underlying network plugin that supports NetworkPolicy is required',
			'Only for ingress traffic',
			'Only on master nodes',
		],
		answer: 1,
		short_explanation:
			'NetworkPolicy requires a CNI plugin that implements the policy enforcement (e.g., Calico, Cilium).',
	},
	{
		question:
			'Which command upgrades the control plane node components (kubeadm-based upgrade)?',
		options: [
			'kubectl upgrade controlplane',
			'kubeadm upgrade apply <version>',
			'kubelet --upgrade',
			'kubectl apply -f kube-control-upgrade.yaml',
		],
		answer: 1,
		short_explanation:
			'kubeadm upgrade apply <version> is used to upgrade control plane components on kubeadm-managed clusters.',
	},
	{
		question: 'Which command restores an etcd snapshot (using etcdctl v3)?',
		options: [
			'etcdctl snapshot restore backup.db --data-dir /var/lib/etcd',
			'kubectl restore etcd backup.db',
			'etcdctl restore snapshot backup.db',
			'kubeadm restore etcd --from snapshot',
		],
		answer: 0,
		short_explanation:
			'etcdctl snapshot restore <snapshot> --data-dir <dir> restores the snapshot to the specified data directory.',
	},
	{
		question:
			'Which Kubernetes object provides stable, unique network identifiers for a set of pods?',
		options: ['Ingress', 'Service', 'ConfigMap', 'ReplicaSet'],
		answer: 1,
		short_explanation:
			'Services create a stable endpoint (ClusterIP) and DNS name for a set of pods.',
	},
	{
		question:
			'Which probe type is used by Kubernetes to determine if a container should receive traffic?',
		options: [
			'Liveness probe',
			'Readiness probe',
			'Startup probe',
			'Health check probe',
		],
		answer: 1,
		short_explanation:
			'Readiness probes determine if a container is ready to accept traffic; liveness probes determine if it should be restarted.',
	},
	{
		question: 'What does RBAC stand for in Kubernetes and what is its purpose?',
		options: [
			'Role-Based Access Control \u2014 to control who can do what in the cluster',
			'Resource-Balancing Access Controller \u2014 for resource scheduling',
			'Role-Backed Authentication \u2014 for user authentication',
			'Remote Basic Access Control \u2014 for network access',
		],
		answer: 0,
		short_explanation:
			'RBAC is Role-Based Access Control used to manage permissions for users and service accounts.',
	},
	{
		question:
			"Which command shows the effective labels and selectors of a Deployment's ReplicaSet?",
		options: [
			'kubectl get deploy --show-selectors',
			'kubectl describe deployment <name>',
			'kubectl explain deployment.spec.selector',
			'kubectl get rs --labels',
		],
		answer: 1,
		short_explanation:
			'kubectl describe deployment <name> shows the ReplicaSets, labels, selectors, and events.',
	},
	{
		question: 'What is an initContainer used for in a Pod spec?',
		options: [
			'To run the main application',
			'To run preparatory work before app containers start',
			'To replace liveness probes',
			'To serve as a sidecar logger',
		],
		answer: 1,
		short_explanation:
			'initContainers run sequentially before app containers to perform setup tasks like migrations or config generation.',
	},
	{
		question:
			'Which Kubernetes object would you use to store image registry credentials for pulling private images?',
		options: [
			'ConfigMap',
			'Secret of type kubernetes.io/dockerconfigjson',
			'ServiceAccount token',
			'PersistentVolume',
		],
		answer: 1,
		short_explanation:
			'A dockerconfigjson Secret stores registry credentials and can be referenced in imagePullSecrets.',
	},
	{
		question: 'What is the purpose of a PodDisruptionBudget (PDB)?',
		options: [
			'To stop pods from being evicted under any conditions',
			'To limit voluntary disruptions to ensure availability',
			'To automatically scale pods during maintenance',
			'To provide storage quotas',
		],
		answer: 1,
		short_explanation:
			'PDBs restrict the number of pods that can be voluntarily disrupted to maintain application availability during maintenance.',
	},
	{
		question:
			'Which component runs on every node and is responsible for starting and stopping containers?',
		options: [
			'kube-apiserver',
			'kube-controller-manager',
			'kubelet',
			'kube-scheduler',
		],
		answer: 2,
		short_explanation:
			'kubelet runs on each node and manages container lifecycle via container runtime.',
	},
	{
		question:
			'Which tool is commonly used for package management and templating of Kubernetes manifests?',
		options: ['kubectl', 'Helm', 'kubeadm', 'kustomize'],
		answer: 1,
		short_explanation:
			'Helm is a package manager that uses charts as templates for Kubernetes resources.',
	},
	{
		question: 'What is GitOps best described as?',
		options: [
			'A CI system that builds container images',
			'An approach where Git is the single source of truth for declarative infrastructure and application configuration',
			'A monitoring stack for Kubernetes',
			'A method for managing secrets in Git',
		],
		answer: 1,
		short_explanation:
			'GitOps uses Git repositories to store desired system state and tools to reconcile clusters to that state.',
	},
	{
		question:
			'Which Kubernetes workload controller is ideal for stateful applications requiring stable network IDs and storage?',
		options: ['Deployment', 'DaemonSet', 'StatefulSet', 'ReplicaSet'],
		answer: 2,
		short_explanation:
			'StatefulSet provides stable identities and persistent storage for each pod in the set.',
	},
	{
		question:
			'Which of the following is a common container runtime used with Kubernetes?',
		options: ['systemd', 'containerd', 'docker-compose', 'nginx'],
		answer: 1,
		short_explanation:
			'containerd is a popular container runtime; Docker historically used dockershim but containerd is now common.',
	},
	{
		question:
			"What does the term 'immutable infrastructure' imply in cloud-native practices?",
		options: [
			'Infrastructure never changes once created and must be rebuilt to update',
			'You can patch servers in place',
			'Storage is read-only',
			'Containers cannot be deleted',
		],
		answer: 0,
		short_explanation:
			'Immutable infrastructure means replacing components (rebuild) rather than mutating running instances for updates.',
	},
	{
		question:
			'Which of these Docker image tags indicates the latest stable release (by convention only)?',
		options: ['stable', 'current', 'latest', '0.0.1'],
		answer: 2,
		short_explanation:
			"'latest' is a conventional tag but does not guarantee stability; semantic version tags are preferred.",
	},
	{
		question:
			'Which security feature limits permissions of pods to access the host filesystem and syscalls?',
		options: [
			'NetworkPolicy',
			'PodSecurityPolicy or Pod Security admission (PSA)',
			'ConfigMap',
			'ServiceAccount',
		],
		answer: 1,
		short_explanation:
			'PodSecurityPolicy (deprecated) and the newer Pod Security Admission enforce pod-level security constraints.',
	},
	{
		question: 'What is the purpose of Horizontal Pod Autoscaler (HPA)?',
		options: [
			'To automatically scale nodes',
			'To automatically scale pod replicas based on CPU/memory or custom metrics',
			'To scale storage volumes',
			'To manage pod disruption budgets',
		],
		answer: 1,
		short_explanation:
			'HPA adjusts the number of pod replicas according to observed metrics like CPU utilization.',
	},
	{
		question:
			"Which command would you use to view logs for a specific pod named 'web-123'?",
		options: [
			'kubectl logs web-123',
			'kubectl get logs web-123',
			'kubectl describe pod web-123 --logs',
			'kubectl view logs web-123',
		],
		answer: 0,
		short_explanation:
			'kubectl logs <pod> fetches container logs; additional flags select containers or previous logs.',
	},
	{
		question:
			'Which CNCF project is a container image registry designed for storing and scanning images?',
		options: ['Harbor', 'Flux', 'Contour', 'KubeVirt'],
		answer: 0,
		short_explanation:
			'Harbor is an open-source registry that provides image management and security scanning features.',
	},
	{
		question: 'What is the effect of applying a Taint to a node in Kubernetes?',
		options: [
			'It reduces its CPU shares',
			'It prevents pods from being scheduled unless they have a matching toleration',
			'It deletes all pods on the node immediately',
			'It converts the node into a master',
		],
		answer: 1,
		short_explanation:
			'Taints repel pods from nodes; pods must declare tolerations to be scheduled onto tainted nodes.',
	},
	{
		question: 'Which of the following describes an Ingress in Kubernetes?',
		options: [
			'A type of Service that balances traffic across nodes',
			'An API object that defines external HTTP/S routing to services',
			'A storage class for ephemeral data',
			'A network policy for inbound traffic',
		],
		answer: 1,
		short_explanation:
			'Ingress defines rules for routing external HTTP/S traffic to internal services, usually implemented by an Ingress controller.',
	},
	{
		question:
			'Which command prints the cluster info including master URL and DNS?',
		options: [
			'kubectl cluster-info',
			'kubectl get cluster',
			'kubectl info',
			'kubectl describe cluster',
		],
		answer: 0,
		short_explanation:
			'kubectl cluster-info displays addresses for the Kubernetes master and services.',
	},
	{
		question: "What does 'kubectl port-forward' allow you to do?",
		options: [
			'Open a port on the pod to the internet permanently',
			'Forward a local port to a port on a pod for temporary access',
			'Map service ports to node ports',
			'Open firewall ports on the cluster',
		],
		answer: 1,
		short_explanation:
			'kubectl port-forward creates a local tunnel to a pod/service port for debugging or temporary access.',
	},
	{
		question:
			'Which Kubernetes component is responsible for maintaining the desired state of Pods by ensuring they match the specifications defined in a Deployment?',
		options: [
			'a) kube-apiserver',
			'b) kube-scheduler',
			'c) kube-controller-manager',
			'd) etcd',
		],
		answer: 2,
		short_explanation:
			'The kube-controller-manager runs controllers that ensure the desired state of the cluster matches the actual state, including maintaining Pods from a Deployment.',
	},
	{
		question: 'What is the primary role of etcd in a Kubernetes cluster?',
		options: [
			'a) Scheduling Pods',
			'b) Serving the Kubernetes Dashboard',
			'c) Persisting cluster state data',
			'd) Monitoring resource usage',
		],
		answer: 2,
		short_explanation:
			'etcd is a distributed key-value store that stores all cluster state data, making it critical for Kubernetes operations.',
	},
	{
		question:
			'Which command is used to view logs of a running Pod in Kubernetes?',
		options: [
			'a) kubectl describe pod <pod-name>',
			'b) kubectl logs <pod-name>',
			'c) kubectl get pods --logs',
			'd) kubectl exec -it <pod-name> -- logs',
		],
		answer: 1,
		short_explanation:
			'`kubectl logs <pod-name>` retrieves the logs from containers in a Pod.',
	},
	{
		question:
			'In container orchestration, which of the following best describes the role of a scheduler?',
		options: [
			'a) Ensures high availability of etcd',
			'b) Decides which node a Pod should run on',
			'c) Provides persistent storage to containers',
			'd) Monitors application metrics',
		],
		answer: 1,
		short_explanation:
			'The scheduler assigns Pods to nodes based on resource availability and constraints.',
	},
	{
		question:
			'Which CNCF project is primarily focused on service mesh capabilities?',
		options: ['a) Helm', 'b) Envoy', 'c) Prometheus', 'd) Istio'],
		answer: 3,
		short_explanation:
			'Istio is a CNCF project (incubating) focused on providing service mesh capabilities like traffic management, security, and observability.',
	},
	{
		question: 'What is the function of a DaemonSet in Kubernetes?',
		options: [
			'a) Runs one Pod on every node',
			'b) Deploys Pods in a rolling update fashion',
			'c) Ensures a fixed number of Pods are always running',
			'd) Provides horizontal scaling of Pods',
		],
		answer: 0,
		short_explanation:
			'A DaemonSet ensures that one copy of a Pod runs on each node, often used for monitoring agents or log collectors.',
	},
	{
		question: 'Which command creates a new namespace in Kubernetes?',
		options: [
			'a) kubectl create ns dev',
			'b) kubectl new namespace dev',
			'c) kubectl add namespace dev',
			'd) kubectl run namespace dev',
		],
		answer: 0,
		short_explanation:
			'`kubectl create ns <name>` is the correct command to create a namespace.',
	},
	{
		question:
			'Which Kubernetes object provides stable networking for a group of Pods?',
		options: ['a) Ingress', 'b) ConfigMap', 'c) Service', 'd) Secret'],
		answer: 2,
		short_explanation:
			'A Service provides a stable network endpoint for a set of Pods.',
	},
	{
		question:
			'Which CNCF project is widely used for monitoring and alerting in cloud-native environments?',
		options: ['a) Fluentd', 'b) Prometheus', 'c) Helm', 'd) Harbor'],
		answer: 1,
		short_explanation:
			'Prometheus is the de facto standard CNCF project for metrics-based monitoring and alerting.',
	},
	{
		question:
			'What is the default type of Kubernetes Service if not explicitly specified?',
		options: [
			'a) ClusterIP',
			'b) NodePort',
			'c) LoadBalancer',
			'd) ExternalName',
		],
		answer: 0,
		short_explanation:
			'By default, Services are of type ClusterIP, exposing Pods internally within the cluster.',
	},
	{
		question:
			'Which Kubernetes object is best suited to expose HTTP/HTTPS routes from outside the cluster to services inside the cluster?',
		options: ['a) Ingress', 'b) NodePort', 'c) ConfigMap', 'd) StatefulSet'],
		answer: 0,
		short_explanation:
			'Ingress manages external HTTP/HTTPS access to Services in a cluster.',
	},
	{
		question:
			'Which component enforces admission control policies in Kubernetes?',
		options: [
			'a) kubelet',
			'b) kube-apiserver',
			'c) scheduler',
			'd) controller-manager',
		],
		answer: 1,
		short_explanation:
			'The kube-apiserver is responsible for enforcing admission control policies before persisting objects to etcd.',
	},
	{
		question: "What does 'kubectl get all' display by default?",
		options: [
			'a) All resources across all namespaces',
			'b) All resources in the current namespace',
			'c) All resources in kube-system namespace',
			'd) All cluster events',
		],
		answer: 1,
		short_explanation:
			'`kubectl get all` shows all supported resources in the current namespace only.',
	},
	{
		question: 'Which CNCF project provides distributed tracing capabilities?',
		options: ['a) Helm', 'b) OpenTelemetry', 'c) Harbor', 'd) Envoy'],
		answer: 1,
		short_explanation:
			'OpenTelemetry is the CNCF project for standardized observability including distributed tracing.',
	},
	{
		question: 'In Kubernetes, what is a StatefulSet primarily used for?',
		options: [
			'a) Stateless applications',
			'b) Long-running jobs',
			'c) Stateful applications requiring stable identities',
			'd) Batch processing workloads',
		],
		answer: 2,
		short_explanation:
			'StatefulSets manage stateful applications that require stable network identities and persistent storage.',
	},
	{
		question: 'What is the role of kubelet on a Kubernetes node?',
		options: [
			'a) Manages the API server',
			'b) Runs controllers',
			'c) Ensures containers are running on the node',
			'd) Provides DNS resolution',
		],
		answer: 2,
		short_explanation:
			'The kubelet ensures that containers described in PodSpecs are running and healthy on each node.',
	},
	{
		question:
			'Which storage option in Kubernetes allows multiple Pods to read and write simultaneously?',
		options: [
			'a) emptyDir',
			'b) hostPath',
			'c) ReadWriteMany PersistentVolume',
			'd) ConfigMap',
		],
		answer: 2,
		short_explanation:
			'A PersistentVolume with ReadWriteMany access mode allows multiple Pods to access the same volume concurrently.',
	},
	{
		question: 'What is the primary purpose of a ConfigMap in Kubernetes?',
		options: [
			'a) Store sensitive information',
			'b) Store configuration data in key-value pairs',
			'c) Expose services',
			'd) Manage network routing',
		],
		answer: 1,
		short_explanation:
			'ConfigMaps hold configuration data in key-value format for applications to consume.',
	},
	{
		question:
			'Which CNCF project provides a package manager for Kubernetes applications?',
		options: ['a) Helm', 'b) Harbor', 'c) Fluentd', 'd) ArgoCD'],
		answer: 0,
		short_explanation:
			'Helm is the package manager for Kubernetes, allowing easy deployment of applications via charts.',
	},
	{
		question:
			'What is the recommended way to store passwords and tokens in Kubernetes?',
		options: [
			'a) ConfigMap',
			'b) Secret',
			'c) Pod annotations',
			'd) Deployment labels',
		],
		answer: 1,
		short_explanation:
			'Kubernetes Secrets are designed to store sensitive information securely.',
	},
	{
		question:
			'Which Kubernetes object ensures that a fixed number of Pods are always running?',
		options: ['a) Deployment', 'b) ReplicaSet', 'c) Job', 'd) StatefulSet'],
		answer: 1,
		short_explanation:
			'A ReplicaSet ensures that a specified number of replicas of a Pod are running at all times.',
	},
	{
		question: 'What does a Kubernetes Job object do?',
		options: [
			'a) Runs a Pod continuously',
			'b) Ensures Pods restart on failure',
			'c) Runs Pods to completion',
			'd) Scales Pods automatically',
		],
		answer: 2,
		short_explanation:
			'A Job ensures that a set of Pods run to completion successfully.',
	},
	{
		question:
			'Which CNCF project provides a secure container registry solution?',
		options: ['a) Harbor', 'b) Envoy', 'c) Helm', 'd) Jaeger'],
		answer: 0,
		short_explanation:
			'Harbor is a CNCF project that provides a secure and trusted container registry.',
	},
	{
		question: 'Which networking model is implemented by Kubernetes by default?',
		options: [
			'a) NAT with port forwarding',
			'b) Flat pod network with unique IPs',
			'c) Overlay tunnels only',
			'd) Manual host networking',
		],
		answer: 1,
		short_explanation:
			'Kubernetes implements a flat networking model where every Pod has its own unique IP address.',
	},
	{
		question:
			'Which CNCF project is a widely adopted ingress controller based on Envoy proxy?',
		options: ['a) Contour', 'b) Jaeger', 'c) Fluent Bit', 'd) Prometheus'],
		answer: 0,
		short_explanation:
			'Contour is an ingress controller built on top of Envoy and is a CNCF project.',
	},
	{
		question:
			'Which Kubernetes object is best suited for long-running, continuously running applications like web servers?',
		options: ['a) Job', 'b) CronJob', 'c) Deployment', 'd) ConfigMap'],
		answer: 2,
		short_explanation:
			'Deployments manage stateless long-running applications such as web servers.',
	},
	{
		question:
			'Which of the following Kubernetes components validates and configures Pod specifications before persisting them?',
		options: [
			'a) kubelet',
			'b) kube-apiserver',
			'c) controller-manager',
			'd) etcd',
		],
		answer: 1,
		short_explanation:
			'The kube-apiserver validates and processes Pod specs before persisting them in etcd.',
	},
	{
		question:
			'Which CNCF project focuses on GitOps-based continuous delivery for Kubernetes?',
		options: ['a) ArgoCD', 'b) Prometheus', 'c) Fluentd', 'd) Jaeger'],
		answer: 0,
		short_explanation:
			'ArgoCD is a GitOps continuous delivery tool for Kubernetes.',
	},
	{
		question:
			'What is the function of a Horizontal Pod Autoscaler in Kubernetes?',
		options: [
			'a) Scales Pods based on CPU/memory usage',
			'b) Scales nodes automatically',
			'c) Schedules Pods to nodes',
			'd) Reschedules failed Pods',
		],
		answer: 0,
		short_explanation:
			'The Horizontal Pod Autoscaler adjusts the number of Pod replicas based on CPU, memory, or custom metrics.',
	},
	{
		question:
			"Which type of Kubernetes Service exposes the Service on each Node's IP at a static port?",
		options: [
			'a) ClusterIP',
			'b) NodePort',
			'c) LoadBalancer',
			'd) ExternalName',
		],
		answer: 1,
		short_explanation:
			"A NodePort exposes the Service on the same port of each Node's IP.",
	},
	{
		question:
			'Which CNCF project provides a lightweight service mesh built on Envoy?',
		options: ['a) Linkerd', 'b) Fluent Bit', 'c) Helm', 'd) Harbor'],
		answer: 0,
		short_explanation:
			'Linkerd is a lightweight CNCF service mesh project built on Envoy.',
	},
	{
		question: 'What is the purpose of taints and tolerations in Kubernetes?',
		options: [
			'a) Control network policies',
			'b) Restrict which Pods can run on specific nodes',
			'c) Control access to Secrets',
			'd) Automate scaling of Pods',
		],
		answer: 1,
		short_explanation:
			'Taints and tolerations work together to ensure Pods only run on specific nodes when permitted.',
	},
	{
		question:
			'Which CNCF project provides logging and log forwarding capabilities in cloud-native environments?',
		options: ['a) Prometheus', 'b) Fluentd', 'c) Envoy', 'd) Helm'],
		answer: 1,
		short_explanation:
			'Fluentd is a CNCF project that provides unified logging and log forwarding capabilities.',
	},
	{
		question:
			'Which type of Kubernetes probe checks if a container is running but not necessarily ready to receive traffic?',
		options: [
			'a) Liveness probe',
			'b) Readiness probe',
			'c) Startup probe',
			'd) Resource probe',
		],
		answer: 0,
		short_explanation:
			'Liveness probes determine if a container is still running.',
	},
	{
		question:
			'Which Kubernetes object is specifically designed to run Pods on a schedule, like a cron job?',
		options: ['a) Job', 'b) CronJob', 'c) StatefulSet', 'd) ReplicaSet'],
		answer: 1,
		short_explanation:
			'A CronJob allows Pods to run periodically on a schedule.',
	},
	{
		question: 'What is the role of a Kubernetes Ingress Controller?',
		options: [
			'a) Monitor resource usage',
			'b) Implement Ingress rules for routing',
			'c) Create PersistentVolumes',
			'd) Store cluster state',
		],
		answer: 1,
		short_explanation:
			'The Ingress Controller enforces and implements the routing rules defined in Ingress objects.',
	},
	{
		question:
			'Which CNCF project provides an observability stack including metrics, logs, and traces?',
		options: ['a) OpenTelemetry', 'b) Helm', 'c) Harbor', 'd) Envoy'],
		answer: 0,
		short_explanation:
			'OpenTelemetry standardizes observability across metrics, logs, and traces.',
	},
	{
		question:
			'Which Kubernetes networking resource allows fine-grained rules for controlling traffic between Pods?',
		options: ['a) ConfigMap', 'b) NetworkPolicy', 'c) Secret', 'd) Service'],
		answer: 1,
		short_explanation:
			'NetworkPolicies define how Pods communicate with each other and with external endpoints.',
	},
	{
		question:
			'Which CNCF project provides high-performance ingress and API gateway built on Envoy?',
		options: ['a) Contour', 'b) Kuma', 'c) Emissary-Ingress', 'd) Prometheus'],
		answer: 2,
		short_explanation:
			'Emissary-Ingress (formerly Ambassador) is a CNCF ingress and API gateway built on Envoy.',
	},
	{
		question:
			'Which Kubernetes concept ensures data persists beyond the lifecycle of a Pod?',
		options: [
			'a) ConfigMap',
			'b) PersistentVolume',
			'c) Secret',
			'd) DaemonSet',
		],
		answer: 1,
		short_explanation:
			'PersistentVolumes provide durable storage that outlives individual Pods.',
	},
	{
		question:
			'Which CNCF project provides an easy way to define and run complex workflows on Kubernetes?',
		options: ['a) Argo Workflows', 'b) Harbor', 'c) Prometheus', 'd) Fluentd'],
		answer: 0,
		short_explanation:
			'Argo Workflows allows definition and execution of workflows on Kubernetes.',
	},
	{
		question:
			'Which Kubernetes Service type is typically used with cloud providers to provision external load balancers?',
		options: [
			'a) ClusterIP',
			'b) NodePort',
			'c) LoadBalancer',
			'd) ExternalName',
		],
		answer: 2,
		short_explanation:
			'The LoadBalancer Service type provisions external load balancers in supported cloud environments.',
	},
	{
		question:
			'Which CNCF project provides container runtime support for Kubernetes after Docker deprecation?',
		options: ['a) containerd', 'b) Harbor', 'c) Envoy', 'd) Jaeger'],
		answer: 0,
		short_explanation:
			'containerd is a CNCF project providing container runtime functionality used by Kubernetes.',
	},
	{
		question: 'What does the Kubernetes kube-proxy component do?',
		options: [
			'a) Implements network routing rules',
			'b) Stores cluster state',
			'c) Manages Pod scheduling',
			'd) Collects application logs',
		],
		answer: 0,
		short_explanation:
			'kube-proxy manages networking rules to allow communication between Services and Pods.',
	},
	{
		question:
			'Which CNCF project provides a high-performance service proxy often used as a sidecar in service meshes?',
		options: ['a) Envoy', 'b) Fluentd', 'c) Harbor', 'd) Helm'],
		answer: 0,
		short_explanation:
			'Envoy is a service proxy commonly used as a sidecar in service meshes and ingress controllers.',
	},
	{
		question:
			'Which Kubernetes object is designed for batch processing workloads that should complete successfully?',
		options: ['a) Job', 'b) Deployment', 'c) StatefulSet', 'd) ReplicaSet'],
		answer: 0,
		short_explanation:
			'Jobs run Pods until they successfully complete, suitable for batch workloads.',
	},
	{
		question:
			'Which CNCF project enables secure service-to-service communication with mutual TLS?',
		options: ['a) Istio', 'b) Prometheus', 'c) Helm', 'd) Harbor'],
		answer: 0,
		short_explanation:
			'Istio enables mutual TLS for secure service-to-service communication within a service mesh.',
	},
];

export default kcnaQuestions;
