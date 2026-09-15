---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.filtering-or-purifying-machinery-and-apparatus-for-liquids-or-gases-except-oil-filters-576ef38e
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 液体或气体过滤或净化机械及装置，机油滤清器、汽油过滤器及内燃机进气过滤器除外

## 1. 范围与适用性

本 PCR 适用于以过滤或净化液体或气体为主要功能、并以完整制成品状态交付至工厂大门的机械及装置。压力式、真空式、吸附式、膜式、静电式、催化式及其他过滤或净化原理均可纳入，但前景数据包必须明确实际产品配置，并记录产品特定的物料清单和制造活动。

本 PCR 不包括内燃机用机油滤清器、汽油过滤器和进气过滤器；也不包括作为零件单独销售的过滤介质和更换滤芯、离心机、泵、压缩机、通风机、处理化学品，以及本身并非过滤或净化装置制成品的污水或废物处理服务。本工厂大门生产画像不包括使用阶段、使用期间更换的耗材、维护、出厂后的分销和报废阶段；若研究明确扩展边界，则应单独报告这些阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.general-purpose-machinery.filtering-or-purifying-machinery-and-apparatus-for-liquids-or-gases-except-oil-filters-576ef38e` |
| classification_refs | CPC 3.0: 43914（精确分类语境；映射接受由独立治理流程决定） |
| covered_products | 面向工业、商业、机构或家庭用途，以完整制成品交付的液体或气体过滤或净化机械及装置 |
| excluded_products | 内燃机用机油滤清器、汽油过滤器和进气过滤器；单独销售的过滤零件和更换元件；离心机；泵；压缩机；风机；处理化学品；过滤或污水处理服务 |
| representative_product | 一套完整的撬装滤芯式过滤装置，包括壳体、外购可更换滤芯、密封部件、支撑件、仪表及产品特定包装 |
| production_route | 产品特定的外购材料和部件供应；有条件纳入的厂内金属加工、连接、清洗和表面处理；必须纳入的装配、验收试验和包装 |
| market_state | 制造商工厂大门处已完成、已验收并已包装，且以型号和配置识别的装置 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由一套完整装置提供所声明的液体或气体过滤或净化功能 |
| How much | 一套制成装置 |
| How well | 满足声明的过滤或净化性能、设计流量、压力或真空额定值及产品验收准则 |
| How long or cycle | 一个工厂大门产品单位；使用寿命和使用阶段耗材属于必须披露的限定信息，但不在本生产参考流中计入效益 |
| reference_flow_link | `assembly_finished_apparatus` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 Item(s) |
| 参考产品流 | 液体或气体过滤或净化机械及装置 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 制造商和型号；液体或气体用途；过滤或净化原理；额定流量；设计压力或真空；过滤等级或去除性能；壳体材料和质量；过滤介质或元件类型和质量；已安装辅助设备；干态运输质量；包装配置；制造场址和地理范围；验收试验方法；参考年份；声明的工厂大门边界；预期使用寿命 |

构建前景数据包时，所有必需限定信息均必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_count` | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计数满足所声明验收准则的完整装置。将全部清单数量归一化至一套合格装置；不得计入散装零件或不合格品。 |
| `mass_measurement` | 材料、部件、包装、废物和颗粒物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用跨越前景边界的净质量。在报告期内核对采购、领用、退库、库存变化、产品、废料和废物记录。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始计量基准；当所选天工流以 MJ 报告时，按 1 kWh 恰好等于 3.6 MJ 换算。不得将上游发电排放重复作为前景基本流。 |
| `water_mass_conversion` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用质量流量计。由体积换算时，应保留实测或供应商支持的密度、温度和换算过程；不得在无记录的情况下假定密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购原材料、已加工零件、过滤元件、密封部件、包装、电力、水和工艺化学品到达制造场址时的状态 |
| starting_condition_role | 前景生产从外购投入跨越制造场址边界处开始；其生产和交付由所链接的上游数据集表示 |
| product_classification_scope | 液体或气体过滤或净化机械及装置制成品；单独销售的零件和所列内燃机过滤器不属于本产品身份 |
| recursive_input_rule | 若外购本类别内另一套完整装置作为投入，应将其记录为独立上游产品数据集并披露其作用；不得将其生产递归吸收到本前景清单中 |
| upstream_dataset_requirement | 对每项外购材料、部件、能源载体、用水、包装、范围内的进厂运输及废物处理服务，链接地理和技术上具有代表性的数据集 |
| disclosure | 声明制造场址、报告期、产品型号和配置、外购与厂内作业划分、分配基准、截断、缺失记录及任何研究边界扩展 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | 纳入产品特定的材料和部件接收、实际发生的全部厂内加工和表面处理、装配、验收试验、归属于合格生产的返工，以及直至工厂大门的产品特定包装。 | `eu-pef-2021-2279` |
| `boundary_product_specific_bom` | bill_of_materials | 使用所声明型号和配置的物料清单。在产品特定领料、采购、工程或质量记录可得时，不得以工厂层面的通用材料组合替代。 | `eu-pef-2021-2279` |
| `boundary_direct_exchanges` | direct_foreground_exchanges | 将每项直接计量的材料、能源、废物、废水和基本排放分别作为一个原子流记录，并注明实际环境区室或处理去向。 | `eu-pef-2021-2279` |
| `boundary_excluded_stages` | excluded_life_cycle_stages | 除非目标和范围明确扩展边界并单独报告，否则使用、维护、使用阶段更换耗材、出厂后分销和报废阶段不纳入本生产数据集。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication_finishing` | 厂内加工和表面处理 | `conditional` | 当报告场址对壳体、框架、管路或其他装置零件实施切割、成形、机加工、焊接、清洗或表面处理时纳入；仅在所有此类零件均以完工状态到厂时方可省略，并披露供应商边界 | 前景部件制造和表面处理 | 归属于合格装置所安装零件的净投入、废物和直接排放 |
| `assembly_testing_packaging` | 装配、验收试验和包装 | `required` | 完整工厂大门装置必须纳入 | 前景最终制造 | 一套已验收并包装的装置 |

### 过程：厂内加工和表面处理（`fabrication_finishing`）

#### 输入

##### 产品流

###### 用于壳体和接液部件的 316 不锈钢板（`fabrication_stainless_steel_sheet`）

在采用该材料和厂内加工路线时，记录发至合格装置已安装零件的 316 不锈钢板净质量。由于未确认精确的天工流 UUID，必须明确钢种和产品形态。

- 选定流：316 不锈钢板
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去有记录的退库量，再归一化至合格装置
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_bom`
- 来源：`eu-pef-2021-2279`

###### 用于框架的冷轧非合金碳钢板（`fabrication_carbon_steel_sheet`）

当所声明产品采用该材料时，记录发至已安装框架或支撑零件的冷轧非合金碳钢板净质量。带涂层钢种或不锈钢种必须另设前景行。

- 选定流：冷轧非合金碳钢板
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去有记录的退库量，再归一化至合格装置
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_bom`
- 来源：`eu-pef-2021-2279`

###### 加工和表面处理用外购电力（`fabrication_electricity`）

记录纳入范围的切割、成形、机加工、焊接、清洗和表面处理作业的计量电力。共用电表仅可按第 7 节分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于纳入范围加工和表面处理的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_utilities`
- 来源：`eu-pef-2021-2279`

###### 切割、清洗或漂洗用工艺用水（`fabrication_process_water`）

仅记录为纳入范围加工或表面处理而跨越场址边界的工艺用水。闭路循环冷却水仅记录跨越边界的净补充水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：纳入范围加工和表面处理的计量净工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_utilities`
- 来源：`eu-pef-2021-2279`

###### 适用焊接用药芯焊丝（`fabrication_flux_cored_wire`）

仅当合格装置所安装零件采用药芯焊接时记录本行。其他填充金属必须使用各自具体的前景流行。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：焊丝实测领用量减去有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套采用药芯焊接的合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_bom`
- 来源：

###### 适用水基清洗中使用的氢氧化钠（`fabrication_sodium_hydroxide`）

当纳入范围零件采用碱性清洗槽时，按活性化学品质量记录氢氧化钠。前景记录应保留溶液浓度、补加基准和槽液寿命分配。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：归属于纳入范围清洗的外购或领用氢氧化钠活性质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套采用碱性清洗的合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_bom`
- 来源：

##### 废物流

#### 输出

##### 产品流

##### 废物流

###### 前景产生的不锈钢废料（`fabrication_stainless_steel_scrap`）

记录离开本过程的分类收集不锈钢边角料和机加工废屑。由于未确认精确的前景产生不锈钢废料 UUID，废物记录必须保留合金钢种和接收方处理路线。

- 选定流：前景产生的 316 不锈钢废料
- 流属性/单位：Mass / kg
- 数量规则：从纳入范围加工过程转移给有记录接收方的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`
- 来源：

###### 黑色金属废钢（`fabrication_steel_scrap`）

将离开本过程的碳钢边角料和机加工废屑作为独立黑色金属废物交换记录。不得将不锈钢废料并入本行。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass / kg
- 数量规则：从纳入范围加工过程转移给有记录接收方的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`
- 来源：

###### 废切削油（`fabrication_waste_cutting_oil`）

记录从纳入范围机加工中移除并作为废物转移的废切削油。水基机加工液或其他废物状态必须另设前景行。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：转移出本过程的废切削油实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套采用油基机加工的合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`
- 来源：

###### 金属表面处理废水（`fabrication_finishing_wastewater`）

记录水基金属清洗或表面处理后、外部处理前离开过程的实测废水。应保留成分、危险特性分类和去向；未确认精确的天工废物流 UUID。

- 选定流：外部处理前金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：从纳入范围金属表面处理转移出的实测净废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套采用水基金属表面处理的合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`
- 来源：

##### 基本流

###### 经高架排气筒排入城市空气的 PM10（`fabrication_pm10_high_stack`）

仅当有记录表明加工颗粒物经高架排气筒排入城市空气时，方可使用本精确环境区室行。不同粒径或受纳区室必须使用不同基本流。

- 选定流：颗粒物 (PM10) `9fbb5096-ed5b-11e6-bc64-92361f002671`
- 流属性/单位：Mass / kg
- 数量规则：在有记录的高架排气筒排放点实测或试验推导的 PM10 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：监测期内每 1 套合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_air_emissions`
- 来源：

### 过程：装配、验收试验和包装（`assembly_testing_packaging`）

#### 输入

##### 产品流

###### 外购可更换滤芯（`assembly_filter_cartridge`）

记录安装于代表性装置中的外购可更换滤芯净质量。声明介质、支撑体、端盖和密封结构；尚未确认以质量或件数计量的精确天工滤芯 UUID。

- 选定流：可更换滤芯式过滤元件
- 流属性/单位：Mass / kg
- 数量规则：来自产品特定物料清单或经核实称量的已安装干态滤芯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`eu-pef-2021-2279`

###### 丁苯橡胶密封盖（`assembly_sbr_sealing_cover`）

仅当合格装置含有所指定的丁苯橡胶密封盖时记录本部件。其他弹性体或密封零件形态必须另设具体行。

- 选定流：密封盖 ; 丁苯橡胶 `64baff6f-1ce6-4567-83c0-2e8653ce6df5`
- 流属性/单位：Mass / kg
- 数量规则：来自产品特定物料清单或经核实称量的已安装密封盖质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套采用该密封盖的合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`eu-pef-2021-2279`

###### 装配、试验和包装用外购电力（`assembly_electricity`）

记录本过程中装配工具、控制配置、验收试验、试验后干燥及包装作业的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于装配、试验和包装的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 套合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_utilities`
- 来源：`eu-pef-2021-2279`

###### 水压或泄漏试验用工艺用水（`assembly_process_water`）

记录进入水压或泄漏试验的新鲜工艺用水。循环使用的试验水不得在每个循环重复计入；仅记录跨越过程边界的补充水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入合格产品试验的计量新鲜水和补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套接受水基试验的合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_utilities`
- 来源：

###### 瓦楞纸箱（`assembly_corrugated_boxes`）

记录随合格装置交付的瓦楞纸箱质量。其他纸板、木材、塑料或金属包装必须保留为独立原子行。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：以领用记录或称量核实的包装规格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套合格且已包装装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`eu-pef-2021-2279`

###### 欧标木托盘（`assembly_wooden_pallet_euro`）

仅当欧标木托盘随装置交付时记录本行。可重复使用的联营托盘仅按所声明包装情景记录消耗量或分配服务。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：分配至合格装置的已交付欧标托盘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套采用欧标托盘的合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`eu-pef-2021-2279`

###### 低密度聚乙烯薄膜（`assembly_ldpe_foil`）

记录作为防护包覆材料随产品交付的非泡沫 PE-LD 薄膜质量。不得将泡沫、捆扎带或其他聚合物并入本行。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：以领用记录或称量核实的产品特定包装规格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 套合格且已包装装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的完整过滤或净化装置（`assembly_finished_apparatus`）

本行为 PCR 参考产品输出。装置仅在满足声明的验收准则，并包含前景清单所表示的配置和包装后计为一套；类别范围的天工产品 UUID 仍未解决。

- 选定流：液体或气体过滤或净化机械及装置
- 流属性/单位：Number of items / Item(s)
- 数量规则：恰好 1 套已验收并包装的装置
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 水基验收试验产生的废水（`assembly_test_wastewater`）

记录离开水压或泄漏试验、进入排水系统或外部处理的废水。留在过程内循环利用的回收水不作为输出。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：离开试验水循环的实测废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 套接受水基试验的合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_wastewater`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared_manufacturing_processes | 应首先细分电表、领料记录、工单、废物记录和排放记录，使所声明装置在可行范围内获得产品特定前景活动数据。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | residual_shared_activity | 无法细分时，应以有记录的因果物理驱动因素分配共用活动，例如机器时间、实测电量、处理质量、槽液负荷、试验时长或包装质量；同一报告期内应一致使用同一驱动因素。 |  |
| `allocation_rejects_rework` | rejects_and_rework | 将正常不合格品和返工产生的材料、能源、废物和排放负荷分配给同一报告期内的合格装置；异常事件应单独披露。 |  |
| `allocation_scrap_output` | recyclable_scrap | 按实测质量将离开前景的废料记录为废物输出。不得从制造清单中扣除未报告的回收收益；任何下游回收模型均应单独披露。 |  |
| `allocation_economic_last_resort` | multifunctional_processes | 仅在无法细分且不存在可辩护的因果物理关系时使用经济分配；披露价格、期间、币种、敏感性及受影响清单份额。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_bom` | `fabrication_finishing` | 产品特定材料和工艺化学品投入 | 工程物料清单、采购和领料记录、退库、库存变化 | 产品型号；材料身份和牌号；供应商；领用质量；退库质量；期初和期末库存；合格数量 | 核对工程物料清单、仓储记录和生产订单记录 | kg | 每个生产订单；按月汇总 | 具有代表性的报告期，或批量生产的完整生产期 | 实施纳入范围加工的全部场址 | 归属于合格品的净领用质量除以合格品数量 | 已批准的物料清单版本；发票；校准秤或供应商质量；领退料记录；核对签字 |
| `cp_fabrication_utilities` | `fabrication_finishing` | 电力和工艺用水投入 | 分表、公用工程表计或设备计量日志 | 表计编号；期初和期末读数；单位；运行期；纳入设备；合格数量 | 读取校准表计并与场址总量核对 | 表计原生单位及换算后的 MJ 或 kg | 每班或每批；按月汇总 | 具有代表性的报告期或完整生产期 | 覆盖纳入范围加工和表面处理的表计 | 扣除有记录内部回收后的净用量除以合格品数量，并按第 7 节分配 | 校准记录；表计照片或导出数据；场址公用工程核对；换算工作表 |
| `cp_fabrication_wastes` | `fabrication_finishing` | 分类废料、废切削油和废水输出 | 秤单、废物转移联单、储罐或流量计 | 废物身份；牌号或成分；质量或体积；换算时的密度；日期；接收方；处理去向；合格数量 | 对每次转移称重或计量，并核对储存量变化 | kg | 每次转移；按月汇总 | 与生产清单相同期间 | 全部纳入范围加工和表面处理线 | 转移量经储存量变化调整后按第 7 节分配 | 衡器校准；转移联单；废物分类；接收方凭证；储存核对 |
| `cp_fabrication_air_emissions` | `fabrication_finishing` | 高架排气筒 PM10 排放 | 连续监测或具有代表性的排气筒测试及运行记录 | 排气筒编号和区室；粒径定义；浓度；流量；测试时长；运行负荷；合格数量 | 仅对有记录的城市空气高架排气筒区室计算排放质量 | kg | 连续汇总或每次有效测试期 | 报告期内有代表性的运行状态 | 每个纳入范围排放点 | 实测浓度乘以干烟气流量和时长，再分配至合格品 | 有资质的测试报告或监测 QA；校准；流量和含湿量修正；运行日志 |
| `cp_assembly_bom` | `assembly_testing_packaging` | 已安装过滤和密封部件及随产品交付包装 | 产品特定物料清单、包装规范、领料记录、称量 | 型号和配置；部件身份；材料；数量；单位质量；领用质量；退库；包装情景 | 核对已发布物料清单、包装规范、仓储记录和抽样称量 | kg | 每次型号修订和生产订单；按月汇总 | 具有代表性的报告期或完整生产期 | 全部装配和包装场址 | 净安装或交付质量除以合格品数量 | 已发布图纸和物料清单；供应商声明；领料记录；校准抽样称量 |
| `cp_assembly_utilities` | `assembly_testing_packaging` | 电力和新鲜试验水投入 | 装配和试验表计、试验日志 | 表计编号；读数；单位；试验方法；补充水；循环利用；合格数量 | 计量纳入范围装配、试验、干燥和包装作业 | 表计原生单位及换算后的 MJ 或 kg | 每个试验批；按月汇总 | 具有代表性的报告期或完整生产期 | 全部纳入范围装配和试验工位 | 净用量除以合格品数量，并按第 7 节分配 | 校准；试验日志；表计导出数据；场址总量核对；换算工作表 |
| `cp_assembly_output` | `assembly_testing_packaging` | 已验收完整装置 | 序列号登记和验收记录 | 型号；序列号；配置；试验结果；完工日期；包装状态；干态运输质量 | 仅计数符合所声明配置且已验收并包装的单位 | Item(s) | 每个完工单位 | 与投入和废物数据相同期间 | 全部最终装配场址 | 合格品数量作为参考流归一化分母 | 签字验收记录；序列号登记；包装放行；不合格品日志 |
| `cp_assembly_wastewater` | `assembly_testing_packaging` | 水基验收试验废水 | 试验循环表计、储罐记录或废物转移记录 | 进水量；回收量；废水量；密度；排放日期；去向；试验数量 | 计量离开循环回路的废水，并核对进水、回收和储存 | kg | 每次排放；按月汇总 | 与用水投入和合格生产相同期间 | 全部水基试验工位 | 离开过程的净废水量除以合格品数量 | 校准表计或储罐；排放记录；水量平衡；处理或排水凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景清单行 | 归一化数量 = 报告期内归属于所声明产品的数量除以同一期间内已验收的完整装置数量 | 经核对的期间数量；必要时的分配结果；来自 `cp_assembly_output` 的合格品数量 | 每 1 套合格装置的数量 | `eu-pef-2021-2279` |
| `calc_electricity_kwh_to_mj` | 电力行 | 电量（MJ）= 电表电量（kWh）乘以 3.6 MJ/kWh | 校准表计的 kWh 读数 | MJ 电量 |  |
| `calc_water_volume_to_mass` | 用水和废水行 | 质量 = 实测体积乘以记录条件下的密度 | 实测体积；密度；温度或供应商参考条件 | kg 水或废水 |  |
| `calc_pm10_release` | `fabrication_pm10_high_stack` | PM10 排放质量 = 修正浓度乘以修正干烟气流量和运行时长，再按 `calc_reference_normalization` 归一化 | 浓度；烟气流量；含湿量和参考条件修正；时长；合格品数量 | 每套合格装置的 PM10 质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和物料清单 | 型号、配置、功能、额定性能、产品质量和物料清单版本必须识别同一产品总体。 | 序列号登记、已批准产品规范、已发布物料清单、验收记录、干态运输质量核对 |
| `dq_technological_representativeness` | 前景过程 | 记录必须代表实际的外购与厂内路线、加工和表面处理技术、试验方法、回收循环及包装情景。 | 过程图、工艺路线、作业指导书、设备清单、试验规程、包装规范 |
| `dq_geographical_representativeness` | 前景和上游链接 | 声明每个制造场址，并选择与供应商或市场地理范围相匹配的上游数据集；记录每项地理代理。 | 场址清单、供应商地址、采购记录、上游数据集元数据、代理理由 |
| `dq_temporal_representativeness` | 全部清单行 | 使用具有代表性的报告期或完整的所声明生产期；使分子和合格品分母时间一致，并披露异常停机或产品变更。 | 带日期记录、报告期核对、生产日志、异常事件审查 |
| `dq_completeness` | 全部交换 | 核对产品特定物料清单和制造记录，并披露遗漏流、截断、数据缺口及受影响的清单份额。 | 已签字的质量和公用工程核对、废物核对、缺失数据登记、截断声明 |
| `dq_precision` | 实测和分配数据 | 保留表计分辨率、校准、抽样设计、分配驱动因素和计算工作表；对重大的共用分配报告不确定性或敏感性。 | 校准证书、抽样计划、原始导出数据、分配工作簿、敏感性结果 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference_product | 确认 CPC 范围、完整装置状态、型号、配置、性能限定信息、验收状态、参考数量和输出行描述同一产品。若数据集以过滤零件、服务或排除的内燃机过滤器替代，则拒绝。 | `un-cpc-3-0-structure-2025` |
| `validation_bom` | bill_of_materials | 确认材料、已安装部件和包装行与已发布产品特定物料清单及干态运输质量相符，并计入有记录的加工损失和排除的可重复使用工装。 | `eu-pef-2021-2279` |
| `validation_period` | temporal_consistency | 确认投入、产出、废物、排放、分配驱动因素和合格品数量使用同一场址和报告期。 |  |
| `validation_atomic_flows` | inventory_rows | 确认每个清单行仅表示一个物理、化学、废物或能源交换；发布前拆分任何合并的材料、公用工程、燃料、包装、废物、废水加残渣或排放集合。 |  |
| `validation_uuid_semantics` | tiangong_references | 通过公共 state-100 身份、中英文基本名称、流类型、分类、属性、单位组、产品状态、地理范围、技术和 generalComment 确认每个 UUID；未解决行必须保持 UUID 为空。 |  |
| `validation_mass_water_energy` | quantitative_reconciliation | 在接受数据集前，确认产品和包装质量核对、工艺用水和废水平衡、电表核对、单位换算、废料去向及直接排放区室。 | `eu-pef-2021-2279` |
| `validation_ranges` | external_ranges | 若外部推断的经验范围没有至少两个相互独立且在系统边界、功能单位和产品状态上兼容的原始来源，或综合说明未解释地理和技术差异，则拒绝该范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一个所声明装置型号和配置的产品特定工厂大门 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 在保留必需限定信息和工厂大门边界的过程或生命周期模型研究中，作为所声明装置的生产数据集链接 |
| allowed_use | 当地理、技术、期间、性能和配置具有代表性时，用于产品系统建模、采购比较、设计改进和清单编制 |
| excluded_use | 无限定信息的类别平均声明；替代过滤零件或排除的内燃机过滤器；使用阶段性能声明；在功能、能力、使用寿命或系统边界不相同的产品间作比较声明 |
| required_metadata | PCR id 和版本；制造商和型号；配置和物料清单版本；功能和额定性能；过滤原理和介质；设计流量和压力或真空；生产场址；参考期；干态运输质量；包装；系统边界；分配；截断；上游数据集版本；未解决流的处理 |
| required_quality_disclosure | 技术、地理和时间代表性；完整性和精度；计量和校准证据；分配份额；数据缺口和代理；质量、用水、废水和电力核对；验收试验覆盖情况 |
| update_trigger | 型号或材料配置变化；过滤原理、额定性能、壳体或介质变化；干态运输质量发生重大变化；制造场址或主要工艺路线变化；包装变化；分配驱动因素变化；数据不再具有时间代表性；UUID 或边界出现重大更正 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `dataset` | 联合国统计司，《产品总分类》第 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05；SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 当前英文分类身份和明确的内燃机过滤器排除范围 |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | 联合国统计司，《产品总分类》第 3.0 版解释性说明，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期：2026-09-05） | 在原始页面核验当前 CPC 43914 标题和相邻排除类别 |
| `un-cpc-1-1-zh-2007` | `official_guidance` | 联合国，《产品总分类》第 1.1 版中文出版物，https://digitallibrary.un.org/record/536544/files/M_77ver1_1c.pdf（检索日期：2026-09-05） | 对未变化的 CPC 43914 产品边界提供专业中文表述 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279，英文合并文本，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230（检索日期：2026-09-05） | 产品特定物料清单、公司特定制造数据、完整性、透明度和数据质量要求 |
