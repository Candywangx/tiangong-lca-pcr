---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.lighting-sets-used-for-christmas-trees-not-solely-for-led-light-sources
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 圣诞树用灯串（非仅使用 LED 光源）

## 1. 范围与适用性

本 PCR 适用于以圣诞树装饰照明为市场用途、且成品中至少含一种非 LED 光源的电气灯串，包括全白炽灯串以及白炽灯与 LED 模组组合的混合灯串；既包括室内用产品，也包括室外用产品；线路可采用串联、并联或串并联组合。工厂门口交付的产品包括其电缆、灯座、光源模组、随附的插头或特低电压电源、随附的控制器及销售包装。

专为仅使用 LED 光源而设计的灯串、通用灯具、灯带、单独销售的替换灯、圣诞树、单独销售的电池以及不具电气照明功能的装饰品不在本 PCR 范围内。强制生产边界为从接收组件开始，经组装和包装，直至工厂门口。仅当研究目标要求生命周期模型时，才纳入使用阶段和报废阶段条件模块。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.lighting-sets-used-for-christmas-trees-not-solely-for-led-light-sources |
| classification_refs | CPC 3.0：46532，exact |
| covered_products | 至少含一种非 LED 光源的圣诞树用灯串，包括全白炽灯串和白炽灯/LED 混合灯串 |
| excluded_products | 专为仅使用 LED 光源而设计的灯串；通用灯具；灯带；单独销售的替换灯；非电气装饰品；圣诞树 |
| representative_product | 一套带绝缘铜电缆和微型白炽灯、采用市电直接供电或特低电压供电并已包装的圣诞树用灯串；产品也可包含 LED 模组和控制器 |
| production_route | 接收成品组件、电缆裁切与端接、安装灯座与光源模组、电气测试、最终组装及包装 |
| market_state | 工厂门口已完成测试和包装的成品灯串 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 使用非仅 LED 的灯串为圣诞树提供装饰性电气照明 |
| How much | 一套完整灯串，包括随附电气附件及销售包装 |
| How well | 满足所声明的额定电压、输入功率、线路连接方式、室内/室外等级、适用时的防护等级声明、灯数量、光源技术组合及适用安全符合性要求 |
| How long or cycle | 一个声明的产品使用寿命；建模使用阶段时，应说明额定或保证工作寿命及预计年工作小时数 |
| reference_flow_link | `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 成品圣诞树用灯串（非仅 LED） |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 电缆总长度；光源总数；非 LED 光源的数量及技术类型；存在 LED 时的 LED 模组数量；可替换或不可替换光源结构；串联、并联或串并联组合；额定输入电压；额定输入功率；市电直接供电或特低电压供电；室内或室外等级；声明时的防护等级；存在控制器时的控制功能；不含包装和含包装的产品总质量；包装组成；生产地域和参考年份；建模使用阶段时的声明使用寿命和工作小时情景 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少任一限定信息，参考流定义即不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_count` | 参考产品 | Number of items | Item(s) | 将数据集归一化为恰好一套完整可销售灯串；归一化前，应声明每项生产记录所代表的套数。 |
| `mu_component_mass` | 组件及包装投入 | Mass | kg | 分别记录各已识别组件或包装进入模型的净质量；除非保留了每件代表性实测质量和计数数量，否则不得以采购数量替代质量。 |
| `mu_electricity_energy` | 组装和使用电力 | Net calorific value | MJ | 保留计量电量，并按 1 kWh = 3.6 MJ 将 kWh 转换为 MJ；披露是否包含变压器损耗和待机损耗。 |
| `mu_use_calculation` | 条件性使用阶段 | Net calorific value | MJ | 根据声明的实测输入功率、工作小时、负载率和使用寿命计算用电量；先分别建模各声明模式，再合计。 |

## 5. 系统边界

强制前景边界始于已识别且验收合格的灯串组件及包装进入报告设施，终于一套经测试、包装的灯串离开工厂。电缆、灯、模组、灯座、插头、电源、控制器、纸箱和袋的供应商生产采用兼容的上游数据集表示；除非报告设施实际生产这些组件，否则不得在前景中重复建模。使用阶段和报废阶段为独立的条件模块。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_category_boundary` | 产品适用性 | 仅纳入至少含一种非 LED 光源的圣诞树用灯串；专为仅使用 LED 光源而设计的灯串不得采用本 PCR。 | `un-cpc-3-0-structure-2025` |
| `sb_production_boundary` | 强制从摇篮到工厂门口数据集 | 在声明的研究边界内纳入外购组件运输，并纳入电缆裁切和端接、光源与灯座安装、存在时的控制器或电源安装、电气测试、返工、次品、包装以及可归属于产品的场址能源。 | `iec-60598-2-20-2022` |
| `sb_upstream_components` | 外购组件 | 每项接收组件应链接兼容的上游产品数据集，并防止重复计算组件制造。 |  |
| `sb_optional_lifecycle` | 使用及报废模块 | 仅在声明的研究目标要求时纳入使用和报废阶段；其假设必须与强制生产结果分开保存。 | `eu-weee-directive-2012-19` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告设施收货点的已识别、验收合格灯串组件及包装 |
| starting_condition_role | 前景组装起点；上游组件生产仍作为链接的背景供应 |
| product_classification_scope | 至少含一种非 LED 光源的圣诞树用灯串；仅使用 LED 的灯串不在范围内 |
| recursive_input_rule | 若同类别的完整灯串作为重新包装、返工或捆绑销售的投入进入，则仅作为一次同类别产品投入记录，不在本前景组装数据集中递归展开；应披露所用上游数据集 |
| upstream_dataset_requirement | 对每项接收组件和包装使用在地域、技术、材料及时间方面具有代表性的数据集；披露代理数据和未表示质量 |
| disclosure | 声明设施位置、报告期、外购与自制组件边界、产品配置、参考数量、截断决定、返工处理、包装边界，以及是否纳入使用或报废模块 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `final_assembly_and_test` | 电缆准备、灯串组装、电气测试及返工 | `required` | 始终纳入 | 前景生产 | 1 套可销售成品灯串 |
| `packaging` | 销售包装 | `required` | 工厂门口参考产品始终纳入 | 前景包装 | 1 套已包装成品灯串 |
| `use_phase` | 声明使用期内的电力消耗 | `conditional` | 仅适用于具有声明工作情景的生命周期研究 | 下游使用 | 1 套灯串在其声明使用寿命内 |
| `end_of_life` | 废弃灯串的收集 | `conditional` | 仅当报废阶段位于研究边界内时纳入 | 下游报废 | 1 套废弃灯串 |

### 过程：电缆准备、灯串组装、电气测试及返工（`final_assembly_and_test`）

#### 输入

##### 产品流

###### 绝缘铜灯串电缆（`insulated_copper_cable_input`）

记录绝缘铜电缆的实测消耗质量，包括可销售灯串中的电缆及可归属的裁切损失。

- 选定流：圣诞树灯串用绝缘铜电缆
- 流属性/单位：Mass / kg
- 数量规则：归属于可销售产品和次品的实测电缆净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套完整成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 微型白炽灯（`incandescent_lamp_input`）

记录进入组装的全部微型白炽灯。成品参考产品中必须保留至少一种非 LED 光源。

- 选定流：微型白炽电灯
- 流属性/单位：Mass / kg
- 数量规则：归属于一套成品灯串的已验收和已安装灯的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套完整成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`un-cpc-3-0-structure-2025`

###### 混合光源灯串用 LED 模组（`led_module_input`）

仅当成品同时使用 LED 与非 LED 光源时记录 LED 模组。本行不得用于仅使用 LED 的灯串。

- 选定流：LED模组 `f0e13a6e-6380-4372-98a0-899623339d91`
- 流属性/单位：Mass / kg
- 数量规则：安装于混合光源成品灯串中的 LED 模组实测质量；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套完整混合光源成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 热塑性灯座（`lamp_holder_input`）

记录安装于灯串的模塑热塑性灯座的实测质量。

- 选定流：灯串用热塑性电气灯座
- 流属性/单位：Mass / kg
- 数量规则：安装于可销售产品及可归属次品中的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套完整成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 家用电源插头（`mains_plug_input`）

市电直接供电的灯串随附电源插头时，记录该插头的实测质量。

- 选定流：家用电源插头
- 流属性/单位：Mass / kg
- 数量规则：随附电源插头的实测质量；产品不带电源插头时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套完整成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 特低电压电源（`power_supply_input`）

特低电压灯串随附交流/直流电源时，记录其实测质量。

- 选定流：特低电压交流/直流电源适配器
- 流属性/单位：Mass / kg
- 数量规则：随附电源的实测质量；未随附独立电源时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套完整成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 电子灯光控制器（`lighting_controller_input`）

成品提供闪烁、调光、顺序变化、定时或类似控制功能时，记录电子控制器的实测质量。

- 选定流：电子灯光控制器组件
- 流属性/单位：Mass / kg
- 数量规则：控制器实测质量；成品不含控制器时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套完整成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 组装与电气测试用电（`electricity_assembly_input`）

记录电缆准备、组装、电气测试、返工及可直接归属的辅助设备耗电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电量，或根据设施电表采用有记录的分配，并转换为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套完整成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品圣诞树用灯串（`reference_product_output`）

记录通过所声明电气和外观验收测试的可销售灯串。本行为参考产品输出。

- 选定流：成品圣诞树用灯串（非仅 LED）
- 流属性/单位：Number of items / Item(s)
- 数量规则：归一化后恰好为 1 套完整可销售灯串
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_production_outputs`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 绝缘电缆边角料（`cable_offcut_waste`）

记录以废物形式离开组装过程的复合绝缘铜电缆边角料；不得在本行记录已分离的洁净回收铜。

- 选定流：废绝缘铜电缆边角料
- 流属性/单位：Mass / kg
- 数量规则：作为电缆边角废料离开组装边界的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套完整成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_outputs`
- 来源：

###### 次品成品灯串（`defective_set_waste`）

记录测试不合格且未返工成为可销售产品、最终作为废物处置的完整或基本完成组装的灯串。

- 选定流：制造废弃的次品圣诞树用灯串
- 流属性/单位：Mass / kg
- 数量规则：送往废物处理的次品灯串实测质量，不含成功返工的产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套完整成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_outputs`
- 来源：

##### 基本流

### 过程：销售包装（`packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_box_input`）

记录随参考产品提供的每个瓦楞纸箱的净质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：一套成品灯串随附纸箱的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套已包装成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：

###### 聚乙烯包装袋（`polyethylene_bag_input`）

销售包装外部或内部随附聚乙烯袋时，记录其净质量。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass / kg
- 数量规则：一套成品灯串随附袋的实测质量；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套已包装成品灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：声明使用期内的电力消耗（`use_phase`）

#### 输入

##### 产品流

###### 使用阶段电力（`electricity_use_input`）

仅针对声明的工作情景，采用实测输入功率和声明工作时间计算电量。应声明地域、电网数据集、使用寿命、负载率、控制器模式以及变压器或待机损耗。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：在声明使用寿命内，额定输入功率（kW）× 工作小时 × 负载率 × 3.6 MJ/kWh
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 套灯串在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_use_scenario`
- 来源：`iec-60598-2-20-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：废弃灯串的收集（`end_of_life`）

#### 输入

##### 产品流

##### 废物流

###### 废弃灯串（`end_of_life_set_waste`）

报废阶段位于研究边界内时，将废弃产品记录为废弃电气电子设备。本行不包括包装废物。

- 选定流：废弃电气电子设备 `631c740a-468f-41e8-9513-72bb25121958`
- 流属性/单位：Mass / kg
- 数量规则：不含包装的产品实测质量；情景并非收集全部废弃产品时，按声明的收集率调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 套废弃灯串
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`eu-weee-directive-2012-19`

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | 共用组装及包装操作 | 只要记录允许，应先细分过程或分表计量产品特定操作，再实施分配。 |  |
| `al_shared_operations` | 共用电力及辅助操作 | 无法细分时，采用与操作存在因果关系且有记录的物理驱动因子分配共用负荷，例如机器时间、测试套数或实测吞吐量；仅在不存在合理物理驱动因子时才可使用收入。 |  |
| `al_rework_and_rejects` | 返工及次品 | 将返工能耗和已消耗组件分配给导致其发生的生产批次；成功返工的产品不得计入废物输出，无法回收的次品灯串应计为废物。 |  |
| `al_recycling` | 可回收生产废物及报废材料 | 分别报告废物处理和任何回收收益。除非声明的研究方法要求，否则不得在前景清单内扣除替代产品收益；若采用，应披露方法和被替代产品。 | `eu-weee-directive-2012-19` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `final_assembly_and_test` | 接收后安装或损失的组件 | 经批准的物料清单、采购凭证、领料记录及代表性组件称量 | 组件身份；供应商；材料或技术；领用件数；退回件数；实测单件质量；产品配置；合格产品数量 | 将 BOM 和库存领用与报告批次核对，并使用校准秤验证代表性质量 | kg 和 Item(s) | 每种产品配置及每个生产批次 | 完整报告期，通常至少连续 12 个月或完整生产季 | 生产所声明参考产品的所有设施 | 按原子组件合计净领用质量并除以可销售灯串产量；损失保留于适用废物流 | BOM 版本、供应商规格、秤校准、库存核对和批次记录 |
| `cp_assembly_energy` | `final_assembly_and_test` | 组装及测试用电 | 分表或带分配记录的设施电表 | 电表起止值；kWh；设备范围；运行时间；测试套数；分配驱动因子；是否含变压器或待机损耗 | 优先采用产品线分表；否则与设施发票核对，并用有记录的物理驱动因子分配 | kWh，转换为 MJ | 每月及每个生产季 | 与生产产量相同的期间 | 声明边界内所有组装和测试操作 | 合计可归属 kWh，转换为 MJ，并除以可销售灯串产量 | 电表校准或发票核对及分配工作表 |
| `cp_production_outputs` | `final_assembly_and_test` | 可销售产量及制造废物 | 生产数量、测试日志、返工日志及废物称量单 | 生产数；合格数；返工数；报废数；废物身份；毛重和皮重；处理去向 | 将测试处置与生产数量核对，并分别称量各废物流 | Item(s) 和 kg | 每批；废物按每次转移 | 与组件及能源记录相同的期间 | 所有纳入的组装设施 | 将合格产品归一化为一套；各废物净质量除以合格套数 | 测试记录、返工处置、校准秤证据及废物转移单 |
| `cp_packaging_bom` | `packaging` | 随附销售包装 | 包装 BOM、供应商规格及代表性称量 | 包装身份；材料；等级；再生含量；单件质量；每套件数；供应商 | 称量每项包装组件并核对每套件数 | kg 和 Item(s) | 每次包装规格变更及代表性批次 | 与参考产品相同的期间 | 适用于所声明产品的包装 | 经验证单件质量乘以每套件数，并归一化为一套已包装产品 | 包装图纸、供应商规格、秤校准及 BOM 版本 |
| `cp_use_scenario` | `use_phase` | 使用阶段电力 | 产品电气测试及声明情景 | 各模式实测输入功率；年工作小时；负载率；使用寿命；变压器损耗；待机功率；地域；电网数据集 | 测量所声明配置的输入功率，并与明确命名的工作情景结合 | W、h、年和 MJ | 每种产品配置及每次情景修订 | 声明测量日期和情景参考年 | 声明的市场和使用地域 | 合计各模式 kW × 小时 × 负载率，乘以使用年数，并将 kWh 转换为 MJ | 校准功率测量、额定标签、情景理由及计算工作表 |
| `cp_end_of_life_scenario` | `end_of_life` | 废弃电气设备 | 产品称量及收集/处理情景 | 不含包装的产品质量；收集率；处理路线；地域；参考年 | 称量产品，且仅采用有记录的情景特定收集率 | kg 和比例 | 每种产品配置及每次情景修订 | 声明情景参考年 | 声明的市场和收集地域 | 每套废弃产品质量 × 声明收集率 | 秤校准、情景来源、收集体系说明及处理路线 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有生产清单行 | 归一化数量 = 报告期可归属数量 ÷ 可销售成品灯串数量 | 原子投入、能源或废物数量；合格灯串套数 | 每 1 套成品灯串的数量 |  |
| `calc_component_reconciliation` | 组件投入 | 组件净投入 = 期初库存 + 收货 − 期末库存 − 有记录的退货；将净投入与产品质量、废物和库存变化核对 | 库存、收货、退货、产品质量、废物质量 | 已核对的组件质量 |  |
| `calc_electricity_mj` | 电力清单行 | 电量（MJ）= 计量或计算电量（kWh）× 3.6 | kWh | MJ |  |
| `calc_use_electricity` | `electricity_use_input` | MJ = 各声明模式的输入功率（kW）× 工作小时 × 负载率 × 使用年数 × 3.6 的合计 | 实测功率、小时、负载率、使用寿命 | 每套产品的使用阶段电量（MJ） | `iec-60598-2-20-2022` |
| `calc_eol_waste` | `end_of_life_set_waste` | 收集废物质量 = 不含包装的产品质量 × 声明收集率 | 产品质量和收集率 | 每套废弃产品的废弃电气电子设备质量（kg） | `eu-weee-directive-2012-19` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品及组件 | 对每种报告配置保留型号、BOM 版本、光源技术组合、灯数量、线路连接方式、额定电压和功率、电缆长度、室内/室外等级及随附附件。 | 产品规格、标签照片、BOM 和测试记录 |
| `dq_temporal` | 前景生产 | 组件、产量、废物及能源记录必须覆盖相同期间；披露短于 12 个月的生产季数据及任何季节代表性限制。 | 带日期的源记录及覆盖期核对 |
| `dq_completeness` | 从摇篮到工厂门口清单 | 将全部组件及包装质量与可销售产品、制造废物、有记录的退货和库存变化核对；量化排除质量并说明每项截断。 | 质量核对及截断登记表 |
| `dq_measurement` | 质量、数量及电力 | 使用校准仪器或经核对的商业记录；保留换算因子以及不确定性或分配证据。 | 校准证书、发票、电表记录及计算工作表 |
| `dq_background` | 上游数据集 | 对每项组件和包装数据集记录地域、技术、参考年、材料等级及代理状态。 | 背景数据集映射表 |
| `dq_scenarios` | 使用及报废 | 条件性情景结果必须与生产结果分开，并披露全部功率、负载率、寿命、收集及处理假设。 | 情景记录及分模块结果表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_category_eligibility` | 产品身份 | 确认至少有一个已安装光源为非 LED，且产品作为圣诞树用灯串销售；仅使用 LED 的灯串不得采用本 PCR。 | `un-cpc-3-0-structure-2025` |
| `vr_reference_flow` | 参考流 | 确认恰好为一套完整可销售灯串，包括随附附件和销售包装，并确认全部必需限定信息。 | `iec-60598-2-20-2022` |
| `vr_inventory_balance` | 生产清单 | 确认同一报告期内的组件及包装质量核对、合格灯串数量、返工处置、废物质量及任何排除质量。 |  |
| `vr_atomic_flows` | 所有清单行 | 确认每行仅表示一个原子产品、废物或基本交换，且无任何一行合并公用工程、材料、包装或废物。 |  |
| `vr_electricity` | 电力清单行 | 确认电力以 MJ 报告，每次 kWh 换算均采用 3.6 MJ/kWh，并披露电网地域和损耗。 |  |
| `vr_optional_modules` | 使用及报废 | 如纳入，应确认使用和报废假设为情景特定、单独报告，且未嵌入从摇篮到工厂门口结果。 | `eu-weee-directive-2012-19` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布的前景生产数据集；可选使用及报废模块保持为独立 lifecyclemodel 投影 |
| downstream_use | 至少含一种非 LED 光源的圣诞树用灯串的产品足迹、供应链及生命周期模型 |
| allowed_use | 所声明的产品配置、生产地域、技术、报告期及明确记录的生命周期情景 |
| excluded_use | 仅使用 LED 的灯串；通用灯具；在光源技术、电压等级、包装、地域或生产路线方面存在实质差异且未经代表性审查的产品 |
| required_metadata | PCR id；产品型号及 BOM 版本；参考数量；全部必需限定信息；设施及市场地域；报告期；边界；分配；截断；光源技术组合；包装；上游数据集映射；可选模块状态 |
| required_quality_disclosure | 初级数据占比；时间覆盖；质量及能源核对；测量及分配证据；代理数据集；排除质量；不确定性限制；存在时的使用及报废假设 |
| update_trigger | BOM 或光源技术变化；市电直接供电与特低电压供电之间变化；额定功率或控制器变化；电缆或包装重新设计；供应商或地域变化；采用新生产技术；报告数据超过声明有效期；使用或报废情景发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `dataset` | 联合国统计司，《产品总分类》第 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 46532 正式产品身份及仅使用 LED 光源灯串的排除边界 |
| `iec-60598-2-20-2022` | `standard` | IEC 60598-2-20:2022，灯具—第 2-20 部分：特殊要求—灯串，https://webstore.iec.ch/en/publication/73916（检索日期：2026-09-04） | 灯串身份；串联、并联及串并联配置；室内/室外用途；额定电压和产品限定字段 |
| `eu-weee-directive-2012-19` | `standard` | 欧洲议会和理事会关于废弃电气电子设备的第 2012/19/EU 号指令，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012L0019（检索日期：2026-09-04） | 条件性报废边界、分类收集及废弃电气电子设备处理披露 |
