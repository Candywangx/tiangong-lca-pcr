---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.railway-or-tramway-sleepers-cross-ties-of-wood-not-impregnated
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 未浸渍实木铁路或有轨电车枕木

## 1. 范围与适用性

本方法涵盖供铁路或有轨电车轨道使用的全新、裸木、未浸渍实木锯制枕木/横枕；阔叶木和针叶木均须声明树种、等级和实测含水率。涵盖锯制枕木毛坯接收、实际定尺/削平/钻孔、实际气干或间接窑干及检查。交付状态可为生材或调湿材，须明确声明。本方法不声称未处理木材适合所有铁路暴露条件。

排除CPC 31320浸渍枕木、防腐浸渍、杂酚油/杀生物剂处理及未发生的固着/再干燥。另排除胶合/层压或塑木复合枕木、回收污染旧枕、已安装的钢轨扣件、涂层/阻燃处理、直接燃烧烟气窑及热电联产。这些路线须经审核后扩展。后续防腐前出售的木枕属于所声明的未处理厂门；其后处理成品属于独立产品和边界。[usda-wood-handbook-2021]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.railway-or-tramway-sleepers-cross-ties-of-wood-not-impregnated |
| classification_refs | CPC 3.0 31109；narrower；当前接受关系及决定以`classifications/mappings/cpc-3.0-to-pcr.yaml`及其引用ADR为准，不表示整类覆盖或科学/翻译批准 |
| covered_products | 全新实木锯制未处理横枕；声明生材/气干/间接窑干状态 |
| excluded_products | CPC 31320浸渍木枕；工程复合木枕；旧枕；带扣件轨道组件 |
| representative_product | 一项已声明树种/几何/等级的木枕配置；不虚构质量 |
| production_route | 接收锯制毛坯 → 定尺/适用时钻孔 → 实际干燥或旁路 → 检查/出厂 |
| market_state | 工厂门裸木未浸渍枕木，声明含水率和预定后续处理 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应符合声明规格的未处理木枕，供后续轨道施工或进一步处理 |
| How much | 出厂含水率状态下1千克验收木枕净质量 |
| How well | 声明树种、截面、长度、缺陷/等级与钻孔规格；保留买方验收依据，不设通用承载能力 |
| How long or cycle | 一个生产批次至工厂门；铁路服役寿命、更换和报废在本参考边界外，须另建情景 |
| reference_flow_link | finishing_finished_out |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 树种与来源; 实木锯制结构; 尺寸; 等级与缺陷; 加工/钻孔状态; 干基含水率及方法; 净质量; 干燥路线; 未浸渍证据; 起始厂门; 上游覆盖与批次; 预定后续处理; 真实供方与接收验收; 广义木质材料前景定位符不推定背景匹配、铁路强度或合规、服役寿命或实测数量。每项须在数据集元数据或等效记录中声明。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | reference product | 质量 | kg | 使用实测出厂含水率下的验收木材净质量；包装单列。 |
| count_mass | reference product | 质量 | kg | M为同树种、几何、等级、加工及出厂含水率配置的一根木枕实测净质量。采用经校准的秤逐根称量验收木枕，并用cp_mass标识记录。主采集基准为经校准秤量的批次验收净质量B千克，可直接整批称量或汇总逐根验收实测质量M_i；N仅核对配置/数量，不能建立B。下游按根换算须采用实测同配置M，将每根量a转为每千克量a / M；本版不将其作为已支持的主采集路径，须另行审核计量合同适用性。不得使用通用每根质量或假定密度。以下全部清单使用实测B千克，不以根数作分母。 |
| wood_state | all wood streams | 质量与体积 | kg | 干基含水率u = 水质量 / 全干木质量；干质量 = 湿质量 / (1+u)。区分百分数与小数。实体体积与密度须对应同树种、含水率和几何；堆积木片须独立实测堆积密度。不得以堆积体积替代实体体积。[usda-wood-handbook-2021] |
| utility_units | energy and gas rows | 能量；体积 | MJ; m3 | 保留经核实参考单位。电力kWh × 3.6 = MJ。蒸汽流中的总热值/MJ仅建立能量属性/单位身份，不能证明接收净热、燃料HHV或锅炉总产热。采用蒸汽交换前，须取得供应方及所链接背景过程的资料，证明供热/交付边界、蒸汽状态、凝结水参考焓、回水/补水处理及传输损失与cp_energy_drying与cp_energy_boiler相符。按该匹配边界测量适用焓差；锅炉总产热表计不能在未经核实调节时替代接收净热。边界或参考焓未知时，即使UUID已知，两热量行的方法兼容性仍待确认。气体体积须有实际参考温度、压力和压缩系数；仅凭这些条件下可追溯密度转质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂接收未处理实木锯制枕木毛坯；记录已有林业/锯材/干燥过程 |
| starting_condition_role | foreground_gate_to_gate |
| product_classification_scope | CPC 3.0 31109; narrower; excludes CPC 31320 |
| recursive_input_rule | 同类进厂木枕毛坯属于上游中间品；供应商制造负荷只保留一次，仅建模实际剩余操作 |
| upstream_dataset_requirement | 用于从摇篮到工厂门时链接供应商树种/水分/状态相符的林业和锯材数据集；仅厂门数据须声明缺失的上游负荷 |
| disclosure | 起始厂门、实际路线和运输、已有操作、供应公用工程与省略的下游生命周期阶段 |

- `boundary_actual`: 纳入实际接收、整形/钻孔、干燥和检查，以及可归属公用工程、废物与排放。省略未发生的浸渍及其药剂、槽液、固着或处理后干燥；供应商处理证据与未处理身份冲突时禁止使用。[usda-wood-handbook-2021]
- `boundary_lifetime`: 工厂门制造使用声明单位，不构成轨道服务功能比较。轨道安装、道砟/扣件、铁路服役寿命、维护、更换和报废均排除；下游须明确建立性能等效的服务情景。不假定寿命、碳中和或耐久性收益。[usda-wood-handbook-2021]

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receiving | 木材接收与堆场搬运 | required | 始终纳入；接收方形实木锯制毛坯 | foreground_production | 每 1 kg 参考流 |
| machining | 定尺加工、削平与钻孔 | required | 定尺与检查始终纳入；削平/钻孔仅在规格要求且实际发生时 | foreground_production | 每 1 kg 参考流 |
| drying | 干燥与含水率控制 | conditional | 实际气干或窑干时；已调湿毛坯采用等质量旁路并核实接收含水率 | foreground_production | 每 1 kg 参考流 |
| finishing | 最终检查与出厂准备 | required | 始终纳入；包装仅在使用时 | foreground_production | 每 1 kg 参考流 |
| boiler | 厂内工艺供热 | conditional | 非热电联产厂内锅炉供应间接干燥热时；购热、被动气干或仅电干燥时不纳入 | foreground_production | 每 1 kg 参考流 |

未分配实物过程账与分配后环境负荷账分别保存。批次实物量仅除以同一验收B千克作归一化。内部交接两端数量相等；分配前追溯返工、库存变化、干物质、蒸发水和碳。实际干燥可在加工前发生：调整记录过程图顺序并保持配对交接相等，不重复操作。被动气干仍记录时间、搬运、实际水分损失、缺陷与排放。 对同一声明树种、SKU或配置、几何等级、路线和含水状态的完整报告期间保留原始总量，包含失败或零产出批、启停、清洗及返工。B为最终检查过程按声明出厂含水状态新增且仅验收一次的木枕净质量；发运量及旧库存不自动构成新产量。产量、发运、购入成品、退货再验收、期初末在制品及成品库存、其实物与结转负荷分别记录，匹配归属B的负荷，不重复计验收或库存调整。全部阶段采用共同正终端B，各可归属原始总量仅归一一次，不仅平均成功批或再次相除。B=0时保留完整实物和负荷池，不报归一结果。

### 过程：木材接收与堆场搬运 (`receiving`)

#### 输入

##### 产品流

###### 未处理实木锯制枕木毛坯 (`receiving_blank_in`)

声明供应方交接厂界接收的真实新裸材、未浸渍实木锯制枕木毛坯，保留真实树种或来源、锯制截面与长度、等级缺陷、加工状态及实测水分净质量。不含胶合、层压、复合、涂层、防腐处理或附装钢轨扣件。广义木质材料定位符不确立具体供方背景或干湿状态；前序林业、锯切、干燥负荷记录一次。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_receiving
- 来源：`usda-wood-handbook-2021`

###### 交流电 (`receiving_electricity_in`)

仅适用于低于1千伏用户侧电网平均供电。 来源供应地域CN为记录元数据，不设定前景国家；链接背景前核验真实场址、年份、供方、电压、电网组合兼容性。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_energy_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_energy_receiving
- 来源：

###### 柴油 (`receiving_diesel_in`)

仅计实际柴油堆场设备；排除已由运输服务表示的公路货运燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_fuel_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_fuel_receiving
- 来源：

###### 公路运输 (`receiving_freight_in`)

仅适用于与本流相符的实际30吨柴油货车公路服务，且供应商交付数据集尚未包括；其他货车配置须独立精确行。

- 选定流：公路货物运输服务 `9425f2bf-e734-4884-be1b-645473a3e82d`
- 流属性/单位：质量×距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931`; 单位组 `3620148f-c5db-48ce-9065-a10092089aca` / kg*km
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_transport。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_transport
- 来源：

#### 输出

##### 产品流

###### 未处理实木锯制枕木毛坯 (`receiving_blank_out`)

内部链接 receiving_blank_out 至 machining_blank_in；未分配实物量相等。 仅为明确的内部木质材料阶段交接，独立声明真实毛坯、加工后或调湿后锯制枕木形态、树种、加工与未处理状态。发送接收ID按期段、湿干木质量、水碳、水分库存配对，保留实际干燥或无干燥旁路及损失。相同广义UUID不证明状态相同或供应背景可互换；分配前保留原实物量，不是第二次外售、购入或最终木枕输出。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_receiving
- 来源：

##### 基本流

###### 二氧化碳（化石源） (`receiving_co2_fossil_out`)

仅计实际堆场室外空气排放；柴油物种与购入货运负荷分开。颗粒粒径区间互斥；按实际情况包括道路/搬运扬尘。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_receiving
- 来源：

###### 一氧化碳（化石源） (`receiving_co_fossil_out`)

仅计实际堆场室外空气排放；柴油物种与购入货运负荷分开。颗粒粒径区间互斥；按实际情况包括道路/搬运扬尘。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_receiving
- 来源：

###### 甲烷 (化石源) (`receiving_ch4_fossil_out`)

仅计实际堆场室外空气排放；柴油物种与购入货运负荷分开。颗粒粒径区间互斥；按实际情况包括道路/搬运扬尘。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_receiving
- 来源：

###### 一氧化二氮 (`receiving_n2o_out`)

仅计实际堆场室外空气排放；柴油物种与购入货运负荷分开。颗粒粒径区间互斥；按实际情况包括道路/搬运扬尘。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_receiving
- 来源：

###### 氮氧化物 (`receiving_nox_out`)

仅计实际堆场室外空气排放；柴油物种与购入货运负荷分开。颗粒粒径区间互斥；按实际情况包括道路/搬运扬尘。 Mass/千克与CAS11104-93-1不证明监测、LCI、LCIA的NO2当量数量；证实真实NO或NO2或NO2当量基准，未知保持未决，防止与N2O或单列NO、NO2重复。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_receiving
- 来源：

###### 二氧化硫 (`receiving_so2_out`)

仅计实际堆场室外空气排放；柴油物种与购入货运负荷分开。颗粒粒径区间互斥；按实际情况包括道路/搬运扬尘。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_receiving
- 来源：

###### 颗粒物 (PM2.5) (`receiving_pm25_out`)

仅计实际堆场室外空气排放；柴油物种与购入货运负荷分开。颗粒粒径区间互斥；按实际情况包括道路/搬运扬尘。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_receiving
- 来源：`epa-sawmill-pm-2014`

###### 颗粒物 (PM2.5 - PM10) (`receiving_pm_between_out`)

仅计实际堆场室外空气排放；柴油物种与购入货运负荷分开。颗粒粒径区间互斥；按实际情况包括道路/搬运扬尘。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_receiving
- 来源：`epa-sawmill-pm-2014`

###### 颗粒物（> PM10） (`receiving_pm_coarse_out`)

仅计实际堆场室外空气排放；柴油物种与购入货运负荷分开。颗粒粒径区间互斥；按实际情况包括道路/搬运扬尘。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_receiving。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_receiving
- 来源：`epa-sawmill-pm-2014`

### 过程：定尺加工、削平与钻孔 (`machining`)

#### 输入

##### 产品流

###### 未处理实木锯制枕木毛坯 (`machining_blank_in`)

与 receiving_blank_out 为同一实物交接。 仅为明确的内部木质材料阶段交接，独立声明真实毛坯、加工后或调湿后锯制枕木形态、树种、加工与未处理状态。发送接收ID按期段、湿干木质量、水碳、水分库存配对，保留实际干燥或无干燥旁路及损失。相同广义UUID不证明状态相同或供应背景可互换；分配前保留原实物量，不是第二次外售、购入或最终木枕输出。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_machining
- 来源：

###### 交流电 (`machining_electricity_in`)

计量锯切、削平、钻孔和集尘电力；未发生操作不计消耗。 来源供应地域CN为记录元数据，不设定前景国家；链接背景前核验真实场址、年份、供方、电压、电网组合兼容性。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_energy_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_energy_machining
- 来源：

###### 润滑油 (`machining_lubricant_in`)

仅适用于与本身份相符且实际使用的PAO全合成润滑油；其他等级须独立精确流行。 核验真实供方PAO等级、完整添加剂及SDS组成；通用石油衍生油说明不证明该全合成背景路线。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_machining
- 来源：

#### 输出

##### 产品流

###### 定尺加工后的未浸渍实木枕 (`machining_machined_out`)

分配前测量原始实物产出；可出售材料与弃置废物分开。 仅为明确的内部木质材料阶段交接，独立声明真实毛坯、加工后或调湿后锯制枕木形态、树种、加工与未处理状态。发送接收ID按期段、湿干木质量、水碳、水分库存配对，保留实际干燥或无干燥旁路及损失。相同广义UUID不证明状态相同或供应背景可互换；分配前保留原实物量，不是第二次外售、购入或最终木枕输出。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_machining
- 来源：`corrim-northern-lumber-2025`

###### 未处理木材锯屑共产品 (`machining_sawdust_product_out`)

真实单独收集并以产品外售的未处理木锯屑，采集粒径分布、树种、水分干固体、污染、真实产品状态及接收方规格。细锯屑是木质材料物理子集，不是粗边角料、团聚板或颗粒、不预设燃料混合物，也不替换为废物流。保留其独立实测外部质量与未分配干物质、水、碳账；真实非燃料用途仍可存在。通用定位符不确立回收收益、市场或等级等效及背景匹配。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_machining
- 来源：`corrim-northern-lumber-2025`

###### 未处理实木边角料共产品 (`machining_offcut_product_out`)

真实单独收集并以产品外售的粗实木未处理边角料，记录个体形态尺寸、树种、实测水分净质量、污染、真实产品状态及接收验收。声明子集为非团聚、无胶、无涂层、未浸渍木块，不是锯屑或林地未加工圆木。保留独立外部数量及原干物质、水、碳和负荷分配账。广义木质材料身份不规定再加工、燃料用途、收益或背景匹配。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_machining
- 来源：`corrim-northern-lumber-2025`

##### 废物流

###### 木屑废物 (`machining_waste_sawdust_out`)

仅计本项实际弃置物流；捕集粉尘进入锯屑废物，不再计为空气排放。废油使用独立行。 所选锯屑废物记录明确限定未处理、焚烧或回收；链接前须真实接收方路线匹配。其他处置路线须另核验兼容废物身份与提供方，不推定回收收益。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_waste_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_waste_machining
- 来源：

###### 木材边角料 (`machining_offcut_out`)

仅计本项实际弃置物流；捕集粉尘进入锯屑废物，不再计为空气排放。废油使用独立行。 仅限真实非团聚、无胶、无涂层、未浸渍实木，采集形态组成水分及接收条件。原CPC39282团聚分类与一致的木工剩余料名称说明及空处理路线矛盾，保留未解决的来源或提供方分类澄清。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_waste_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_waste_machining
- 来源：

###### 送处置的废PAO润滑油 (`machining_waste_oil_out`)

实际单独收集的使用后PAO合成润滑油，包含实测油、添加剂、水、固体污染与库存变化。所选使用后润滑油身份明确包含合成废油且不规定处理路线。要求真实液态、供方SDS、废物分类及接收条件；不以新油或产品替代，不假设再生、危害状态或处理收益。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_waste_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_waste_machining
- 来源：

##### 基本流

###### 颗粒物 (PM2.5) (`machining_pm25_out`)

捕集后向室外空气排出的残余；捕集粉尘不作为排放。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_machining
- 来源：`epa-sawmill-pm-2014`

###### 颗粒物 (PM2.5 - PM10) (`machining_pm_between_out`)

捕集后向室外空气排出的残余；捕集粉尘不作为排放。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_machining
- 来源：`epa-sawmill-pm-2014`

###### 颗粒物（> PM10） (`machining_pm_coarse_out`)

捕集后向室外空气排出的残余；捕集粉尘不作为排放。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_machining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_machining
- 来源：`epa-sawmill-pm-2014`

### 过程：干燥与含水率控制 (`drying`)

#### 输入

##### 产品流

###### 定尺加工后的未浸渍实木枕 (`drying_machined_in`)

与 machining_machined_out 为同一实物交接；未干燥时不变旁路至最终检查。 仅为明确的内部木质材料阶段交接，独立声明真实毛坯、加工后或调湿后锯制枕木形态、树种、加工与未处理状态。发送接收ID按期段、湿干木质量、水碳、水分库存配对，保留实际干燥或无干燥旁路及损失。相同广义UUID不证明状态相同或供应背景可互换；分配前保留原实物量，不是第二次外售、购入或最终木枕输出。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_drying
- 来源：

###### 交流电 (`drying_electricity_in`)

按实际间接干燥公用工程条件计入。热输入等于锅炉热输出，或仅购入一次；被动气干无购热。自来水仅在实际使用时计入。 来源供应地域CN为记录元数据，不设定前景国家；链接背景前核验真实场址、年份、供方、电压、电网组合兼容性。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_energy_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_energy_drying
- 来源：`usda-wood-handbook-2021`

###### 蒸汽工艺热 (`drying_heat_energy_in`)

已核实的UUID仍作为蒸汽工艺热身份候选保留；该总热值/MJ记录没有独立证明接收净焓差。仅在供应方/背景过程的供热边界、蒸汽状态及凝结水参考焓与cp_energy_drying一致、回水/补水和传输损失可核对时采用。热量未知时保留未决，不凭MJ等同HHV、锅炉总产热或接收净热。配对交接须在同一已核实交付边界同量；购热只计一次，被动气干不计购热。不含热电联产/外售热。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按所述单位记录的已核实热量边界及参考焓后，实际未分配批次交付热量除以验收B千克；采用cp_energy_drying。基准未知时不赋予已验证量值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_energy_drying
- 来源：`usda-wood-handbook-2021`

###### 自来水 (`drying_water_in`)

按实际间接干燥公用工程条件计入。热输入等于锅炉热输出，或仅购入一次；被动气干无购热。自来水仅在实际使用时计入。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_drying
- 来源：`usda-wood-handbook-2021`

#### 输出

##### 产品流

###### 完成含水率调节的未浸渍实木枕 (`drying_dried_out`)

按实测出口含水率等量链接 finishing_dried_in；区分干物质与失水。 仅为明确的内部木质材料阶段交接，独立声明真实毛坯、加工后或调湿后锯制枕木形态、树种、加工与未处理状态。发送接收ID按期段、湿干木质量、水碳、水分库存配对，保留实际干燥或无干燥旁路及损失。相同广义UUID不证明状态相同或供应背景可互换；分配前保留原实物量，不是第二次外售、购入或最终木枕输出。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_drying
- 来源：`usda-wood-handbook-2021`

##### 废物流

###### 木材干燥冷凝废水 (`drying_effluent_out`)

仅限真实单独收集并送外部处理方的液态木材干燥冷凝废水，不是内部回流洁净蒸汽凝结水或水蒸气排放。保留实测整液质量、温度、组成或水分数、溶解夹带木材组分及接收方接受条件；计量体积仅按真实混合液密度或称重换算，不默认1000千克每立方米。广义工业废液身份不确立处理、危害类别或背景匹配。真实排环境时须另核验相应基本流介质与实测组分负荷。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_waste_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_waste_drying
- 来源：

##### 基本流

###### 水蒸气 (`drying_vapour_out`)

存在时计实际逐物种室外排放。筛查树种/木材状态及干燥路线；不把针叶调查默认用于阔叶木枕。完整数据交付前另列可凝颗粒物及其他已识别物种。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_drying
- 来源：`usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

###### 甲醛 (`drying_formaldehyde_out`)

存在时计实际逐物种室外排放。筛查树种/木材状态及干燥路线；不把针叶调查默认用于阔叶木枕。完整数据交付前另列可凝颗粒物及其他已识别物种。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_drying
- 来源：`usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

###### 甲醇 (`drying_methanol_out`)

存在时计实际逐物种室外排放。筛查树种/木材状态及干燥路线；不把针叶调查默认用于阔叶木枕。完整数据交付前另列可凝颗粒物及其他已识别物种。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_drying
- 来源：`usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

###### 乙醛 (`drying_acetaldehyde_out`)

存在时计实际逐物种室外排放。筛查树种/木材状态及干燥路线；不把针叶调查默认用于阔叶木枕。完整数据交付前另列可凝颗粒物及其他已识别物种。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_drying
- 来源：`usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

###### 蒎烯 (`drying_alpha_pinene_out`)

存在时计实际逐物种室外排放。筛查树种/木材状态及干燥路线；不把针叶调查默认用于阔叶木枕。完整数据交付前另列可凝颗粒物及其他已识别物种。 所选pin-2(3)-ene记录仅为CAS80-56-8的α蒎烯；测量真实该物种，不替代CAS127-91-3的β蒎烯或未特指萜烯、VOC汇总。

- 选定流：蒎烯 `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_drying。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_drying
- 来源：`usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

### 过程：最终检查与出厂准备 (`finishing`)

#### 输入

##### 产品流

###### 完成含水率调节的未浸渍实木枕 (`finishing_dried_in`)

与 drying_dried_out 为同一交接，或在记录的无干燥旁路接收未变化的加工后毛坯。 仅为明确的内部木质材料阶段交接，独立声明真实毛坯、加工后或调湿后锯制枕木形态、树种、加工与未处理状态。发送接收ID按期段、湿干木质量、水碳、水分库存配对，保留实际干燥或无干燥旁路及损失。相同广义UUID不证明状态相同或供应背景可互换；分配前保留原实物量，不是第二次外售、购入或最终木枕输出。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_finishing
- 来源：

###### 交流电 (`finishing_electricity_in`)

实际检查/出厂准备电力。 来源供应地域CN为记录元数据，不设定前景国家；链接背景前核验真实场址、年份、供方、电压、电网组合兼容性。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_energy_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_energy_finishing
- 来源：

###### 钢打包带 (`finishing_strap_in`)

仅适用于经核实成分/路线的实际回收钢打包带；其他包装须独立精确流行。 以真实供方证据核对原记录99%铁、1%碳组成与回收再加工路线；这是记录限定，不是虚构工厂合金配方。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_packaging。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_packaging
- 来源：

#### 输出

##### 产品流

###### 验收合格的未浸渍实木铁路或有轨电车枕木 (`finishing_finished_out`)

按真实出厂水分计恰好1千克验收合格的新裸实木锯制未浸渍铁路或有轨电车枕木净质量，排除所有包装和扣件。要求真实树种来源、尺寸、等级缺陷、加工削平钻孔状态、生材或气干或间接窑干路线、买方验收及无防腐、涂层、胶结证据。本品为一件成形木质材料，不是轨道组件。Wood material仅为有条件前景物理定位符，不证明铁路强度、耐久、寿命、合规、具体供方背景或实测数量。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：cp_mass
- 来源：`usda-wood-handbook-2021`

##### 废物流

###### 木材边角料 (`finishing_offcut_out`)

送处置的不合格未处理实木枕；返工属于内部交接，不再重复计为末端废物。 仅限真实非团聚、无胶、无涂层、未浸渍实木，采集形态组成水分及接收条件。原CPC39282团聚分类与一致的木工剩余料名称说明及空处理路线矛盾，保留未解决的来源或提供方分类澄清。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_waste_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_waste_finishing
- 来源：

### 过程：厂内工艺供热 (`boiler`)

#### 输入

##### 产品流

###### 气态天然气 (`boiler_gas_in`)

仅计实际锅炉输入；记录燃料来源、水分、热值基准和气体温压。列出燃料并不要求必须使用。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_fuel_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_fuel_boiler
- 来源：`epa-ap42-wood-boilers-2022`, `usda-wood-handbook-2021`

###### 锅炉燃料用未处理木片 (`boiler_wood_fuel_in`)

声明锅炉实际使用的未浸渍、无胶、无涂层木片，采集粒径、树种、水分、污染、碳与热值基准。保留所选Volume/立方米参考。先确立真实供方参考实积或堆积体积约定，并测定相容密度质量，再换算原称重燃料记录；次级系数或通用木材密度不能证明该约定。约定密度未知时数量背景链接未决，不为零。区分外购木片与真实内部残余物转移；后者保留两端物理燃料账，不重复购入外售或给收益。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_fuel_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_fuel_boiler
- 来源：`epa-ap42-wood-boilers-2022`, `usda-wood-handbook-2021`

###### 自来水 (`boiler_water_in`)

仅计实际锅炉输入；记录燃料来源、水分、热值基准和气体温压。列出燃料并不要求必须使用。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_material_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_material_boiler
- 来源：`epa-ap42-wood-boilers-2022`, `usda-wood-handbook-2021`

###### 交流电 (`boiler_electricity_in`)

仅计实际锅炉输入；记录燃料来源、水分、热值基准和气体温压。列出燃料并不要求必须使用。 来源供应地域CN为记录元数据，不设定前景国家；链接背景前核验真实场址、年份、供方、电压、电网组合兼容性。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_energy_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_energy_boiler
- 来源：`epa-ap42-wood-boilers-2022`, `usda-wood-handbook-2021`

#### 输出

##### 产品流

###### 蒸汽工艺热 (`boiler_heat_energy_out`)

已核实的UUID仍作为蒸汽工艺热身份候选保留；该总热值/MJ记录没有独立证明接收净焓差。仅在供应方/背景过程的供热边界、蒸汽状态及凝结水参考焓与cp_energy_boiler一致、回水/补水和传输损失可核对时采用。热量未知时保留未决，不凭MJ等同HHV、锅炉总产热或接收净热。配对交接须在同一已核实交付边界同量；购热只计一次，被动气干不计购热。不含热电联产/外售热。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按所述单位记录的已核实热量边界及参考焓后，实际未分配批次交付热量除以验收B千克；采用cp_energy_boiler。基准未知时不赋予已验证量值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_energy_boiler
- 来源：`epa-ap42-wood-boilers-2022`

##### 废物流

###### 未处理木材燃烧底灰 (`boiler_ash_out`)

仅限本未处理木质燃料锅炉真实单独收集的固态底灰。测定湿干质量、水分、残留未燃碳或矿物燃料污染组成及真实接收条件。广义工业固废身份允许此物理子集，但不规定填埋、利用、危害状态或背景；飞灰及其他真实燃料灰独立识别。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_waste_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_waste_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 未处理木材燃烧飞灰 (`boiler_fly_ash_out`)

仅限本未处理木质燃料锅炉真实单独捕集的固态飞灰。保留捕集设备源、独立湿干质量、矿物碳污染组成、调湿及接收条件。不是底灰、液态碱液或控制措施后的空气颗粒。此广义固废定位符不推定处理、危害状态、分配收益或供方背景。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_waste_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_waste_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 锅炉排污废水 (`boiler_blowdown_out`)

仅限真实单独收集并送外部处理方的液态锅炉排污。测定整液质量、温度、溶解或悬浮盐与实际锅炉水处理组分、水分数、库存变化及接收条件。与干燥冷凝废水、洁净回流凝结水、直接环境排放分开；密度换算须有真实混合液证据，不用纯水默认。不由广义工业废液身份推定接收路线、危害状态或环境收益。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_waste_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_waste_boiler
- 来源：`epa-ap42-wood-boilers-2022`

##### 基本流

###### 二氧化碳（生物源） (`boiler_co2_bio_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 二氧化碳（化石源） (`boiler_co2_fossil_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 一氧化碳（生物源） (`boiler_co_bio_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 一氧化碳（化石源） (`boiler_co_fossil_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 甲烷 (生物源) (`boiler_ch4_bio_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 甲烷 (化石源) (`boiler_ch4_fossil_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 一氧化二氮 (`boiler_n2o_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 氮氧化物 (`boiler_nox_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。 Mass/千克与CAS11104-93-1不证明监测、LCI、LCIA的NO2当量数量；证实真实NO或NO2或NO2当量基准，未知保持未决，防止与N2O或单列NO、NO2重复。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 二氧化硫 (`boiler_so2_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 颗粒物 (PM2.5) (`boiler_pm25_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 颗粒物 (PM2.5 - PM10) (`boiler_pm_between_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 颗粒物（> PM10） (`boiler_pm_coarse_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

###### 水蒸气 (`boiler_vapour_out`)

实际锅炉室外空气排放；按实测燃料来源和碳平衡分开化石/生物碳。不论温室气体统计约定如何，LCI保留生物源CO2。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg；室外空气，子介质未指定
- 数量规则：按所述单位记录的实际未分配批次交换量除以验收B千克；采用cp_emission_boiler。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_emission_boiler
- 来源：`epa-ap42-wood-boilers-2022`

## 7. 分配与共产品处理

- `allocation_separate`: 优先以过程细分和专用计量避免分配。包装及仅针对成品木枕的最终检查负荷全部归属木枕。加工共同负荷无法分离且有可售未处理锯屑/边角料时，若干质量代表物理关系，采用同一共同加工步骤的主木枕材料与全部真实可售木料共产品的实测全干质量份额，排除重复内部链接与弃置废物；不适用时声明有依据的替代及敏感性。CORRIM仅为地区针叶锯材先例，不是通用木枕分配因子。[corrim-northern-lumber-2025]
- `allocation_physical`: 负荷份额仅施加于相关共同工序环境负荷。不得把共产品实物产出或内部转移量乘份额。废物不分得可售产品份额。内部燃料使用须配对交接并计实际锅炉排放；不得再申领外售燃料或避免产品收益。实物量V与可归属负荷A分别保留，包括完整继承的provider/交换向量及原owner/cohort。每项真实internal_out须与同边界internal_in配对，仅在合并该边界时双方相消；真实转化消耗进料并形成实测输出，不虚构外部receipt。按真实库存、转移、损失及产品归属结转每个向量分量，不以物料质量或新的通用provider替代。归属后适用实物或负荷分子仅除以B一次。[corrim-northern-lumber-2025]

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | finishing | 验收木枕质量 | foreground_record | 树种；配置；批次；批次净质量B；逐根称量时的单件编号和净质量M_i；含水率；根数核对；包装皮重；校准；唯一新增终端验收事件；验收产量与发运、退货再验收分别记录；期初末WIP及成品库存与结转实物负荷 | 使用经校准的秤称量批次验收净质量B并排除包装，或汇总逐根验收净质量M_i；核对配置、含水率与验收记录。根数本身不构成质量测量，不得凭通用密度推算M。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_material_receiving | receiving | receiving_blank_in; receiving_blank_out | foreground_record | 物流/单件身份；原始质量；水分；实体/堆积体积；库存变化；配对链接；批次 | 校准称量和代表性烘干测试，保留水分梯度、采样防失水或吸湿、恒质量准则、挥发物或抽提物损失限制以及经验证的树种特定水分仪核对；分别测量各产品、润滑油和水物流；保留干物质/水平衡。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_material_machining | machining | machining_blank_in; machining_lubricant_in; machining_machined_out; machining_sawdust_product_out; machining_offcut_product_out | foreground_record | 物流/单件身份；原始质量；水分；实体/堆积体积；库存变化；配对链接；批次 | 校准称量和代表性烘干测试，保留水分梯度、采样防失水或吸湿、恒质量准则、挥发物或抽提物损失限制以及经验证的树种特定水分仪核对；分别测量各产品、润滑油和水物流；保留干物质/水平衡。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_material_drying | drying | drying_machined_in; drying_water_in; drying_dried_out | foreground_record | 物流/单件身份；原始质量；水分；实体/堆积体积；库存变化；配对链接；批次 | 校准称量和代表性烘干测试，保留水分梯度、采样防失水或吸湿、恒质量准则、挥发物或抽提物损失限制以及经验证的树种特定水分仪核对；分别测量各产品、润滑油和水物流；保留干物质/水平衡。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_material_finishing | finishing | finishing_dried_in | foreground_record | 物流/单件身份；原始质量；水分；实体/堆积体积；库存变化；配对链接；批次 | 校准称量和代表性烘干测试，保留水分梯度、采样防失水或吸湿、恒质量准则、挥发物或抽提物损失限制以及经验证的树种特定水分仪核对；分别测量各产品、润滑油和水物流；保留干物质/水平衡。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_material_boiler | boiler | boiler_water_in | foreground_record | 物流/单件身份；原始质量；水分；实体/堆积体积；库存变化；配对链接；批次 | 校准称量和代表性烘干测试，保留水分梯度、采样防失水或吸湿、恒质量准则、挥发物或抽提物损失限制以及经验证的树种特定水分仪核对；分别测量各产品、润滑油和水物流；保留干物质/水平衡。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_energy_receiving | receiving | receiving_electricity_in | foreground_record | 表计编号；读数；kWh/MJ；供方/背景过程热量边界；蒸汽状态/质量/焓；凝结水参考焓；回水/补水处理；传输损失；锅炉燃料HHV/LHV基准；归属表计范围 | 按批次读取校准分表；取得供方与背景过程边界和凝结水参考焓证明，并与接收点、蒸汽状态、回水/补水及传输损失相核对后，测量同边界适用焓差。锅炉自供与购热分开；HHV、总产热和接收净热未经核实调节不得互换。任一基准未知则热量方法兼容性未确认。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | MJ | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_energy_machining | machining | machining_electricity_in | foreground_record | 表计编号；读数；kWh/MJ；供方/背景过程热量边界；蒸汽状态/质量/焓；凝结水参考焓；回水/补水处理；传输损失；锅炉燃料HHV/LHV基准；归属表计范围 | 按批次读取校准分表；取得供方与背景过程边界和凝结水参考焓证明，并与接收点、蒸汽状态、回水/补水及传输损失相核对后，测量同边界适用焓差。锅炉自供与购热分开；HHV、总产热和接收净热未经核实调节不得互换。任一基准未知则热量方法兼容性未确认。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | MJ | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_energy_drying | drying | drying_electricity_in; drying_heat_energy_in | foreground_record | 表计编号；读数；kWh/MJ；供方/背景过程热量边界；蒸汽状态/质量/焓；凝结水参考焓；回水/补水处理；传输损失；锅炉燃料HHV/LHV基准；归属表计范围 | 按批次读取校准分表；取得供方与背景过程边界和凝结水参考焓证明，并与接收点、蒸汽状态、回水/补水及传输损失相核对后，测量同边界适用焓差。锅炉自供与购热分开；HHV、总产热和接收净热未经核实调节不得互换。任一基准未知则热量方法兼容性未确认。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | MJ | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_energy_finishing | finishing | finishing_electricity_in | foreground_record | 表计编号；读数；kWh/MJ；供方/背景过程热量边界；蒸汽状态/质量/焓；凝结水参考焓；回水/补水处理；传输损失；锅炉燃料HHV/LHV基准；归属表计范围 | 按批次读取校准分表；取得供方与背景过程边界和凝结水参考焓证明，并与接收点、蒸汽状态、回水/补水及传输损失相核对后，测量同边界适用焓差。锅炉自供与购热分开；HHV、总产热和接收净热未经核实调节不得互换。任一基准未知则热量方法兼容性未确认。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | MJ | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_energy_boiler | boiler | boiler_electricity_in; boiler_heat_energy_out | foreground_record | 表计编号；读数；kWh/MJ；供方/背景过程热量边界；蒸汽状态/质量/焓；凝结水参考焓；回水/补水处理；传输损失；锅炉燃料HHV/LHV基准；归属表计范围 | 按批次读取校准分表；取得供方与背景过程边界和凝结水参考焓证明，并与接收点、蒸汽状态、回水/补水及传输损失相核对后，测量同边界适用焓差。锅炉自供与购热分开；HHV、总产热和接收净热未经核实调节不得互换。任一基准未知则热量方法兼容性未确认。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | MJ | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_fuel_receiving | receiving | receiving_diesel_in | foreground_record | 燃料身份；kg或m3；温压；密度；水分；碳来源/含量；热值；库存 | 核对校准表计/秤及发票；换算前保留实际气体体积条件及实测实体/堆积燃料约定。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg; m3 | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_fuel_boiler | boiler | boiler_gas_in; boiler_wood_fuel_in | foreground_record | 燃料身份；kg或m3；温压；密度；水分；碳来源/含量；热值；库存；实际燃料氢及组成和水形成基准 | 核对校准表计/秤及发票；换算前保留实际气体体积条件及实测实体/堆积燃料约定。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg; m3 | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_transport | receiving | 进厂卡车服务 | foreground_record | 载荷净质量；距离；方式；空返；供应商覆盖 | 称量载荷并记录路线距离/装载系数；采用质量×距离，避免重复供应商运输。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg*km | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_packaging | finishing | 钢带组件 | foreground_record | 钢带等级; 回收路线; 净质量; 皮重; 库存; 出厂批次; 组件id; P; N_ext; ER及同件先前外发事件; EO; internal_in; internal_out; 实际转化消耗; 原owner/cohort; 完整继承provider/交换向量; 整供货provider覆盖; gross dispatch; 运输; 废物 | 逐项称量实际包装组件并核对采购/库存；标识钢材路线和成分。P为采购组件receipt，包括已计入整供货价的组件；N_ext为首次非购外部receipt，不是先前外发组件的返回。ER须有同件先前外部外发事件；EO记录向外部原owner归还。期初库存、P、N_ext、ER和配对内部接收，与期末库存、gross dispatch、EO、配对内部发出、实际转化消耗及独立废物核对，不为消耗虚构receipt。退回与库存保留原owner/cohort及完整继承负荷向量。上游组件供给仅计一次：采用已核实整供货覆盖或其单组件provider，声明实际覆盖空缺；免费或无发票不证明零负荷。退回不得与gross dispatch、运输或废物净额相抵。复用及后续包装服务按有证据的cohort归属，不得无证进入当前新产量。保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_waste_machining | machining | machining_waste_sawdust_out; machining_offcut_out; machining_waste_oil_out | foreground_record | 废物身份；来源；质量；水分；去向；返工/库存；联单 | 存在时分别测量捕集锯屑、边角料、废油、冷凝水、底灰、飞灰及排污水；保留处理记录。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_waste_drying | drying | drying_effluent_out | foreground_record | 废物身份；来源；质量；水分；去向；返工/库存；联单 | 存在时分别测量捕集锯屑、边角料、废油、冷凝水、底灰、飞灰及排污水；保留处理记录。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_waste_finishing | finishing | finishing_offcut_out | foreground_record | 废物身份；来源；质量；水分；去向；返工/库存；联单 | 存在时分别测量捕集锯屑、边角料、废油、冷凝水、底灰、飞灰及排污水；保留处理记录。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_waste_boiler | boiler | boiler_ash_out; boiler_fly_ash_out; boiler_blowdown_out | foreground_record | 废物身份；来源；质量；水分；去向；返工/库存；联单 | 存在时分别测量捕集锯屑、边角料、废油、冷凝水、底灰、飞灰及排污水；保留处理记录。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_emission_receiving | receiving | receiving_co2_fossil_out; receiving_co_fossil_out; receiving_ch4_fossil_out; receiving_n2o_out; receiving_nox_out; receiving_so2_out; receiving_pm25_out; receiving_pm_between_out; receiving_pm_coarse_out | foreground_record | 物种/CAS；碳来源；实际介质/子介质；排放点；颗粒可过滤/可凝/空气动力学定义；流量/浓度；参考温压/氧/湿干基准；NOx物种或当量基准；时长；治理；检出限；因子范围；区分气体体积流率与已积分体积；确定净气相水时的进出口湿度和相容气量 | 将匹配物种浓度乘已积分相容气体体积并换算单位求和；仅体积流率才随时间积分，不再乘第二次时长。保留参考温压、氧和湿干基准及实际无组织源。估算时保留独立核实的路线特定因子、活动量及不确定性，不采用未核实行业或PTE默认。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_emission_machining | machining | machining_pm25_out; machining_pm_between_out; machining_pm_coarse_out | foreground_record | 物种/CAS；碳来源；实际介质/子介质；排放点；颗粒可过滤/可凝/空气动力学定义；流量/浓度；参考温压/氧/湿干基准；NOx物种或当量基准；时长；治理；检出限；因子范围；区分气体体积流率与已积分体积；确定净气相水时的进出口湿度和相容气量 | 将匹配物种浓度乘已积分相容气体体积并换算单位求和；仅体积流率才随时间积分，不再乘第二次时长。保留参考温压、氧和湿干基准及实际无组织源。估算时保留独立核实的路线特定因子、活动量及不确定性，不采用未核实行业或PTE默认。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_emission_drying | drying | drying_vapour_out; drying_formaldehyde_out; drying_methanol_out; drying_acetaldehyde_out; drying_alpha_pinene_out | foreground_record | 物种/CAS；碳来源；实际介质/子介质；排放点；颗粒可过滤/可凝/空气动力学定义；流量/浓度；参考温压/氧/湿干基准；NOx物种或当量基准；时长；治理；检出限；因子范围；区分气体体积流率与已积分体积；确定净气相水时的进出口湿度和相容气量 | 将匹配物种浓度乘已积分相容气体体积并换算单位求和；仅体积流率才随时间积分，不再乘第二次时长。保留参考温压、氧和湿干基准及实际无组织源。估算时保留独立核实的路线特定因子、活动量及不确定性，不采用未核实行业或PTE默认。 以匹配相态、湿度和气量测量或独立有证据的物种账确定真实净水蒸气：分开入口湿气、冷凝或内部回收以及实际反应水生成消耗，不以未知平衡残差拟合蒸发。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |
| cp_emission_boiler | boiler | boiler_co2_bio_out; boiler_co2_fossil_out; boiler_co_bio_out; boiler_co_fossil_out; boiler_ch4_bio_out; boiler_ch4_fossil_out; boiler_n2o_out; boiler_nox_out; boiler_so2_out; boiler_pm25_out; boiler_pm_between_out; boiler_pm_coarse_out; boiler_vapour_out | foreground_record | 物种/CAS；碳来源；实际介质/子介质；排放点；颗粒可过滤/可凝/空气动力学定义；流量/浓度；参考温压/氧/湿干基准；NOx物种或当量基准；时长；治理；检出限；因子范围；区分气体体积流率与已积分体积；确定净气相水时的进出口湿度和相容气量 | 将匹配物种浓度乘已积分相容气体体积并换算单位求和；仅体积流率才随时间积分，不再乘第二次时长。保留参考温压、氧和湿干基准及实际无组织源。估算时保留独立核实的路线特定因子、活动量及不确定性，不采用未核实行业或PTE默认。 以匹配相态、湿度和气量测量或独立有证据的物种账确定真实净水蒸气：分开入口湿气、冷凝或内部回收以及实际反应水生成消耗，不以未知平衡残差拟合蒸发。 燃料原有水分与燃烧生成水分开；后者须实际燃料氢、组成和反应证据或直接气相水测量，不能由碳闭合推得。 保留本过程期间原始总量及相容可归属分子，不在采集端相除；凭有记录的库存与交接将实物及负荷归属共同终端B。经核实原生单位换算后，仅由campaign_mass以正B执行一次归一化。卡片公式及aggregation_rule描述同一次最终报告操作，不是再次相除。不用各阶段自产量作分母，不仅平均成功批；B=0时保留完整池且不报归一结果。 | kg | 每批次及路线变化 | 与正B相同完整报告期间及最终验收批群，含失败零产出事件及匹配的在制品、库存结转负荷 | 一个声明场址与配置 | 每 1 kg 参考流 | 保留校准、签署日志、核对及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_mass | all inventory rows | B为校准整批净称量或sum(M_i)所得、仅计一次的新增验收终端木枕质量；发运、旧或购入库存及退货再验收分开，并记录在制品及库存实物负荷结转。各交换x = 可归属完整原始期间Q / 同一正终端B一次，保留原生单位并含失败零产出事件；根数仅核对。B=0保留总量而不归一。 | Q; N; M_i; cp_mass | x | usda-wood-handbook-2021 |
| dry_wood | wood streams | u = (湿试样质量 − 全干试样质量) / 全干试样质量；干质量 = 湿质量 / (1+u)。 | wet mass; dry mass; cp_material_receiving; cp_material_machining; cp_material_drying; cp_material_finishing; cp_material_boiler | u; dry wood mass | usda-wood-handbook-2021 |
| particle_bins | PM rows | 仅对同源、同期、同治理、同可过滤基准累计测试使用：细颗粒 = PM2.5；中间区间 = PM10 − PM2.5；粗颗粒 = 总可过滤颗粒物 − PM10。不得再加PM10或总颗粒物。可凝颗粒单列；缺失区间保持未知，不作零。 | cp_emission_receiving; cp_emission_machining; cp_emission_drying; cp_emission_boiler | three disjoint PM bins | epa-sawmill-pm-2014 |
| joint_burden | joint machining burdens | a_j = 产品j干质量 / 同一共同步骤主木枕材料与真实可售共产品实测干质量之和；归属负荷j = a_j × 共同负荷。这些式子不改变实物产出或内部交接。 | cp_material_machining; joint burdens | assigned LCI | corrim-northern-lumber-2025 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | all | 双语及所有关联记录使用相同树种/几何/等级/含水率和批次分母；不虚构M、收率、含水率目标或寿命。 | cp_mass; cp_material_receiving; cp_material_machining; cp_material_drying; cp_material_finishing; cp_material_boiler |
| quality_completeness | all | 筛查所有实际药剂、燃料、包装、排放和废物；已识别缺失交换增补独立精确行。未发生操作须有记录；未知不作零。UUID空缺时不得声称LCI完全解析。 | route records; cp_emission_receiving; cp_emission_machining; cp_emission_drying; cp_emission_boiler |
| quality_balance | all | 负荷分配前按不确定性闭合原始干物质、水和碳平衡；保留库存/返工及产品、残余、排放和灰中碳。使用实测碳含量，不假定碳中和。 总质量及守恒碳元素账与分子水、干组分账分开：真实挥发损失和燃料消耗会改变干物种；水生成或消耗须独立水测量或真实反应证据。闭合残差或COD不能证明物种碳、反应水或蒸发。 | raw balance and allocated burden ledgers |

## 9. 校验规则

- `validate_identity`: 本范围拒绝浸渍/涂层/回收或工程复合输入/输出；确认锯制枕木几何及买方验收。不自动接受CPC映射。
- `validate_mass`: 任何根数转质量均要求实测M、同状态B和末端1千克产出；检查双语分母、原始根数/称重记录及秤校准。B仅将每个新lot的首次质量放行计入一次，包括新增验收的期末成品。旧成品、先前已验收产量及真实客户退回返工或再验收不造新B。保留其原验收cohort及继承实物负荷；后续服务须有证归属，不能仅因发生于本报告期就分给当前新B。保留闲置、失败、启停及清洗事件和B=0池，不虚构归一结果。
- `validate_inventory`: 每行一个交换，核实流类型、物种、碳来源、介质、属性和单位。声称数据集完整前解析适用空身份并筛查额外物种。不得用correction flow替代。
- `validate_ledgers`: 内部交接量相等、共产品实物输出不变且负荷分配单独核对。检查颗粒区间互斥、生物CO2保留、供应商/运输/热重复及实际干燥/防腐证据。对cp_energy_drying与cp_energy_boiler，m × (h_s − h_r)仅在同边界同期间供回质量m匹配且比焓相容时有效。否则独立测量供回质量与焓，汇总实际流入流出焓，并将有效热与实际泄漏、其他损失、补水及储能变化核对；不得假定回水等质量或遗漏储能项。原热量身份/provider兼容要求在有证前仍待确认。按cp_packaging核对组件P/N_ext/ER/EO、原cohort/向量结转及gross movements。不设任意平衡容差，不造因子。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 状态/规格相符的厂门到厂门清单；仅在明确核实上游链接时用于从摇篮到工厂门 |
| excluded_use | 整段轨道服务比较；假定未处理耐久性；替代CPC 31320；EPD批准；未具备实际数量、供应方、基准和有限测量检查资格时声称LCI全解析 |
| required_metadata | 场址/批次、配置、实测M/B/含水率、原始图、起始厂门、实际干燥/热/运输、未分配平衡及独立负荷份额、未决身份和下游排除 |
| required_quality_disclosure | 测量不确定性、场址代表性、估算物种、未发生与未知操作、上游空缺和未审核扩展 |
| update_trigger | 木材/几何/等级/含水率、处理状态、干燥/燃料/治理路线、供应商边界或流身份变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA FPL，《木材手册：木材作为工程材料》，FPL-GTR-282（2021），第4章4-1/4-11页；第6章6-20至6-22页；第13章13-2/13-5至13-7页；第15章15-15页。 [ 原件 ](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | 树种/几何、水分/密度计量、干燥/削平/钻孔及耐久性限制；不采用默认密度、每根质量或寿命。 |
| `corrim-northern-lumber-2025` | literature | CORRIM，《北部地区针叶锯材生产生命周期评价》，2025年7月22日修订，§§3.2.4、3.2.6、3.3、4.6至4.7。 [ 原件 ](https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf) | 仅作地区针叶锯材过程/分配及排放筛查先例；不将数值调查移用于全部木材或阔叶木枕。 |
| `epa-sawmill-pm-2014` | official_guidance | 美国EPA第10区，《太平洋西北印第安地区锯木厂活动颗粒物潜在排放系数（不含锅炉）》（2014年5月8日），封面和活动表。 [ 原件 ](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf) | 仅作活动/颗粒定义筛查；嵌套颗粒及治理条件。PTE最大能力不等于实际LCA排放；排除锅炉因子。 |
| `epa-ap42-wood-boilers-2022` | official_guidance | 美国EPA AP-42 §1.6《锅炉木材残余燃烧》（2022年3月），§§1.6.1至1.6.4及表1.6-1脚注。 [ 原件 ](https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf) | 实际木燃料锅炉路线/物种及治理筛查；不因统计约定删除LCI生物CO2。不采用数值锅炉因子。 |
