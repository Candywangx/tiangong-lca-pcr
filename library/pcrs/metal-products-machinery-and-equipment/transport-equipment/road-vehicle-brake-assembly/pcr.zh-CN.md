---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.road-vehicle-brake-assembly
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置道路车辆液压制动卡钳总成制造

## 1. 范围与适用性

此较窄PCR覆盖道路乘用汽车新完整固定液压对向活塞制动卡钳，以收货整体铸铝本体坯件、证实铝活塞和EPDM压力密封为路线。此材料设计限定选择具体前景，不声明通用汽车配方。配置卡钳按实际工厂验收计划验收后排液交付。制动盘摩擦片浮动钳支架导向机构鼓制动电子驻车执行器摩托车轨道航空制动再制造及其他49129附件在此路线外。

前景制造始于声明铸本体成品部件入口，包括实际机加工去毛刺清洗干燥装配检查配置质量验收；溶剂清洗包装可选。这不是完整摇篮到大门清单。历史Brembo工厂描述包括铸造制造装配；此前铸造热处理部件制造即使同场址也须匹配上游清单。整车装配道路使用制动磨尘出行服务维护使用报废排除。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.road-vehicle-brake-assembly |
| classification_refs | CPC 3.0:49129; narrower |
| covered_products | 完整配置排液铸铝固定对向活塞道路汽车液压制动卡钳 |
| excluded_products | 独立盘摩擦片；鼓浮动驻车路线；摩托轨道航空制动；其他49129零件；再制造不完整套件 |
| representative_product | 一种声明整体铝固定钳，证实铝活塞EPDM密封排液交付；来源对向活塞示例不规定活塞数 |
| production_route | 铸坯收货；实际精加工去毛刺；合格水洗干燥；成品件装配；批准工厂检查净称重；可选最终清洗包装 |
| market_state | 新验收完整卡钳，排液并声明实际余留润滑膜及可选已装硬件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收配置完整制动卡钳总成制造 |
| How much | 1 kg |
| How well | 当前受控图样清单及实际签认工厂尺寸清洁检漏功能配置验收；无道路服务等同 |
| How long or cycle | 一个制造期间；无假设寿命制动循环磨耗间隔 |
| reference_flow_link | finished_caliper |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收排液铝本体对向活塞道路汽车制动卡钳总成 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号图样批次序号；道路汽车匹配左右方向；固定对向活塞缸径数量；证实本体活塞合金密封胶料涂层；完整清单自制外购入口；已装硬件；排液余留液状态；实际净M kg；实际验收协议；场址期间；盘摩擦片试验工装包装排除 |

数据包须随附必需限定信息，缺失则参考定义不完整。M按每个验收完整同配置卡钳实测，绝不从目录或整车质量推断。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `material_mass` | mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录 q_item 为每台验收成品设备实测交换 kg；采用 normalize_mass、reference_mass 和所述协议。 |
| `electric_energy` | electricity rows | Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 在实际供货接口采集归属电力kWh；实测kWh乘3.6换MJ，再取得每验收设备q_item并采用normalize_mass。不得将电能设为Mass。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 证实铸本体坯件及独立供货成品活塞密封硬件收货 |
| starting_condition_role | upstream_abstraction |
| product_classification_scope | CPC 3.0:49129; narrower |
| recursive_input_rule | 不投入完整同类别卡钳制造同卡钳；采用实际低阶段坯料部件。返工循环内部保留，不重复采购。 |
| upstream_dataset_requirement | 匹配实际铸造热处理表面处理活塞密封部件制造及公用供货入口。披露未链接此前本地阶段入厂运输外运废物接收。 |
| disclosure | 仅机加工装配前景；坯件部件概化不是完整摇篮到大门覆盖。本地额外涂覆外购件加工须按实际化学作业独立建模，否则路线排除。 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | all_processes | 纳入实际归属必需阶段及仅已执行可选作业。记拒收返工清洗控制实际待机公用。清洗装配入口须当前作业依据，不从营销来源推定配方。 | akebono-opposed-caliper; akebono-automotive-brakes; brembo-escobedo-2023 |
| `boundary_exclusions` | use and delivery | 排除整车使用摩擦片道路磨耗制动尘道路距离服务客户维护。包装散装交付件排除净M并独立交换。工厂直接释放仅按实际实测化学介质记录纳入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `machining` | 卡钳本体精加工与去毛刺 | required | 收货铸造整体坯件；实际缸孔密封槽液压通道安装界面作业 | foreground | 1 kg finished_caliper |
| `washing` | 机加工本体清洗干燥 | required | 此路线实际合格水洗漂洗干燥；槽化学由当前记录确定 | foreground | 1 kg finished_caliper |
| `assembly` | 活塞密封与定位部件装配 | required | 一种对向活塞固定卡钳配置受控完整部件清单 | foreground | 1 kg finished_caliper |
| `acceptance` | 工厂检漏功能检查与净质量放行 | required | 实际批准验收试验及排液完整配置称重 | foreground | 1 kg finished_caliper |
| `cleaning` | 可选最终异丙醇清洗 | conditional | 仅实际批准执行CAS67-63-0清洗 | foreground | 1 kg finished_caliper |
| `packing` | 可选发运包装 | conditional | 仅实际独立供货发运包装 | foreground | 1 kg finished_caliper |

### 过程：卡钳本体精加工与去毛刺（`machining`）

#### 输入

##### 产品流

###### 铸造铝合金整体式卡钳本体坯件（`body_blank`）

一种声明道路汽车固定对向活塞卡钳的铸铝本体设计跨越机加工入口。记录证实合金、铸造热处理及收货表面状态、坯件kg、退回与拒收；不以原铝锭代替已铸本体。上游铸造须链接实际过程，不由本机加工前景代表。

- 选定流： 铸造铝合金整体式卡钳本体坯件
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 供货水基矿物油机加工乳化液（`cutting_emulsion`）

仅实际湿加工使用一种文件化供货预混矿物油乳化液时纳入。记SDS、油添加剂浓度及净领用kg；内部循环不是新投入。本地浓缩液调配须拆分浓缩液与加水并计混合，不同时计预混及其组分。干加工记录未发生，不虚构液体零值。

- 选定流： 切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力（`electricity_machining`）

用户表计测归属实际阶段设备、干燥试验泵、待机返工电力，记供货方地区电压期间。高压电网或仅发电流不建立此供货入口。不从购电推断燃料燃烧排放；实际压缩空气或热公用须自身归属供货过程记录与物理交换。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集铝合金机加工屑（`aluminium_chips`）

测实际外运干金属kg及声明合金，另测夹带乳化液；区分铸造退料可售屑内部重熔废物转移。无通用废屑产率避免原铝信用。

- 选定流： 收集铝合金机加工屑
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

###### 收集已用水基矿物油机加工乳化液（`spent_emulsion`）

实际外运已用湿乳化液kg及分析油水金属组成，明确接收方。循环槽液不是外运废物，屑金属不重复计。

- 选定流： 收集已用水基矿物油机加工乳化液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：机加工本体清洗干燥（`washing`）

#### 输入

##### 产品流

###### 供货工业清洗用水（`wash_water`）

水洗漂洗实际供水，按供货kg测量并保留质量供货记录，区分新供水与循环。此为技术圈水，不是天然淡水开采或废水排放。此声明机加工本体路线须清洁，不规定通用水量或化学配方。

- 选定流： 工业用水 `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 供货无水碳酸钠清洗试剂（`wash_carbonate`）

仅实际合格水洗使用无水碳酸钠CAS497-19-8时纳入。测量试剂kg、含量与槽浓度；其他实际批准清洗剂须独立具体卡，不沿用本配方。不从未识别碱性清洗剂推定碳酸钠或强制为行业必要作业。

- 选定流： 供货无水碳酸钠清洗试剂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力（`electricity_washing`）

用户表计测归属实际阶段设备、干燥试验泵、待机返工电力，记供货方地区电压期间。高压电网或仅发电流不建立此供货入口。不从购电推断燃料燃烧排放；实际压缩空气或热公用须自身归属供货过程记录与物理交换。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集已用水基碳酸钠清洗液（`washing_effluent`）

仅碳酸钠清洗路线：记湿kg、实际碳酸盐油金属浓度及去向。收集废水不是基础淡水或未处理直接河流排放。其他槽化学须自身实际废水卡。

- 选定流： 收集已用水基碳酸钠清洗液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：活塞密封与定位部件装配（`assembly`）

#### 输入

##### 产品流

###### 成品铝合金液压卡钳活塞（`piston`）

一种声明配置独立供货成品物理部件设计。记实际图样等级、涂层胶料、净收货kg、安装件数、退回拒收kg。铝活塞与EPDM密封限定此窄路线，须实际证实；其他金属胶料须独立支持行及披露路线扩展。不从来源示例推定默认活塞数或胶料配方。防尘套定位销弹簧仅已装时适用，排除其他收货总成已含件。

- 选定流： 成品铝合金液压卡钳活塞
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品EPDM液压卡钳活塞密封圈（`pressure_seal`）

一种声明配置独立供货成品物理部件设计。记实际图样等级、涂层胶料、净收货kg、安装件数、退回拒收kg。铝活塞与EPDM密封限定此窄路线，须实际证实；其他金属胶料须独立支持行及披露路线扩展。不从来源示例推定默认活塞数或胶料配方。防尘套定位销弹簧仅已装时适用，排除其他收货总成已含件。

- 选定流： 成品EPDM液压卡钳活塞密封圈
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品EPDM卡钳活塞防尘套（`dust_boot`）

一种声明配置独立供货成品物理部件设计。记实际图样等级、涂层胶料、净收货kg、安装件数、退回拒收kg。铝活塞与EPDM密封限定此窄路线，须实际证实；其他金属胶料须独立支持行及披露路线扩展。不从来源示例推定默认活塞数或胶料配方。防尘套定位销弹簧仅已装时适用，排除其他收货总成已含件。

- 选定流： 成品EPDM卡钳活塞防尘套
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢卡钳排气螺钉（`bleed_screw`）

一种声明配置独立供货成品物理部件设计。记实际图样等级、涂层胶料、净收货kg、安装件数、退回拒收kg。铝活塞与EPDM密封限定此窄路线，须实际证实；其他金属胶料须独立支持行及披露路线扩展。不从来源示例推定默认活塞数或胶料配方。防尘套定位销弹簧仅已装时适用，排除其他收货总成已含件。

- 选定流： 成品钢卡钳排气螺钉
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制动摩擦片定位销（`pad_pin`）

一种声明配置独立供货成品物理部件设计。记实际图样等级、涂层胶料、净收货kg、安装件数、退回拒收kg。铝活塞与EPDM密封限定此窄路线，须实际证实；其他金属胶料须独立支持行及披露路线扩展。不从来源示例推定默认活塞数或胶料配方。防尘套定位销弹簧仅已装时适用，排除其他收货总成已含件。

- 选定流： 成品钢制动摩擦片定位销
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢卡钳摩擦片定位弹簧（`retention_spring`）

一种声明配置独立供货成品物理部件设计。记实际图样等级、涂层胶料、净收货kg、安装件数、退回拒收kg。铝活塞与EPDM密封限定此窄路线，须实际证实；其他金属胶料须独立支持行及披露路线扩展。不从来源示例推定默认活塞数或胶料配方。防尘套定位销弹簧仅已装时适用，排除其他收货总成已含件。

- 选定流： 成品钢卡钳摩擦片定位弹簧
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 供货硅基卡钳装配润滑脂（`assembly_grease`）

仅实际设计批准硅基装配润滑脂且与证实密封和液体相容时纳入。记单一配方、供货kg、施用退回余留kg；相容须实际批准证明，不从硅命名假设。不将此化学强加其他装配润滑路线。

- 选定流： 供货硅基卡钳装配润滑脂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力（`electricity_assembly`）

用户表计测归属实际阶段设备、干燥试验泵、待机返工电力，记供货方地区电压期间。高压电网或仅发电流不建立此供货入口。不从购电推断燃料燃烧排放；实际压缩空气或热公用须自身归属供货过程记录与物理交换。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

### 过程：工厂检漏功能检查与净质量放行（`acceptance`）

#### 输入

##### 产品流

###### 供货乙二醇醚液压制动试验液配方（`test_fluid`）

仅实际合格液压工厂试验使用一种文件化乙二醇醚配方时纳入。记批准组成浓度、新补充kg、回收外运已用液及实际余留膜。计新净投入，不计重复槽循环。气压检漏路线不换成此液，须实际空气制备公用记录。此候选参考品为排液状态，刻意湿式充液交付为另一声明状态。

- 选定流： 供货乙二醇醚液压制动试验液配方
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力（`electricity_acceptance`）

用户表计测归属实际阶段设备、干燥试验泵、待机返工电力，记供货方地区电压期间。高压电网或仅发电流不建立此供货入口。不从购电推断燃料燃烧排放；实际压缩空气或热公用须自身归属供货过程记录与物理交换。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 产品流

###### 验收排液铝本体对向活塞道路汽车制动卡钳总成（`finished_caliper`）

一种声明整体铸铝本体完整固定液压卡钳，已装证实铝活塞EPDM压力密封及实际防尘定位硬件。声明活塞数缸径左右方向涂层安装界面与净排液交付状态。实际余留润滑膜仅纳入一次；排除制动盘摩擦片车辆主缸ABS软管散装备件仅作试验工装堵头运输包装。不声明制动距离寿命等同。

- 选定流： 验收排液铝本体对向活塞道路汽车制动卡钳总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_mass`
- 来源：

##### 废物流

###### 收集已用乙二醇醚液压制动试验液（`spent_test_fluid`）

仅实际外运污染试验液：实测湿kg、证实组成、排液退回接收方；无默认每试验损失或使用期制动液更换。

- 选定流： 收集已用乙二醇醚液压制动试验液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

###### 待处置不可修排液铝本体卡钳总成（`rejected_caliper`）

仅实际不可修工厂拒收外运声明接收方，净kg及已含污染状态。返供方返工区别于处置，不将退回总成同时计成品与处置。

- 选定流： 待处置不可修排液铝本体卡钳总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：可选最终异丙醇清洗（`cleaning`）

#### 输入

##### 产品流

###### 供货液态异丙醇最终清洗配方（`ipa_cleaner`）

仅实际批准执行使用具体CAS67-63-0配方最终清洗时纳入。记纯度水浓度及净领用回收残留余留kg。不假设必要溶剂清洗或全蒸发；装配前水洗为独立阶段。

- 选定流： 供货液态异丙醇最终清洗配方
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力（`electricity_cleaning`）

用户表计测归属实际阶段设备、干燥试验泵、待机返工电力，记供货方地区电压期间。高压电网或仅发电流不建立此供货入口。不从购电推断燃料燃烧排放；实际压缩空气或热公用须自身归属供货过程记录与物理交换。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集已用异丙醇清洗溶液（`spent_ipa`）

实际外运湿清洗液kg及分析IPA水污染物。另计回收液实测排放，不用通用混合废物身份。

- 选定流： 收集已用异丙醇清洗溶液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 即时异丙醇向未指定室外空气释放（`ipa_air`）

仅实际观察控制后物质特异残余CAS67-63-0向未指定室外空气释放。采用匹配浓度流量时长采样或解析回收残留余留文件化闭合溶剂平衡。保留检出限不确定性，区分无清洗无释放未测低于检出。拒绝室内空气土壤长期正丙醇通用VOC匹配。

- 选定流： 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_emission`
- 来源：

### 过程：可选发运包装（`packing`）

#### 输入

##### 产品流

###### 成品纸板卡钳运输折叠盒（`shipping_box`）

仅实际供货声明规范独立空折叠盒时纳入，测量kg并排除M。其他实际衬垫包膜托盘可复用周转箱须自身具体交换及文件化再用分配，无假设包装配方。

- 选定流： 成品纸板卡钳运输折叠盒
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力（`electricity_packing`）

用户表计测归属实际阶段设备、干燥试验泵、待机返工电力，记供货方地区电压期间。高压电网或仅发电流不建立此供货入口。不从购电推断燃料燃烧排放；实际压缩空气或热公用须自身归属供货过程记录与物理交换。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | all_processes | 首先按卡钳型号配置细分实际线工序表计工单库存废物记录。共享机床采用文件化因果操作时间及实际负载设置待机依据分配；清洗用实际槽循环负载依据。仅证明物理关系并披露敏感性时可用简单产出质量份额。无无依据通用分配比例。 |  |
| `allocation_rejects` | rejects and chips | 实际拒收返工负担保留归属期间投入并除验收数量。按实际合同状态声明外运金属屑为废物还是可售共产品。同屑质量不得同时分配废物处理信用与可售产出收益，无自动避免原铝信用。记所选分配理由及适用价格时间基准敏感性；科学审查待完成。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | complete configured caliper | 校准完整设备净称重 | 型号；配置；序号；验收净质量 M；kg；零点皮重；原始读数；已装活塞密封硬件kg；余留膜排除工装包装；验收数量 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每设备或受控代表同配置批次并有实际个体测量 | 实际声明代表生产期间 | 声明工厂归属阶段供货入口 | 每台验收净质量 | 原始校准秤读数零点皮重签认完整配置验收 |
| `cp_stock` | all_processes | blank and process inputs | 实际库存领用退回消耗 | 批次；具名物质配方等级；坯件kg；领用退回kg；库存变化；浓度；实际作业；余留去除液；验收数量 | 测实际归属净库存投入含拒收返工，收货退回库存核对；区分供货乳化液本地混合组分及新补充循环。記实际阶段浓度，可选投入须执行依据。 | kg | 每领用退回实际期间 | 实际声明代表生产期间 | 声明工厂归属阶段供货入口 | 实际归属投入kg / 同一配置的验收设备数量 | 校准称重库存平衡SDS作业记录 |
| `cp_parts` | assembly | finished supplied components | 部件收货与安装质量核对 | 图样；供货方；材料胶料涂层；实际部件kg；安装件数；已含件预充；退回拒收；验收数量 | 独立称量一种设计独立收货部件kg；件数提供追溯，不虚构每件质量。核对已装部件净质量完整清单与完整M，净消耗包括归属拒收返工。 | kg | 每批次配置期间 | 实际声明代表生产期间 | 声明工厂归属阶段供货入口 | 实际归属部件kg / 同一配置的验收设备数量 | 图样证实胶料供货安装部件重量记录 |
| `cp_energy` | all_processes | stage electricity | 实际用户侧电表 | 阶段；表计；kWh；实际期间；供货电压地区；共享负载分配；验收数量 | 读取校准实际用户接口阶段表计，并按文件化因果记录归属实际待机干燥试验返工负载。按3.6 MJ/kWh把kWh换MJ后设备归一，机床额定功率不是实测消耗。 | MJ | 实际代表期间 | 实际声明代表生产期间 | 声明工厂归属阶段供货入口 | 实际归属电力MJ / 同一配置的验收设备数量 | 校准原始表计记录因果负载供货身份 |
| `cp_waste` | all_processes | actual exported waste | 外运称重组成接收记录 | 具体废物；湿干kg；夹带液；分析；接收方；外运退回再用；验收数量 | 分别测各实际具名外运废物，保留组成接收方；核对金属液体拆分内部回收不重计。废物处理排放须实际链接接收方，不假设未处理基础释放。 | kg | 每外运实际期间 | 实际声明代表生产期间 | 声明工厂归属阶段供货入口 | 实际外运废物kg / 同一配置的验收设备数量 | 校准重量组成废物联单接收方 |
| `cp_emission` | cleaning | conditional IPA air release | 物质特异采样或闭合溶剂平衡 | CAS；室外空气子介质；浓度；实际流量时长；回收残留余留；检出限不确定性；验收数量 | 按匹配采样或文件化闭合IPA领用回收残留余留平衡量化实际残余释放。保留未测低于检出状态，无通用VOC因子或全蒸发假设。 | kg | 实际代表清洗控制期间 | 实际声明代表生产期间 | 声明工厂归属阶段供货入口 | 实际释放kg / 同一配置的验收设备数量 | 采样校准实验室记录溶剂平衡 |
| `cp_configuration` | all_processes | configured accepted caliper | 受控竣工验收记录 | 型号图样序号；活塞缸径数量；本体活塞等级；密封胶料；涂层；完整清单入口；实际尺寸清洁检漏功能试验处置；排液交付状态 | 追溯受控图样完整供货已含实际合格作业计划。记针对具体部件批准实际验收试验阈值校准处置；制造商示例不规定通用试验压力限值。声明可选硬件净交付状态。 | kg | 每型号批次配置改变 | 实际声明代表生产期间 | 声明工厂归属阶段供货入口 | 限定随附每验收同配置设备 | 签认图样清单证实材料工厂验收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | period records | 按当前因果记录归属实际库存表计外运总量至一种验收配置；归属交换总量除实际验收数量取得q_item。分子保留拒收返工负担。不同缸径活塞数涂层密封胶料不得暗中混合。 | cp_stock; cp_parts; cp_energy; cp_mass | q_item |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | 正M须当前实际校准完整净称重：秤量程分辨校准原始读数皮重签认配置序号。独立称机加工本体已装部件设计，核对质量及实际余留润滑膜与完整M。不用整车质量制动套件目录重通用件kg因子。 | cp_mass; cp_parts; cp_configuration |
| `net_configuration` | finished_caliper | M包括实际永久已装本体活塞密封声明硬件仅一次，以及排液交付状态实测余留膜润滑。排除盘摩擦片不作为本钳部分供货车辆安装件散装备件临时试验接头运输盒。刻意湿式预充改变参考状态；独立核对余留外运液体，不重计循环预混组分投入。 | cp_mass; cp_stock; cp_configuration |
| `completeness_balance` | all exchanges | 声明完整整厂前展开实际完整清单作业：额外堵头接头连接件密封紧固件包装实际槽添加剂涂覆作业压缩空气热公用若存在各须具体交换。核对坯件本体屑拒收、部件安装退回及全部湿液平衡；识别接收上游运输链接并记截断不确定性分配敏感性。无默认材料产率通用化学排放。 | cp_stock; cp_parts; cp_waste; cp_energy; cp_emission |
| `source_limits` | external sources | Akebono描述汽车对向活塞结构，不提供实际等级胶料制造数量验收阈值。Brembo2023仅历史工厂阶段描述，产能投资就业数均不是清单因子。出版方彼此独立但两文件均未测此配置前景。仍须当前实际证实材料工厂记录及独立科学审查。 | akebono-opposed-caliper; akebono-automotive-brakes; brembo-escobedo-2023 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 核验参考产品与finished_caliper名称完全相同、完整铸本体对向活塞道路汽车配置、正物理M kg及原始独立部件质量核对。候选空参考UUID是声明身份缺口，不允许复用宽泛不相容制动材料流。 |  |
| `validation_process` | all_processes | 按受控工单配置核验实际加工清洗装配验收试验，含拒收返工可选作业。须证明证实铝活塞EPDM胶料，实际替代须支持路线扩展。来源产品描述不建立当前合法匹配安全批准。 | akebono-opposed-caliper; akebono-automotive-brakes; brembo-escobedo-2023 |
| `validation_identity` | flow rows | 核验公开state100原件类型实际参考属性组单位路线组成介质子介质。保留公开数量体积能量不改质量。购水收集废水天然水不同；室外即时IPA不是采购清洗剂室内长期释放。登记精确未解决row_id官方中文名。 |  |
| `validation_claims` | claims | 机械检查通过不建立实际测量完整摇篮到大门科学批准制动性能寿命。披露参考部件身份缺口实际缺少清单公用上游链接及来源计量限制。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置道路汽车铸铝固定液压卡钳机加工装配制造前景；标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实际M归一同配置完整排液卡钳制造，匹配本体部件上游入口实际作业 |
| excluded_use | 道路制动服务磨耗排放制动距离寿命比较其他制动结构修理再制造法规批准 |
| required_metadata | 图样型号序号批次匹配左右方向活塞缸径数量证实本体活塞合金密封胶料涂层完整清单入口实际作业试验处置记录净M kg原件独立部件液体平衡排除附件场址期间供货分配上游接收链接 |
| required_quality_disclosure | 身份清单作业计量链接缺口实际拒收返工退回回收来源历史适用性检出不确定性截断分配敏感性 |
| update_trigger | 本体活塞密封涂层液压几何匹配供货本地作业入口试验排液状态称重配置工厂期间供货包装改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| akebono-automotive-brakes | handbook | Akebono Brake Industry, Brakes for Automobiles, undated official page, Brakes for Automobiles and Disc Brakes sections. https://www.akebono-brake.com/english/product_technology/product/automotive/index.html | 汽车盘鼓与摩擦材料区别，无数量配方。 |
| akebono-opposed-caliper | handbook | Akebono Brake Industry, Opposed Piston Type Disc Brakes, undated official page, Opposed Piston Type Disc Brakes section. https://www.akebono-brake.com/english/product_technology/product/automotive/disc/opposed.html | 对向活塞结构及可能配置数量，不采用默认件数材料胶料。 |
| brembo-escobedo-2023 | handbook | Brembo North America, Brembo completes expansion of Escobedo, Mexico caliper plant,12May2023, final operational-expansion paragraph; publisher press release hosted by PRNewswire. https://www.prnewswire.com/news-releases/brembo-completes-expansion-of-escobedo-mexico-caliper-plant-301823690.html | 仅历史铝卡钳工厂从铸造到制造装配阶段。出版方署名HTML仅支持所述历史阶段边界。 |
