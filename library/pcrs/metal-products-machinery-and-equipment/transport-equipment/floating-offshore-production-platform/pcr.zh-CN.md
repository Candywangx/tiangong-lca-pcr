---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.floating-offshore-production-platform
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 新柱稳式浮式海上生产平台制造

## 1. 范围与适用性

一种完整新钢质柱稳式半潜海上油气生产平台制造：浮筒立柱甲板船体制造、实际前处理涂覆、生产公用动力系统装配、船体上部生活模块集成、场内试验及现场部署前验收净质量放行。选择一种放行平台标识、船体几何、实际工艺链及场内验收安装配置。本范围窄于CPC49320。

排除钻井/MODU、船形FPSO、TLP、Spar、坐底潜式平台、固定平台、海上风电、改装修理及独售模块。排除出场现场航行拖航、锚链系泊线安装、海底井立管外输管线及现场连接、油气生产/运行采出水处理、维护拆解。场内交付安装导缆器绞车属安装表；另交付现场系泊线锚海底总成不属。纳入建造集成场之间运输为明确实测支持，不同于排除现场部署；无产能寿命或每吨油气等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.floating-offshore-production-platform |
| classification_refs | CPC:3.0:49320; narrower |
| covered_products | 一种完整新钢质柱稳式半潜海上油气生产平台制造：浮筒立柱甲板船体制造、实际前处理涂覆、生产公用动力系统装配、船体上部生活模块集成、场内试验及现场部署前验收净质量放行。选择一种放行平台标识、船体几何、实际工艺链及场内验收安装配置。本范围窄于CPC49320。 |
| excluded_products | 排除钻井/MODU、船形FPSO、TLP、Spar、坐底潜式平台、固定平台、海上风电、改装修理及独售模块。排除出场现场航行拖航、锚链系泊线安装、海底井立管外输管线及现场连接、油气生产/运行采出水处理、维护拆解。场内交付安装导缆器绞车属安装表；另交付现场系泊线锚海底总成不属。纳入建造集成场之间运输为明确实测支持，不同于排除现场部署；无产能寿命或每吨油气等效。 |
| representative_product | 一台新验收柱稳式钢半潜生产设施，具体船体上部安装表；无通用模块数重量水深产能。 |
| production_route | 浮筒立柱甲板制造; 表面前处理与涂覆; 生产与公用模块装配; 船体上部及舾装集成; 场内测试及净质量验收 |
| market_state | 现场部署前完整场内验收配置设施，含安装装备及声明留存技术流体/永久安装压载；临时压载服务燃料油气人员物料独立备件试具排除净M。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造场内验收一种具体配置新完整柱稳式生产平台。 |
| How much | 1 kg验收净整台制造输出，从每验收台实际M kg获得。 |
| How well | 放行设计当前逐平台验收检验方案；实际具备法定船级依据则声明；无运行油气服务等效。 |
| How long or cycle | 一次制造集成验收周期，无假定运行寿命生产周期。 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整柱稳式浮式海上生产平台 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 平台标识型号；放行图纸修订/船型浮筒立柱甲板几何；钢牌号炉号证书厚度实际焊接路线；船体分段各上部模块自制外购范围；工艺链装备零件号材质压力独立供货质量；动力电压电缆配置；生活安全公用安装表；安装系泊与排除现场硬件；实际涂层配方外包范围；制造集成场址场际运输；时期验收台数；当前实际整台轻重量检验静水力核实/受控验收净M；模块称量记录修订；检验场内交付状态舱液库存；留存技术注入永久安装压载与排除临时压载燃油工艺流体；供货预充；仪器软件校准不确定性；公用供应处理上游覆盖 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | hull_power; finish_power; systems_power; integration_power; acceptance_power | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实测低于1kV电网用户电：1kWh =3.6MJ；能量单位不能变质量，其他电压供货另匹配。 |

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| nitrogen_volume | test_nitrogen | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按声明供货参考温压及表计状态采实际供气体积，核对库存放散留存；无未声明标准体积假定密度；同状态独立实测气密度核kg平衡，q_item除M前保留m3。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际供货结构钢及放行外购工艺动力舾装部件在声明船体上部场接收；炼钢轧制装备制造属上游，除非明确场内制造；声明分段模块供货完成状态。 |
| starting_condition_role | foreground_manufacturing_module |
| product_classification_scope | 一种完整新钢质柱稳式半潜海上油气生产平台制造：浮筒立柱甲板船体制造、实际前处理涂覆、生产公用动力系统装配、船体上部生活模块集成、场内试验及现场部署前验收净质量放行。选择一种放行平台标识、船体几何、实际工艺链及场内验收安装配置。本范围窄于CPC49320。 |
| recursive_input_rule | 无同类别完整平台作为结构原料递归外购；外购分段模块替代内含物料作业；场际内部转移按交接边界实际实测范围一次计。 |
| upstream_dataset_requirement | 扩展评价须相容实际钢化学装备模块制造公用外包处理场际运输处理数据及供货版本范围；此前景卡本身非完整摇篮到门。 |
| disclosure | 平台标识型号；放行图纸修订/船型浮筒立柱甲板几何；钢牌号炉号证书厚度实际焊接路线；船体分段各上部模块自制外购范围；工艺链装备零件号材质压力独立供货质量；动力电压电缆配置；生活安全公用安装表；安装系泊与排除现场硬件；实际涂层配方外包范围；制造集成场址场际运输；时期验收台数；当前实际整台轻重量检验静水力核实/受控验收净M；模块称量记录修订；检验场内交付状态舱液库存；留存技术注入永久安装压载与排除临时压载燃油工艺流体；供货预充；仪器软件校准不确定性；公用供应处理上游覆盖 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_yard | manufacturing | 纳入声明场实际船体上部制造集成预调试；租重吊场际拖航须实际服务起终点时间供货物理覆盖，不另计内含燃料；现场出场航行连接油气运行在场内验收终点之外。 | kbr-semisub-2022; kiewit-appomattox |
| boundary_modules | systems; integration | 具体自制外购方案控制物料：完整生活工艺动力模块接收替代内含部件；模块内部须上游提供；场内结构另装装备各有物理交换；无模块钢机电重复。 | kiewit-appomattox |
| boundary_water | sea_resource | 直接海水取用为基础资源，不同于市政产品水；实际暂测试压载冷却取留回须实测体积密度盐度温度及实际回水介质化学；热或有据污染交换各独立，不假定所有回水为污染废水。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| hull | 浮筒立柱甲板制造 | required | 接收实际图纸合格钢材，切成焊板分段，合拢完整浮筒立柱甲板船体；已切或外购分段替代内含作业物料。 | foreground | 内部转移；验收完整平台参考 |
| finish | 表面前处理与涂覆 | conditional | 在执行处纳入实际前处理逐涂层路线；涂覆可在组装前集成后；已处理供货替代内含作业。 | foreground | 内部转移；验收完整平台参考 |
| systems | 生产与公用模块装配 | required | 安装实际配置分离压缩注水动力系统；卡为条件物理案例，非通用工况件数；外购完整模块替代内含部件装配。 | foreground | 内部转移；验收完整平台参考 |
| integration | 船体上部及舾装集成 | required | 将实际模块吊装连接船体；安装声明生活电气公用安全机上系泊设备；记录接口内含质量，无现场系泊连接。 | foreground | 内部转移；验收完整平台参考 |
| acceptance | 场内测试及净质量验收 | required | 按放行方案实际结构系统压力电测试预调试含返工；现场部署前取得当前整台重量检验及受控修正净M；不假定整个平台台秤。 | foreground | finished_machine |

### 过程：浮筒立柱甲板制造（`hull`）

接收实际图纸合格钢材，切成焊板分段，合拢完整浮筒立柱甲板船体；已切或外购分段替代内含作业物料。

#### 输入

##### 产品流

###### 热轧海工结构钢板 （`hull_plate`）

各卡一种实际批准牌号厚度状态用于浮筒立柱甲板；追踪炉号证书称领退，无海工牌号等效推断。

- 选定流： 热轧海工结构钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 热轧海工结构角钢 （`hull_profile`）

各卡一种实际角钢牌号截面，其他形状分测；预制分段替代内含物料制造。

- 选定流： 热轧海工结构角钢
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 实心碳钢埋弧焊丝 （`weld_wire`）

条件实际合格埋弧焊工艺丝牌号直径净耗质量，其他焊接程序另列。

- 选定流： 实心碳钢埋弧焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 熔炼颗粒埋弧焊剂 （`weld_flux`）

条件实际焊剂配方称补充量；回收内部，熔渣分列。

- 选定流： 熔炼颗粒埋弧焊剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 交流电 （`hull_power`）

实际低于1kV电网用户切成焊吊通风能量含返工；其他电压另列。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_scrap`）

实际出制造场干未处理分流边角；含漆油废钢另列，内部复用库存非输出。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 固体埋弧焊熔渣 （`weld_slag`）

条件实测分流熔渣，排除丝头捕集尘。

- 选定流： 固体埋弧焊熔渣
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

##### 基本流

###### 颗粒物，粒径未特指 （`particle_air`）

条件有据控制后制造即时空气排放，子介质粒径未特指；测得粒级替代未特指行，捕集尘为独立废物。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

### 过程：表面前处理与涂覆（`finish`）

在执行处纳入实际前处理逐涂层路线；涂覆可在组装前集成后；已处理供货替代内含作业。

#### 输入

##### 产品流

###### 铸钢喷丸 （`blast_shot`）

条件一种实际磨料规范补量，回收内部。

- 选定流： 铸钢喷丸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 配方海工环氧防腐底漆 （`epoxy_primer`）

条件一种实际混合供货涂料；基料固化剂分购则分列，留SDS固含干膜质量。

- 选定流： 配方海工环氧防腐底漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 配方海工聚氨酯面漆 （`polyurethane_topcoat`）

条件实际配方状态；非木器漆纯树脂，其他涂层分列。

- 选定流： 配方海工聚氨酯面漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 自来水 （`finish_water`）

条件实际清洗市政产品水；内部回用非再供水，体积须实际密度状态。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 交流电 （`finish_power`）

实际低于1kV前处理涂覆抽风固化能量；燃烧路线须独立燃料物种行。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

#### 输出

##### 废物流

###### 废钢喷丸 （`spent_shot`）

条件称废钢丸声明涂层污染；滤材漆泥独立。

- 选定流： 废钢喷丸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 废涂料残渣 （`paint_residue`）

实际产生分流涂料过喷残渣，无污泥滤材合并卡。

- 选定流： 废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

##### 基本流

###### 二甲苯（所有异构体） （`xylene_air`）

条件实测二甲苯CAS1330-20-7控制后即时空气未特指子介质，非总VOC。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

### 过程：生产与公用模块装配（`systems`）

安装实际配置分离压缩注水动力系统；卡为条件物理案例，非通用工况件数；外购完整模块替代内含部件装配。

#### 输入

##### 产品流

###### 成品海工三相分离压力容器 （`separator`）

一种具体外购容器型号压力材质供货干质量，内件仪表识别；自制改实际物料成焊测试，不重复外购容器。

- 选定流： 成品海工三相分离压力容器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_systems`

###### 空气泵或真空泵，空气或其他气体压缩机 （`gas_compressor`）

一种实际完整离心工艺气压缩机，规定气体工况材质压力实测供货质量；底架驱动冷却管仅按供货内含；较宽成品类别不给性能海工资质。

- 选定流： 空气泵或真空泵，空气或其他气体压缩机 `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_systems`

###### 泵 （`injection_pump`）

一种实际完整离心注水液泵，具体材质压力型号实测供货质量；声明电机内含，其他消防压载泵另列。

- 选定流： 泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_systems`

###### 成品管壳式工艺换热器 （`heat_exchanger`）

条件一种实际成品换热器型号材质压力供货干质量，非管材原料。

- 选定流： 成品管壳式工艺换热器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_systems`

###### 无缝碳钢海工工艺管 （`steel_pipe`）

各卡一种实际批准牌号径壁状态，管件另列，无套管钻杆替代。

- 选定流： 无缝碳钢海工工艺管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_systems`

###### 钢制阀门 （`ball_valve`）

一种实际批准阀体材质口径压力型号，声明执行器内含实测质量，其他功能另列。

- 选定流： 钢制阀门 `3cb88a81-618f-4fa5-814e-46399b121622`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_systems`

###### 完整工业燃气轮机发电机组 （`gas_turbine_genset`）

条件实际完整接收机组，轮机发电机底架范围质量，排除另供附属；非风水轮机电供应身份。

- 选定流： 完整工业燃气轮机发电机组
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_systems`

###### 完整海工柴油发电机组 （`diesel_genset`）

条件实际完整备用机组范围质量；不重复内含发动机发电机或以燃烧柴油流代装备。

- 选定流： 完整海工柴油发电机组
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_systems`

###### 交流电 （`systems_power`）

实际低于1kV模块装配管焊检查电，供货内含制造不重复。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_systems`

### 过程：船体上部及舾装集成（`integration`）

将实际模块吊装连接船体；安装声明生活电气公用安全机上系泊设备；记录接口内含质量，无现场系泊连接。

#### 输入

##### 产品流

###### 成品海工系泊绞车 （`mooring_winch`）

条件实际安装绞车型号质量，驱动按声明内含；现场锚系泊线非场内验收配置输出。

- 选定流： 成品海工系泊绞车
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 成品海工座式起重机 （`pedestal_crane`）

条件实际完整安装起重机配置供货质量，非租用集成吊车服务。

- 选定流： 成品海工座式起重机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 成品海工生活模块 （`accommodation_module`）

一种实际完整外购生活模块，放行安装表实测质量；内含保温电气涂层不另计场内领用；自制房间改自身原子制造交换。

- 选定流： 成品海工生活模块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 岩棉 （`insulation`）

条件另供实际等级密度粘结覆面质量，排除模块内含；覆面分购另列。

- 选定流： 岩棉 `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 成品绝缘铜海工动力电缆 （`copper_cable`）

一种实际电压导体绝缘规范，实测供货kg路线资质，无热值转质量估计。

- 选定流： 成品绝缘铜海工动力电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 （`switchboard`）

一种实际完整接收额定至多1000V配电盘，具体安装配置供货质量；高压开关另列，类别非认证。

- 选定流： 配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 交流电 （`integration_power`）

实际低于1kV上部吊装集成生活电气安装连接电，共享重吊按实测归属需求，非仅吊重代理。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

### 过程：场内测试及净质量验收（`acceptance`）

按放行方案实际结构系统压力电测试预调试含返工；现场部署前取得当前整台重量检验及受控修正净M；不假定整个平台台秤。

#### 输入

##### 产品流

###### 柴油 （`test_diesel`）

实际声明场内试验支持消耗化石柴油，称领减退留存，记录供货牌号碳源，无默认燃烧因子。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 配方矿物液压油 （`hydraulic_oil`）

条件实际等级配方及供货内含预充之外另加kg，实测留存移除消耗。

- 选定流： 配方矿物液压油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 氮气 （`test_nitrogen`）

条件实际中国厂内工业气吹扫检漏供货，供气纯度及供货定义实际压力温度参考状态实测m3；保留公开体积，另以实际实测密度独立得kg核留存流体，不改属性；其他地域供货参考状态另解析。

- 选定流： 氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 自来水 （`test_water`）

实际市政试压冲洗水，净新供排除回用；体积转换实测密度，核对留存回路水。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 交流电 （`acceptance_power`）

实际低于1kV岸电测试检查；机上试验发电改实际燃料排放一次计，内部电为转移。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

##### 基本流

###### 场内压载试验从海洋取用的海水 （`sea_resource`）

条件直接海洋资源输入，实际体积密度盐度温度，核对暂留压载及独立有据清洁回水。

- 选定流： 场内压载试验从海洋取用的海水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

#### 输出

##### 产品流

###### 完整柱稳式浮式海上生产平台 （`finished_machine`）

1kg实际验收配置新钢半潜船体含安装生产公用动力生活模块及声明留存技术流体，现场部署前，实测修正净M。

- 选定流： 完整柱稳式浮式海上生产平台
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 废物流

###### 废润滑油 （`used_oil`）

条件实际测试机械分流废矿物润滑油，排除液压水混合物留存注入。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 送处理的水压试验废水 （`test_wastewater`）

条件独立实测水质废试验水，实际污染浓度路线，非未特指水基础排放。

- 选定流： 送处理的水压试验废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

##### 基本流

###### 二氧化碳（化石源） （`fossil_co2_air`）

条件有据实际试验化石CO2 CAS124-38-9即时空气未特指子介质；当前出口碳源记录，无油气生产运行排放。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 一氧化氮 （`nitric_oxide_air`）

条件分测实际NO CAS10102-43-9即时空气未特指子介质，非NO2 N2O总NOx。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_causal | shared_operations | 先按船体模块验收配置场址细分；共享焊接涂覆重吊测试按cp_allocation各交换实测需求负载时间分摊，全部服务作业总供給核对；无默认平台排水量产能吊重份额。 |  |
| allocation_rework | configurations | 验收台归属返工废件建造负担；各实际配置按自身M及匹配分子归一后方可按实测输出加权汇总；剩余分配须实际驱动依据敏感性审查。 |  |
| allocation_recovery | outputs | 内部回收钢磨料焊剂水为转移，无自动可售共产品或避免生产抵扣；外排废钢废物保留状态责任处理；实际可售共产品须质量市场记录及审查处理，无未来回收抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 每验收完整平台 | 当前完成验收周期 | 相同具体安装场内交付配置 | 每台验收净质量 | quality_survey与quality_delivery_mass原始检验签署修正表模块称量独立平衡不确定性 |
| cp_hull | hull | 各原子过程行 | measurement | 图纸牌号炉号；库存领退；分段焊接程序耗材；电；钢边角熔渣；室外颗粒粒级物种治理 | 测各实际物理供货交换领减退库存变动及独立表征外排流；计归属工单需求；核对模块内含返工匹配验收台；仅有据时采控制后实际物种介质排放。 | kg; MJ | 每平台模块工单报告库存表闭合 | 完整声明建造周期含返工 | 全部纳入制造集成场及外包作业 | 可归属交换数量 / 验收设备数量 | 校准库存供货安装表工单测试验收记录物理覆盖记录 |
| cp_finish | finish | 各原子过程行 | measurement | 表面位置；供货配方SDS固含；磨料涂料补回留膜；水电；表征残渣；控制后二甲苯浓度流量时间 | 测各实际物理供货交换领减退库存变动及独立表征外排流；计归属工单需求；核对模块内含返工匹配验收台；仅有据时采控制后实际物种介质排放。 | kg; MJ | 每平台模块工单报告库存表闭合 | 完整声明建造周期含返工 | 全部纳入制造集成场及外包作业 | 可归属交换数量 / 验收设备数量 | 校准库存供货安装表工单测试验收记录物理覆盖记录 |
| cp_systems | systems | 各原子过程行 | measurement | 装备零件型号压力材质；实测接收kg及供货内件驱动底架预充；实际模块物料表；压力焊检；电 | 测各实际物理供货交换领减退库存变动及独立表征外排流；计归属工单需求；核对模块内含返工匹配验收台；仅有据时采控制后实际物种介质排放。 | kg; MJ | 每平台模块工单报告库存表闭合 | 完整声明建造周期含返工 | 全部纳入制造集成场及外包作业 | 可归属交换数量 / 验收设备数量 | 校准库存供货安装表工单测试验收记录物理覆盖记录 |
| cp_integration | integration | 各原子过程行 | measurement | 模块船体标识；接收安装质量修订；吊装连接舾装表；缆电压；内含保温装备；实际共享吊装需求 | 测各实际物理供货交换领减退库存变动及独立表征外排流；计归属工单需求；核对模块内含返工匹配验收台；仅有据时采控制后实际物种介质排放。 | kg; MJ | 每平台模块工单报告库存表闭合 | 完整声明建造周期含返工 | 全部纳入制造集成场及外包作业 | 可归属交换数量 / 验收设备数量 | 校准库存供货安装表工单测试验收记录物理覆盖记录 |
| cp_acceptance | acceptance | 各原子过程行 | measurement | 平台配置；批准实际验收方案；测试燃料流体领耗留移；气纯度状态；水密度盐度回水；测试负载时间；出口物种流量；废物；当前签署重量检验原件净修正 | 测各实际物理供货交换领减退库存变动及独立表征外排流；计归属工单需求；核对模块内含返工匹配验收台；仅有据时采控制后实际物种介质排放。 | kg; MJ; m3 | 每平台模块工单报告库存表闭合 | 完整声明建造周期含返工 | 全部纳入制造集成场及外包作业 | 可归属交换数量 / 验收设备数量 | 校准库存供货安装表工单测试验收记录物理覆盖记录 |
| cp_allocation | manufacturing | shared_load | measurement | 总供给分表需求实际负载时间服务台及排除作业 | 实测各交换因果需求全部服务作业；记录驱动份额核对物理总供给，留不确定性敏感性。 | MJ; h | 每共享作业报告时期 | 相同建造时期 | 全部服务制造集成场 | 分摊实测因果需求；可归属数量 / 验收设备数量 | 总表驱动记录不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | hull_plate; hull_profile; weld_wire; weld_flux; hull_power; steel_scrap; weld_slag; particle_air; blast_shot; epoxy_primer; polyurethane_topcoat; finish_water; finish_power; spent_shot; paint_residue; xylene_air; separator; gas_compressor; injection_pump; heat_exchanger; steel_pipe; ball_valve; gas_turbine_genset; diesel_genset; systems_power; mooring_winch; pedestal_crane; accommodation_module; insulation; copper_cable; switchboard; integration_power; test_diesel; hydraulic_oil; test_nitrogen; test_water; sea_resource; acceptance_power; used_oil; test_wastewater; fossil_co2_air; nitric_oxide_air | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为相同验收配置完整报告周期实测可归属物理交换除匹配验收台；保留kg、MJ或气体m3分子；件数不能代独立实测kg，件数质量体积密度配方浓度换算须实际同产品状态测量不确定性；净M生成下列独立规定，非normalize_mass另加代数条款。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_survey | finished_machine | cp_mass须取得合格责任检验方案下当前签署逐平台实际轻重量检验记录，对应验收近完整台。ABS2022明确含柱稳式并描述倾斜试验条件，只作历史方法支持非当前合规声明。留实际倾斜重量检验程序日期位置原始吃水干舷读数、观察水密度、核实竣工静水力几何软件版本、纵横倾修正、舱测深密度、实测缺增移项。按项目批准方法应用实际柱稳浮筒水线条件，记录支撑其他干涉几何影响。独立核对验收船体重与分称模块装备记录后续变更完整安装表，传播不确定性调查残差。不得以TLP专用船体加上部替代段许可省去实际整台核实。 | abs-fpi-2022 |
| quality_delivery_mass | finished_machine | 逐项按实际实测修正核对检验轻重量与声明场内净交付安装配置；完整安装钢装备及声明留存技术回路流体永久安装压载一次含；排除临时试验运输压载燃油库存工艺油气运行水库存人员物料脚手试重包装独立备件。记录舱注入状态材密度；永久技术回路留存不同于运行进料。仅排水量满载燃油重载重量总净吨设计样本重不明平衡估计不能代M；缺实际检验配置物理修正依据阻断数据集使用，无虚构整平台秤。 | current survey; measured corrections and signed acceptance balance |
| quality_prefill | components | 独立实测供货船体上部压力装备动力包须核对安装配置整台M；各接收范围识别发动机发电机驱动底架及全部预充流体；场内追加仅预充之外计；测试消耗移除与交付留存分开；无模块装备或内含钢保温重复。 | supplier boundaries; weighed handover/fit-list/fill and tank records |
| quality_identity | flows | 核实实际牌号压力电压配方状态路线安装供货范围与各公开身份，保留公开属性；即时空气颗粒二甲苯化石CO2/NO须实际介质时间治理记录，无总VOC代二甲苯NOx代NO；产品水海洋资源废试验水分开，无假定排放密度功率转质量模块重寿命。 | supplier certificates/SDS; species-specific samples; actual physical records |
| quality_acceptance | acceptance | 留当前放行逐平台结构焊接水密压力电气停机安全实际预调试验收依据及负载时间返工；项目法定船级要求核对当前适用设计；历史规则制造商案例不建立批准通用数值通过限。 | current released plan; actual survey/test acceptance |
| quality_coverage | dataset | 各实际路线安装交换声明实测计算估算缺失排除不适用；实际追加导缆器船体开口消防泵火炬臂仪表保温覆面牺牲阳极其他涂料焊接化学包装租吊运输处理各扩原子卡；仅放行配置要求时列必需；选列案例非完整厂清单，完整性声明前须实际记录相容上游数据。 | fit-list/work orders; inventory/meter closure; coverage/uncertainty register |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1kg验收完整输出及完全匹配修正净M、受控cp_mass物理quality_survey/quality_delivery_mass依据；候选未决参考身份保持明确审查缺口，结构检查不建立科学检验充分性。 | abs-fpi-2022 |
| validation_basis | inventory | 核对相同验收配置台数时期分子单位q_item/M协议；独立实测件质量留存流体闭合整台安装表，无件数额定功率当kg。 |  |
| validation_scope | manufacturing | 审实际自制外购模块内含建造转移支持现场部署排除；无运行油气清单运输服务输出供货模块投入重复内部发电重复。 | kbr-semisub-2022 |
| validation_release | elementary | 查物种CAS化石来源即时长期时间及控制后实际介质子介质，NO非NO2/N2O总NOx；海洋资源非废水产品水，实际回水化学热交换独立有据。 |  |
| validation_completeness | dataset | 实际重量检验修正验收方案结果路线记录安装表关键上游处理覆盖不能建立时阻断使用；保持科学审查身份缺口，检查通过非方法批准完整摇篮到门声明。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 一种完整新钢质柱稳式半潜海上油气生产平台制造：浮筒立柱甲板船体制造、实际前处理涂覆、生产公用动力系统装配、船体上部生活模块集成、场内试验及现场部署前验收净质量放行。选择一种放行平台标识、船体几何、实际工艺链及场内验收安装配置。本范围窄于CPC49320。 |
| excluded_use | 排除钻井/MODU、船形FPSO、TLP、Spar、坐底潜式平台、固定平台、海上风电、改装修理及独售模块。排除出场现场航行拖航、锚链系泊线安装、海底井立管外输管线及现场连接、油气生产/运行采出水处理、维护拆解。场内交付安装导缆器绞车属安装表；另交付现场系泊线锚海底总成不属。纳入建造集成场之间运输为明确实测支持，不同于排除现场部署；无产能寿命或每吨油气等效。 |
| required_metadata | 平台标识型号；放行图纸修订/船型浮筒立柱甲板几何；钢牌号炉号证书厚度实际焊接路线；船体分段各上部模块自制外购范围；工艺链装备零件号材质压力独立供货质量；动力电压电缆配置；生活安全公用安装表；安装系泊与排除现场硬件；实际涂层配方外包范围；制造集成场址场际运输；时期验收台数；当前实际整台轻重量检验静水力核实/受控验收净M；模块称量记录修订；检验场内交付状态舱液库存；留存技术注入永久安装压载与排除临时压载燃油工艺流体；供货预充；仪器软件校准不确定性；公用供应处理上游覆盖 |
| required_quality_disclosure | 实际船体上部配置供货模块边界独立重量检验净修正依据不确定性；全部安装件流体质量平衡；场址时期验收台测试负载返工；库存公用覆盖分配敏感性未决身份实际物理数据缺口科学审查状态。 |
| update_trigger | 船型几何装备上部交付状态钢焊涂层路线供货自制外购场址时期测试计量方法适用物理依据公开身份变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| abs-fpi-2022 | standard | ABS浮式生产设施建造入级规则，2022年7月；3篇3章1节/1,/3印刷49页(PDF56)；5B篇1章3节/1.5印刷507—508页(PDF514—515)。https://ww2.eagle.org/content/dam/eagle/rules-and-guides/archives/offshore/82_FPI_2022/fpi-rules-july22.pdf | 历史适用类型轻重量倾斜方法架构含柱稳浮筒水线条件；非当前合规数值限M或TLP替代方法移用许可；须当前实际检验独立实测净交付修正。 |
| kbr-semisub-2022 | literature | Richard D’Souza与Shiladitya Basu，2014年后美国墨西哥湾批准浮式平台合同策略周期评估，第27届Offshore Symposium论文，2022年2月22日；Appomattox Development印刷/PDF3页，出版方留存技术论文。https://www.kbr.com/sites/default/files/documents/2023-10/TechnicalJournal2023_2028_Critical_Assessment_Contracting_Strategies_Cycle_Times_Post-2014_Sanctioned_Floating_Platforms_US_Gulf_of_Mexico_0.pdf | 历史半潜案例：船体上部独立制造运集成场模块吊装预调试，后现场系泊立管连接；不采用案例重量排水量产能件数时间寿命。 |
| kiewit-appomattox | handbook | Kiewit Appomattox Platform，无日期官方项目HTML，范围段，无分页。https://www.kiewit.com/projects/appomattox-platform/ | 独立制造方佐证上部公用动力工艺生活及注水制造集成，现场吸力桩与本场内验收输出分离；不采用制造商数值重产能或通用工艺清单。 |
