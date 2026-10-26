---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-freight-transport-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 货运物流规划与独立运输单证支持服务

## 1. 范围与适用性

本PCR覆盖有限子集：运输仓储配送物流咨询规划设计及明确定义的作业支持交付物，包括多模式物流方案；以及独立非中介的运输单证运单编制出具取得。每任务须正面证明上述功能之一。整包仅包含上述纳入交付物。不宣称覆盖67910全部安排组织服务。[来源：`un-cpc-67910`]

排除客货运输中介海运货代航空货运代理代客户组织转运托运批次及代客报关代理。无车辆采用服务费或协调标题不能证明适用性；须将正面咨询单证功能与上述排除职责分离，无法分离的混合任务不纳入。独立单证取得指取得指定单证，不是代客户采购承运。物理承运货物装卸仓储运营海关机关行为及货物制造分别建模。[来源：`un-cpc-85630`]整包货运销售时拆出支持贡献，并在货运系统模型中独立关联各承运场站仓储环节。支持型清单不能证明货物无运输排放。既有货物及客户提供的单证数据属于受托对象信息，不是新产商品或额外支持产出。数字单证交换仍须实际计算传输供应商，无纸不自动为零影响。欧委会来源仅提供数据交换技术背景，不主张通用合规认证减排。[来源：`ec-efti-context`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-freight-transport-services |
| classification_refs | CPC3.0 67910 |
| covered_products | 运输仓储配送物流规划设计支持交付物含多模式方案；有独立证据的非中介运输单证出具取得 |
| excluded_products | 客货运输中介海空货代；代客组织转运报关代理；实际承运装卸仓储；公共机关决定；货物制造 |
| representative_product | 一个已验收且范围限定的声明服务族货运支持任务或真实整包 |
| production_route | 接受有界指令数据并核验非中介功能 → 开展物流研究支持或独立单证交付 → 核对接口版本验收完成 |
| market_state | 具有可追溯任务交付物的已完成有界商业支持服务；客户货物身份保留 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付具体约定物流咨询支持或有独立证据的非中介运输单证任务 |
| How much | 一个已验收任务，按适用情况列明托运批次网络情景范围单证交付物范围 |
| How well | 实际完整性接口一致性修订变更控制客户验收判据；不虚构监管批准或保证运输节约 |
| How long or cycle | 实际起讫有效工作及至约定完成的支持时间窗；修订失败尝试保留为归属负荷 |
| reference_flow_link | `support_job` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成且限定信息齐全的货运支持任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 任务供应商客户；正面证据的非中介规划单证职责及可分离性；无代客货代采购承运报关代理；服务族或合格整包；实际活动验收范围；起讫工时；模式路线分段交接节点；托运批次货物属性仅作描述；对接方责任界限；物流网络场址时间范围情景约束交付物；单证种类编号主分单关系版本副本语言渠道；取得或出具及完成证据；更正返工；计算网络配置供应商；场址差旅资产边界；期间分配 |

item为正式Item(s)的本地单数别名，导出使用Item(s)。计数对象是定义清楚的已验收任务，不是吨吨公里发票或人员小时。一个网络研究作业支持任务独立单证任务不能互换。按各服务族配置分别建数据集，保留实际复杂度时间范围；真实整包为包含全部组成负荷的一个任务，不是另有各组成产出。独立销售的组成任务须有不重叠范围分配。重复生产仅计数相容已验收任务N且须为正值；同一单证更正授权副本不作为额外完成任务，除非为另行定义合同产出。保留未完成取消工作的负荷去向，不计为合格完成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `job_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 按cp_service计数已验收定义任务；实际复杂度时间路线单证范围仍为必需描述。不以费用货物距离换算。 |
| `electricity_energy` | electricity | 能量 | kWh | 计量实际本地工作支持电量，区分托管供应商已含消耗及共享办公分配。 |
| `material_mass` | paper; toner; petrol | 质量 | kg | 采用实际净材料燃料记录；纸张件数须实测尺寸定量，墨盒件数须净粉皮重，汽油体积须声明条件下有据密度。 |
| `gas_mass` | r134a_input; r134a_air | 质量 | kg | 采用物种特定库存设备转移衡算；补充量不能直接等于排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 按正面核验的规划支持或独立单证职责接受客户指令货物路线网络数据；排除货代中介 |
| starting_condition_role | foreground_start |
| product_classification_scope | 限定物流规划设计支持及独立非中介运输单证出具取得；不覆盖全部67910组织 |
| recursive_input_rule | 购买支持型子任务按自身交付范围上游清单进入一次；区分委托方分包方工作及组成重叠 |
| upstream_dataset_requirement | 实际本地能源材料供应；配置托管数据传输；人员客运；资产处置；验收支持子任务。货物承运装卸仓储在货运系统层独立关联 |
| disclosure | 合同职责接口验收范围工时实际供应商共享资产；未完成返工负荷；承运仓储边界缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_multimodal` | 多模式物流方案须明确至少两种建模模式、各计划分段承运场站接口交接约束情景假设及验收方案支持交付物。不得将代客货代采购承运推定为合格方案；建模接口不是执行承运。按实际功能可分离性判断，而非费用车辆所有权。 | un-cpc-67910; un-cpc-85630 |
| `boundary_plan` | 咨询支持须明确运输仓储配送问题、场址网络时间范围情景约束输入数据质量及验收方案或作业支持交付物。实际实施仓库运营为另行识别模块。 |  |
| `boundary_documents` | 独立非中介出具取得须记录出具方请求方种类托运关联唯一编号主分单关系版本副本授权交付接收。正面证明独立单证功能；排除与代客货代采购承运报关代理无法分离的单证。取得承运人单证本身不成为承运人也不证明67910适用。更正复制重复电子提交不是重复新支持产出。 | ec-efti-context |
| `boundary_supplier` | 绘制托管网络专业供应商职责时间配置及已含电力冷却硬件单证处理。采用完整采购服务或有据拆分且仅一次；费用整包货运发票不是物理数量。 |  |
| `boundary_actual` | 按实际服务族纳入归属场址计算打印差旅维护资产；筛查实际供热冷却气其他燃料存储数据服务废物，各实际原子交换独立增加。未知消耗不是零。 |  |
| `boundary_resource_placement` | 资源所在过程不得将其适用性限制为单一服务族：独立单证任务实际发生的现场工作或协调差旅，以及规划支持交付物实际发生的打印，均须纳入。将各卡及协议用于真实合格任务，保留全部更正、重试，共享资源仅归属一次，不得因此另建规划或单证参考产出。纯电子任务不预设纸张消耗；无差旅须有适用性记录，不得虚构行程。 |  |

## 6. 过程清单结构

共享资源在选定服务族真实整包内记录一次。下列条件行的位置描述常见作用，不禁止实测协调差旅或纸本咨询交付物；将实际行归属真实任务且不重复共享输入。电子纸本路线分别保留情景。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| support | 执行支持并关闭限定任务 | required | 每个实际验收任务共享资源及唯一产出 | foreground_production | 每参考流 |
| multimodal_plan | 形成多模式物流规划交付物 | conditional | 经核验非中介多模式方案支持组成；仅实际独立咨询分包 | foreground_production | 每参考流 |
| planning | 开展任务相关现场工作、协调与人员差旅 | conditional | 选定的合格规划支持或独立单证任务确有现场工作或人员差旅时纳入；不预设差旅 | foreground_production | 每参考流 |
| documents | 准备合格交付记录与实际纸质副本 | conditional | 实际独立运输单证处理，或合格规划支持交付物确有打印时纳入；纯电子任务不推定打印 | foreground_production | 每参考流 |

### 过程：形成多模式物流规划交付物 (`multimodal_plan`)

#### 输入

##### 产品流

###### 限定交付物的多模式物流规划咨询服务 (`planning_subcontract`)

仅独立识别清楚的规划咨询分包，具有自己的建模模式网络托运范围接口验收方案。排除代客采购承运货代报关代理实际承运及已覆盖委托方自身工作。

- 选定流：限定交付物的多模式物流规划咨询服务
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_supplier。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplier`
- 来源：

### 过程：开展任务相关现场工作、协调与人员差旅 (`planning`)

#### 输入

##### 产品流

###### 无铅汽油 (`petrol`)

仅合格任务内运营方控制汽油车为现场工作、协调、规划支持或独立单证任务发生的实际出行；计量实际燃料分配。属于人员差旅，不是客户货运承运。

- 选定流：无铅汽油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_travel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_travel`
- 来源：

###### 汽油乘用车 (`car_asset`)

仅实际控制且用于合格任务现场工作、协调或独立单证任务的车辆；按有依据寿命利用分配并明确已含维护轮胎油品。雇用出行服务已含车辆制造时不再次计入本资产。

- 选定流：汽油乘用车
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 铁路客运服务 (`rail_travel`)

实际员工旅程乘客人数乘实际路线距离，保留列车等级地域供应商范围。pkm表示一名旅客运送一公里；排除客户货物距离。

- 选定流：铁路客运服务
- 流属性/单位：旅客距离 / pkm
- 数量规则：每参考流归属的实测交换数量；cp_travel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_travel`
- 来源：

###### 航空客运服务 (`air_travel`)

实际项目差旅时适用，保留行程舱等人数供应商排放资产边界；不假设每批次一次飞行。航空燃烧作为上游一次，不是办公直接排放。

- 选定流：航空客运服务
- 流属性/单位：旅客距离 / pkm
- 数量规则：每参考流归属的实测交换数量；cp_travel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_travel`
- 来源：

### 过程：准备合格交付记录与实际纸质副本 (`documents`)

#### 输入

##### 产品流

###### 未涂布非机械浆印刷纸 (`paper`)

仅合格任务内实际打印的规划支持交付物或独立运输单证，包括更正和授权副本；按实际库存打印记录核对领用退回废页。电子记录不表示托管传输为零。

- 选定流：未涂布非机械浆印刷纸
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_documents。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_documents`
- 来源：

###### 黑色电子照相打印机墨粉 (`toner`)

合格纸质交付物含重印的实际净墨粉，核对墨盒皮重剩余墨粉供应商产品边界；其他油墨另列具体行。

- 选定流：黑色电子照相打印机墨粉
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_documents。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_documents`
- 来源：

###### 电子照相办公打印机 (`printer`)

按有依据寿命及实际打印利用分配合格交付物的打印硬件份额；核对墨粉墨盒覆盖防重复。

- 选定流：电子照相办公打印机
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

### 过程：执行支持并关闭限定任务 (`support`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

归属声明任务的实际办公工作站本地服务器打印通信冷却UPS损耗。托管供应商服务已含电力不得再次作为本地电力输入。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 指定配置的托管虚拟机实例计算服务 (`host_compute`)

用于路线比较仓储配送建模多模式跟踪或单证生成的实际配置实例小时；保留虚拟处理器内存存储覆盖区域及共享运行分配证据。服务器小时不等于人员小时。

- 选定流：指定配置的托管虚拟机实例计算服务
- 流属性/单位：时间 / h
- 数量规则：每参考流归属的实测交换数量；cp_digital。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_digital`
- 来源：

###### 互联网数据传输服务 (`network_data`)

承运人场站接口与货运单证实际归属传输数据；GB为十进制1000000000字节。保留供应商流量边界上游覆盖；不得将消息单证固定换算字节量。

- 选定流：互联网数据传输服务
- 流属性/单位：数据量 / GB
- 数量规则：每参考流归属的实测交换数量；cp_digital。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_digital`
- 来源：

###### 笔记本电脑 (`laptop`)

按有依据物理寿命任务利用分配实际分析协调硬件制造退役；不重复托管服务清单已含硬件。

- 选定流：笔记本电脑
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 办公建筑 (`office_building`)

实际分配工作空间建设退役份额；保留面积物理寿命占用任务时间驱动，区分另列设备。

- 选定流：办公建筑
- 流属性/单位：面积 / m2
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 阀控式铅酸UPS蓄电池 (`lead_battery`)

仅实际本地UPS此化学体系容量；初装更换电池覆盖须与供应商硬件区分且有观察寿命依据。其他化学体系独立列行。

- 选定流：阀控式铅酸UPS蓄电池
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 1,1,1,2-四氟乙烷制冷剂R134a (`r134a_input`)

仅实际使用此物种的办公服务器冷却；核对库存承包商补充初装设备充注退回回收。其他制冷剂不能由本卡代表。

- 选定流：1,1,1,2-四氟乙烷制冷剂R134a
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：

#### 输出

##### 产品流

###### 已完成且限定信息齐全的货运支持任务 (`support_job`)

按cp_service交付且已验收的一个服务族特定交付物接口任务。下列实际废物释放行保留来源任务物理来源。

- 选定流：已完成且限定信息齐全的货运支持任务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

##### 废物流

###### 废未涂布印刷纸 (`waste_paper`)

任务边界内实际废页作废纸本处置；保密粉碎接收回收处理有记录且计一次，不自动抵扣原生纸。

- 选定流：废未涂布印刷纸
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废笔记本电脑 (`waste_laptop`)

实际退役按交付任务分配并明确接收电子废物处理物理配置；不能按每份单证推定报废。

- 选定流：废笔记本电脑
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废阀控式铅酸UPS蓄电池 (`waste_battery`)

实际同容量UPS单元退役，与其他电池化学体系区分；明确接收回收残余处理。

- 选定流：废阀控式铅酸UPS蓄电池
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废黑色电子照相墨粉盒 (`waste_cartridge`)

实际废墨粉盒保留剩余粉量返还再用接收处理；不将剩余墨粉作为独立废物与整盒重复计量。

- 选定流：废黑色电子照相墨粉盒
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`co2_air`)

仅归属支持差旅的实际控制汽油车燃烧；货运卡车船舶列车飞机不是本办公直接排放。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化碳，排入空气 (`co_air`)

实际控制汽油车一氧化碳，须实测或有依据车型燃料工况证据，与二氧化碳分开。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化氮，排入空气 (`no_air`)

按工况证据解析实际一氧化氮；以二氧化氮计的氮氧化物总系数不自动为实测一氧化氮质量。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 二氧化氮，排入空气 (`no2_air`)

实际二氧化氮与一氧化氮分开；供应商控制铁路航空燃烧保留于采购客运服务清单。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 空气动力学直径小于2.5微米的颗粒物，排入空气 (`pm25_air`)

实际控制车辆细燃烧颗粒，粒径份额不重叠；纳入实际轮胎制动道路磨损时另行评估具体物种。

- 选定流：空气动力学直径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 1,1,1,2-四氟乙烷，排入空气 (`r134a_air`)

库存设备充注回收转移核对后的实际物种损失；购入制冷剂或承包商补充本身不是大气损失。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_direct` | 优先直接任务日志计量运行单证记录。共享办公计算按有记录因果容量时间活动驱动分配；保留归属交付的待命管理失败尝试返工。 |  |
| `allocate_families` | 重复任务归一化前划分不同服务族复杂度路线网络单证范围渠道。组合合同不得乘成多模式方案其他规划支持单证三个各自承担全部负荷的产出。 |  |
| `allocate_assets` | 办公笔记本打印UPS电池人员车辆按有依据物理寿命实际利用分配；不能将财务折旧假定为寿命。尊重托管租赁服务已含设备初充。 |  |
| `allocate_goods` | 货物既有单证信息为受托对象，不做货物销售共产品分配。各实际承运仓储装卸负荷在下游一次关联；不得由推荐方案自动抵扣避免货运库存纸张燃料。 |  |
| `allocate_gas` | 将实际回收转移制冷剂与大气损失分开；记录回收处理而不预设替代抵扣。 | epa-gas-balance |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | support | support_job | 前景记录 | 任务服务族整包客户指令；模式分段托运批次交接；方案场址时间范围情景约束；单证编号版本副本渠道；实际工时起讫；验收返工 | 按合同客户验收核对交付范围；按适用情况采用正面职责可分离证明、规划供应商承运接口矩阵方案评审记录或独立单证授权接收；保留修订失败工作。 | item | 每任务及修订 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 验收交付变更控制跨方核对 |
| cp_supplier | support | planning_subcontract | 前景记录 | 分包职责产出模式范围功能边界；自有供应商划分；已含单证计算承运；数量 | 直读实际独立规划支持交付物供应商上游边界；排除代客货代采购承运报关代理承运，不将总发票换算支持数量。 | item | 每供应商任务 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 供应商交付物边界重复核对 |
| cp_energy | support | electricity | 前景记录 | 仪表时间任务场址回路；本地计算冷却UPS办公支持；分配供应来源 | 实测本地消耗物理任务分配；核对场址总量，不重复托管供应商电力。 | kWh | 计量期及任务 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 仪表校准账单任务利用 |
| cp_digital | support | host_compute; network_data | 前景记录 | 供应商区域配置；实例运行；存储覆盖；数据字节；任务调用单证编号；能源硬件冷却覆盖 | 以任务记录核对实际配置运行传输字节；区分副本重试与新产出，区分供应商合计与组件清单。 | h; GB | 任务运行及账单期 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 使用导出供应商边界版本 |
| cp_documents | support | paper; toner | 前景记录 | 交付物/任务编号；合格规划支持或独立运输单证用途；种类版本副本；页数；纸张尺寸克重或质量；墨粉净量皮重；领退废页；电子路线 | 对合格规划支持打印件或独立运输单证核对实际材料平衡，纳入更正和授权副本。验收的support_job仅计一次，不按纸质副本增加产出，保留被拒收版本使用的实际投入。 | kg | 每任务打印及库存期 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 打印库存日志实测净材料版本核对 |
| cp_travel | support | petrol; rail_travel; air_travel | 前景记录 | 目的任务；实际行程人数路线距离；车型等级；燃料库存使用；共享差旅；采购服务覆盖 | 仅采集实际人员支持出行；分模式核对燃料旅客距离，按有记录目的分配共享差旅，不能用货物吨公里。 | kg; pkm | 每次行程 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 行程燃料证据供应商范围 |
| cp_asset | support | laptop; office_building; lead_battery; car_asset; printer | 前景记录 | 资产配置容量面积；实际寿命利用；初装组件更换退役；供应商覆盖 | 将实际资产物理寿命证据关联任务利用；分配制造维护退役并排除上游服务重复覆盖。 | item; m2 | 资产事件及期间 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 资产维护记录有据寿命利用 |
| cp_gas | support | r134a_input; r134a_air | 前景记录 | 物种；期初期末储存库存取得离场回收转移；设备期初期末充注；功能份额 | 核对实际物种库存设备含量承包商记录；来自现有场址库存的补充不是额外取得；损失上游供应数量不同。 | kg | 每次转移及期界 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 气瓶维护回收记录完整衡算 |
| cp_waste | support | waste_paper; waste_laptop; waste_battery; waste_cartridge | 前景记录 | 具体废物质量单元配置剩余物；来源任务；接收再用处理；分配份额 | 各真实废物独立计量，保留保密处理接收边界；核对整墨盒电池单元残余材料而不重复。 | kg; item | 每次转移 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 废物返还凭据接收证据 |
| cp_emission | support | co2_air; co_air; no_air; no2_air; pm25_air | 前景记录 | 控制车辆燃料工况；实际燃料；物种/粒径组分；实测尾气或系数版本单位；归属 | 实测物种或采用有据车型燃料工况证据；氮氧化物须有可信组分换算，区分上游客运货运排放。 | kg | 实际控制出行及期间 | 同一声明任务报告期 | 已识别实际场址供应商任务 | 每参考流 | 燃料尾气证据系数适用性物种审计 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_denominator | support_job | N为明确服务族配置范围内相容已验收任务数量。单一实际任务N=1，须为正值；排除重复版本副本并记录未完成工作负荷去向。 | cp_service | N |  |
| physical_allocation | 所有清单行 | 将各实测分子直接归任务或按有据场址运行活动因果份额分配，再除以N。实测供应商场址期间各分配份额须核对至总量。费用货运吨公里名义单证数不能代替实测资源使用。 | cp_service; cp_energy; cp_digital; cp_documents; cp_travel | 每参考流交换量 |  |
| gas_loss | r134a_air | 实际损失=期初储存库存+取得量+期初设备含量-期末储存库存-离场转移-期末设备含量。回收仅在期末库存或离场转移计一次；调查负值不闭合衡算，再按实测任务份额除以N。实际含量不可得时，任何容量近似须明确评估欠充不确定性，不宣称精确物理闭合。 | cp_gas; cp_service | 每参考流物种损失 | epa-gas-balance |
| asset_share | laptop; office_building; lead_battery; car_asset; printer | 按有据物理寿命实际利用分配实际资产制造维护退役；期间任务份额除以N。不推定更换周期或重复托管供应商硬件。 | cp_asset; cp_service | 每参考流资产份额 |  |
| benefit_separation | 物流方案数字路线收益声明 | 任何节约燃料距离库存纸张声明须有同等交付功能实际采用边界不确定性的独立基线反事实。比较保留在正支持清单之外，不默认负交换。 | cp_service; 比较研究 | 独立比较披露 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_deliverable | support_job | 核验服务族验收物理范围复杂度完成证据；仅发票标题费用文件数不足。 | cp_service |
| dq_interfaces | planning_subcontract | 建模模式分段承运场站接口约束及重复方案单证核对；证明供应商独立规划职责，不是货代中介。 | cp_supplier; cp_service |
| dq_inputs | host_compute; network_data; paper; toner | 匹配实例配置实际运行字节纸张墨粉衡算修订重试范围；区分独立供应商处理与自身工作。 | cp_digital; cp_documents |
| dq_lifecycle | 所有清单行 | 报告实际地域期间供应商资产寿命气体差旅不确定性上游缺失；未知未解决数据不是零。 | cp_energy; cp_asset; cp_gas; cp_travel |
| dq_identity | 所有清单行 | 关联生产前核定各流适用支持身份；历史参考计数支持不解决清单流UUID。 | 身份直读核验 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_scope` | 要求正面证据的物流咨询规划支持或可分离独立非中介运输单证出具取得。排除85610/85630职责含海空货代代客组织转运报关代理。费用无车所有权或协调措辞不能证明适用性。 | un-cpc-67910; un-cpc-85630 |
| `validate_reference` | 要求唯一support_job为1 item、正N、完整服务族范围复杂度时间接口验收。拒绝不相关任务混合重复单证副本产出及费用吨公里产出。 |  |
| `validate_inventory` | 核验实际计算网络单证现场工作资源及各原子交换；核对供应商电力硬件原资产托管服务材料废物气体库存且不重复。 |  |
| `validate_system` | 支持边界须披露货运系统另行关联实际承运仓储装卸负荷，不能暗示运输无排放。不推定优化无纸抵扣或认证。 |  |
| `validate_unit_export` | item仅为数量属性正式单位Item(s)的本地单数别名。导出时使用Item(s)，保留同一数值计数及完整限定的服务定义；更换显示符号不得改变流属性、服务范围或归一化分母。不得通过改写单位将服务项转换成时间、质量、距离或另一服务族，也不得对已按参考流归一化的数量再次归一化。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程定义货运支持任务 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同正面证据的非中介规划单证服务族或合格整包职责完成复杂度范围物理边界；实际货运模块分离 |
| excluded_use | 通用每批次单证吨公里费用系数；代客货代采购承运报关代理；全部67910安排组织；全货运链足迹；假定优化节约 |
| required_metadata | 全部必需限定信息；验收N实际工时；规划模式交接接口矩阵及职责可分离证明；方案验收或单证版本核对；运行材料差旅资产数据供应商覆盖 |
| required_quality_disclosure | UUID支持缺口；任务可比限制；取消返工分配；供应商资产重复审计；承运仓储链接；数字气体差旅寿命不确定性 |
| update_trigger | 服务族合同路线模式网络托运批次或单证系统变化；托管配置区域供应商边界材料差旅资产寿命数据质量变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-67910 | official_guidance | UNSD CPC3.0 67910. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67910 | 三类支持服务及客货中介排除。 |
| un-cpc-85630 | official_guidance | UNSD CPC3.0 explanatory notes, PDF pages453-454,85630. https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | 反面证据：货代代客托运组织转运报关代理列入中介；保守功能分离。 |
| ec-efti-context | official_guidance | European Commission, Towards Paperless Freight Transport: EU takes a step forward with eFTI Regulation implementation,2025-01-09. https://transport.ec.europa.eu/news-events/news/towards-paperless-freight-transport-eu-takes-step-forward-efti-regulation-implementation-2025-01-09_en | 纸本电子货运信息及集成计算数据交换技术背景；不采用实施日期成本节约通用认证或LCA减排系数。 |
| epa-gas-balance | official_guidance | US EPA, Direct Fugitive Emissions from Refrigeration, Air Conditioning, Fire Suppression, and Industrial Gases,2020,section2.3. https://www.epa.gov/sites/default/files/2020-12/documents/fugitiveemissions.pdf | 实际冷却物种库存取得设备离场衡算原则；区分物理含量容量近似；不采用默认泄漏系数全球变暖潜势。 |
