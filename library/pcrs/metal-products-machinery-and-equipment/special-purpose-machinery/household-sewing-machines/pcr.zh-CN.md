---
status: candidate
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.household-sewing-machines
language: zh-CN
sync_with: pcr.en-US.md
---

# 家用缝纫机

## 1. 范围与适用性

本候选方法为工厂门口交付家用缝纫机生成按配置前景制造数据。纳入电动机械或电子及非电动手动或脚踏机型，以及主要功能与制造商设计支持家用身份的家用缝绣组合与家用包缝机。来源确定设备配置，并非工厂配方或数值范围。不规定默认质量、收率、运行能耗转制造能耗换算或寿命。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.household-sewing-machines |
| classification_refs | CPC 3.0 44814 |
| covered_products | 家用完整机器配置；手动机头可能需要声明外部驱动 |
| excluded_products | 工业缝纫或绣花机械；图书装订机；独立销售家具、零件及针；服装与缝纫服务 |
| representative_product | 声明验收家用缝纫机配置；没有单一型号代表全部路线 |
| production_route | 实际框架、壳体、成缝及驱动控制自制或外购；表面处理、装配、工厂试验及包装 |
| market_state | 工厂验收制造成品；声明随供附件及后续安装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应家用成缝设备，具有实际缝纫、绣花或包缝能力 |
| How much | 1 kg验收随供机器配置净质量 |
| How well | 通过有记录的工厂线迹送料检验及适用电气安全验收；声明速度、线迹及配置 |
| How long or cycle | 一个制造验收期间；不预设使用寿命或服装输出等效性 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 家用缝纫机 `633bed4f-5fd3-4590-b645-8d8daeedaa00` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；配置及BOM；家用主要功能；机械电子或手动驱动；绣花包缝能力；随供机头台架踏板箱及附件；实际材料牌号；自制或外购状态；实际工艺；试验配方；校准净质量；验收N与D；场址期间；公用工程电压及地域；上游及处理关联；不确定性 |

在前景数据包中声明全部必需限定信息。千克用于制造清单归一化，不使家用锁式缝纫、绣花、包缝及脚踏功能相互等效。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| energy_basis | 电力及热 | Energy | MJ | 保留原始kWh及1 kWh = 3.6 MJ；保留实际外购热交付能量MJ及自身供回流焓口径。不能将运行瓦数换作制造能耗。 |
| physical_basis | 物理材料或物种记录 | Mass | kg | 每项金属或物种平衡保留投入、验收产品、废料、炉渣、污泥、废水、排放及库存质量，每一项均采用自身匹配化验及干湿基。加入实际反应生成或消耗；内部回料配对抵消。化合物总质量不等于所含金属或溶剂。体积换算采用每个流在其条件下自身实测密度。 |

## 5. 系统边界

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| factory_gate | foreground | 纳入收货、实际部件制造、表面处理、装配、调校、验收试验、返工、不合格品、工厂公用工程及包装直至验收放行。制造边界不纳入后续缝纫服务。 |  |
| household_identity | category | 按实际主要功能与制造商家用设计覆盖家用机械、电子、非电动手动或脚踏、缝绣组合及家用包缝机。工业机器即使安装在家庭仍不属于本PCR；不虚构线迹速度阈值。 | janome-712t; singer-4423; brother-se725; brother-1034d; juki-ddl8700 |
| supplied_configuration | reference_product | 声明实际随供机头、电源接口、踏板、绣框、压脚、耐用箱、初装油及整体台架。所需消费者自有脚踏台并不自动属于随供产品。独立销售家具、备用针、维修零件及工业绣花机械不作为本类输出。 | janome-712t; brother-se725; brother-1034d |
| make_buy | upstream | 保留准确BOM自制或外购及加工状态矩阵。外购成品电机、控制板、框架、齿轮、针、压脚与旋梭或弯针模块的上游制造计一次；不重复内含导线、树脂、铸造及机加工。厂内自制替代路线须有原料及实际过程清单。内部转移配对抵消；外购同类机头保留供应历史一次，不无限递归。 |  |
| conditional_routes | actual_design | 铸铝、铸铁、冲压钢及聚合物壳体是按设计选择的路线；保留确切合金牌号、供货表面处理及注塑配方。金属框架宣传或分类不能证明合金、厂内铸造、绕线、电子制造或涂层配方。not_applicable须以不存在证据为基础；缺记录是未知，绝非零。除这些条件性锚点外，补充每项实际使用的原子材料、公用工程、化学品、废物及排放。 | singer-4423 |
| test_scope | test | 记录实际工厂试验次数、实测电力、确切试验线布领用减有记录的可回用退料、切边废料、不合格机器及所有返工。试验纺织品不是交付服装，绝不进入机器净质量分母。运行铭牌功率、消费者缝纫需求及宣传寿命不能确定制造能耗或工厂消耗。 |  |
| life_cycle_links | dataset | 前景工厂清单用于完整摇篮到大门结果前，须分别关联实际上游供给、运输与外部废物处理；声明缺失供应者。消费者用电、服装、维护及寿命终结属于下游情景，不是此参考输出。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定机器配置实际交付材料及供应商已完成部件 |
| starting_condition_role | 前景主制造的供应商状态起点 |
| product_classification_scope | 已审阅家用成缝设备；工业范围分开 |
| recursive_input_rule | 外购同类机头保留上游状态一次；只建模后续作业并抵消内部配对转移 |
| upstream_dataset_requirement | 匹配实际部件加工状态、牌号、聚合物配方、电压、供给地域期间、供热回流口径、运输及废物处理供应者；声明替代及缺失关联。产品来源不能确定供应者。 |
| disclosure | 配置、随供或外部驱动及家具、实际工艺、自制外购、试验消耗、缺UUID供应者、范围及不确定性 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| frame | 框架与底座制造 | conditional | 实际厂内铸造、板材成形或机加工；购入成品框架不重复其制造 | 前景工厂记录 | 每 1 kg 参考流 |
| housing | 聚合物壳体注塑 | conditional | 仅纳入实际厂内指定聚合物注塑；购入壳体使用供应商状态数据集 | 前景工厂记录 | 每 1 kg 参考流 |
| mechanism | 成缝与送料机构制备 | conditional | 仅纳入厂制轴、齿轮、针杆、旋梭或弯针；购入成品模块不重复先前加工 | 前景工厂记录 | 每 1 kg 参考流 |
| drive | 电机与控制器制造 | conditional | 仅电动配置；绕线、电路板组装及焊接仅在厂内实际进行时纳入 | 前景工厂记录 | 每 1 kg 参考流 |
| finish | 清洗与表面处理 | conditional | 按实际槽液、涂漆、粉末涂装或电镀化学配方启用；不预设表面处理 | 前景工厂记录 | 每 1 kg 参考流 |
| assembly | 按配置装配 | required | 每台机器；只纳入实际随供的驱动、成缝、绣花或包缝部件 | 前景工厂记录 | 每 1 kg 参考流 |
| test | 工厂调校与验收缝纫试验 | required | 每台机器；实际线迹与送料检验，以及适用时的电气安全检验 | 前景工厂记录 | 每 1 kg 参考流 |
| services | 工厂共享服务余量 | conditional | 仅纳入同一场址期间尚未分配至其他过程卡的消耗 | 前景工厂记录 | 每 1 kg 参考流 |
| dispatch | 包装及验收出厂 | required | 每种验收供货配置；包装与产品净质量分开 | 前景工厂记录 | 每 1 kg 参考流 |

### 过程：框架与底座制造 (`frame`)

#### 输入

##### 产品流

###### 铝铸造合金锭 (`al_charge`)

仅实际厂内铝铸造；记录确切合金牌号、炉料及回料.

- 选定流: 铝铸造合金锭
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 铸铁用生铁 (`iron_charge`)

仅实际铸铁；要求实测成分、添加剂及铸造路线.

- 选定流: 铸铁用生铁
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 碳钢板 (`steel_sheet`)

仅厂内冲压框架或底座；明确牌号、厚度及供货表面状态.

- 选定流: 碳钢板
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 底板用不锈钢板 (`stainless_bed`)

仅厂制不锈钢底板；明确牌号及表面状态.

- 选定流: 底板用不锈钢板
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `singer-4423`

###### 水混合型机加工冷却液浓缩液 (`coolant`)

仅实际机加工；明确配方及稀释比例.

- 选定流: 水混合型机加工冷却液浓缩液
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 交流电 (`frame_electricity`)

仅实际分配至该过程的低于1 kV用户侧消耗；共享服务仅取未分配余量.

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 废物流

###### 铝合金机加工废料 (`al_scrap`)

仅外运废料；内部回料须配对且不作为外部交换.

- 选定流: 铝合金机加工废料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 铸铁炉渣 (`iron_slag`)

仅实际铸造排出；使用自身化验及含水率.

- 选定流: 铸铁炉渣
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 碳钢冲压边角料 (`steel_scrap`)

仅跨越工厂边界的边角料.

- 选定流: 碳钢冲压边角料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

### 过程：聚合物壳体注塑 (`housing`)

#### 输入

##### 产品流

###### 丙烯腈-丁二烯-苯乙烯注塑料 (`abs`)

仅实际ABS壳体牌号；供货混合料内添加剂计入一次.

- 选定流: 丙烯腈-丁二烯-苯乙烯注塑料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 聚丙烯注塑料 (`pp`)

仅实际PP设计；不与同一ABS零件作为同时替代输入.

- 选定流: 聚丙烯注塑料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 交流电 (`housing_electricity`)

仅实际分配至该过程的低于1 kV用户侧消耗；共享服务仅取未分配余量.

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 废物流

###### ABS注塑浇道废料 (`polymer_scrap`)

仅外部ABS浇道废料；内部回用料按配对转移记录.

- 选定流: ABS注塑浇道废料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

### 过程：成缝与送料机构制备 (`mechanism`)

#### 输入

##### 产品流

###### 合金钢圆棒 (`shaft_stock`)

仅厂内实际轴或针杆加工；匹配具体牌号.

- 选定流: 合金钢圆棒
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 聚甲醛齿轮注塑料 (`pom`)

仅实际POM齿轮注塑；购入成品齿轮不同时计此输入.

- 选定流: 聚甲醛齿轮注塑料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 热处理淬火油 (`heat_oil`)

仅实际厂内热处理；实测补充、损耗及废油.

- 选定流: 热处理淬火油
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 交流电 (`mechanism_electricity`)

仅实际分配至该过程的低于1 kV用户侧消耗；共享服务仅取未分配余量.

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 废物流

###### 含油合金钢切屑 (`oily_swarf`)

分别测定金属、油及水含量.

- 选定流: 含油合金钢切屑
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

### 过程：电机与控制器制造 (`drive`)

#### 输入

##### 产品流

###### 漆包铜绕组线 (`copper_wire`)

仅实际厂内电机绕线；明确绝缘漆及铜化验.

- 选定流: 漆包铜绕组线
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 电工钢电机叠片 (`motor_core`)

仅实际厂制电机；指定供货叠片状态.

- 选定流: 电工钢电机叠片
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 裸印制电路板 (`bare_board`)

仅厂内电子装配；购入组装板不重复其内含制造.

- 选定流: 裸印制电路板
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 锡银铜焊料 (`solder`)

仅实际厂内使用的无铅焊料配方.

- 选定流: 锡银铜焊料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 松香焊接助焊剂 (`flux`)

仅实际松香助焊剂配方；按物种单独采集溶剂含量.

- 选定流: 松香焊接助焊剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 交流电 (`drive_electricity`)

仅实际分配至该过程的低于1 kV用户侧消耗；共享服务仅取未分配余量.

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 废物流

###### 不合格组装控制板 (`electronic_waste`)

仅离厂处理的控制板；保留返工负荷.

- 选定流: 不合格组装控制板
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

### 过程：清洗与表面处理 (`finish`)

#### 输入

##### 产品流

###### 去离子清洗水 (`water`)

仅实际水性清洗或槽液配制.

- 选定流: 去离子清洗水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`
- 来源:

###### 碳酸钠清洗剂 (`alkali`)

仅实际碱性配方；区分配制溶液与有效溶质.

- 选定流: 碳酸钠清洗剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 聚酯涂装粉末 (`powder`)

仅实际粉末涂装配方；回收粉末按内部转移处理.

- 选定流: 聚酯涂装粉末
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 醇酸涂料 (`paint`)

仅实际湿涂配方；使用自身溶剂成分与干固体含量.

- 选定流: 醇酸涂料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 异丙醇清洗溶剂 (`ipa`)

仅实际IPA清洗；区分新料补充、回用及回收.

- 选定流: 异丙醇清洗溶剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 交流电 (`finish_electricity`)

仅实际分配至该过程的低于1 kV用户侧消耗；共享服务仅取未分配余量.

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 废物流

###### 含金属清洗废水 (`wastewater`)

实际排放污水；分别记录各金属物种浓度.

- 选定流: 含金属清洗废水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`
- 来源:

###### 含金属表面处理污泥 (`sludge`)

实际湿污泥；使用自身固体、水及金属化验.

- 选定流: 含金属表面处理污泥
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 废异丙醇溶剂 (`spent_solvent`)

实际外部废溶剂；明确成分及处理路线.

- 选定流: 废异丙醇溶剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

##### 基本流

###### 异丙醇，空气 (`ipa_air`)

仅按物种实测向明确空气环境区室释放；捕集并非销毁.

- 选定流: 异丙醇，空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission`
- 来源:

### 过程：按配置装配 (`assembly`)

#### 输入

##### 产品流

###### 成品缝纫机框架 (`bought_frame`)

实际购入框架；不重复内含原料金属及铸造.

- 选定流: 成品缝纫机框架
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `singer-4423`

###### 成品缝纫机聚合物壳体 (`bought_housing`)

实际购入壳体；不同时计注塑料.

- 选定流: 成品缝纫机聚合物壳体
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 完整缝纫机电动机 (`bought_motor`)

电动设计购入电机；不重复绕组线及铁芯制造.

- 选定流: 完整缝纫机电动机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `singer-4423`

###### 组装缝纫机控制板 (`bought_control`)

电子设计购入组装板；不重复裸板及焊料.

- 选定流: 组装缝纫机控制板
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 缝纫机电动脚踏控制器 (`foot_control`)

仅实际随供电动脚踏控制器.

- 选定流: 缝纫机电动脚踏控制器
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `brother-1034d`

###### 成品缝纫机传动齿轮 (`gear`)

仅购入实际金属或聚合物牌号齿轮.

- 选定流: 成品缝纫机传动齿轮
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 成品缝纫机针 (`needle`)

安装及实际随供附件机针.

- 选定流: 成品缝纫机针
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 成品缝纫机压脚 (`presser`)

配置BOM中各实际压脚型号单独记录.

- 选定流: 成品缝纫机压脚
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 完整缝纫机旋梭 (`hook`)

仅旋梭成缝机构；不为弯针式机器预设.

- 选定流: 完整缝纫机旋梭
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `janome-712t`

###### 成品包缝弯针 (`looper`)

仅家用包缝机构.

- 选定流: 成品包缝弯针
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `brother-1034d`

###### 成品包缝切边刀 (`knife`)

仅实际包缝切边机构.

- 选定流: 成品包缝切边刀
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `brother-1034d`

###### 缝纫机绣花定位模块 (`embroidery`)

仅实际家用缝绣组合或家用专用绣花配置.

- 选定流: 缝纫机绣花定位模块
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `brother-se725`

###### 缝纫机绣框 (`hoop`)

仅实际随供绣框；未供选购绣框不纳入.

- 选定流: 缝纫机绣框
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `brother-se725`

###### 缝纫机脚踏驱动组件 (`treadle`)

仅实际随供手动或脚踏驱动；不预设消费者外部台架随供.

- 选定流: 缝纫机脚踏驱动组件
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `janome-712t`

###### 缝纫机台柜 (`table`)

仅实际整体随供机器配置；不含独立销售家具.

- 选定流: 缝纫机台柜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `janome-712t`

###### 可重复使用缝纫机保护箱 (`case`)

仅随供耐用附件箱；运输包装质量不进入产品分母.

- 选定流: 可重复使用缝纫机保护箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 缝纫机润滑油 (`lubricant`)

实际工厂润滑或随供初装油；不预设全寿命油耗.

- 选定流: 缝纫机润滑油
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 成品缝纫机梭芯 (`bobbin`)

实际安装或随供附件梭芯；声明材料及数量.

- 选定流: 成品缝纫机梭芯
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `brother-se725`

###### 随机器供货的聚酯缝纫线 (`supplied_thread`)

仅实际随供聚酯线轴或预绕梭芯线；不同实际纤维另列；不是工厂消耗试验线.

- 选定流: 随机器供货的聚酯缝纫线
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `brother-1034d`

###### 可重复使用缝纫机软防尘罩 (`dust_cover`)

仅实际随供指定纺织或聚合物耐用罩；与运输袋分开.

- 选定流: 可重复使用缝纫机软防尘罩
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `brother-se725`

###### 成品包缝切边收集盘 (`trim_trap`)

仅实际随供切边收集盘附件；声明确切壳体材料.

- 选定流: 成品包缝切边收集盘
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `brother-1034d`

###### 交流电 (`assembly_electricity`)

仅实际分配至该过程的低于1 kV用户侧消耗；共享服务仅取未分配余量.

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源:

### 过程：工厂调校与验收缝纫试验 (`test`)

#### 输入

##### 产品流

###### 聚酯缝纫试验线 (`test_thread`)

仅实际工厂试验线；记录确切纤维及领退用量.

- 选定流: 聚酯缝纫试验线
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test`
- 来源:

###### 棉机织缝纫试验布 (`test_fabric`)

仅实际棉试验布；其他实际试验布另列卡片.

- 选定流: 棉机织缝纫试验布
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test`
- 来源:

###### 交流电 (`test_electricity`)

仅实际分配至该过程的低于1 kV用户侧消耗；共享服务仅取未分配余量.

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 废物流

###### 已使用棉缝纫试验布样 (`test_waste`)

实际外弃布样；可重复试验夹具保持资本设备身份.

- 选定流: 已使用棉缝纫试验布样
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 不合格家用缝纫机 (`machine_reject`)

仅外运无法回收的不合格品；不能计入验收产品.

- 选定流: 不合格家用缝纫机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

### 过程：工厂共享服务余量 (`services`)

#### 输入

##### 产品流

###### 天然气，工厂气态供给 (`natural_gas`)

仅实际燃气炉或厂内锅炉；实测标准体积及自身密度和低位热值.

- 选定流: 天然气，工厂气态供给
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fuel`
- 来源:

###### 外购工艺热 (`heat`)

仅实际独立计量的交付能量MJ；核实总供热或已扣回热约定.

- 选定流: 外购工艺热
- 流属性/单位: Energy / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_heat。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_heat`
- 来源:

###### 交流电 (`services_electricity`)

仅实际分配至该过程的低于1 kV用户侧消耗；共享服务仅取未分配余量.

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 基本流

###### 二氧化碳，空气 (`carbon_dioxide`)

仅厂内燃料燃烧；使用自身碳平衡与实际氧化证据.

- 选定流: 二氧化碳，空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission`
- 来源:

###### 一氧化碳，空气 (`carbon_monoxide`)

仅物种特定烟气监测或匹配因子；不能从总碳推导.

- 选定流: 一氧化碳，空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission`
- 来源:

###### 二氧化氮，空气 (`nitrogen_dioxide`)

仅有已解析NO2物种证据；以NO2计的NOx不自动等于实际NO2.

- 选定流: 二氧化氮，空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission`
- 来源:

### 过程：包装及验收出厂 (`dispatch`)

#### 输入

##### 产品流

###### 瓦楞纸板运输箱 (`carton`)

仅实际包装规格；不进入验收机器净质量.

- 选定流: 瓦楞纸板运输箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 发泡聚苯乙烯保护垫 (`cushion`)

仅实际包装规格；不进入验收机器净质量.

- 选定流: 发泡聚苯乙烯保护垫
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 低密度聚乙烯保护袋 (`bag`)

仅实际包装规格；不进入验收机器净质量.

- 选定流: 低密度聚乙烯保护袋
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源:

###### 交流电 (`dispatch_electricity`)

仅实际分配至该过程的低于1 kV用户侧消耗；共享服务仅取未分配余量.

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 产品流

###### 家用缝纫机 (`reference_product`)

工厂门口已验收制造成品供货配置.

- 选定流: 家用缝纫机 `633bed4f-5fd3-4590-b645-8d8daeedaa00`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_mass`
- 来源:

## 7. 分配与共产品处理

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | all processes | 分配前细分路线及按配置生产；追溯直接BOM领料、机器工时、试验与计量。不跨配置平均。 |  |
| reject_rework | accepted_output | 期间分子Q保留全部可归属失败试验、废料、不合格品及返工负荷；N仅计验收数量。售出废料采用有依据的废物或共产品处理，并非自动替代原生金属抵扣。 |  |
| shared_residual | services | 逐项公用工程在相同场址、期间及单位下，核对外购输入加实际厂内生成减外送及净储存变化，与已分配制造、装配、试验及出厂负荷一致。共享服务仅将尚未分配消耗按实测因果驱动分配。不能在过程分表之上再叠加全厂总表。按计量、期间及不确定性证据调查负余量，不能截为零。 |  |
| heat_return | heat | 外购热为独立计量的交付能量MJ。若计算，采用供回流实际质量kg各乘自身实测压力温度下比焓MJ/kg并使用共同零点；区分总供热与供应方已净额口径，回热仅扣一次。厂内锅炉供热为内部输出；燃料、电力、水及排放的实际负荷计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | foreground_record | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 逐批或计量期间 | 同一声明生产期间 | 相同场址及配置 | 每台验收净质量 | 校准、采样不确定性及验收台账 |
| cp_material | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | 单一原子交换 | foreground_record | 牌号；批次；领用质量；供应状态；退料；期初期末库存；自身密度化验含水 | 采集校准计量称重及匹配发票、采样与库存；将Q归属同配置期间，保留不合格返工；计算q_item=Q/N。 | kg | 逐批或计量期间 | 同一声明生产期间 | 相同场址及配置 | 可归属交换数量 / 验收机器数量 | 校准、采样不确定性及验收台账 |
| cp_waste | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | 单一原子交换 | foreground_record | 废物物种；称重外运；去向；自身化验；干固体；库存；内部回料 | 采集校准计量称重及匹配发票、采样与库存；将Q归属同配置期间，保留不合格返工；计算q_item=Q/N。 | kg | 逐批或计量期间 | 同一声明生产期间 | 相同场址及配置 | 可归属交换数量 / 验收机器数量 | 校准、采样不确定性及验收台账 |
| cp_water | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | 单一原子交换 | foreground_record | 进出口计量；各流密度温度；投入含水；蒸发；库存；反应水；配对回流 | 采集校准计量称重及匹配发票、采样与库存；将Q归属同配置期间，保留不合格返工；计算q_item=Q/N。 | kg | 逐批或计量期间 | 同一声明生产期间 | 相同场址及配置 | 可归属交换数量 / 验收机器数量 | 校准、采样不确定性及验收台账 |
| cp_energy | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | 单一原子交换 | foreground_record | 输入总表；过程分表；生成；外送；储存；因果余量分配；kWh及电压 | 采集校准计量称重及匹配发票、采样与库存；将Q归属同配置期间，保留不合格返工；计算q_item=Q/N。 | MJ | 逐批或计量期间 | 同一声明生产期间 | 相同场址及配置 | 可归属交换数量 / 验收机器数量 | 校准、采样不确定性及验收台账 |
| cp_fuel | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | 单一原子交换 | foreground_record | 燃料身份；计量；标准条件；自身密度低位热值及碳；库存 | 采集校准计量称重及匹配发票、采样与库存；将Q归属同配置期间，保留不合格返工；计算q_item=Q/N。 | kg | 逐批或计量期间 | 同一声明生产期间 | 相同场址及配置 | 可归属交换数量 / 验收机器数量 | 校准、采样不确定性及验收台账 |
| cp_heat | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | 单一原子交换 | foreground_record | 独立交付MJ；总额或净额口径；供回流kg；温度；压力；自身比焓；共同零点 | 采集校准计量称重及匹配发票、采样与库存；将Q归属同配置期间，保留不合格返工；计算q_item=Q/N。 | MJ | 逐批或计量期间 | 同一声明生产期间 | 相同场址及配置 | 可归属交换数量 / 验收机器数量 | 校准、采样不确定性及验收台账 |
| cp_test | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | 单一原子交换 | foreground_record | 机器配置；验收不合格台账；循环；试验线布领退；电力；布样处理；返工 | 采集校准计量称重及匹配发票、采样与库存；将Q归属同配置期间，保留不合格返工；计算q_item=Q/N。 | kg | 逐批或计量期间 | 同一声明生产期间 | 相同场址及配置 | 可归属交换数量 / 验收机器数量 | 校准、采样不确定性及验收台账 |
| cp_emission | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | 单一原子交换 | foreground_record | 物种；环境区室；烟气体积条件；浓度；时间；溶剂去向；不确定性 | 采集校准计量称重及匹配发票、采样与库存；将Q归属同配置期间，保留不合格返工；计算q_item=Q/N。 | kg | 逐批或计量期间 | 同一声明生产期间 | 相同场址及配置 | 可归属交换数量 / 验收机器数量 | 校准、采样不确定性及验收台账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | 要求 | 证据 |
| --- | --- | --- | --- |
| species_emission | physical emissions records | 逐物种用实测浓度乘同步干烟气流量及时间，在匹配标准条件下积分；核算实际治理设施进出口及不确定性。CO2可使用自身燃料碳及实际氧化、残留碳和其他碳去向；碳平衡本身不能确定CO或NO2。以NO2当量表达的NOx并非实测分子NO2。未知排放保持未知，不能记零。 | Synchronized species sampling and flow records / 同步物种采样及流量记录 |
| same_configuration | reference_product | 验收序列台账、BOM配置、随供附件及校准净称重必须为同一期间；D为验收产品净质量总和，N为验收数量，M=D/N。D不含包装、不合格品、试验布或消费者自有台架。 | Calibration and acceptance ledger / 校准及验收台账 |
| period_conversion | inventory | 每个交换采集可归属期间Q，含不合格与返工负荷；相同配置q_item=Q/N，然后q_ref=q_item/M=Q/D。下列有限normalize_mass规则实施此转换；不得从宣传质量推定M或混合不同配置。 | Period numerator and denominator ledger / 期间分子分母台账 |
| physical_assays | physical material records | 每项金属或物种平衡保留投入、验收产品、废料、炉渣、污泥、废水、排放及库存质量，每一项均采用自身匹配化验及干湿基。加入实际反应生成或消耗；内部回料配对抵消。化合物总质量不等于所含金属或溶剂。体积换算采用每个流在其条件下自身实测密度。 | Matched sampling and stock records / 匹配采样及库存记录 |
| water_balance | physical water records | 外购或取水加各投入含水与期初库存，同产品或废物含水、蒸发、排放及期末库存闭合；纳入实际反应水及配对内部回水。逐项体积匹配密度及温度；不假定零损失。 | Water meters, moisture samples and stock / 水表、含水采样及库存 |
| solvent_balance | physical solvent records | 每种溶剂分别将投入及库存，同产品残留、回收溶剂、捕集介质、实际销毁、废水、其他非空气输出及实测空气释放闭合。捕集不能证明销毁，未解释余量不是空气排放。 | Solvent assays and treatment evidence / 溶剂化验及处理证据 |
| uncertainty | balances | 按实际称重、采样、库存、计量及分配综合不确定性和已知反应调查闭合；不采用统一数值容差、收率或损耗。区分未知、实测零及有证据的not_applicable。 | Uncertainty budget / 不确定性预算 |
| providers | upstream | 匹配实际部件加工状态、牌号、聚合物配方、电压、供给地域期间、供热回流口径、运输及废物处理供应者；声明替代及缺失关联。产品来源不能确定供应者。 | Supplier declarations / 供应商声明 |

## 9. 校验规则

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| scope | reference_product | 确认制造商家用设计及实际主要功能、家用绣花或包缝条件与供货配置；工业机器或独立家具及零件不能使用此输出。 | janome-712t; singer-4423; brother-se725; brother-1034d; juki-ddl8700 |
| measurement | inventory | 核实校准同配置质量、验收N及D、可归属Q、q_item以及每个非参考行normalize_mass应用；缺有限换算或跳过关系即不完整。 |  |
| double_count | make_buy | 检查条件性自制或外购矩阵、完整供应模块与内含原料、内部转移抵消、公用工程余量及外购热回流一次记账。 |  |
| balance | physical records | 校验每个材料或物种自身化验及含水、水库存反应回流，以及溶剂回收捕集销毁与非空气去向；无法解释闭合及缺物种证据须审查。 |  |
| utility_species | utilities and releases | 拒绝用运行功率估算制造能耗、仅总碳推断CO或NOx、用项目专用发电替代外购电网供给、全厂总表叠加分表及将负余量截零。 |  |
| completeness | dataset | 要求实际路线原子交换、所有未解决身份供应者范围披露、验收不合格及试验记录、来源适用性。计量契约通过不验证工厂实测数据，也不能建立已审阅发布就绪。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按配置家用机器工厂制造；下游模型须明确上游及情景关联 |
| excluded_use | 服装缝纫服务、寿命运行能耗或不同成缝机构的功能等效声明 |
| required_metadata | 参考限定；Q/N/D；自制外购及路线适用性；实际试验公用工程供应者状态 |
| required_quality_disclosure | 缺身份供应者；覆盖；不确定性；无行业范围；分配及排除证据 |
| update_trigger | 配置BOM材料牌号、场址路线、供给接口、试验或分配证据变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| janome-712t | handbook | Janome Model 712T Instruction Book, 749-800-011 (E-N), Printed in Taiwan, undated; pages 2–4, 9 and final installation page. https://www.janome.com/wp-content/uploads/2014/10/Inst-book-712T-En.pdf | 脚踏机构、附件及所需外部脚踏台；无工厂数量 |
| singer-4423 | official_guidance | SINGER Heavy Duty 4423 Sewing Machine, publisher product body snapshot 2026-10-02. https://www.singer.com/products/singer-4423-heavy-duty-sewing-machine | 电动机械配置、金属框架及不锈钢底板；未给出框架牌号或工厂工艺 |
| brother-se725 | official_guidance | Brother SE725 Computerized Sewing and Embroidery Machine, publisher product body snapshot 2026-10-02. https://www.brother-usa.com/p/sewing-embroidery/SE725 | 家用缝纫绣花组合、电子控制及随附绣框 |
| brother-1034d | official_guidance | Brother 1034D Serger, publisher product body snapshot 2026-10-02. https://www.brother-usa.com/p/sergers-coverstitch/1034D | 家用包缝、差动送料、弯针及随附脚控 |
| juki-ddl8700 | official_guidance | JUKI DDL-8700 1-needle Lockstitch Machine, industrial product body snapshot 2026-10-02. https://juki.com/apparel/ddl-8700 | 工业反例；锁式线迹本身不能证明家用范围 |
