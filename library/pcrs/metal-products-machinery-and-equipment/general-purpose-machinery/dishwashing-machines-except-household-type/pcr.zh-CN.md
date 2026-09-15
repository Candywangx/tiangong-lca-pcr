---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.dishwashing-machines-except-household-type
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 洗碟机，家用型除外

## 1. 范围与适用性

本 PCR 适用于主要预期用途明确为商业、工业或机构用途而非家用的完整洗碟机的工厂大门生产。涵盖台下式、固定搁架门式或罩式、锅盆与器具清洗式、玻璃器皿清洗式、搁架输送式和飞行式机型。前景边界始于进入制造场址的外购材料、组件、公用工程和包装，止于工厂大门处合格且已包装的机器。

家用洗碗机、实验室玻璃器皿清洗机、医疗器械清洗机、瓶或容器清洗机械、单独销售的洗涤剂和漂洗剂、单独销售的备件、安装、工厂大门以后的配送、使用、维护和生命末期均不在本前景边界内。下游生命周期模型可将这些阶段作为单独数据集加入。必须声明机器类型、消毒方式、热回收或热泵配置、额定处理能力、机器总质量、电源、预期用途说明和工厂大门地理信息。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.dishwashing-machines-except-household-type |
| classification_refs | CPC 3.0: 43935, exact |
| covered_products | 用于商业、工业或机构餐具清洗的完整非家用洗碟机，包括固定搁架式和输送式配置 |
| excluded_products | 家用洗碗机；实验室和医疗器械清洗机；瓶/容器清洗机械；单独销售的洗涤剂、漂洗剂和零部件 |
| representative_product | 具有已声明机器类型、消毒方式、额定处理能力和工厂大门质量的完整电控商用餐具清洗机 |
| production_route | 钣金成形与焊接；条件性表面清洗；外购组件装配；条件性制冷剂充注；出厂验收测试；最终包装 |
| market_state | 工厂大门处的全新合格机器，测试后已排水并包装；包括已充注制冷剂及随机器发运的全部附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产一台在工厂大门处实现其声明的商业、工业或机构餐具清洗功能的完整非家用洗碟机 |
| How much | 工厂大门处 1 kg 合格完整机器质量 |
| How well | 声明机器类型、消毒方式、额定处理能力、装载或搁架基准、热回收配置、电源和适用符合性声明 |
| How long or cycle | 仅表征制造结果；为下游使用阶段建模报告设计寿命及额定全寿命循环次数或运行小时，但其不改变工厂大门参考数量 |
| reference_flow_link | 一台完整机器等于其实测工厂大门产品净质量（kg）；本数据集乘以该质量即可代表一台机器 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 洗碟机，家用型除外 `d0b59cdb-1ced-4142-ad04-b9d6cbee1411` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号和产品族标识；主要预期用途；机器类型；固定搁架式或输送式配置；消毒方式；额定处理能力及其基准；适用时的搁架或输送带尺寸；电源；内置或外置增压加热器边界；热回收和热泵配置；适用时的制冷剂身份及工厂充注量；机器净质量；所含附件；制造场址和地理；生产期间；工厂大门包装状态；声明的使用寿命或额定全寿命负荷 |

构建前景数据包时，`必需限定信息` 中的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及所有质量归一化结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在声明的工厂大门状态下称量完整合格机器。只有在产品质量和包装清单中一致处理时才可排除外部运输包装。 |
| `material_mass` | 按质量记录的材料、组件、化学品、制冷剂、包装、废料和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤、与库存变化核对的采购记录或经批次总量验证的工程 BOM 质量；适用时报告湿/干状态和浓度。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表记录；kWh 乘以 3.6 换算为 MJ，并披露电压等级、电网地理、可再生电力合同处理和共用负荷分配。 |
| `gas_volume` | 工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明参考温压、纯度、交付形式，以及采用发票体积还是修正后的计量体积。 |
| `water_mass` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接质量记录；若从体积换算，应记录实测或供应商声明的密度及参考条件，不得默认密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、离散组件、工艺化学品、公用工程、制冷剂和包装进入制造场址大门时，记录供应商身份、交付状态、数量和上游数据集引用 |
| starting_condition_role | 从摇篮到工厂大门的前景制造起始条件 |
| product_classification_scope | 主要预期用于非家用商业、工业或机构用途的完整洗碟机 |
| recursive_input_rule | 同一产品类别的外购完整机器作为单独产品投入及其上游数据集记录，不在本前景系统内再次分解 |
| upstream_dataset_requirement | 每项外购投入必须链接至制造场址交付边界下具有地理和技术代表性的上游数据集，或披露为数据缺口；主要材料和组件优先采用供应商特定数据 |
| disclosure | 声明制造场址、生产期间、产品族、机器配置、分配基准、截断决定、外购与自制组件边界、表面处理路线、制冷剂路线、测试协议、包装状态和排除的生命周期阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 前景生产边界 | 纳入可归属的制造、焊接、场内表面清洗（若实施）、装配、工厂制冷剂充注（若实施）、验收测试、包装、产生的废料、清洗废水和外购电力，直至已包装产品离开工厂大门。 |  |
| `sb_upstream_inputs` | 外购材料、组件、公用工程和包装 | 将每项外购投入链接到制造场址交付边界的上游供应数据集；不得以通用完整机器数据集替代已披露的组件投入。 |  |
| `sb_same_category_recursion` | 外购完整非家用洗碟机 | 在外购完整机器边界停止递归分解，将该机器作为单独的同类别技术圈投入并链接其上游数据集。 |  |
| `sb_conditional_routes` | 表面清洗和制冷剂充注 | 仅在报告场址实施或归属相应过程时纳入条件性过程；否则将其原子流行标为不适用，并披露使该路线不存在的供应商或产品配置。 | `swedish-procurement-professional-dishwashers` |
| `sb_use_stage` | 使用和下游生命周期 | 排除安装、运行、维护、工厂大门后的配送和生命末期。报告水和能源性能字段，以便另行构建使用阶段数据集，不得将规范限值当作制造清单。 | `us-epa-energy-star-commercial-dishwashers-v3-2020` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_fabrication` | 金属成形与焊接 | required | 场址归属的机器框架、槽体、面板或支撑结构成形或连接始终纳入 | 前景制造 | 合格工厂大门产品净质量 |
| `surface_cleaning` | 场内碱性表面清洗 | conditional | 仅在报告场址实施或归属氢氧化钠清洗时纳入 | 前景表面准备 | 合格工厂大门产品净质量 |
| `component_assembly` | 组件与分总成集成 | required | 最终装配外购件和自制件时始终纳入 | 前景装配 | 合格工厂大门产品净质量 |
| `refrigerant_charging` | R404A 热泵充注 | conditional | 仅当发运型号含场内工厂充注的 R404A 时纳入；其他制冷剂须新增经审查的原子流行 | 前景充注 | 合格工厂大门产品净质量 |
| `factory_testing` | 出厂验收及泄漏/功能测试 | required | 所有放行合格机器均纳入，并记录实际测试协议 | 前景质量保证 | 合格工厂大门产品净质量 |
| `final_packaging` | 最终包装与工厂大门放行 | required | 声明的已包装工厂大门状态始终纳入 | 前景包装和参考产品放行 | 合格工厂大门产品净质量 |

### 过程：金属成形与焊接（`metal_fabrication`）

#### 输入

##### 产品流

###### 深加工不锈钢平板轧材投入（`stainless_steel_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944`
- 流属性/单位：Mass / kg
- 数量规则：合格产品消耗量加可归属制造损失的实测或 BOM 核对质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 冷轧碳钢板投入（`carbon_steel_sheet_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：冷轧碳钢板
- 流属性/单位：Mass / kg
- 数量规则：合格产品消耗量加可归属制造损失的实测或 BOM 核对质量；Tiangong UUID 未解决
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 制造电力（`fabrication_electricity`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：制造过程分表计量电力或按因果关系分配的共用电表电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_records`
- 来源：

###### 焊接用氧气（`industrial_oxygen_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：可归属于焊接和切割的修正计量体积或发票体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gas_records`
- 来源：

###### 二氧化碳保护气（`carbon_dioxide_shielding_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：可归属于二氧化碳保护的钢瓶库存变化或发票质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gas_records`
- 来源：

#### 输出

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开制造过程的称量钢废料质量，扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

### 过程：场内碱性表面清洗（`surface_cleaning`）

#### 输入

##### 产品流

###### 表面清洗工艺用水（`surface_process_water`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供应给归属表面清洗操作的计量用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater_records`
- 来源：

###### 表面清洗用氢氧化钠（`surface_sodium_hydroxide`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测加入的氢氧化钠产品质量，并声明溶液浓度和产品状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 表面清洗电力（`surface_electricity`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：清洗线分表计量电力或按因果关系分配的共用电表电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_records`
- 来源：

#### 输出

##### 废物流

###### 表面清洗废水（`surface_cleaning_wastewater`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：表面清洗后送入下水道或处理的实测废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater_records`
- 来源：

### 过程：组件与分总成集成（`component_assembly`）

#### 输入

##### 产品流

###### 铜管材（`copper_tubing_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位：Mass / kg
- 数量规则：与库存变化和废料核对的外购及安装管材质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 聚丙烯粒料（PP）（`polypropylene_granulate_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：归属产品的模塑组件所消耗树脂质量，包括实测成型损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 电动机（`electric_motor_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：安装在合格产品中的外购电动机 BOM 验证质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 液体泵（`liquid_pump_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：Mass / kg
- 数量规则：安装在合格产品中的外购液体泵 BOM 验证质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 电子控制单元（`electronic_control_unit_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：电子控制单元 `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- 流属性/单位：Mass / kg
- 数量规则：安装在合格产品中的外购电子控制单元 BOM 验证质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 装配电力（`assembly_electricity`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：装配过程分表计量电力或按因果关系分配的共用电表电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_records`
- 来源：

### 过程：R404A 热泵充注（`refrigerant_charging`）

#### 输入

##### 产品流

###### R404A 工厂充注（`r404a_refrigerant_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：制冷剂，R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- 流属性/单位：Mass / kg
- 数量规则：称量进入合格产品的制冷剂净质量，并与钢瓶库存变化和回收制冷剂核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_charge_records`
- 来源：

###### 制冷剂充注电力（`refrigerant_charging_electricity`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：充注站分表计量电力或按因果关系分配的共用电表电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_records`
- 来源：

### 过程：出厂验收及泄漏/功能测试（`factory_testing`）

#### 输入

##### 产品流

###### 出厂测试工艺用水（`test_process_water`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：产品归属的出厂测试供水计量质量，包括有记录的补水和冲洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_test_records`
- 来源：

###### 出厂测试电力（`test_electricity`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：受测机器和可归属测试设备消耗的分表计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_test_records`
- 来源：

#### 输出

##### 废物流

###### 排出的出厂测试废水（`test_cleaning_wastewater`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：泄漏和功能测试后排入下水道或处理的实测测试水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_test_records`
- 来源：

### 过程：最终包装与工厂大门放行（`final_packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_board_box_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：安装在发运合格产品上的瓦楞纸箱称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 低密度聚乙烯薄膜（`ldpe_film_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：安装在发运合格产品上的 PE-LD 薄膜称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 木制托盘（`wooden_pallet_input`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：按声明的重复使用分配后，安装在发运产品上的可归属托盘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 包装电力（`packaging_electricity`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：包装线分表计量电力或按因果关系分配的共用电表电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_records`
- 来源：

#### 输出

##### 产品流

###### 合格且已包装的非家用洗碟机（`reference_product_output`）

该原子交换跨越前景过程边界；按照下列采集协议取得其可归属数量，并按参考产品质量归一化。

- 选定流：洗碟机，家用型除外 `d0b59cdb-1ced-4142-ad04-b9d6cbee1411`
- 流属性/单位：Mass / kg
- 数量规则：合格放行产品净质量实测值；归一化后等于 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格工厂大门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finished_product_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 多型号生产线和共用过程 | 优先物理细分和过程分表计量。将直接计量的材料、组件、公用工程、废物、测试和包装记录分配给引起这些交换的产品族。 |  |
| `allocation_shared_loads` | 共用电力、用水、工作单元设备和设施记录 | 采用机器小时、测试小时、处理材料质量或等效操作次数等有记录的因果驱动因素。只有证明能代表资源因果关系时才可使用产品质量或件数，并披露敏感性。 |  |
| `allocation_scrap` | 工业后钢废料 | 按废料跨越前景边界时的质量记录。不得在本前景清单内扣除避免生产信用；回收分配或替代信用属于所声明的下游系统模型。 |  |
| `allocation_rework` | 返工和不合格机器 | 将返工投入和未回收报废损失归属于合格生产批次。只有能证明未跨界并返回同一过程的材料才可排除，同时保持质量平衡。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `metal_fabrication`, `surface_cleaning`, `component_assembly` | 外购材料、化学品和组件投入 | BOM、采购收据、库存台账、称量记录 | 身份；牌号/浓度；供应商；交付质量；库存；产品族归属；损失 | 核对 BOM、采购和库存；必要时称量组件 | kg | 每批，并每月核对 | 至少 12 个代表性月份或全部较短生产期 | 报告制造场址及归属供应商 | 汇总可归属消耗并除以合格产品质量 | 校准称量记录、供应商证书、库存核对、BOM 修订版 |
| `cp_process_energy_records` | 所有前景过程 | 外购电力 | 分表、公用电表、设备日志 | 电表编号；起止读数；kWh；过程；运行小时；分配驱动因素 | 优先过程分表，否则以因果驱动因素分配最小共用电表 | kWh 和 MJ | 每批或每班，每月核对 | 至少 12 个代表性月份或全部较短生产期 | 报告制造场址 | 换算 MJ，汇总可归属能源并除以合格产品质量 | 电表校准、发票、分配表、异常日志 |
| `cp_process_gas_records` | `metal_fabrication` | 焊接和切割气体 | 修正计量表、钢瓶台账、发票 | 身份；纯度；质量/体积；库存；温压基准；过程归属 | 将气体库存变化与制造操作核对 | kg 或 m3 | 每次换瓶或每批 | 与生产清单相同期间 | 报告制造场址 | 按身份汇总并按合格产品质量归一化 | 发票、钢瓶证书、称量或修正计量记录 |
| `cp_waste_records` | `metal_fabrication` | 工业后钢废料 | 称量单、废物转移记录 | 身份；合金分选；净质量；日期；去向；处理；内部回用 | 称量每批出厂废料，仅扣除有记录的内部回用 | kg | 每次发运 | 与生产清单相同期间 | 报告制造场址 | 汇总跨界净废料并归一化 | 校准称量单、转移联单、回收商收据 |
| `cp_water_wastewater_records` | `surface_cleaning` | 工艺用水和清洗废水 | 分表、储罐记录、处理转移记录 | 来源；读数；质量/体积；密度；排放路线；处理；组成 | 分别计量输入输出，并核对储量变化和留存水 | kg 或 m3 | 每批或每日 | 与表面清洗相同期间 | 报告制造场址 | 必要时按记录密度换算并归一化 | 仪表校准、化验或处理记录、转移联单 |
| `cp_refrigerant_charge_records` | `refrigerant_charging` | R404A 工厂充注 | 充注秤、钢瓶台账 | 身份；钢瓶质量；充注设定；回收；报废；序列号/批次 | 充注前后称量并核对回收和不合格产品 | kg | 每次充注或每批 | 与适用型号生产相同期间 | 报告制造场址 | 合格产品净充注量除以合格产品质量 | 校准充注秤、制冷剂证书、检漏和回收日志 |
| `cp_factory_test_records` | `factory_testing` | 测试用水、电力和废水 | 测试日志、专用计量表 | 序列号/批次；协议；水；电力；废水；重复；失败；留存水 | 记录每次验收和重复测试，纳入测试设备电力 | kg、kWh、MJ | 每台受测机器 | 与生产清单相同期间 | 报告制造场址 | 汇总合格批次全部测试并归一化 | 测试系统校准、放行记录、计量记录 |
| `cp_packaging_records` | `final_packaging` | 瓦楞纸箱、PE-LD 薄膜和木托盘 | 包装 BOM、称量、采购/库存台账 | 身份；质量；用量；重复次数；破损；产品族归属 | 称量组件或验证供应商单位质量并核对库存 | kg | 每种配置并批次核对 | 与发运生产相同期间 | 报告制造场址 | 按声明托盘复用分配汇总包装并归一化 | 称量、供应商规范、包装 BOM、库存核对 |
| `cp_finished_product_records` | `final_packaging` | 参考产品输出 | 校准成品秤、放行记录 | 型号；序列号/批次；净质量；附件；残留水；包装；符合性 | 在声明参考状态称量放行合格机器 | kg | 每型号/批次 | 与全部前景投入相同期间 | 报告制造场址 | 汇总合格净质量作为归一化分母 | 秤校准、放行证书、变异记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单交换 | 归一化数量 = 可归属交换数量 / 合格产品净质量 | 可归属交换；`cp_finished_product_records` 合格产品质量 | 每 1 kg 参考产品交换 |  |
| `calc_electricity_conversion` | 电力行 | electricity_MJ = metered_kWh × 3.6；批次汇总前不舍入 | 电表 kWh | 外购电力 MJ |  |
| `calc_water_mass` | 按体积计量的水和废水 | 质量 = 实测体积 × 声明参考条件下的记录密度 | 体积；密度；适用温压 | 水或废水 kg |  |
| `calc_material_balance` | 金属制造与装配 | 接收质量 = 安装产品质量 + 跨界废料 + 其他识别损失 ± 库存变化，并处于声明测量不确定度内 | BOM/库存、成品、废料、损失、库存变化 | 核对材料消耗 |  |
| `calc_refrigerant_charge` | R404A 充注 | 净充注量 = 钢瓶质量减少量 − 回收量 − 非产品转移量，并与充注记录核对 | 钢瓶称量、回收和充注日志 | 合格产品 R404A kg |  |
| `calc_packaging_reuse` | 可复用木托盘 | 可归属托盘质量 = 托盘质量 / 经验证预期使用次数；未验证时分配全部质量 | 托盘质量；复用次数 | 可归属木托盘 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品族和参考流 | 保持 CPC 43935 非家用预期用途边界，并声明准确型号/配置。 | 符合性声明或等效预期用途说明、产品规范、型号清单 |
| `dq_completeness` | 前景清单 | 原子流行至少覆盖实测前景质量和能源的 95%；披露遗漏交换身份和量级，不得用总括流达到完整性。 | 质量/能源核对和数据缺口登记 |
| `dq_temporal` | 生产记录 | 可行时至少 12 个代表性月份；较短生产期覆盖全部期间并说明季节性、爬坡和异常运行。 | 带日期记录和代表性评估 |
| `dq_measurement` | 计量和称量 | 使用校准有效期内仪表，或记录修正、不确定度和后备核对。 | 校准证书、发票、库存和计量核对 |
| `dq_supplier_data` | 主要材料和组件 | 优先供应商及地理特定上游数据；记录钢、铜、聚丙烯、电机、泵和控制单元的技术与再生成分假设。 | 供应商声明、数据集元数据、采购记录 |
| `dq_conditional_routes` | 表面清洗和 R404A 充注 | 以场址记录证明纳入或以配置证据证明排除；不得仅因记录缺失而报告为零。 | 过程图、化学品台账、充注日志、供应商文件 |
| `dq_use_metadata` | 下游使用阶段可用性 | 报告机器类型、消毒方式、额定处理能力、搁架/输送带基准、能源和用水性能及测试方法，不得将符合性限值作为制造实测量。 | 产品规范和适用性能测试报告 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_category_identity` | 产品身份 | 若产品为家用型、实验室或医疗器械清洗机、瓶/容器清洗机械、洗涤剂或单独部件，则失败；验证非家用预期用途及完整机器工厂大门状态。 | `un-cpc-3-0-structure-2025`, `jrc-eu-professional-dishwasher-boundary-2015` |
| `val_reference_mass` | 功能单位和参考流 | 必须具有准确参考产品 UUID、质量属性 UUID、质量单位组 UUID、kg 参考单位、实测合格产品质量及全部必需限定信息。 |  |
| `val_inventory_atomicity` | 过程清单 | 合并材料、公用工程、燃料、包装、废物或排放的选定流均失败；每项交换保留一个行 ID、方向和流类型。 |  |
| `val_material_balance` | 金属制造与装配 | 对主要外购材料、安装质量、工业后钢废料、其他损失和库存变化进行有记录的质量核对。 |  |
| `val_energy_and_water` | 电力、水和废水 | 必须具有计量期间、分配基准、换算记录和匹配的生产分母；不得以规范限值替代前景制造记录。 | `us-epa-energy-star-commercial-dishwashers-v3-2020` |
| `val_conditional_processes` | 表面清洗和 R404A 充注 | 必须有纳入或排除证据。纳入时须有全部原子行和协议；若安装其他制冷剂，则本 R404A 行不适用，并须新增经审计的制冷剂行。 | `swedish-procurement-professional-dishwashers` |
| `val_upstream_links` | 外购投入 | 每项外购材料、组件、公用工程、制冷剂和包装必须有上游数据集或明确数据缺口，并披露地理和技术。 |  |
| `val_allocation` | 共用过程与回收 | 重要共用负荷必须有因果分配证据和敏感性检查；禁止在前景清单内隐藏钢废料避免生产信用。 |  |
| `val_bilingual_alignment` | 中英文 PCR | 两种呈现必须具有同序的过程 ID、行 ID、UUID、受控值、来源 ID 以及系统边界/分配/校验规则 ID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明非家用洗碟机型号或同质产品族的前景工厂大门生产数据集 |
| downstream_use | 配置、地理、时间和边界具有代表性时，可发布为机器供应产品 LCA 和生命周期模型所用的 secondary_dataset 或 background_dataset |
| allowed_use | 从摇篮到工厂大门生产；参考状态和分配匹配时供应商比较；下游模型单独加入安装、配送、运行、维护和生命末期 |
| excluded_use | 家用洗碗机生产；洗涤剂生产；直接代表运行或清洗服务；未经代表性审查用于实质不同的机器类型 |
| required_metadata | PCR ID 和版本；型号/产品族；预期用途；机器和消毒类型；额定处理能力基准；参考产品 UUID；质量；场址和地理；期间；技术；表面清洗；热回收/热泵和制冷剂；包装；分配；上游数据集版本；截断；缺口 |
| required_quality_disclosure | 前景覆盖率；测量和分配方法；校准；时间覆盖；供应商数据份额；质量平衡；条件路线证据；不确定度；未解决碳钢流 UUID；缺失经验范围证据 |
| update_trigger | BOM、机器类型、消毒/加热技术、制冷剂、场址、能源、表面处理、测试、包装、分配或供应商数据集实质变化，或变化超过声明不确定度阈值 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-06） | CPC 43935 正式产品身份及家用型排除 |
| `jrc-eu-professional-dishwasher-boundary-2015` | official_guidance | 欧盟委员会联合研究中心，《Revision of European Ecolabel Criteria for the six detergent product groups》，技术报告草案，2015，https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/contentype/product_group_documents/1581681262/ELS-DP_D2_0915.pdf（检索于 2026-09-06） | 专业型与家用型预期用途边界及商业/工业功能 |
| `us-epa-energy-star-commercial-dishwashers-v3-2020` | standard | 美国环保署，ENERGY STAR 商用洗碗机产品规范第 3.0 版资格标准，2020，https://www.energystar.gov/sites/default/files/Commercial%20Dishwashers%20Final%20Version%203.0%20Specification_0.pdf（检索于 2026-09-06） | 机器类型和消毒方式分类；处理能力、用水和能源元数据及校验 |
| `swedish-procurement-professional-dishwashers` | official_guidance | 瑞典国家公共采购署，《Sustainability criteria for Professional dishwashers》，https://www.upphandlingsmyndigheten.se/en/criteria/building-and-property/professional-kitchen/professional-dishwashers/（检索于 2026-09-06） | 专业机器类型、使用阶段能源/用水重要性和条件性热泵配置 |
