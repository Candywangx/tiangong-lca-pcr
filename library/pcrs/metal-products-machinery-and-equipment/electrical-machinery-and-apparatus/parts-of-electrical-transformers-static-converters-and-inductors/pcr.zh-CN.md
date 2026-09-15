---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electrical-transformers-static-converters-and-inductors
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 电力变压器、静止式变流器及电感器的零件

## 1. 范围与适用性

本 PCR 适用于主要为电力变压器、静止式变流器或电感器设计的实体零件的工厂生产，包括磁芯、绕组和线圈子组件、专用绝缘件和端子、变流器专用母排和已装配线路板、外壳、冷却零件及专用子组件。完整设备、通用上游材料或元器件、制造服务、安装、维护、使用阶段损耗和报废处理不在本参考产品范围内。前景数据包必须声明具体零件族，并仅纳入实际适用的工艺和原子交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electrical-transformers-static-converters-and-inductors |
| classification_refs | CPC 3.0：46132，电力变压器、静止式变流器及电感器的零件 |
| covered_products | 专用磁芯、绕组、线圈子组件、变流器母排、功率模块、已装配线路板、外壳、端子、绝缘件和冷却零件 |
| excluded_products | 完整变压器、镇流器、静止式变流器或电感器；通用材料和电子元器件；配电/控制设备；服务 |
| representative_product | CPC 46132 中一个已声明的可销售零件或同质零件批次 |
| production_route | 经限定的铁芯成形、绕制、金属加工、线路板装配、成型、表面处理、测试和包装路线 |
| market_state | 工厂门处合格、干燥、可销售且尚未安装进完整设备的零件；必要时含出货包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产并在工厂门提供电力变压器、静止式变流器或电感器用合格可销售零件 |
| How much | 1 kg 合格产品净重，不含可移除出货包装 |
| How well | 满足声明的图纸、零件号、材料/绝缘规范、验收准则和质量计划 |
| How long or cycle | 工厂门处一个生产批次；不表示使用阶段寿命 |
| reference_flow_link | 输出行 `reference_product_output`，归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 变压器、静止换流器及感应器零件 `d4ea4c05-fc8a-4f2b-b6e9-0ecae8795a95` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件族/编号；配套设备；导体/铁芯材料；绝缘体系；线路板装配状态；路线；处理；场址；时期；包装；净重基准 |

必需限定信息必须出现在前景数据包中，否则参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和质量行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用干基净重；扣除可移除出货包装并单独报告。 |
| `electricity_energy` | `electricity_input` | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留原始电表记录，按 1 kWh = 3.6 MJ 换算，并声明电网、电压和所含损耗。 |
| `gas_volume` | `natural_gas_input` | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度、压力、含湿量和标准/实际条件。 |
| `industrial_gas_volume` | `industrial_oxygen_input` | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明纯度和参考条件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址接收的外购材料、元器件、化学品、公用工程和包装 |
| starting_condition_role | 前景从门到门起点，并链接上游供应和进厂运输数据集 |
| product_classification_scope | CPC 46132 实体零件，不取决于上游投入的分类 |
| recursive_input_rule | 外购 CPC 46132 投入仅记录一次并链接其上游数据集，不在本前景过程中递归重建 |
| upstream_dataset_requirement | 每项外购产品和能源投入均链接地域和技术具有代表性的上游数据 |
| disclosure | 零件族；配套设备；BOM；材料；线路板状态；路线；处理；场址/时期；收率；分配；包装；排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景 | 纳入适用的成形、绕制、线路板装配、成型、连接、处理、测试、不合格品、公用工程、直接排放和工厂门前包装。 | oria-et-al-transformer-lca-review-2026; iea-pvps-lci-photovoltaic-systems-2020 |
| `boundary_rule_2` | 上游链接 | 外购投入和进厂运输采用链接的上游数据集，不得藏入汇总投入。 | iea-pvps-lci-photovoltaic-systems-2020 |
| `boundary_rule_3` | 排除项 | 除非另行扩展并报告，排除完整设备制造/使用、损耗、安装、配送和报废。 | eu-transformer-regulation-548-2014; oria-et-al-transformer-lca-review-2026 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `part_fabrication_assembly` | 经路线限定的零件加工、装配、测试和包装 | required | 仅纳入声明零件路线适用的工序和原子交换 | 前景生产 | 1 kg 合格参考产品 |

### 过程：经路线限定的零件加工、装配、测试和包装（`part_fabrication_assembly`）

#### 输入

##### 产品流

###### 叠片铁芯用电工钢板（`electrical_steel_input`）

仅适用于叠片或卷绕钢铁芯；声明牌号和涂层。

- 选定流：电工钢板
- 流属性/单位：质量 / kg
- 数量规则：按批次计量领用量减退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：`oria-et-al-transformer-lca-review-2026`

###### 绕组用绝缘导体（`magnet_wire_input`）

仅适用于绕组路线；声明铜或铝导体、绝缘化学体系、耐热等级和形态。

- 选定流：电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：质量 / kg
- 数量规则：计量电磁线净领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：`eu-transformer-regulation-548-2014`；`oria-et-al-transformer-lca-review-2026`

###### 高频磁性零件用铁氧体磁芯（`ferrite_core_input`）

仅适用于铁氧体零件；声明材料族、几何形状和供货状态。

- 选定流：铁氧体磁芯
- 流属性/单位：质量 / kg
- 数量规则：计量消耗的铁氧体磁芯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 纤维素电气绝缘纸（`electrical_insulation_paper_input`）

仅在作为绝缘材料留在零件中时记录；声明牌号、厚度、处理和含水基准。

- 选定流：纤维素电气绝缘纸
- 流属性/单位：质量 / kg
- 数量规则：计量干基净领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：`oria-et-al-transformer-lca-review-2026`

###### 外壳或五金件用非合金钢（`non_alloy_steel_input`）

仅在制成所声明外壳、支架、端子或冷却零件时记录。

- 选定流：非合金钢板，卷 `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- 流属性/单位：质量 / kg
- 数量规则：计量钢材净领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：`oria-et-al-transformer-lca-review-2026`；`iea-pvps-lci-photovoltaic-systems-2020`

###### 变流器组件用印制线路板（`printed_wire_board_input`）

仅在场内装配或集成时记录；声明面积、层数、基材和表面处理。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：质量 / kg
- 数量规则：计量投向批次的线路板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 无铅无助焊剂焊料（`lead_free_solder_input`）

仅适用于无助焊剂的无铅连接；其他焊料状态须另列。

- 选定流：不含铅焊料，无助焊剂 `a78ab927-44b9-4978-a3e3-2b9fb20d3648`
- 流属性/单位：质量 / kg
- 数量规则：计量焊料净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 功率半导体器件（`power_semiconductor_input`）

仅适用于变流器零件；每个数据包声明一个实际器件族。

- 选定流：绝缘栅双极晶体管功率半导体器件
- 流属性/单位：质量 / kg
- 数量规则：计量所声明器件族的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 玻璃纤维增强聚酰胺粒料（`glass_fibre_polyamide_input`）

仅适用于场内成型；声明聚合物牌号、纤维比例和再生含量。

- 选定流：玻璃纤维增强聚酰胺粒料
- 流属性/单位：质量 / kg
- 数量规则：计量投入的干燥粒料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 外购电力（`electricity_input`）

包括适用的加工、装配、测试、通风和包装用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：分表电量换算为 MJ 并按因果关系分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 气态天然气（`natural_gas_input`）

仅用于场内干燥、固化或加热；外购热力应另列。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：计量并按声明条件修正和分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 工业氧气（`industrial_oxygen_input`）

仅用于富氧切割或连接；声明纯度和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：按流量计或钢瓶盘点计量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 工艺用水（`process_water_input`）

仅用于适用的清洗、漂洗或碱处理；冷却水应另列。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量并分配至处理批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 氢氧化钠（`sodium_hydroxide_input`）

仅用于适用处理槽；声明供货状态和浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：计量所消耗产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_mass`
- 来源：

###### 瓦楞纸箱（`corrugated_box_input`）

仅在工厂门前使用时记录；从参考产品质量中扣除。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：计量发至出货批次的纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 低密度聚乙烯保护膜（`ldpe_film_input`）

仅在工厂门前使用时记录；从参考产品质量中扣除。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：计量发至出货批次的薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格零件参考产品（`reference_product_output`）

仅记录合格零件；扣除可移除出货包装。

- 选定流：变压器、静止换流器及感应器零件 `d4ea4c05-fc8a-4f2b-b6e9-0ecae8795a95`
- 流属性/单位：质量 / kg
- 数量规则：计量合格产品干基净重，并精确归一化为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_mass`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 钢铁加工废料（`steel_scrap_output`）

分别收集，并保留合金和涂层组成。

- 选定流：钢废料 `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- 流属性/单位：质量 / kg
- 数量规则：称量离开前景过程的钢废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_mass`
- 来源：

###### 铜绕组线边角料（`copper_scrap_output`）

与铝和混合金属分开，并保留绝缘层信息。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：质量 / kg
- 数量规则：称量铜废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_mass`
- 来源：

###### 铝绕组线边角料（`aluminium_scrap_output`）

与铜、钢和混合金属分开。

- 选定流：铝绕组线边角料
- 流属性/单位：质量 / kg
- 数量规则：称量铝边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_mass`
- 来源：

###### 废弃装配印制线路板（`populated_pwb_waste_output`）

仅适用于装配后报废；裸板废料应另列。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：质量 / kg
- 数量规则：称量已装配线路板不合格品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_mass`
- 来源：`iea-pvps-lci-photovoltaic-systems-2020`

###### 废碱处理液（`waste_alkaline_liquor_output`）

与漂洗水分开；声明 pH、氢氧化钠和金属含量。

- 选定流：废碱液 `ca310225-50c8-4d41-8353-4338b41e19a1`
- 流属性/单位：质量 / kg
- 数量规则：计量排槽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_mass`
- 来源：

##### 基本流

###### 场内燃烧直接排放的化石源二氧化碳（`fossil_co2_output`）

仅记录可归因于批次的场内燃烧直接化石源 CO2；不包括上游电力排放和生物源 CO2。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实测烟气排放或经核证的场址直接排放记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 多零件族/路线 | 分配前细分独立计量批次；不得在未声明生产组合时平均不同路线。 |  |
| `allocation_rule_2` | 共享记录 | 按机器时间、热负荷、线路板面积或处理面积等因果驱动分配；仅在证明相关时使用质量。 |  |
| `allocation_rule_3` | 废料/不合格品 | 将废料保持为废物输出，门内结果不计入替代生产收益；单独披露共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_mass` | `part_fabrication_assembly` | 材料/元器件/化学品 | ERP 领退料；供应商/BOM | 身份；批次；领退质量；状态；路线 | 按批次核对领用减退库 | kg | 每批；每月核对 | 12 个月或完整生产期 | 所有受控设施 | 原子流净投入合计/合格质量 | 规范；秤；事务；BOM 日志 |
| `cp_utility_records` | `part_fabrication_assembly` | 电力/气体/水 | 仪表；账单；钢瓶；日志 | 读数；单位；条件；工时；路线；驱动 | 读数相减、条件修正、因果分配 | 原始及归一化单位 | 连续/每批；每月 | 与产出相同 | 所有设施 | 分配后合计并归一化 | 校准；账单核对；覆盖图 |
| `cp_packaging_mass` | `part_fabrication_assembly` | 出货包装 | 领料；规范 | 材料；数量；单重；可回收性 | 称量或数量×核实单重 | kg | 每配置/批次 | 与产出相同 | 包装场址 | 非周转包装合计/净产品 | 秤；图纸；采购规范 |
| `cp_output_waste_mass` | `part_fabrication_assembly` | 产品/废物 | 秤；不合格日志；废物票据 | 零件；批次；质量；组成；去向 | 称量并核对每项原子输出 | kg | 批次/外运 | 与投入相同 | 所有设施 | 按输出合计/合格质量 | 校准；放行；转移联单；质量平衡 |
| `cp_direct_emission_records` | `part_fabrication_assembly` | 化石源 CO2 | 烟气或核证清单 | 源；燃料；质量；时期；路线；驱动 | 使用核证直接排放并按因果分配 | kg CO2 | 监测周期；年度核对 | 与燃料/产出相同 | 场内燃烧源 | 按源合计/合格质量 | 监测；核证；燃料核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | 所有行 | 归一化量 = 批次流量 / 合格产品干基净重 | 原子记录；产出质量 | 每 1 kg 的量 |  |
| `calculation_rule_2` | 电力 | MJ = kWh × 3.6 | 电表记录 | MJ |  |
| `calculation_rule_3` | 共享记录 | 分配量 = 共享量 × 因果驱动份额；份额和为 1 | 共享记录；驱动 | 批次流量 |  |
| `calculation_rule_4` | 质量平衡 | 残差 = 质量投入 - 产品 - 已测废物 - 直接质量排放；调查且不得强制平衡 | 一致质量记录 | 残差/解释 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_requirement_1` | 身份 | 保留零件/图纸/BOM、配套设备、验收和 CPC 范围。 | 图纸；BOM；放行；un-cpc-3-0-structure-2025；eu-transformer-regulation-548-2014 |
| `quality_requirement_2` | 完整性 | 将路线与材料、公用工程、不合格品和包装记录核对，并解释遗漏。 | 流程卡；仪表图；oria-et-al-transformer-lca-review-2026；iea-pvps-lci-photovoltaic-systems-2020 |
| `quality_requirement_3` | 代表性 | 采用一致时期/场址，并披露外包、组合和过时数据。 | 时期核对；设施/供应商记录 |
| `quality_requirement_4` | 计量 | 保留校准、气体条件、分配覆盖、不确定性和残差。 | 证书；账单；工作表 |
| `quality_requirement_5` | 流身份 | 核验公开 state-100 UUID，并为未解决流保留精确原子名称。 | 回执；行审计；未解决清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 类别 | 拒绝完整设备、通用材料或服务输出。 | un-cpc-3-0-structure-2025; eu-transformer-regulation-548-2014 |
| `validation_rule_2` | 参考流 | 确认正好 1 kg 合格零件干基净重；扣除并单报可移除包装。 |  |
| `validation_rule_3` | 完整性 | 确认每项适用材料、公用工程、废物和直接排放均为一个原子行，并证明不适用路线。 | oria-et-al-transformer-lca-review-2026; iea-pvps-lci-photovoltaic-systems-2020 |
| `validation_rule_4` | 计算 | 重算归一化、换算、分配份额和残差；拒绝未解释差异。 |  |
| `validation_rule_5` | 身份/单位 | 核验 UUID、流类型、属性、单位组、正式中文名和行条件；不得用代理替代未解决身份。 |  |
| `validation_rule_6` | 披露 | 确认来源、记录、场址、时期、零件族、材料、线路板状态、处理和包装。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 `secondary_dataset` 或 `background_dataset` 的前景制造数据集 |
| downstream_use | 从摇篮到工厂门足迹，以及完整设备过程/生命周期模型的上游投入 |
| allowed_use | 零件族、BOM、路线、场址、时期、状态和分配基准匹配的研究 |
| excluded_use | 完整设备损耗、安装、维护、报废，或不匹配的零件/线路板状态 |
| required_metadata | PCR；零件/配套设备；BOM/图纸；材料；绝缘；线路板状态；路线/处理；场址/时期；质量；包装；UUID；分配 |
| required_quality_disclosure | 来源/仪表覆盖；供应商份额；时期；校准；残差；分配/敏感性；未解决证据；排除/外包 |
| update_trigger | 材料、BOM、路线、线路板、场址、能源、处理、包装或分配变化；数据过时；身份解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 46132 身份和层级 |
| `eu-transformer-regulation-548-2014` | official_guidance | 欧盟委员会条例 (EU) No 548/2014，CELEX 32014R0548，https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32014R0548 | 完整变压器和绕组定义 |
| `oria-et-al-transformer-lca-review-2026` | literature | Oria 等，LCA of transformers: a systematic review of methods, dominant contributors and research gaps (2026)，https://doi.org/10.1007/s11367-026-02664-7 | 变压器组成、材料、范围和质量 |
| `iea-pvps-lci-photovoltaic-systems-2020` | dataset | Frischknecht 等，IEA PVPS T12-19:2020，ISBN 978-3-907281-14-7，https://www.iea-pvps.org/wp-content/uploads/2020/12/IEA-PVPS-LCI-report-2020.pdf | 变流器原始 LCI：元器件、公用工程、加工、包装、水和废物 |
