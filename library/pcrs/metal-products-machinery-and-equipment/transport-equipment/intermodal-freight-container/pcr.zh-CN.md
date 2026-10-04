---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.intermodal-freight-container
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 封闭钢制干货联运集装箱制造

## 1. 范围与适用性

本候选 PCR 覆盖新制完整封闭钢制干货联运集装箱，配置胶合板地板及声明门布局。前景始于文件支持坯料部件接收，止于空箱验收及声明制造者出厂门。采集实际坯料成形结构连接表面准备涂装地板门安装验收及制造采购范围。仅有依据时链接供应商上游；本接收到出厂前景本身不构成完整摇篮到大门覆盖。[来源：`seabox-dry`、`seabox-manufacturing`]

排除冷藏罐式开顶平架散装及非钢非胶合板变型、交换箱航空集装器海上专用箱、建筑储存改装维修、货物装卸运输运营维护报废。CPC 49221 更宽。现有机动车车身方法不覆盖独立联运角件接口空箱验收胶合板地板配置，不提升旧分类脚手架。不纳入运输服务。科学审查仍待完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.intermodal-freight-container |
| classification_refs | CPC 3.0 49221；较窄封闭钢制干货箱制造范围，仅背景 |
| covered_products | 新制完整空载封闭钢制干货箱含胶合板地板声明尺寸门结构 |
| excluded_products | 其他箱体结构运输储存服务改装 |
| representative_product | 一个序列号关联完整验收空箱及实测净 M |
| production_route | 条件切割成形框架箱壳连接条件表面处理地板门安装验收 |
| market_state | 声明出厂门处验收完整空箱 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造配置完整封闭钢制干货集装箱 |
| How much | 1 kg 验收空箱净质量；按箱记录用实测 M 换算 |
| How well | 配置特定生产者放行验收；声明批准时追溯批准制度。等质量不表示载货容量服务性能等效 |
| How long or cycle | 一次制造验收周期；不假定使用寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 专门设计与装备的、供一种或多种方式运输的集装箱 `89d4bb67-2735-4ecf-9672-539f6f94d8f4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商型号；序列号图纸版本；封闭钢制干货箱型尺寸；侧墙顶板框架钢牌号厚度；角件接口规格；胶合板单板胶合处理地板结构；门布局铰链锁具密封条密封胶配方；涂层配方制造采购完整性；安装整体配件拆卸交付件；空载状态排除货物可拆保护运输工装；正实测净质量 M 秤校准皮重；声明批准时适用制度追溯；实际制造外包路线工厂时期出厂门上游覆盖 |

在元数据或等效参考备注声明所有限定。泛指公开制造集装箱身份须本较窄配置。M 是实测完整空载验收箱质量，含地板安装门角件整体交付部件。运输拆卸整体件另称核对。排除货物可拆保护承运吊装运输工装销售备件。目录标称皮重总重载荷 TEU 标识体积不等于本实测 M，不作为换算因子。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `energy_conversion` | electricity | Net calorific value | MJ | 采集实际工厂进线工位 kWh，按已核验单位组身份 3.6 MJ/kWh 换算。铭牌 kW 不是能量，电压特定供电须匹配实际进线。 |
| `gas_volume` | curing_gas | Volume | m3 | 保留公开体积参考属性。按记录仪表温压采集实际供入管道气 m3，核对账单换算，不假定 kg 普遍热值。 |
| `formulation_mass` | liquid formulations | Mass | kg | 称实际涂料密封胶配方；体积质量换算须声明组成状态温度下前景实测密度。不以目录覆盖率作制造数量。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收指定坯料角件胶合板门组件，声明供应商完整性 |
| starting_condition_role | 前景坯料部件接收到验收空箱出厂 |
| product_classification_scope | 封闭钢制干货联运箱含胶合板地板 |
| recursive_input_rule | 不得由自身产出递归生成完整箱投入；已完成外购模块跳过组成已实施操作 |
| upstream_dataset_requirement | 匹配牌号形态胶合板胶合处理涂装供入路线地域，披露未链接供应商生产 |
| disclosure | 制造商型号；序列号图纸版本；封闭钢制干货箱型尺寸；侧墙顶板框架钢牌号厚度；角件接口规格；胶合板单板胶合处理地板结构；门布局铰链锁具密封条密封胶配方；涂层配方制造采购完整性；安装整体配件拆卸交付件；空载状态排除货物可拆保护运输工装；正实测净质量 M 秤校准皮重；声明批准时适用制度追溯；实际制造外包路线工厂时期出厂门上游覆盖 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all stages | 纳入报告期可归属制造返工实际验收支持试验。外包成形涂装须实测供应商模块或披露缺口。排除运输循环装货维修所有者定期检查；CSC 批准概览不规定普遍制造测试载荷频次。 | `imo-csc` |
| `boundary_components` | received modules | 每项坯料供入成品模块计一次。外购成品框架箱壳门替代所含坯料五金已完成操作。数据集完成前增列每项实际缺失部件化学；候选行集不是穷尽物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | 钢材切割成形 | conditional | 未成形钢材在声明前景内加工。 | foreground | 一个验收配置集装箱，使用 M 归一化 |
| `shell_join` | 框架箱壳装配 | required | 每个新制完整集装箱。 | foreground | 一个验收配置集装箱，使用 M 归一化 |
| `surface_finish` | 表面准备涂装 | conditional | 表面准备涂装在声明前景内实施。 | foreground | 一个验收配置集装箱，使用 M 归一化 |
| `floor_door` | 胶合板地板与门安装 | required | 每个声明钢制封闭干货胶合板地板集装箱。 | foreground | 一个验收配置集装箱，使用 M 归一化 |
| `acceptance` | 空箱验收 | required | 每个成品验收集装箱。 | foreground | 一个验收配置集装箱，使用 M 归一化 |
| `packing` | 条件出厂保护 | conditional | 出厂实际供入可拆保护。 | foreground | 一个验收配置集装箱，使用 M 归一化 |

实际坯料成形供入框架箱壳连接实际表面准备涂装地板门安装，再空箱验收条件保护。即使必需阶段，每行也仅以精确材料状态供应商完整性为适用条件。每项实际替代配方已证实排放物质分别增列，不设普遍配方不可避免排放。

### 过程：钢材切割成形 (`stock_form`)

将实际牌号厚度薄板切割成形为侧墙顶板门板，将结构坯料加工为梁横梁。记录波纹工装图纸、领退及分类边角料。外购成形板跳过已完成成形，不重复组成钢材。实际切割气润滑剂模具耗材各自另列。

#### 输入

##### 产品流

###### 集装箱板用热轧耐候钢薄板 (`weathering_sheet`)

仅限实际收集、由一个声明收集出口输出的混合水性富锌环氧底漆丙烯酸面漆污泥；计量湿质量固体含水率接收者。不同分类残渣须独立行，不加总为本混合流。

- 选定流：集装箱板用热轧耐候钢薄板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：

###### 成形耐候钢集装箱梁型材 (`weathering_profile`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：成形耐候钢集装箱梁型材
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：

###### 声明工厂进线供入交流电力 (`electricity_stock_form`)

采集实际工位电力 kWh 共用驱动量分母场址进线电压地域；按单位身份换算 MJ，不用电机铭牌功率。

- 选定流：声明工厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

内部复用后输出分类未处理钢切割边角料；称实际质量并保留接收者。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：

### 过程：框架箱壳装配 (`shell_join`)

按实际文件支持连接路线装配底架角柱角件梁侧墙顶板门框。制造者案例显示焊接，但 MIG、TIG、焊条焊是替代路线，不同时强制。每种实际填料保护气独立行。接收焊接模块一次替代组成，尺寸焊缝检验记录关联序列号配置。

#### 输入

##### 产品流

###### 铸钢联运集装箱角件 (`corner_fitting`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：铸钢联运集装箱角件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_shell_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_shell_join`
- 来源：`seabox-manufacturing`

###### 实心低合金钢气体保护焊丝 (`welding_wire`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：实心低合金钢气体保护焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_shell_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_shell_join`
- 来源：`seabox-manufacturing`

###### 二氧化碳 (`co2_shield`)

仅匹配中国厂内身份实际 CO2 焊接路线使用供入 CO2 保护气，实测消耗质量；排除氩 CO2 预混及范围不同液态 CO2 操作。不自动假定化石排放。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_shell_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_shell_join`
- 来源：`seabox-manufacturing`

###### 氩二氧化碳预混焊接保护气 (`argon_co2`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：氩二氧化碳预混焊接保护气
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_shell_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_shell_join`
- 来源：`seabox-manufacturing`

###### 声明工厂进线供入交流电力 (`electricity_shell_join`)

采集实际工位电力 kWh 共用驱动量分母场址进线电压地域；按单位身份换算 MJ，不用电机铭牌功率。

- 选定流：声明工厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_shell_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_shell_join`
- 来源：`seabox-manufacturing`

#### 输出

##### 废物流

###### 作为废物移交的富氧化铁焊接滤尘 (`weld_dust`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：作为废物移交的富氧化铁焊接滤尘
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_shell_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_shell_join`
- 来源：`seabox-manufacturing`

### 过程：表面准备涂装 (`surface_finish`)

记录实际清洗抛丸底漆面漆固化。外购涂装件跳过已完成操作。铸钢丸、水性富锌环氧底漆和水性丙烯酸面漆为条件配方行，不是普遍集装箱配方；每种实际替代化学另列。废物移交区别环境排放。燃气固化以实际化石管道气仪表实测燃烧为条件；不得由焊接保护气推断排放。

#### 输入

##### 产品流

###### 工艺用水 (`process_water`)

实际清洗涂装供入处理工业工艺水；计量新供入量，不计内部循环环境取用。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

###### 铸钢球形抛丸磨料 (`steel_shot`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：铸钢球形抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

###### 水性富锌环氧集装箱底漆配方 (`epoxy_primer`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：水性富锌环氧集装箱底漆配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

###### 水性丙烯酸集装箱面漆配方 (`acrylic_topcoat`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：水性丙烯酸集装箱面漆配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

###### 气态天然气 (`curing_gas`)

仅实际固化使用供入化石管道天然气，按声明仪表温压以 m3 计量；保留体积参考属性条件。不设普遍固化燃料热值因子。
公开身份保留参考流属性 `93a60a56-a3c8-22da-a746-0800200c9a66`、单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` 及交换单位 m3。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

###### 声明工厂进线供入交流电力 (`electricity_surface_finish`)

采集实际工位电力 kWh 共用驱动量分母场址进线电压地域；按单位身份换算 MJ，不用电机铭牌功率。

- 选定流：声明工厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

#### 输出

##### 废物流

###### 含去除氧化铁涂层残渣的废铸钢抛丸磨料 (`spent_shot`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：含去除氧化铁涂层残渣的废铸钢抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

###### 废水性环氧丙烯酸涂装污泥 (`paint_sludge`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：废水性环氧丙烯酸涂装污泥
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

###### 转交处理的钢件清洗水性废液 (`clean_effluent`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：转交处理的钢件清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅实际固化燃料已证实为化石时，可归属实测化石燃烧 CO2 排至空气未指定子介质。不推断保护气来源，不替代生物源或声称不可避免排放。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`seabox-manufacturing`

### 过程：胶合板地板与门安装 (`floor_door`)

按供入状态安装声明船用胶合板地板钢紧固件钢门铰链锁杆密封条接缝密封胶。保留地板结构处理胶黏剂规格门布局五金包含范围实测零件质量。EPDM 密封条单组分聚氨酯密封胶仅实际规格匹配时适用。外购装修门总成替代所含组件，无重复。制造者尺寸载荷额定值仅案例，不为普遍要求质量换算。

#### 输入

##### 产品流

###### 酚醛胶合船用胶合板集装箱地板 (`marine_plywood`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：酚醛胶合船用胶合板集装箱地板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_floor_door。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_floor_door`
- 来源：`seabox-dry`

###### 钢制螺纹胶合板地板固定螺钉 (`floor_screw`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：钢制螺纹胶合板地板固定螺钉
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_floor_door。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_floor_door`
- 来源：`seabox-dry`

###### 钢制联运集装箱门铰链 (`door_hinge`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：钢制联运集装箱门铰链
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_floor_door。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_floor_door`
- 来源：`seabox-dry`

###### 钢制集装箱门锁凸轮杆总成 (`locking_rod`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：钢制集装箱门锁凸轮杆总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_floor_door。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_floor_door`
- 来源：`seabox-dry`

###### EPDM 橡胶集装箱门密封条 (`epdm_gasket`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：EPDM 橡胶集装箱门密封条
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_floor_door。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_floor_door`
- 来源：`seabox-dry`

###### 单组分聚氨酯集装箱接缝密封胶 (`pu_sealant`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：单组分聚氨酯集装箱接缝密封胶
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_floor_door。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_floor_door`
- 来源：`seabox-dry`

###### 声明工厂进线供入交流电力 (`electricity_floor_door`)

采集实际工位电力 kWh 共用驱动量分母场址进线电压地域；按单位身份换算 MJ，不用电机铭牌功率。

- 选定流：声明工厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_floor_door。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_floor_door`
- 来源：`seabox-dry`

#### 输出

##### 废物流

###### 作为废物移交的酚醛胶合地板胶合板边角料 (`plywood_offcut`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：作为废物移交的酚醛胶合地板胶合板边角料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_floor_door。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_floor_door`
- 来源：`seabox-dry`

### 过程：空箱验收 (`acceptance`)

核对配置角件尺寸连接涂装地板门验收空箱净 M。记录适用批准制度下实际实施的防风雨及批准支持试验；型式批次试验不自动逐序列号重复。声明 CSC 安全批准须有关主管制度可追溯批准及牌数据；分类泛指供应商认证不足。实际检漏水试验废物牌投入各自独立记录。

#### 输入

##### 产品流

###### 冲印铝制集装箱安全批准牌 (`approval_plate`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：冲印铝制集装箱安全批准牌
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`imo-csc`

###### 工艺用水 (`leak_water`)

仅实际防风雨检查供入处理工艺水；不对每种批准制度强制。分别记录实测投入循环实际出口。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`imo-csc`

###### 声明工厂进线供入交流电力 (`electricity_acceptance`)

采集实际工位电力 kWh 共用驱动量分母场址进线电压地域；按单位身份换算 MJ，不用电机铭牌功率。

- 选定流：声明工厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`imo-csc`

#### 输出

##### 产品流

###### 专门设计与装备的、供一种或多种方式运输的集装箱 (`finished_machine`)

声明制造门点处验收完整空载封闭钢制干货集装箱一千克，声明胶合板地板门配置。泛指公开集装箱身份须所有产品限定。不含货物运输服务，不声称上游完整。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：专门设计与装备的、供一种或多种方式运输的集装箱 `89d4bb67-2735-4ecf-9672-539f6f94d8f4`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`imo-csc`

#### 输出

##### 废物流

###### 收集转交处理的集装箱检漏水 (`test_water_waste`)

仅限具体声明实际交换；计量领退或出口质量，保留精确组成状态供应商范围去向。

- 选定流：收集转交处理的集装箱检漏水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`imo-csc`

### 过程：条件出厂保护 (`packing`)

各实际材质独立计量，从 M 排除可拆膜运输工装。运输拆卸整体件保留声明箱完整性并另称质量。排除货物单独销售备件承运设备。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅限匹配公开分类、独立供入可拆非自黏非泡沫未增强未层压 PE-LD 保护膜；称领退平衡并从净 M 排除。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 声明工厂进线供入交流电力 (`electricity_packing`)

采集实际工位电力 kWh 共用驱动量分母场址进线电压地域；按单位身份换算 MJ，不用电机铭牌功率。

- 选定流：声明工厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacture | 按尺寸门地板涂装配置分工单。优先直接归属实测领退工位仪表拒收返工。不可分离共用公用工程采用已证实实测因果驱动量如含涂层工艺负荷的涂装面积或工位时间：份额 = 工单驱动量 / 全部覆盖驱动量总和。保留时期分母论证；箱数标称皮重本身不足以建立不同配置因果。 |  |
| `allocation_residues` | reuse and exports | 内部复用坯料磨料水为转移，计新供入实际输出，不重复循环。废物保留实测质量去向，无自动避免产品抵扣。经记录审查剩余分配前分离可售共产品。同一时期拒收返工负担归属验收产出，核对在制。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收空箱净质量 | weighing_record | 型号；配置；序列号；验收净质量 M；秤编号；校准；空载状态；地板门角件；拆卸整体件；排除货物；包装工装皮重；放行记录 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 逐箱或同配置代表性批次 | 同工单制造时期 | 声明工厂 | 每台验收净质量 | 校准空载皮重配置放行记录 |
| `cp_stock_form` | stock_form | 钢材切割成形 | foreground_record | 序列号工单；配置；验收箱数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；电力 kWh 进线电压；管道气 m3 仪表条件；废物接收者；实际排放；共用驱动量分母；校准 | 称牌号专用领退及边角料，记录板厚工装工单图纸工位仪表。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂明示分包 | 可归属交换数量 / 验收设备数量 | 物料表称量仪表试验移交验收 |
| `cp_shell_join` | shell_join | 框架箱壳装配 | foreground_record | 序列号工单；配置；验收箱数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；电力 kWh 进线电压；管道气 m3 仪表条件；废物接收者；实际排放；共用驱动量分母；校准 | 保留连接规程填料气体安全数据表实测耗用焊接返工记录组成完整性尺寸检验。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂明示分包 | 可归属交换数量 / 验收设备数量 | 物料表称量仪表试验移交验收 |
| `cp_surface_finish` | surface_finish | 表面准备涂装 | foreground_record | 序列号工单；配置；验收箱数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；电力 kWh 进线电压；管道气 m3 仪表条件；废物接收者；实际排放；共用驱动量分母；校准 | 采集层安全数据表配方称量领退清洗水废磨料废漆出口实际固化仪表可归属排放实测。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂明示分包 | 可归属交换数量 / 验收设备数量 | 物料表称量仪表试验移交验收 |
| `cp_floor_door` | floor_door | 胶合板地板与门安装 | foreground_record | 序列号工单；配置；验收箱数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；电力 kWh 进线电压；管道气 m3 仪表条件；废物接收者；实际排放；共用驱动量分母；校准 | 称胶合板五金领退，记录供应商所含组成地板处理安全数据表序列号门运行装配验收。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂明示分包 | 可归属交换数量 / 验收设备数量 | 物料表称量仪表试验移交验收 |
| `cp_acceptance` | acceptance | 空箱验收 | foreground_record | 序列号工单；配置；验收箱数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；电力 kWh 进线电压；管道气 m3 仪表条件；废物接收者；实际排放；共用驱动量分母；校准 | 保留序列号图纸放行准则结果、声明批准时批准型式试验追溯、牌内容校准空箱称量皮重出厂完整性。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂明示分包 | 可归属交换数量 / 验收设备数量 | 物料表称量仪表试验移交验收 |
| `cp_packing` | packing | 条件出厂保护 | foreground_record | 序列号工单；配置；验收箱数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；电力 kWh 进线电压；管道气 m3 仪表条件；废物接收者；实际排放；共用驱动量分母；校准 | 称保护材料保留皮重退回并核对整体交付件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂明示分包 | 可归属交换数量 / 验收设备数量 | 物料表称量仪表试验移交验收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐同质配置工单，直接归属合理共用分配后核对净领用（领用减退回及记录库存变化）、公用工程废物实际排放；逐项总量除验收箱数得 q_item，再除实测 M。质量交换保持 kg/kg，气体 m3/kg，电力 MJ/kg。兼容序列号设备 M 变化时保留逐箱记录，可归属总量除验收质量之和。分开不兼容尺寸门地板涂装制造采购范围。未知为缺口，不当零；不以标称皮重载荷营销产能作换算。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_completeness` | complete container | 将实际物料表图纸箱壳框架角件地板门五金涂层整体配件核对实测空载 M。解决供应商所含组成拆卸件质量，数据集完成前增列遗漏实际交换。 | 图纸称量供应商完整性 |
| `quality_balance` | material and utilities | 保留校准库存领退复用平衡安全数据表状态密度、涂层吸收残渣燃气仪表条件实际排放实测废物接收者。QA 限值须来自场址记录可比原始证据，不编造收率范围强制损失。 | 库存仪表实验移交记录 |
| `quality_coverage` | dataset | 披露场址时期配置批准范围条件缺席外包身份量值不确定性供应商上游缺口。型号案例批准概览不证明实际证书普遍配方净 M。本稿不采用边界兼容量值强度经验范围。 | 覆盖证据登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 要求同一完整空载封闭钢制干货箱配置正实测 M，含声明地板安装门角件整体交付件。拒绝货物标称载荷总重 TEU 运输服务替代。批准声明须实际制度牌记录核验，不仅分类。 | `imo-csc` |
| `validate_identity` | all rows | 核对原子材料形态精确公开参考属性单位组路线状态环境介质。纯 CO2 气不是氩混合物，工艺水不是环境水，捕集尘废物移交不是空气水排放。身份适用未建立时保留空 UUID。 |  |
| `validate_measurement` | all rows | 追溯逐箱批次采集至同一实测 M 配置场址时期，核验单位换算燃气仪表条件共用驱动量分母。防止接收模块组成重复及未知默认零。 |  |
| `validate_emissions` | elementary rows | 仅采用已证实可归属工厂物质来源实际介质。化石 CO2 仅在化石来源下适用空气未指定子介质。区分 CO2、CO、NO、NO2、N2O、生物源捕集残渣，实际物质逐项增列。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整空载封闭钢制干货集装箱前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明上游链接后 |
| allowed_use | 匹配箱尺寸材料地板门涂装配置供应商完整性门点场址时期的制造供应链模型 |
| excluded_use | 货运服务寿命等效其他箱技术建筑改装无依据完整摇篮到大门声明 |
| required_metadata | 制造商型号；序列号图纸版本；封闭钢制干货箱型尺寸；侧墙顶板框架钢牌号厚度；角件接口规格；胶合板单板胶合处理地板结构；门布局铰链锁具密封条密封胶配方；涂层配方制造采购完整性；安装整体配件拆卸交付件；空载状态排除货物可拆保护运输工装；正实测净质量 M 秤校准皮重；声明批准时适用制度追溯；实际制造外包路线工厂时期出厂门上游覆盖 |
| required_quality_disclosure | 身份量值缺口不确定性条件缺席完整物料表补齐分配批准适用未链接上游 |
| update_trigger | 材料尺寸门地板涂装供应商模块范围 M 制造路线批准制度场址时期证据变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `seabox-dry` | literature | [SEA BOX 20ft Dry Freight Container, All Access, SB894.0](https://www.seabox.com/products/detail/SB894.0-20ft-dry-freight-all-access) | Features 清单：波纹钢顶门布局船用胶合板地板配件。重量声明：尺寸质量标称。2026-10-05 检索；无日期产品案例，不将地板厚度载荷标称质量涂装配方作普遍规则因子。 |
| `seabox-manufacturing` | literature | [SEA BOX Manufacturing](https://www.seabox.com/services/manufacturing) | Manufacturing 段：焊接制造清洗喷漆整理、MIG/TIG/焊条焊替代能力及质量程序文件。2026-10-05 检索；无日期工厂案例，不推断强制焊法配方产能认证资源强度。 |
| `imo-csc` | official_guidance | [IMO: International Convention for Safe Containers (CSC)](https://www.imo.org/en/ourwork/safety/pages/containers-default.aspx) | Safety approval 与 Safety Approval Plate 段：适用制度主管批准及可追溯牌信息。2026-10-05 检索。仅概览，不为全文公约测试标准或实际产品证书证明；不采用数值试验阈值频次寿命。所有者维护仍排除。 |
