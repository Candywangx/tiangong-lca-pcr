---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.wheeled-agricultural-tractor
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 轮式农业拖拉机制造

## 1. 范围与适用性

本 PCR 覆盖新制完整乘坐驾驶轮式农业牵引动力单元的前景制造，具有明确驾驶位、传动系统及拖拉机侧农具接口。常规柴油及纯电驱配置分别记录。从坯料及部件接收，经实际场址工序到工厂验收，以声明出厂门为生产基准。这是制造参考，不表示公顷、牵引作功或寿命期服务等效。

排除已有独立语义 PCR 覆盖的手扶式和全履带式拖拉机；半履带改装及轮履混合产品须另有经审查参考定义。排除单独提供的犁、装载机、旋耕机、拖车及其他农具，即使整包销售。排除公路牵引车、工业平台牵引车、自走收获机、不完整套件、再制造、农场使用、作物产量、土壤效应、维修及报废。工厂证据用于初始化实际工序路线，不要求所有制造商必须在厂内制造、焊接或涂装全部零件。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.wheeled-agricultural-tractor |
| classification_refs | CPC 3.0 44149，其他农业拖拉机；配置轮式范围较窄；仅为分类背景 |
| covered_products | 新制完整乘坐驾驶轮式农业拖拉机，声明柴油或纯电驱传动配置 |
| excluded_products | 手扶及全履带拖拉机；半履带改装；外挂农具；其他车辆功能及寿命期服务 |
| representative_product | 一台带序列号的验收合格轮式拖拉机配置；实测 M，不设虚构典型整机重量 |
| production_route | 身份明确的外购部件及实际结构制造和涂装、传动及车轮驾驶位集成、首次加注和工厂验收 |
| market_state | 声明出厂门处完整验收合格拖拉机，明确安装配重及保留液体，农具排除 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明完整轮式农业牵引动力单元及安装的拖拉机接口 |
| How much | 1 kg 验收合格完整拖拉机净质量；按台采集并使用实测 M 换算 |
| How well | 符合有记录配置专用动力、转向、制动、防护、泄漏及安装接口工厂验收要求；不表示田间性能等效 |
| How long or cycle | 一次制造及验收周期；不假定作业寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他农用拖拉机 `5e388b2c-6aba-46c1-b7a0-0873b00713a6` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商型号及序列号；配置版本；乘坐驾驶轮式农业功能；驱动轮及车桥布置；轮胎轮辋及轮距；柴油或电驱动力结构；发动机排放硬件或电池化学体系、BMS、电机及逆变器；传动形式；转向制动；驾驶室或开放平台、防护及座椅；安装悬挂、动力输出、液压及控制选装；供应商总成边界；安装配重和可拆交付部件；保留油、冷却液、燃料、制冷剂及电驱荷电状态；含皮重及验收凭据的净质量 M；排除农具和包装；工厂、场址及时期；实际路线、门点及上游覆盖 |

每项限定信息须在数据集元数据、过程说明或参考流备注声明。M 对应相同验收交付配置：包含安装部件及保留首次加注，排除运输支撑、田间载荷及分离农具。通过 cp_mass 采集配置专用净质量。发动机额定功率、电池 kWh、目录运输重量及作业配重额定值不是 M 换算因子。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `count_engine` | diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 交换分子保留实际安装发动机件数。另称指定总成以核对物料表质量，不允许通用件数质量换算。 |
| `meter_units` | 电力、天然气及液体 | Net calorific value; Volume; Mass | MJ; m3; kg | 保持每项交换属性。已核验能量单位组换算为 3.6 MJ/kWh；任何液体或气体质量体积换算须有实测密度、成分及参考条件。属性 meanValue 为 1 不是流体密度。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告制造场址接收外购坯料、铸件毛坯及明确成品部件 |
| starting_condition_role | 前景制造模块 |
| product_classification_scope | 完整乘坐驾驶轮式农业牵引动力单元；分类背景不包含拖拉机田间服务 |
| recursive_input_rule | 购入部分或同类别拖拉机按供应商配置及边界定义为单一总成；只计新增前景操作，不重复已含部件 |
| upstream_dataset_requirement | 链接与总成完整性、路线、属性、地域及时期匹配的供应商数据集；明确保留缺失提供者及代理决定 |
| disclosure | 注明实际门点、内部转移、外包工序、公用工程覆盖、运输及未链接上游阶段。接收到出厂前景不自动等于完整摇篮到大门 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_actual` | all processes | 纳入实际前景制造、装配、首次加注及工厂试验。供入发动机、变速器和驾驶室保留上游边界；外包工序需要明确提供者链接，不虚设厂内交换。 | `fendt-factory` |
| `boundary_bom` | all inventory rows | 核对完整配置物料表；将遗漏实际材料、部件、包装物、机加工润滑剂、焊接气体、液体配方、过滤器、空调制冷剂和废物逐项增列具体原子卡。缺席须由设计或工序记录证明，未知不等于零。 |  |
| `boundary_service` | reference product | 排除分离农具、作物产出、牵引作功、寿命期充电或燃料使用及田间服务。安装动力替代路线分别保留，不声称等质量性能等效。 | `fendt-electric` |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 结构件制造及壳体机加工 | conditional | 报告场址实际实施这些操作；外购成品总成跳过此工序。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `joining` | 驾驶室及支撑连接 | conditional | 前景内实施连接。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `finishing` | 清洗及表面涂装 | conditional | 声明前景门内实际实施清洗或涂装。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `powertrain` | 动力、传动及车桥集成 | required | 每台完整拖拉机；动力专用行仅按交付路线适用。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `vehicle` | 车轮、转向、制动及驾驶位装配 | required | 每台完整轮式拖拉机；驾驶位行对应实际驾驶室或开放平台配置。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `implements_interface` | 悬挂、动力输出、液压及控制集成 | conditional | 拖拉机安装指定设备；挂接农具仍为独立产品。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `acceptance` | 总装及工厂验收 | required | 每台验收合格完整拖拉机。 | foreground | 一台验收合格配置机器，使用 M 归一化 |
| `packing` | 出厂防护 | conditional | 报告出厂门内实际使用防护包装。 | foreground | 一台验收合格配置机器，使用 M 归一化 |

实际制造 → 连接 → 表面处理，供入动力传动、车轮驾驶位及接口集成 → 总装验收 → 可选出厂防护。外购成品总成在安装时直接进入；箭头为内部转移，不作额外采购。即使位于必需集成阶段，每张卡也按其特定材料和路线适用。

### 过程：结构件制造及壳体机加工 (`fabrication`)

记录机罩、驾驶室结构、支撑及外购铸件毛坯按图纸进行的切割、成形和机加工。代表性起点是供入金属坯料及铸件毛坯，不假定厂内铸造。披露外包铸造及其上游缺口。送至连接的内部转移不是新采购。

#### 输入

##### 产品流

###### 钢板 (`steel_plate`)

仅限与领用规格匹配的热轧低合金高强度钢板；核对退料及切割边角料。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`fendt-factory`

###### 灰铸铁拖拉机变速器壳体毛坯 (`housing_blank`)

仅在厂内机加工此具体铸件毛坯时适用；记录牌号和毛坯质量，不使用通用铸铁金属代替。

- 选定流：灰铸铁拖拉机变速器壳体毛坯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`fendt-factory`

###### 工厂接入端电网交流电 (`fabrication_power`)

仅计量此过程，记录工厂接入电压及地域。采用与实测接入端匹配的电压专用供电身份。电驱充电试验电力仅在验收中计入。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`fendt-factory`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

离开过程的未处理清洁切割边角料；称重并记录回收去向。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`fendt-factory`

###### 钢废料，机加工切屑 (`steel_chips`)

仅限常规钢机加工洁净切屑；污染切屑须按成分另列。

- 选定流：钢废料，机加工切屑 `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`fendt-factory`

###### 灰铸铁机加工切屑 (`iron_chips`)

仅限声明灰铸铁壳体的机加工切屑；与钢分开。

- 选定流：灰铸铁机加工切屑
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`fendt-factory`

### 过程：驾驶室及支撑连接 (`joining`)

遵循驾驶室及支撑部件实际焊接工艺；机器人和人工工位公用工程覆盖不同则分别测量。自保护焊丝行按条件适用，不作为普遍焊接规定。仅在产生时采集焊渣，不推定必然烟尘排放。

#### 输入

##### 产品流

###### 药芯焊丝 (`welding_wire`)

仅限碳钢自保护药芯焊；记录牌号和焊丝盘领退。其他焊接路线须另列耗材。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_joining`
- 来源：`fendt-factory`

###### 工厂接入端电网交流电 (`joining_power`)

仅计量此过程，记录工厂接入电压及地域。采用与实测接入端匹配的电压专用供电身份。电驱充电试验电力仅在验收中计入。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_joining`
- 来源：`fendt-factory`

#### 输出

##### 废物流

###### 碳钢药芯焊固体焊渣 (`welding_slag`)

仅限实际焊接路线收集的固体渣；称重并保留成分及处理凭据，不用炼钢渣代替。

- 选定流：碳钢药芯焊固体焊渣
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_joining`
- 来源：`fendt-factory`

### 过程：清洗及表面涂装 (`finishing`)

记录各涂装部件表面积、配方及固化路线。粉末涂装与水性环氧电泳卡是不同可行路线，只有实际分层记录支持时才同时适用。工厂车身涂装证据未指定这些配方，也未要求燃气加热。区分循环水、回收粉末及新投入。

#### 输入

##### 产品流

###### 涂料（粉末） (`powder_coating`)

仅用于实际树脂粉末涂装；记录牌号、新粉、回收循环及涂膜面积。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`fendt-factory`

###### 水性环氧电泳涂料配方 (`epoxy_ecoat`)

仅限实际有记录的环氧电泳配方；保留固含量及配方质量。

- 选定流：水性环氧电泳涂料配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`fendt-factory`

###### 工艺用水 (`process_water`)

供湿式清洗的经处理工业供水；称量，或用实际密度和条件换算实测体积。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`fendt-factory`

###### 气态天然气 (`curing_gas`)

仅用于实际固化的管输气态天然气；记录成分及气表压力、温度和参考状态。燃气加热不是必需。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`fendt-factory`

###### 工厂接入端电网交流电 (`finishing_power`)

仅计量此过程，记录工厂接入电压及地域。采用与实测接入端匹配的电压专用供电身份。电驱充电试验电力仅在验收中计入。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`fendt-factory`

#### 输出

##### 废物流

###### 未回收固体树脂粉末涂装过喷料 (`powder_overspray`)

仅限扣除内部粉末回收后输出送处理的过喷料；记录树脂及去向。

- 选定流：未回收固体树脂粉末涂装过喷料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`fendt-factory`

###### 环氧电泳涂料污泥 (`ecoat_sludge`)

仅限实际移出过程并分类的环氧电泳污泥；记录含水及固含量和处理去向。

- 选定流：环氧电泳涂料污泥
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`fendt-factory`

###### 送处理的金属零件清洗漂洗废水 (`rinse_wastewater`)

仅限移交处理；记录出口数量及污染成分；不是基础水资源取用或直接水体污染物流。

- 选定流：送处理的金属零件清洗漂洗废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`fendt-factory`

##### 基本流

###### 二氧化碳（化石源） (`curing_fossil_co2`)

仅限实际燃气固化向空气未特指子介质排放的可归属实测化石源 CO2。使用因子须另核验燃料成分和方法；此处不设因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`fendt-factory`

### 过程：动力、传动及车桥集成 (`powertrain`)

记录唯一声明的传动配置，包括驱动轮、变速器及车桥布置。柴油发动机与纯电驱行是不同安装设计，不在常规柴油拖拉机中强制同时纳入。外购变速器或车桥只计一次，保留供应商总成边界；不在制造工序重复其壳体。外购柴油发动机按件数交换，另采集部件实测质量以核对物料表。

#### 输入

##### 产品流

###### 柴油发动机 (`diesel_engine`)

仅用于柴油配置安装的外购柴油发动机；分别采集安装件数及实际部件质量，记录排放硬件完整性。不将 Item(s) 当作 kg。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：Number of items / Item(s)
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`mf-factory`

###### 轮式拖拉机变速器总成 (`transmission`)

仅限一种明确机械或液压机械传动总成；记录精确类型及包含的壳体、离合器和油边界。

- 选定流：轮式拖拉机变速器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`mf-factory`

###### 轮式拖拉机驱动桥总成 (`drive_axle`)

仅限安装的驱动桥，明确差速及终传动；识别包含的制动及油，避免重复。

- 选定流：轮式拖拉机驱动桥总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`mf-factory`

###### 完整拖拉机锂离子动力电池包 (`traction_battery`)

仅用于安装的纯电驱电池包；声明电芯化学体系、容量、壳体、BMS、冷却边界及实测总成质量。Fendt 公告未识别电芯体系。

- 选定流：完整拖拉机锂离子动力电池包
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`fendt-electric`

###### 电驱轮式拖拉机牵引电机总成 (`traction_motor`)

仅用于安装的电牵引电机；说明绕组及磁体结构和总成边界。

- 选定流：电驱轮式拖拉机牵引电机总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`fendt-electric`

###### 轮式拖拉机牵引电机逆变器总成 (`traction_inverter`)

仅用于安装的动力逆变器；记录额定值、冷却和壳体边界。

- 选定流：轮式拖拉机牵引电机逆变器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`fendt-electric`

###### 工厂接入端电网交流电 (`powertrain_power`)

仅计量此过程，记录工厂接入电压及地域。采用与实测接入端匹配的电压专用供电身份。电驱充电试验电力仅在验收中计入。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`mf-factory`

#### 输出

### 过程：车轮、转向、制动及驾驶位装配 (`vehicle`)

记录轮胎结构、轮辋和轮距、转向及制动总成。外购驾驶室可含玻璃、座椅、空调及控制器：披露其范围，未含部件另列。开放平台拖拉机保留安装座椅及防护架，不虚设驾驶室。仅在定义交付配置中包含时纳入安装配重；排除外部载荷。

#### 输入

##### 产品流

###### 农业拖拉机新充气橡胶轮胎 (`pneumatic_tyre`)

记录每种安装轮胎尺寸、类型及称量质量；轮胎和轮辋分开。采集质量，不假定单胎重量。

- 选定流：农业拖拉机新充气橡胶轮胎
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_vehicle。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_vehicle`
- 来源：`fendt-factory`

###### 农业拖拉机钢制车轮轮辋 (`steel_rim`)

仅限声明尺寸及载荷等级的安装钢轮辋。

- 选定流：农业拖拉机钢制车轮轮辋
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_vehicle。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_vehicle`
- 来源：`fendt-factory`

###### 农业拖拉机转向器总成 (`steering_gear`)

仅限声明的转向器；采集供应商完整性和净质量。未包含的液压转向执行器另列。

- 选定流：农业拖拉机转向器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_vehicle。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_vehicle`
- 来源：`fendt-factory`

###### 农业拖拉机盘式制动器总成 (`brake_assembly`)

仅用于安装的明确盘式制动总成；保留摩擦材料及车桥供应商边界。其他制动形式另列。

- 选定流：农业拖拉机盘式制动器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_vehicle。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_vehicle`
- 来源：`fendt-factory`

###### 农业拖拉机驾驶室总成 (`cab_assembly`)

仅用于安装的外购完整驾驶室，声明玻璃、空调和座椅包含范围；不重复其已含部件。开放平台不启用驾驶室行。

- 选定流：农业拖拉机驾驶室总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_vehicle。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_vehicle`
- 来源：`fendt-factory`

###### 农业拖拉机驾驶员座椅总成 (`operator_seat`)

仅用于驾驶室之外单购座椅；记录悬置及称量总成质量。

- 选定流：农业拖拉机驾驶员座椅总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_vehicle。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_vehicle`
- 来源：`fendt-factory`

###### 农业拖拉机钢制翻车防护架 (`protection_frame`)

仅用于外购驾驶室未含的安装防护架；说明配置及有记录验收凭据，不虚构认证标准。

- 选定流：农业拖拉机钢制翻车防护架
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_vehicle。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_vehicle`
- 来源：`fendt-factory`

###### 工厂接入端电网交流电 (`vehicle_power`)

仅计量此过程，记录工厂接入电压及地域。采用与实测接入端匹配的电压专用供电身份。电驱充电试验电力仅在验收中计入。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_vehicle。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_vehicle`
- 来源：`fendt-factory`

#### 输出

### 过程：悬挂、动力输出、液压及控制集成 (`implements_interface`)

区分内置悬挂、动力输出、阀回路及电子设备和与其连接的农具。采集实际安装选装及首次加注，核对供应商预加注。矿物液压油为特定路线；生物基或合成替代品须有自身精确交换，不在此身份下替代。

#### 输入

##### 产品流

###### 钢制拖拉机三点悬挂总成 (`hitch`)

仅用于安装的拖拉机连杆机构，不是拖车挂钩或挂接犁；说明连杆几何和液压缸包含边界。

- 选定流：钢制拖拉机三点悬挂总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_implements_interface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_implements_interface`
- 来源：`fendt-electric`

###### 拖拉机动力输出轴总成 (`pto`)

仅用于明确转速、联接及防护配置的安装动力输出单元；不是外接农具传动轴。

- 选定流：拖拉机动力输出轴总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_implements_interface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_implements_interface`
- 来源：`fendt-electric`

###### 农业拖拉机液压泵总成 (`hydraulic_pump`)

仅限实际回路类型和排量明确的泵；不以完整液压动力单元替代。

- 选定流：农业拖拉机液压泵总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_implements_interface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_implements_interface`
- 来源：`fendt-electric`

###### 双作用拖拉机液压缸 (`hydraulic_cylinder`)

仅用于安装的液压缸，注明缸径、行程及压力。

- 选定流：双作用拖拉机液压缸
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_implements_interface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_implements_interface`
- 来源：`fendt-electric`

###### 液压软管 (`hydraulic_hose`)

记录安装软管质量、增强层及压力等级；排除供应商总成已含接头。

- 选定流：液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_implements_interface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_implements_interface`
- 来源：`fendt-electric`

###### 液压油 (`hydraulic_fluid`)

仅限与声明路线匹配的实际精炼矿物液压油加注；采集牌号、保留质量及供应商预加注。生物基油另列。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_implements_interface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_implements_interface`
- 来源：`fendt-electric`

###### 绝缘铜拖拉机控制电缆 (`control_cable`)

仅用于绝缘明确且以质量计的安装铜控制电缆。电缆长度换算需要实测结构专用单位长度质量。

- 选定流：绝缘铜拖拉机控制电缆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_implements_interface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_implements_interface`
- 来源：`fendt-electric`

###### 农业拖拉机电子控制模块 (`controller`)

仅限精确安装控制器版本，不用 PLC、传感器及柜内件集合。

- 选定流：农业拖拉机电子控制模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_implements_interface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_implements_interface`
- 来源：`fendt-electric`

###### 工厂接入端电网交流电 (`implements_interface_power`)

仅计量此过程，记录工厂接入电压及地域。采用与实测接入端匹配的电压专用供电身份。电驱充电试验电力仅在验收中计入。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_implements_interface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_implements_interface`
- 来源：`fendt-electric`

#### 输出

### 过程：总装及工厂验收 (`acceptance`)

保留与序列号关联的装配、扭矩、泄漏、转向制动及配置动力/动力输出/悬挂试验凭据。仅测试安装功能。工厂发动机试验耗油与交付残留燃料分开。电驱机器计量充电试验电力并声明荷电状态；不将存储 kWh 换算电池质量。不纳入寿命期农场作业。

#### 输入

##### 产品流

###### 钢螺钉 (`steel_screw`)

仅限明确钢螺钉；存在螺母、螺栓和垫圈时另列交换。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`mf-factory`

###### 铅酸蓄电池 (`starter_battery`)

仅用于实际铅酸启动蓄电池，一般对应柴油路线；采集含电解液净质量，避免供应商重复。

- 选定流：铅酸蓄电池 `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`mf-factory`

###### 精炼矿物发动机润滑油 (`engine_oil`)

仅限发动机供货未含的实际矿物机油首次加注；记录牌号及保留质量。不在矿物油定义下替代合成油。

- 选定流：精炼矿物发动机润滑油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`mf-factory`

###### 乙二醇水溶液拖拉机冷却液 (`coolant`)

仅限实际指定的此冷却液配方；记录乙二醇质量分数、添加剂及实测混合物质量。记录实际浓度，不假定通用混合物。

- 选定流：乙二醇水溶液拖拉机冷却液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`mf-factory`

###### 柴油 (`test_diesel`)

仅限工厂柴油发动机试车实测消耗燃料；记录化石及生物源比例，区分交付保留燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`mf-factory`

###### 工厂接入端电网交流电 (`acceptance_power`)

仅计量此过程，记录工厂接入电压及地域。采用与实测接入端匹配的电压专用供电身份。电驱充电试验电力仅在验收中计入。

- 选定流：工厂接入端电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`mf-factory`

#### 输出

##### 产品流

###### 其他农用拖拉机 (`finished_machine`)

严格为 1 kg 验收合格配置完整拖拉机净质量，包含其安装部件；单独供货的备件及外挂农具不作为此输出。

- 选定流：其他农用拖拉机 `5e388b2c-6aba-46c1-b7a0-0873b00713a6`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`mf-factory`

##### 基本流

###### 二氧化碳（化石源） (`test_fossil_co2`)

仅限工厂燃烧向空气未特指子介质的可归属实测化石源 CO2；不代表农场作业或生物源排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`mf-factory`

### 过程：出厂防护 (`packing`)

按材质记录实测运输支撑，从拖拉机 M 排除。自行驶出厂不意味着使用木箱。其他防护膜或绑带须按材质单列交换。

#### 输入

##### 产品流

###### 窑干锯材（针叶材） (`timber_support`)

仅用于实际使用的窑干针叶锯材支撑；记录树种及路线，从 M 排除。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`fendt-factory`

#### 输出

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacture | 按精确动力传动和交付配置分离工单；优先直接领料、测量及工单。当共用操作无法直接分离时，采集实际机时或计量负荷等因果驱动量，工单份额为其驱动量除以全部覆盖工单驱动量。记录依据及覆盖分母；不允许无解释跨型号台数分配。 |  |
| `allocation_recovery` | waste and internal reuse | 将内部复用与库存、新投入及回收粉末或边角料核对，不把循环计作重复新采购。输出废物记录实测数量及去向，不自动给予避免原生材料抵扣。有价值共产品须单独确认状态，先分离直接过程，再审查剩余分配。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收净整机 | weighing_record | 型号；配置；序列号；验收净质量 M；秤编号；加注状态；配重；排除农具；包装皮重 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台或有代表性同配置批次 | 与工单相同报告制造时期 | 声明制造场址及配置 | 每台验收净质量 | 秤校准、皮重、配置及验收凭据 |
| `cp_fabrication` | fabrication | 各明确原子交换 | measured_order_record | 工单；序列号及配置；物项牌号；领用；退回；库存变化；交换量；安装件数；部件质量；供应商范围；仪表单位及状态；验收台数；废物出口；分配驱动量；排放质量 | 使用物项物料表质量、件数及领退库存核对；校准公用工程分表和实测参考状态；分类废物称重及凭据；启用燃烧行时采集可归属实测排放。保留可追溯部件和供应商范围凭据。 | 按各行 kg、MJ、m3 或 Item(s) | 逐工单及批次汇总 | 声明连续制造时期 | 结构件制造及壳体机加工 | 可归属交换数量 / 验收机器数量 | 物料表、仪表校准、废物移交及试验记录 |
| `cp_joining` | joining | 各明确原子交换 | measured_order_record | 工单；序列号及配置；物项牌号；领用；退回；库存变化；交换量；安装件数；部件质量；供应商范围；仪表单位及状态；验收台数；废物出口；分配驱动量；排放质量 | 使用物项物料表质量、件数及领退库存核对；校准公用工程分表和实测参考状态；分类废物称重及凭据；启用燃烧行时采集可归属实测排放。保留可追溯部件和供应商范围凭据。 | 按各行 kg、MJ、m3 或 Item(s) | 逐工单及批次汇总 | 声明连续制造时期 | 驾驶室及支撑连接 | 可归属交换数量 / 验收机器数量 | 物料表、仪表校准、废物移交及试验记录 |
| `cp_finishing` | finishing | 各明确原子交换 | measured_order_record | 工单；序列号及配置；物项牌号；领用；退回；库存变化；交换量；安装件数；部件质量；供应商范围；仪表单位及状态；验收台数；废物出口；分配驱动量；排放质量 | 使用物项物料表质量、件数及领退库存核对；校准公用工程分表和实测参考状态；分类废物称重及凭据；启用燃烧行时采集可归属实测排放。保留可追溯部件和供应商范围凭据。 | 按各行 kg、MJ、m3 或 Item(s) | 逐工单及批次汇总 | 声明连续制造时期 | 清洗及表面涂装 | 可归属交换数量 / 验收机器数量 | 物料表、仪表校准、废物移交及试验记录 |
| `cp_powertrain` | powertrain | 各明确原子交换 | measured_order_record | 工单；序列号及配置；物项牌号；领用；退回；库存变化；交换量；安装件数；部件质量；供应商范围；仪表单位及状态；验收台数；废物出口；分配驱动量；排放质量 | 使用物项物料表质量、件数及领退库存核对；校准公用工程分表和实测参考状态；分类废物称重及凭据；启用燃烧行时采集可归属实测排放。保留可追溯部件和供应商范围凭据。 | 按各行 kg、MJ、m3 或 Item(s) | 逐工单及批次汇总 | 声明连续制造时期 | 动力、传动及车桥集成 | 可归属交换数量 / 验收机器数量 | 物料表、仪表校准、废物移交及试验记录 |
| `cp_vehicle` | vehicle | 各明确原子交换 | measured_order_record | 工单；序列号及配置；物项牌号；领用；退回；库存变化；交换量；安装件数；部件质量；供应商范围；仪表单位及状态；验收台数；废物出口；分配驱动量；排放质量 | 使用物项物料表质量、件数及领退库存核对；校准公用工程分表和实测参考状态；分类废物称重及凭据；启用燃烧行时采集可归属实测排放。保留可追溯部件和供应商范围凭据。 | 按各行 kg、MJ、m3 或 Item(s) | 逐工单及批次汇总 | 声明连续制造时期 | 车轮、转向、制动及驾驶位装配 | 可归属交换数量 / 验收机器数量 | 物料表、仪表校准、废物移交及试验记录 |
| `cp_implements_interface` | implements_interface | 各明确原子交换 | measured_order_record | 工单；序列号及配置；物项牌号；领用；退回；库存变化；交换量；安装件数；部件质量；供应商范围；仪表单位及状态；验收台数；废物出口；分配驱动量；排放质量 | 使用物项物料表质量、件数及领退库存核对；校准公用工程分表和实测参考状态；分类废物称重及凭据；启用燃烧行时采集可归属实测排放。保留可追溯部件和供应商范围凭据。 | 按各行 kg、MJ、m3 或 Item(s) | 逐工单及批次汇总 | 声明连续制造时期 | 悬挂、动力输出、液压及控制集成 | 可归属交换数量 / 验收机器数量 | 物料表、仪表校准、废物移交及试验记录 |
| `cp_acceptance` | acceptance | 各明确原子交换 | measured_order_record | 工单；序列号及配置；物项牌号；领用；退回；库存变化；交换量；安装件数；部件质量；供应商范围；仪表单位及状态；验收台数；废物出口；分配驱动量；排放质量 | 使用物项物料表质量、件数及领退库存核对；校准公用工程分表和实测参考状态；分类废物称重及凭据；启用燃烧行时采集可归属实测排放。保留可追溯部件和供应商范围凭据。 | 按各行 kg、MJ、m3 或 Item(s) | 逐工单及批次汇总 | 声明连续制造时期 | 总装及工厂验收 | 可归属交换数量 / 验收机器数量 | 物料表、仪表校准、废物移交及试验记录 |
| `cp_packing` | packing | 各明确原子交换 | measured_order_record | 工单；序列号及配置；物项牌号；领用；退回；库存变化；交换量；安装件数；部件质量；供应商范围；仪表单位及状态；验收台数；废物出口；分配驱动量；排放质量 | 使用物项物料表质量、件数及领退库存核对；校准公用工程分表和实测参考状态；分类废物称重及凭据；启用燃烧行时采集可归属实测排放。保留可追溯部件和供应商范围凭据。 | 按各行 kg、MJ、m3 或 Item(s) | 逐工单及批次汇总 | 声明连续制造时期 | 出厂防护 | 可归属交换数量 / 验收机器数量 | 物料表、仪表校准、废物移交及试验记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

对同质配置工单核对领退及实测库存变化，计量实际工序，分配有记录共用负担，再将可归属总量除以验收拖拉机台数得到 q_item。时期内返工和拒收负担仍留在验收产出负担内；披露在制库存及废物。M 在相同交付加注及配重状态测量。件数投入归一化后仍以每 kg 的件数为分子。同配置净质量变化时，用可归属交换总量除以验收净质量总量并保留逐序列号记录；分离不兼容配置，不对其平均。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all rows | 将产品、安装选装及部件完整性追溯序列号配置；核对首次加注及外购总成包含范围，避免重复质量或投入。 | 配置物料表及供应商边界 |
| `quality_balance` | stock and utilities | 核对原料库存、部件、验收净质量、拒收废物及库存变化；以实测证据解释损失及密度参考状态换算。不采用无依据成材率因子。 | 称量、库存、仪表及移交记录 |
| `quality_coverage` | all processes | 覆盖声明场址和连续时期；披露起止、外包缺口、缺失量及未启用路线。按实测记录设配置专用 QA 限值；制造商描述不提供制造强度范围。 | 工单覆盖、校准及完整性核对 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | 要求完整乘坐驾驶轮式牵引单元、正实测 M、配置交付加注配重及明确排除农具和皮重。拒绝将履带手扶拖拉机或不完整套件置于此参考。 |  |
| `validate_identity` | all inventory rows | 检查单一原子交换、公开流身份、参考属性及单位组、分子单位和路线。发动机件数不是质量，电池容量不是包质量，水资源不是送处理废水。完全链接数据集发布前须解决空身份。 |  |
| `validate_amount` | all inventory rows | 要求链接验收产出的采集及归一化凭据；不重复供应商部件或内部转移。核验实际物料表扩展、库存返工分配及仪表覆盖。未知量为待证据，不作零。 |  |
| `validate_emissions` | combustion rows | 仅在声明空气子介质有可归属实测工厂燃烧排放时启用化石源 CO2；不替代田间作业或生物源 CO2。其他已证实排放按物质和介质单列；NO、NO2 和 N2O 是不同身份。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景配置轮式农业拖拉机制造数据集 |
| downstream_use | secondary_dataset；background_dataset，合格审查后且明确上游覆盖 |
| allowed_use | 相同配置、属性、门点、场址及时期的供应链制造建模 |
| excluded_use | 公顷作物产量或寿命期能耗比较；等质量牵引等效；履带手扶拖拉机代理；缺乏上游链接的完整摇篮到大门声明 |
| required_metadata | 参考限定信息；实测 M 及验收加注状态；精确动力及传动；完整物料表和供应商范围；场址时期门点；实际工序路线；采集分配及背景链接 |
| required_quality_disclosure | 缺失流身份及量值；测量不确定性；未启用替代路线；实际增列交换；历史来源条件；外包及未链接上游阶段 |
| update_trigger | 动力传动、车轮、驾驶位或农具接口变化；供应商完整性或涂装加注变化；实测 M 修订；场址时期供给变化；证据缺口解决 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `fendt-factory` | literature | [Fendt Brand — Factory network](https://www.fendt.com/au/about-us/locations) | 拖拉机工厂及驾驶室生产具名段落：金属加工、连接、车身涂装、车轮及驾驶室安装。仅工厂案例，不作普遍配方或数量；排除割草机及青贮收获机段落。 |
| `mf-factory` | handbook | [A classic visit with Massey Ferguson](https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/assets/discover-mf/manufacturing/beauvais/brochure/17756_MF_Factory_tour_brochure_PDF_V11B_Angl_UB.pdf) | A-A-17756，2023 英文；PDF 第 4 页工厂参观段落识别 GIMA 变速器生产和拖拉机装配线。仅历史场址案例；不推定日程、产能、能耗或整机质量。 |
| `fendt-electric` | literature | [Fully battery-electric: The Fendt e100 V Vario](https://www.fendt.com/us/fully-battery-electric-the-fendt-e100-v-vario-pc-23) | 2023-11-12 型号公告，e107 V Vario 动力段落；历史电池、电机及变速器配置替代案例。不确认现行供货、电芯化学体系、制造量、净质量或寿命。 |
