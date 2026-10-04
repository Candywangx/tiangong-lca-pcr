---
status: candidate
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.centrifugal-clothes-driers
language: zh-CN
sync_with: pcr.en-US.md
---

# 离心干衣机（独立甩干脱水设备）

## 1. 范围与适用性

本候选 PCR 规定成品独立设备的前景制造数据，该设备通过内篮离心旋转从已洗衣物或布草中脱除水分。覆盖小型家用甩干机及商用、工业脱水机，按配置分别建模；CPC 3.0 离心子类没有洗衣容量分界。排除集成洗脱机、家用洗烘一体机、加热滚筒或热泵烘干机、干衣柜、非作为衣物或布草脱水设备交付的纺织染整离心机、食品及工艺离心机，以及独立交付零件。设备千克是清单参考，而非跨型号相等的洗衣服务。[un-cpc-3-0; thomas-centri; fabcare-extractor; swastik-extractor]

家用示例证明离心功能语义，而非自动 CPC 归类。CPC 3.0 的 44812 另列家用洗涤干燥；逐台家用设备归类前须审查实际设计、唯一或主要功能、市场用途及权威分类证据。HS 2022 将离心衣物脱水机另列 8421.12，将含内置离心甩干机的洗衣机列 8450.12，并适用第 84 章注；这是物理范围的辅助证据，而非已发布 CPC3 对照或每型号裁定。[un-cpc-3-0; wco-hs2022-84]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.centrifugal-clothes-driers |
| classification_refs | CPC 3.0 44911 |
| covered_products | 完整独立家用或商用、工业衣物离心脱水机 |
| excluded_products | 集成洗涤功能、加热干燥设备、无关离心机及零件 |
| representative_product | 一台具有指定配置并验收的内篮脱水机，包含交付电机、外壳、驱动、悬挂、控制及安全系统 |
| production_route | 外购子总成装配或实际条件性场内制造、表面处理及电机生产，随后工厂测试及出货 |
| market_state | 制造商门口完整已测试成品；安装基础和下游洗衣运行单独建模 |



## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应完整独立衣物脱水设备 |
| How much | 每 1 kg 验收设备净质量的制造清单 |
| How well | 实际指定干衣容量、转速、不平衡与安全及排水验收条件；无通用残余水分性能 |
| How long or cycle | 一个制造报告期至验收门口；寿命及后续脱水循环是独立研究参数 |
| reference_flow_link | `finished` |



| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 离心干衣机 `c6fb37f3-a8e3-4178-99c5-c2dd06e2dac1` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及 BOM 版本；家用或工业系列；干衣容量与设备质量分别声明；内篮合金及尺寸；外壳及涂层；电机相数及功率；直接、带或变频驱动及制动；悬挂及轴承；安全联锁；随设备交付的可选装卸装置；验收净质量；自制外购及交付状态；工厂试验方案及负载；场址及期间；供电电压及地区；包装；供应者及处理链接 |



数据包须声明全部限定信息。不得以额定衣物负载千克、宣传册示例重量或含箱质量作为分母。通用类别 UUID 不提供型号 BOM 或上游供应者。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_mass：校准称量完整验收设备，排除运输包装、湿试验布、残留水及安装基础；保持同一型号配置及验收记录。 |
| `period_basis` | physical exchange normalization | Mass | kg | 同一配置及期间，N 为验收台数，D 为其校准净质量总和，M = D/N，Q 为包括准备、返工及报废生产的可归属期间外部数量。q_item = Q/N，q_ref = q_item/M = Q/D。N 和 D 须为正数；不同配置不得混合质量。 |
| `physical_assay` | physical material and chemical species records | Mass | kg | 在每个材料、库存、产品、废物及排放项匹配湿干基、水分及各物种或金属的自身含量；合金或污泥毛重并非所含 Fe、Cr 或 Ni 的质量。本规则不对电力或运输要求质量含量。 |
| `energy_basis` | energy records | Delivered energy | MJ | 保留实测 kWh，按 1 kWh = 3.6 MJ 换算。燃料保持具体 kg 并测定组成及低位热值；实际工厂测试回馈的外送电单独计量，不默认用户阶段节能量。 |



## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | 包括实际交付投入接收至制造、表面处理、存在时的电机自制、装配、平衡及验收、返工、废品、残余公用工程及放行前包装。 |  |
| `make_buy` | component state | 每个外购电机、筒体、轴、轴承座、驱动或控制器的已完成上游生产只计一次；不得重复加入所含金属、树脂、铜、油或零件工厂能耗。自制采用实际原料及工序；成对内部零件转移抵销，但加工负担保留。 |  |
| `factory_test` | testing | 纳入实际工厂甩脱、振动、盖锁、制动、电气、排水及泄漏方案的电力、实际耗用布水、气动锁空压机负荷及废品。记录湿布初始水分及留存回流；用户说明书证明功能，而非强制工厂测试配方。 | thomas-instructions; ifb-inc100 |
| `downstream` | later use | 制造前景排除用户洗衣用电、洗涤剂及水、后续滚筒干燥、使用更换、安装混凝土及寿命终结；研究需要时保留独立下游链接。不得由干衣机名称推定加热干燥过程。 | un-cpc-3-0; thomas-centri |
| `route_audit` | specific exchanges | 每张卡依实际配方或 BOM 条件适用，并非通用材料集合。每种实际合金、聚合物、外购零件、公用工程、配方组分、包装、处理及排放均另列交换。not_applicable 须有不存在证据；未知不等于零。外部运输及上游、处理链接保留明确。 |  |



### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 处于有记录供应者加工状态的实际交付板料、成品零件、电机、驱动、控制器及包装 |
| starting_condition_role | 前景初级生产接收边界 |
| product_classification_scope | 独立衣物离心脱水；家用尺寸本身不能使其成为洗衣机或加热烘干机 |
| recursive_input_rule | 实际翻新所购同类整机仅采用交付状态数据集一次，并单独声明翻新门口；不得递归购买自身表示新生产 |
| upstream_dataset_requirement | 准确材料、已完成工序、零件接口、地区期间及电压；缺失供应者须披露 |
| disclosure | 完整 BOM 及自制外购矩阵、交付配置、试验方案、期间净产出、分配、上游运输处理及缺失数据 |



### 配置及自制外购矩阵

| 总成 | 方案及要求 |
| --- | --- |
| 内篮及外壳 | 外购成形、冲孔、平衡不锈钢内篮或实际场内制造；THOMAS 金属筒及耐冲击盖不能证明通用聚合物或合金。Fabcare 304 筒及镀锌底座为配置证据，而非全部场址默认值。 |
| 驱动及制动 | 直接驱动、核实的传统传动或变频方案；机械制动及离合器有条件适用。Swastik 变频方案替代这些部件且可能回馈电能；IFB 非同轴标题与直接驱动正文冲突，须以实际图纸铭牌为准。 |
| 悬挂、安全及控制 | THOMAS 电机筒体柔性悬挂及单手盖锁不同于 Swastik 弹簧、滚子及推力轴承结构和 IFB 气动盖锁。定时器、PLC、制动器、阻尼及气动执行器仅在实际交付时纳入。 |
| 电机及表面处理 | 外购成品电机及已涂装零件的上游只计一次；实际场内绕线浸渍、铸造、模塑、镀层及涂装须有各自完整配方、外部公用工程及排放。不强制未观察到的路线。 |



## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 内篮、外筒、机架及轴制造 | conditional | 仅限实际场内切割、冲孔、成形、焊接及机加工；外购成品零件跳过相应阶段 | 前景制造记录 | 每 1 kg 参考流 |
| `finish` | 条件性表面清洗及涂装 | conditional | 仅限交付状态前实际清洗、涂装及固化；裸不锈钢及外购已处理零件跳过本路线 | 前景制造记录 | 每 1 kg 参考流 |
| `motor_make` | 条件性自产电机 | conditional | 仅限有记录的电机制造、绕线、浸渍及测试；整台外购电机不另计所含投入 | 前景制造记录 | 每 1 kg 参考流 |
| `assembly` | 机械、电气及安全装配 | required | 实际 BOM、驱动及悬挂配置；区分外购子总成和自产内部转移 | 前景制造记录 | 每 1 kg 参考流 |
| `test` | 工厂平衡及验收测试 | required | 放行前实际干湿甩脱、振动、机盖联锁及制动、电气、排水及泄漏测试 | 前景制造记录 | 每 1 kg 参考流 |
| `shared` | 共用工厂服务 | conditional | 仅计扣除已测过程负荷后的未分配公用工程，包括尚未分配的测试空压机电量 | 前景制造记录 | 每 1 kg 参考流 |
| `dispatch` | 包装及验收脱水机放行 | required | 全部产品；仅计验收配置的完整交付设备 | 前景制造记录 | 每 1 kg 参考流 |



### 过程：内篮、外筒、机架及轴制造（`fabrication`）

仅限实际场内切割、冲孔、成形、焊接及机加工；外购成品零件跳过相应阶段

#### 输入

##### 产品流

###### AISI 304 不锈钢板（`ss304_sheet`）

仅用于有 304 牌号证明的自产内篮或外筒；外购成品筒体不再计入此原料。

- 选定流：AISI 304 不锈钢板

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`fabcare-extractor`

###### 脱水机机架用碳钢板（`carbon_sheet`）

仅用于实际指定碳钢机架的制造；不得由外观推定牌号。

- 选定流：脱水机机架用碳钢板

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：

###### 合金钢轴棒料（`shaft_bar`）

仅用于有材质证明的自产机加工轴；外购成品轴采用装配路线。

- 选定流：合金钢轴棒料

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`

###### ER308L 不锈钢焊丝（`welding_wire`）

仅用于实际相容的 ER308L 焊接工艺；其他焊材牌号应另列。

- 选定流：ER308L 不锈钢焊丝

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：

###### 焊接保护气氩气（`argon`）

仅在场内焊接实际消耗氩气时纳入；混合气体的各组分分别记录。

- 选定流：焊接保护气氩气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：

###### 矿物油基切削液（`cutting_oil`）

实际使用且配方明确的切削液；浓缩液与补充水分别记录。

- 选定流：矿物油基切削液

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：

###### 交流电（`fabrication_power`）

仅限实际中国用户侧低于 1 kV 外购电；记录不重叠的过程分配负荷，包括返工及空载。共用服务仅计扣除这些过程负荷后未分配的实测残余；其他电压或地区须匹配独立身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用 cp_energy 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_energy`

- 来源：

#### 输出

##### 废物流

###### AISI 304 不锈钢加工废料（`ss_trim`）

仅计离厂且分离收集的 304 边角料或废品；内部回熔返料按成对转移处理。

- 选定流：AISI 304 不锈钢加工废料

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

###### 合金钢轴机加工屑（`steel_chip`）

实际牌号钢屑须测定油分与水分；不得以湿毛重代替金属含量。

- 选定流：合金钢轴机加工屑

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

###### 碳钢板加工废料（`carbon_trim`）

实际碳钢边角料与不锈钢分开收集。

- 选定流：碳钢板加工废料

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

###### 废矿物油基切削液（`spent_oil`）

实际外送且处理方式明确的废切削液。

- 选定流：废矿物油基切削液

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

###### 不锈钢焊接烟尘过滤粉尘（`weld_dust`）

捕集烟尘为废物；每一所含元素均采用对应实测含量。

- 选定流：不锈钢焊接烟尘过滤粉尘

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

### 过程：条件性表面清洗及涂装（`finish`）

仅限交付状态前实际清洗、涂装及固化；裸不锈钢及外购已处理零件跳过本路线

#### 输入

##### 产品流

###### 环氧粉末涂料（`epoxy_powder`）

仅在外壳或机架实际采用此指定涂层时纳入；裸不锈钢结构不默认涂装。

- 选定流：环氧粉末涂料

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：

###### 异丙醇清洗溶剂（`isopropanol`）

仅用于场内实际异丙醇清洗；保留配方及溶剂回收记录。

- 选定流：异丙醇清洗溶剂

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：

###### 去离子漂洗水（`finish_water`）

仅计工厂实际表面漂洗，不包括用户洗衣用水。

- 选定流：去离子漂洗水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_water 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_water`

- 来源：

###### 涂装烘炉用天然气（`natural_gas`）

仅用于场内燃气固化炉，须记录实际组成及低位热值；电炉采用实测电量。

- 选定流：涂装烘炉用天然气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_energy 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_energy`

- 来源：

###### 交流电（`finish_power`）

仅限实际中国用户侧低于 1 kV 外购电；记录不重叠的过程分配负荷，包括返工及空载。共用服务仅计扣除这些过程负荷后未分配的实测残余；其他电压或地区须匹配独立身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用 cp_energy 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_energy`

- 来源：

#### 输出

##### 废物流

###### 废环氧粉末涂料（`powder_waste`）

仅计单独记录内部回收后仍外送的粉末。

- 选定流：废环氧粉末涂料

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

###### 含金属表面清洗污泥（`finish_sludge`）

实际污泥须注明湿干基，对 Fe、Cr、Ni 及其他实测物种分别测定含量。

- 选定流：含金属表面清洗污泥

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

###### 表面清洗废水（`finish_effluent`）

仅计转交外部处理的水；直接环境排放另列受纳环境及物种。

- 选定流：表面清洗废水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

###### 废异丙醇清洗溶剂（`solvent_waste`）

实际废溶剂须测定含量，回收及留存部分分别记录。

- 选定流：废异丙醇清洗溶剂

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

##### 基本流

###### 异丙醇，排放至空气（`isopropanol_air`）

仅计溶剂核算与测量证明的未捕集排放；销毁量不能自动视为空气损失。

- 选定流：异丙醇，排放至空气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_emission 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_emission`

- 来源：

###### 化石二氧化碳，排放至空气（`co2_air`）

仅计实际燃气炉经控制后的排放；CO 及各含氮物种分别需要自身实测浓度或有效的物种因子。

- 选定流：化石二氧化碳，排放至空气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_emission 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_emission`

- 来源：

###### 一氧化碳，排放至空气（`co_air`）

仅计实际燃气炉经控制后的排放；CO 及各含氮物种分别需要自身实测浓度或有效的物种因子。

- 选定流：一氧化碳，排放至空气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_emission 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_emission`

- 来源：

###### 一氧化氮，排放至空气（`no_air`）

仅计实际燃气炉经控制后的排放；CO 及各含氮物种分别需要自身实测浓度或有效的物种因子。

- 选定流：一氧化氮，排放至空气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_emission 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_emission`

- 来源：

###### 二氧化氮，排放至空气（`no2_air`）

仅计实际燃气炉经控制后的排放；CO 及各含氮物种分别需要自身实测浓度或有效的物种因子。

- 选定流：二氧化氮，排放至空气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_emission 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_emission`

- 来源：

### 过程：条件性自产电机（`motor_make`）

仅限有记录的电机制造、绕线、浸渍及测试；整台外购电机不另计所含投入

#### 输入

##### 产品流

###### 漆包铜电机绕组线（`winding_wire`）

仅用于有证明的自产电机绕线，而非外购整机电动机。

- 选定流：漆包铜电机绕组线

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：

###### 电工钢电机叠片（`laminations`）

仅限外购叠片的自产电机装配；不重复计原钢及冲片负担。

- 选定流：电工钢电机叠片

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：

###### 环氧电机绕组浸渍漆（`varnish`）

仅计实际环氧浸渍配方；分别保留溶剂组分及固化程序。

- 选定流：环氧电机绕组浸渍漆

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：

###### 交流电（`motor_make_power`）

仅限实际中国用户侧低于 1 kV 外购电；记录不重叠的过程分配负荷，包括返工及空载。共用服务仅计扣除这些过程负荷后未分配的实测残余；其他电压或地区须匹配独立身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用 cp_energy 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_energy`

- 来源：

#### 输出

##### 废物流

###### 废漆包铜绕组线（`wire_scrap`）

实际绕线废料须区分铜含量与绝缘质量。

- 选定流：废漆包铜绕组线

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

### 过程：机械、电气及安全装配（`assembly`）

实际 BOM、驱动及悬挂配置；区分外购子总成和自产内部转移

#### 输入

##### 产品流

###### 不锈钢脱水机成品内篮（`bought_basket`）

仅限外购内篮；须明确合金、冲孔及动平衡完成状态。

- 选定流：不锈钢脱水机成品内篮

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 脱水机成品外筒（`bought_outer`）

仅限外购外筒；不锈钢或镀锌结构按实际规格。

- 选定流：脱水机成品外筒

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 合金钢脱水机成品轴（`bought_shaft`）

仅限外购成品轴；不重复计入原棒料。

- 选定流：合金钢脱水机成品轴

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 铸铁脱水机轴承座（`bearing_housing`）

仅限指定铸铁外购轴承座；铸造及所含铁的负担仅在上游计入一次。

- 选定流：铸铁脱水机轴承座

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 弹簧钢悬挂弹簧（`spring`）

仅用于交付配置实际采用的弹簧悬挂。

- 选定流：弹簧钢悬挂弹簧

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 橡胶隔振支座（`damper`）

仅计实际橡胶支座；保留胶料、几何及柔性悬挂规格。

- 选定流：橡胶隔振支座

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 脱水机电驱动电动机（`motor`）

外购电机须明确相数、功率、制动及绝缘接口和绕组交付状态；装配不另计所含铜及钢。

- 选定流：脱水机电驱动电动机

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 脱水机变频驱动器（`vfd`）

仅限变频方案；Swastik 原件未要求另装机械制动器或离合器。

- 选定流：脱水机变频驱动器

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 脱水机电磁制动器（`brake`）

仅计实际独立电磁制动器；直流注入制动可能由控制器提供而无需此零件。

- 选定流：脱水机电磁制动器

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 橡胶脱水机传动带（`belt`）

仅用于核实的带传动配置；直接驱动不计传动带。

- 选定流：橡胶脱水机传动带

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 钢制脱水机传动带轮（`pulley`）

仅用于实际钢带轮的带传动方案。

- 选定流：钢制脱水机传动带轮

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 钢制滚子轴承（`bearing`）

实际滚子轴承与轴和轴承座分开记录。

- 选定流：钢制滚子轴承

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 钢制推力轴承（`thrust_bearing`）

仅计指定推力轴承，与滚子轴承分开。

- 选定流：钢制推力轴承

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 脱水机电子定时器（`timer`）

仅计实际电子定时控制；机械操作杆控制按其实际装置记录。

- 选定流：脱水机电子定时器

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 脱水机盖安全联锁开关（`lid_switch`）

实际机盖联锁；保留安全回路配置。

- 选定流：脱水机盖安全联锁开关

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 气动脱水机盖锁（`pneumatic_lock`）

仅用于类似 IFB 的气动锁方案；出厂前测试消耗的压缩空气生产纳入工厂。

- 选定流：气动脱水机盖锁

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 耐冲击聚合物脱水机盖（`lid`）

仅限明确实际树脂的外购聚合物机盖；厂商耐冲击描述不能证明 PP 或 ABS。

- 选定流：耐冲击聚合物脱水机盖

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 脱水机钢制成品外壳（`enclosure`）

仅限实际涂层及合金明确的外购外壳；不重复计场内板料及涂料。

- 选定流：脱水机钢制成品外壳

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 绝缘铜制脱水机电源电缆（`cable`）

实际来料电缆须明确导体与绝缘规格。

- 选定流：绝缘铜制脱水机电源电缆

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 聚合物脱水机排水软管（`hose`）

仅计随设备交付的软管，明确聚合物；开放排水嘴设备不默认软管。

- 选定流：聚合物脱水机排水软管

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 碳钢脱水机紧固螺栓（`fastener`）

实际螺栓牌号、涂层及交付数量；其他合金紧固件另列。

- 选定流：碳钢脱水机紧固螺栓

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 锂皂矿物油轴承润滑脂（`grease`）

仅计外购密封轴承负担之外的实际首次加脂；保留牌号及安全数据表。

- 选定流：锂皂矿物油轴承润滑脂

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### 交流电（`assembly_power`）

仅限实际中国用户侧低于 1 kV 外购电；记录不重叠的过程分配负荷，包括返工及空载。共用服务仅计扣除这些过程负荷后未分配的实测残余；其他电压或地区须匹配独立身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用 cp_energy 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_energy`

- 来源：

###### 脱水机电动内篮装载提升装置（`loading_device`）

仅计可选且实际交付的供应者指定装载装置；外部洗衣物流设备属下游。

- 选定流：脱水机电动内篮装载提升装置

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`swastik-extractor`

### 过程：工厂平衡及验收测试（`test`）

放行前实际干湿甩脱、振动、机盖联锁及制动、电气、排水及泄漏测试

#### 输入

##### 产品流

###### 工厂测试水（`test_water`）

仅计湿布甩脱、排水或泄漏验收试验实际加入的水；区分湿布初始水分及内部回流。

- 选定流：工厂测试水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_water 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_water`

- 来源：`thomas-instructions`

###### 棉制验收试验布（`test_cloth`）

仅计实际消耗的棉布；重复测试库存不按每次新增消耗计入。记录损坏、更换及湿干质量。

- 选定流：棉制验收试验布

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_material 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_material`

- 来源：`thomas-instructions`

###### 交流电（`test_power`）

仅限实际中国用户侧低于 1 kV 外购电；记录不重叠的过程分配负荷，包括返工及空载。共用服务仅计扣除这些过程负荷后未分配的实测残余；其他电压或地区须匹配独立身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用 cp_energy 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_energy`

- 来源：

###### 验收测试用外购压缩空气（`purchased_air`）

仅在外部供应者的压缩空气跨越工厂边界时计入；自产压缩空气改为只计一次空压机电量。

- 选定流：验收测试用外购压缩空气

- 流属性/单位：Volume / m3

- 数量规则：采用 cp_air 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_air`

- 来源：

#### 输出

##### 产品流

###### 工厂测试回馈外送电力（`regenerated_power`）

仅计再生甩脱测试实际测得外送电网的电力；匹配外送电压及供应者，不得以用户运行节能量作为数量。

- 选定流：工厂测试回馈外送电力

- 流属性/单位：Delivered electrical energy / MJ

- 数量规则：采用 cp_energy 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_energy`

- 来源：

##### 废物流

###### 脱水机工厂试验废水（`test_effluent`）

实际外送处理的试验排水，而非用户使用排水。

- 选定流：脱水机工厂试验废水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

###### 废棉制验收试验布（`cloth_waste`）

仅计实际退出库存的耗损布且注明水分；保留再用按内部转移抵销。

- 选定流：废棉制验收试验布

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

###### 报废完整衣物离心脱水机（`rejected_device`）

仅计不可修复且送交指定处理的报废设备；保留实际组成、湿干状态及所含负担；不增加验收 D。

- 选定流：报废完整衣物离心脱水机

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_waste 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_waste`

- 来源：

### 过程：共用工厂服务（`shared`）

仅计扣除已测过程负荷后的未分配公用工程，包括尚未分配的测试空压机电量

#### 输入

##### 产品流

###### 交流电（`shared_power`）

仅限实际中国用户侧低于 1 kV 外购电；记录不重叠的过程分配负荷，包括返工及空载。共用服务仅计扣除这些过程负荷后未分配的实测残余；其他电压或地区须匹配独立身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用 cp_energy 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_energy`

- 来源：

### 过程：包装及验收脱水机放行（`dispatch`）

全部产品；仅计验收配置的完整交付设备

#### 输入

##### 产品流

###### 交流电（`dispatch_power`）

仅限实际中国用户侧低于 1 kV 外购电；记录不重叠的过程分配负荷，包括返工及空载。共用服务仅计扣除这些过程负荷后未分配的实测残余；其他电压或地区须匹配独立身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用 cp_energy 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_energy`

- 来源：

###### 瓦楞纸板运输箱（`carton`）

仅计实际交付包装箱，排除在设备参考净质量之外。

- 选定流：瓦楞纸板运输箱

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_pack 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_pack`

- 来源：

###### 木制运输托盘（`pallet`）

仅计实际托盘；重复使用按有记录的次数及更换分配。

- 选定流：木制运输托盘

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_pack 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_pack`

- 来源：

###### 聚乙烯运输包装膜（`film`）

仅计实际 PE 运输膜，不得由全部包装质量推定。

- 选定流：聚乙烯运输包装膜

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用 cp_pack 测得可归属期间数量，除以同一配置及期间的验收设备净质量 D。纳入返工及报废生产负担。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_pack`

- 来源：

#### 输出

##### 产品流

###### 离心干衣机（`finished`）

指定配置的完整验收独立脱水设备；排除运输包装、试验负载及残留试验水。

- 选定流：离心干衣机 `c6fb37f3-a8e3-4178-99c5-c2dd06e2dac1`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：1 千克

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_mass`

- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide` | shared loads | 优先按生产批次、零件状态及过程分表拆分。仅以有证据的设备时间或负荷因果关系分配剩余实测残余。不得把全厂总表叠加到已计过程或测试电量。 |  |
| `reject_rework` | accepted denominator | Q 保留实际准备、返工、报废设备及测试失败负担；废设备、废料及包装质量不增加验收分母 D。不同配置及净产出期间分别处理。 |  |
| `scrap` | recovery/co-products | 内部返料仅抵销成对物理转移；回收能耗保留。废料销售不自动赋予避免原生材料的信用。实际共产品先拆分，再记录物理分配，或论证其他关系及敏感性，且与上游处理一致。 |  |



## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_air` | test | externally purchased compressed air | 计量及台账 | 供应者；实际体积；温度；绝对压力；标准或实际基准；期间；Q | 在明确压力温度下计量外购气体并保留体积约定；不得重复计自产空压机电量。 | m3 | 每批或匹配计量期间 | 包括返工废品的同一配置完整报告期 | 声明制造商及实际外部接口 | 每 1 kg 参考流 | 校准；验收；代表性含量分析；供应者记录；不确定性 |
| `cp_mass` | dispatch | reference output | 计量及台账 | 型号；配置；序列号；校准验收净质量；N 验收台数；D 净千克总和；废品；皮重；干燥测试状态 | 使用校准秤逐台称量完整验收设备，排除运输包装及测试水分；核对验收台账及同一交付配置。不得替换为额定洗衣容量。 | kg | 每批或匹配计量期间 | 包括返工废品的同一配置完整报告期 | 声明制造商及实际外部接口 | 每 1 kg 参考流 | 校准；验收；代表性含量分析；供应者记录；不确定性 |
| `cp_material` | active processes | one input | 计量及台账 | 零件牌号；供应者加工状态；自制外购；批次；发出；退回；期初期末库存；湿干基；各项含量；Q | 校准称量及实际 BOM 配方领用记录，链接供应者证据；外购成品零件与自产原料互不重叠。 | kg | 每批或匹配计量期间 | 包括返工废品的同一配置完整报告期 | 声明制造商及实际外部接口 | 每 1 kg 参考流 | 校准；验收；代表性含量分析；供应者记录；不确定性 |
| `cp_energy` | active processes; shared | each utility | 计量及台账 | 电表；期间；工序；输入 kWh；场内发电；测试回馈外送电；储能变化；分表分配；残余驱动；燃料 kg 及低位热值；Q | 匹配期间校准表计及账单；先测电机、测试及空压机负荷，再计共用残余。外购供给与场内发电分开。燃料测量与烘炉测试匹配。 | MJ | 每批或匹配计量期间 | 包括返工废品的同一配置完整报告期 | 声明制造商及实际外部接口 | 每 1 kg 参考流 | 校准；验收；代表性含量分析；供应者记录；不确定性 |
| `cp_water` | finish; test | water balance | 计量及台账 | 供水；加入水；投入及测试布水分；湿干质量；库存变化；蒸发；排水；反应水；产品残水；成对循环；Q | 计量供水并称量湿干测试布；测水分、计量出水并核算库存及返流。体积换质量采用实际温度密度。 | kg | 每批或匹配计量期间 | 包括返工废品的同一配置完整报告期 | 声明制造商及实际外部接口 | 每 1 kg 参考流 | 校准；验收；代表性含量分析；供应者记录；不确定性 |
| `cp_waste` | active processes | one waste | 计量及台账 | 废物流；接收者；毛重皮重净重；水分；各金属物种独立含量；库存；内部返料；Q | 分类校准称量，代表性湿干及物种含量分析，附去向处理凭据。 | kg | 每批或匹配计量期间 | 包括返工废品的同一配置完整报告期 | 声明制造商及实际外部接口 | 每 1 kg 参考流 | 校准；验收；代表性含量分析；供应者记录；不确定性 |
| `cp_emission` | release points | one species and compartment | 计量及台账 | 物种；环境介质；控制后浓度；空气水流量；时间；含量；捕集；回收销毁；检出限；不确定性；Q | 代表性控制后监测或有记录的物种模型，包含流量时间及实际运行治理条件；不得编造排放闭合平衡。 | kg | 每批或匹配计量期间 | 包括返工废品的同一配置完整报告期 | 声明制造商及实际外部接口 | 每 1 kg 参考流 | 校准；验收；代表性含量分析；供应者记录；不确定性 |
| `cp_pack` | dispatch | each package | 计量及台账 | 材料；包装组件净质量；出货数量；重复使用库存；退回；实际周转；更换；Q | 逐个称量包装组件，核对领用退回及出货；包装不进入设备分母。 | kg | 每批或匹配计量期间 | 包括返工废品的同一配置完整报告期 | 声明制造商及实际外部接口 | 每 1 kg 参考流 | 校准；验收；代表性含量分析；供应者记录；不确定性 |



采集原始期间数量后按每 1 kg 参考流聚合。N 验收台数及 D 验收净质量总和须采用同一配置、BOM 及测试范围和期间；M = D/N 仅为实测平均值。q_item = Q/N，随后 q_ref = Q/D = q_item/M。不得以厂商示例重量、容量千克、废品或包装替代 D。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize` | all inventory rows | 每个可归属外部期间数量 Q 除以同一配置及期间的校准验收设备净质量 D；保留分子物理单位及方向。成品输出为 1 千克。 | cp_mass; cp_material; cp_energy; cp_air; cp_water; cp_waste; cp_emission; cp_pack | amount per 1 kg reference flow |  |
| `water_close` | physical water terms | 供水 + 投入材料及布水分 + 期初库存 + 反应生成水 + 内部返回输入 = 排出水 + 蒸发水 + 产品或布留水 + 期末库存 + 反应消耗水 + 内部返回输出。仅成对返回项抵销。依据综合测量、采样及分配不确定性调查残差；无固定容差。 | cp_water; cp_mass; cp_material; cp_waste; cp_emission | water residual and uncertainty |  |
| `metal_close` | each contained metal | 对每个实际 Fe、Cr、Ni、Zn、Cu 及其他元素，每个投入、产品、废料、钢屑、污泥、废水、排放及库存项乘以其自身匹配含量及湿干换算。纳入反应转化及成对返料。合金总质量不能闭合元素平衡；调查不确定性，不得编造排放。 | cp_material; cp_mass; cp_waste; cp_emission | each elemental residual |  |
| `solvent_close` | each solvent species | 期初溶剂 + 实际投入 + 内部返料输入 = 产品留存 + 期末溶剂 + 外送回收溶剂 + 捕集介质中溶剂 + 实测销毁 + 废水及非空气残余 + 未捕集空气排放 + 内部返料输出。各项采用自身物种含量；成对返料抵销。实际销毁不等于空气排放。采用残差前调查综合不确定性。 | cp_material; cp_waste; cp_emission | species solvent residual |  |
| `utility_residual` | metered utility site period | 在相同单位期间，将外购输入 + 实际场内发电 + 储能释放与已分配制造、处理、电机、装配、测试、出货负荷 + 未分配共用残余 + 外送 + 储能充入及核实输送损失对账。工厂测试回馈单独计量。负残余须调查期间、单位、校准及综合不确定性，不得截为零。仅分配残余；空压机测试计入一次。 | cp_energy | reconciled residual allocation |  |
| `combustion` | fuel species | 燃料碳核算可依据实际组成、氧化及留存碳约束化石 CO2；不能建立 CO、NO 或 NO2。每种排放须匹配技术及控制条件的浓度或有效独立物种因子；总 NOx 约定单独披露。 | cp_energy; cp_emission | verified species release |  |
| `transfer_cancel` | internal parts and returns | 每项内部转移两端须匹配数量、配置、批次、状态及期初期末在制品；仅抵销成对转移，保留全部实际额外加工能耗、废品及外部废物。 | cp_material; cp_mass; cp_water; cp_waste | no duplicate burden |  |



### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration` | device | 实际型号交付 BOM 及驱动、悬挂、安全图纸优先于冲突营销描述；不得外推某工业或家用配方。 | 图纸；铭牌；验收 |
| `period` | all exchanges | 完整共同期间，准备、空载、测试、返工废品及库存；不重叠的公用工程分配及有因果的残余分配。 | 表计及批次对账 |
| `uncertainty` | physical quantities | 保留校准、代表性水分及物种采样、检出限及分配不确定性。不提供经验单台质量、得率、能耗、寿命或排放范围。 | 计量及实验室记录 |
| `links` | upstream and treatment | 单独解析实际供应者技术、加工交付状态、地区及处理；流 UUID 并非上游足迹。 | 供应者及处理凭据 |



## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | reference product | 要求独立衣物脱水、全部限定信息、完整交付设备及正确参考链接；区分家用衣物容量与设备净质量及洗涤、加热干燥类别。 |  |
| `denominator` | all inventory | 要求 N 和 D 为正且来自校准同配置验收记录，核实 Q 纳入返工废品，并验证 q_ref = Q/D = (Q/N)/(D/N)；拒绝包装、测试水、废品质量及跨配置均值。 |  |
| `buy_once` | component state | 核实每个已完成外购电机、筒体、控制器及所含材料上游只计一次；实际自产零件启动完整配方及工序；匹配成对转移。 |  |
| `balances` | physical water, metal and solvent | 对适用记录执行 water_close、metal_close 及 solvent_close，纳入全部库存、反应、湿干基、自身含量及成对返回。依据实际综合不确定性解释残差，不采用任意通用容差或编造损失。 |  |
| `utilities` | site meters | 执行 utility_residual，采用同一场址期间单位及不重叠测试、过程负荷；输入、发电、外送回馈及储能须对账。拒绝全厂与分表重复计入及未经解释的负残余。 |  |
| `species` | actual emissions | 捕集物为废物而非金属排放；区分实际物种及受纳环境。CO、NO、NO2 需要自身证据；溶剂销毁及回收不同于空气排放。 |  |
| `coverage` | data package | 报告接受输入、执行跳过检查、发现及完整性；未知 UUID、供应者或数量为不完整，而非零。条件性不存在需实际 BOM 及试验证据。无条件二次使用前解决全部适用新增交换缺口。 |  |



## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个完整指定配置脱水机至制造商门口的前景初级单位过程数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有审查上游及处理链接的同一交付设备制造投入；后续使用单独建模 |
| excluded_use | 缺失供应者时的完整摇篮到门口声明；洗衣功能等价、默认寿命或运行节能；洗衣机及加热烘干机替代 |
| required_metadata | 全部限定信息；工厂期间及 N/D/Q；自制外购；启用及缺失路线；验收测试负载；实测公用工程对账；供应者运输处理链接；分配及来源版本 |
| required_quality_disclosure | UUID、供应者及配方缺口；来源冲突；无经验范围；测量不确定性；跳过及未确定检查；不存在证据及替代 |
| update_trigger | 型号 BOM、电机驱动悬挂安全、材料涂层、自制外购、验收、场址公用工程、校准、分配或供应者状态变化 |



## 11. 数据源

| 来源标识 | Type | 参考 | 用途 |
| --- | --- | --- | --- |
| `un-cpc3-notes` | official_guidance | UNSD CPC Version3.0 explanatory notes, 30 June2025, pp.239 and241. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 现行原件44812家用洗涤干燥及44911离心标题；具体家用设备归类须实际分类审查。 |
| `wco-hs2022-84` | official_guidance | WCO HS Nomenclature 2022, Chapter84 note2 and headings8421/8450/8451, PDF pp.1,9,19–20. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1684_2022e.pdf?la=en | 原始税则区分离心脱水与内置洗涤干燥；不是现行 CPC3 对照或具体设备裁定。 |
| `un-cpc-3-0` | official_guidance | UNSD CPC 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 44911 离心类别；相邻 44622 洗衣设备及 44812 家用洗涤干燥。类别标题支持范围比较，而非制造配方。 |
| `thomas-centri` | handbook | Robert Thomas, CENTRI 776 SEK, original product page, accessed 2026-10-02. https://thomas-germany.com/en-uk/THOMAS-Spin-dryer-CENTRI-776-SEK/ | 家用独立不锈钢筒、安全盖及单手控制、设备与含箱质量区别；不采用数值质量或运行强度。 |
| `thomas-instructions` | handbook | Robert Thomas, CENTRI instructions 188417, English pp.9–10. https://thomas-germany.com/media/8f/46/d4/1734441270/188417%20%281%29.pdf | 排水嘴、湿布装载、停转盖保护及柔性电机筒体悬挂；用户操作不能证明工厂试验配方。 |
| `fabcare-extractor` | handbook | Fabcare, Hydro Extractor (Direct Drive), original description, accessed 2026-10-02. https://fabcare.com/shop/hydro-extractor/hydro-extractordirect-drive/ | 工业衣物脱水机、304 内篮外筒、镀锌底座、自平衡、定时直流注入及直接驱动方案；无默认洗衣容量或能耗。 |
| `swastik-extractor` | handbook | Swastik, Hydro Extractors, scanned original PDF p.2. https://www.swastiktextile.com/Download%20Catalogue/hydro_extractor.pdf | 不锈钢内篮外壳、铸铁轴承座、钢轴弹簧、滚子及推力轴承、变频；反证通用制动离合器，可选装卸及电网回馈。无经验工厂因子。 |
| `ifb-inc100` | handbook | IFB Industries, INC100 Hydro Extractor, construction and safety specifications, accessed 2026-10-02. https://www.ifbappliances.com/inc-100 | 工业不锈钢结构、铸造机架、三相电机、气动盖锁、定时及安全开关；非同轴标题与直接驱动摘要冲突，须核实 BOM。不默认示例重量或能耗。 |
