---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-such-as-open-seam-riveted-or-similarly-closed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他管材，如开缝、铆接或类似的封闭式管材

## 1. 范围与适用性

本PCR适用于CPC 3.0代码41289所涵盖的钢制管材，即以纵向开缝状态交付、采用铆接封闭，或采用其他类似机械方式封闭的管材。范围包括扁平钢材的成形、路线特定的机械封缝、适用时的切割与表面处理、检验及工厂门口放行。不包括无缝管、焊接管、油气井套管与油管、钻杆、铸造管、管件及有色金属管材；即使其他制造步骤相似，焊缝产品仍不属于本边界。

申报产品须注明钢号、来料形态、横截面、外形尺寸、壁厚、长度、封闭路线、接头结构、表面及热处理状态、生产厂址与地理范围和工厂门口交付状态。机械封缝过程仅适用于铆接或其他机械封闭产品，不适用于开缝产品。不得将另一种CPC 41289管材作为未披露原料递归并入本数据集。

## 2. 产品类别识别

| 字段 | 值 |
|---|---|
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-such-as-open-seam-riveted-or-similarly-closed` |
| classification_refs | CPC 3.0: 41289 |
| covered_products | 以开缝、铆接或类似机械方式封闭并交付的钢制管材 |
| excluded_products | 无缝或焊接管；套管、油管和钻杆；铸造管；管件；有色金属管 |
| representative_product | 具有声明尺寸、钢号、缝路线及表面状态的工厂门口钢制管材 |
| production_route | 扁平钢材准备与辊式成形、开缝放行或机械封闭、适用处理、检验及放行 |
| market_state | 工厂门口符合要求且不含包装的产品 |

## 3. 参考流

| 字段 | 值 |
|---|---|
| What | 制造并在工厂门口交付符合要求的开缝、铆接或以类似机械方式封闭的钢制管材 |
| How much | 1 kg符合要求且不含包装的产品净质量 |
| How well | 符合所声明钢号、尺寸、封闭路线、缝结构、表面状态及适用检验准则 |
| How long or cycle | 工厂门口放行的一个生产批次；使用寿命不在边界内 |
| reference_flow_link | `reference_product_flow` |

| 字段 | 值 |
|---|---|
| 参考数量 | 1 kg |
| 参考产品流 | 其他管材，如开缝、铆接或类似的封闭式管材 `29ae082c-4fd0-45b8-8138-a85adf168ea4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢号；来料形态；横截面；外形尺寸；壁厚；长度；封闭路线；缝或接头结构；涂层或表面状态；热处理状态；工厂与地理范围；废钢与废水去向；气体参考条件；工厂门口交付状态 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
|---|---|---|---|---|
| `reference_product_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 检验后测量合格且不含包装的产品净质量，并归一化到1 kg。 |
| `material_and_waste_mass` | 材料与废物 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量购入材料及每项分类废物流，保留状态限定信息。 |
| `gas_volume` | 购入气体 | 体积 `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | 分别计量气体并声明温压、组成或纯度及体积基准。 |
| `electricity_energy` | 交流电 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按过程计量电力，保留原始单位并记录转换至MJ的方法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
|---|---|
| declared_starting_condition | 生产场地门口的购入扁平钢材及所有其他投入 |
| starting_condition_role | 背景至前景接口 |
| product_classification_scope | 仅CPC 3.0代码41289，排除无缝、焊接、铸造、钻杆、套管、油管、管件和有色金属产品 |
| recursive_input_rule | CPC 41289管材投入须作为单独披露的上游数据集，不得吸收进本参考产品数据集 |
| upstream_dataset_requirement | 购入钢材、电力、气体、水、化学品、流体和废物处理须匹配地理、技术、状态与交付边界 |
| disclosure | 声明封闭路线、工厂、报告期、产品限定信息、可选操作、分配、废物去向与气体参考条件 |

边界始于进入生产场地的购入扁平钢材、电力、切削液、气体、水、氢氧化钠及路线特定铆钉，包括切割、边缘准备、辊式成形、开缝放行或机械封缝，以及实际发生的热处理、碱洗、漂洗、矫直、精整、检验、内部搬运和废物分类，止于合格产品在工厂门口放行及所有已报告废物和直接化石源二氧化碳离开前景系统。

| rule_id | 适用对象 | 规则 | source_ids |
|---|---|---|---|
| `sb_01` | 产品身份 | 仅纳入CPC 41289剩余边界；无缝、焊接及其他排除项须采用独立产品系统。 | `src_unsd_cpc_3_0_2025` |
| `sb_02` | 前景操作 | 将切割与边缘准备、多道辊式成形、路线特定机械封缝、适用处理、检验和放行建模为可区分操作。 | `src_doe_roll_forming_2003`; `src_nist_riveted_pipe_2009`; `src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022` |
| `sb_03` | 递归输入 | 不得吸收购入的CPC 41289管材；如使用，应作为单独披露的上游数据集，并报告质量与用途。 |  |
| `sb_04` | 背景接口 | 购入钢材、电力、气体、水、化学品、流体和废物处理须匹配声明的地理、技术、产品状态及交付边界。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
|---|---|---|---|---|---|
| `material_preparation_and_forming` | 材料准备与成形 | required | 所有路线 | 准备扁平钢材并形成管材截面 | 向后续过程转移的成形产品质量 |
| `mechanical_seam_closure` | 机械封缝 | conditional | 仅铆接或类似机械封闭路线；开缝放行排除 | 以机械方式封闭并整理接缝 | 向后续过程转移的机械封闭产品质量 |
| `surface_conditioning_and_release` | 表面处理与放行 | required | 放行必需；仅实际发生时纳入处理投入 | 实施适用处理、检验并放行产品 | 1 kg合格参考产品净质量 |

### 过程：材料准备与成形（`material_preparation_and_forming`）

#### 输入

##### 产品流

###### 输入（`in_non_alloy_steel`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：非合金钢板，卷 `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- 流属性/单位：质量 / kg
- 数量规则：称量投入的购入扁平钢材，按库存变动调整并归一化到合格产出。
- 纳入条件：始终纳入；仅用钢号、状态、地理和技术均准确匹配的流替换代表性公共流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022`
- 采集协议：`cp_material_preparation`

###### 输入（`in_ac_electricity_forming`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：计量切割、边缘准备、辊式成形、矫直及辅助设备用电并归一化。
- 纳入条件：始终纳入材料准备与成形用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_doe_roll_forming_2003`
- 采集协议：`cp_material_preparation`

###### 输入（`in_cutting_fluid`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：质量 / kg
- 数量规则：记录切削液补加量并扣除可回收期末库存；适用时分报浓缩液与补充水。
- 纳入条件：仅湿式切割、锯切或边缘准备消耗切削液时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_epa_steel_pipe_1995`
- 采集协议：`cp_material_preparation`

###### 输入（`in_natural_gas_cutting`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：按声明参考条件计量切割或边缘准备燃烧器天然气。
- 纳入条件：仅直接使用天然气切割或边缘准备时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：
- 采集协议：`cp_material_preparation`

###### 输入（`in_industrial_oxygen_cutting`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：按声明参考条件计量氧助切割所用工业氧气。
- 纳入条件：仅采用氧助切割时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：
- 采集协议：`cp_material_preparation`

#### 输出

##### 废物流

###### 废物（`out_post_industrial_steel_scrap_forming`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：称量材料准备与成形产生的边角料、切边、废品及其他分类钢废料。
- 纳入条件：始终作为非负产出纳入；仅有核对证据时可报告零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_epa_steel_pipe_1995`
- 采集协议：`cp_material_preparation`

###### 废物（`out_spent_coolant`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：质量 / kg
- 数量规则：称量离开本过程的废切削液，扣除边界内回用量。
- 纳入条件：仅废切削液离开前景过程时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：
- 采集协议：`cp_material_preparation`

##### 基本流

###### 基本流（`out_fossil_co2_cutting`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或由切割燃料量、组成、含碳量和氧化记录计算；不含上游燃料供应排放。
- 纳入条件：材料准备或切割燃烧化石燃料时纳入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 来源：
- 采集协议：`cp_material_preparation`

### 过程：机械封缝（`mechanical_seam_closure`）

#### 输入

##### 产品流

###### 输入（`in_steel_rivets`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：钢制铆钉
- 流属性/单位：质量 / kg
- 数量规则：称量领用并消耗的钢制铆钉，扣除退回未用铆钉。
- 纳入条件：仅铆接路线纳入；其他机械封闭应新增准确原子材料流，不得重命名本行。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_nist_riveted_pipe_2009`
- 采集协议：`cp_mechanical_closure`

###### 输入（`in_ac_electricity_closure`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：计量铆接、压合、捻缝、封缝设备及辅助设备用电。
- 纳入条件：仅实施机械封闭时纳入；开缝放行时排除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_nist_riveted_pipe_2009`
- 采集协议：`cp_mechanical_closure`

#### 输出

##### 废物流

###### 废物（`out_post_industrial_steel_scrap_closure`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：称量机械封缝产生的钢废料和废铆钉。
- 纳入条件：仅机械封闭产生分类钢废料时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：
- 采集协议：`cp_mechanical_closure`

### 过程：表面处理与放行（`surface_conditioning_and_release`）

#### 输入

##### 产品流

###### 输入（`in_process_water`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量碱洗、漂洗或淬水；必要时以有记录的密度和条件将体积转换为质量。
- 纳入条件：仅表面处理、漂洗或淬水使用水时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022`
- 采集协议：`cp_surface_release`

###### 输入（`in_sodium_hydroxide`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：按溶液质量与实测浓度记录清洗液中氢氧化钠质量。
- 纳入条件：仅使用氢氧化钠碱洗时纳入；其他化学品不得计入本行。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_jrc_fmp_bref_2022`
- 采集协议：`cp_surface_release`

###### 输入（`in_natural_gas_heat`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：按声明参考条件计量退火或其他直接热处理所燃烧的天然气。
- 纳入条件：仅实施天然气直接热处理时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_epa_steel_pipe_1995`
- 采集协议：`cp_surface_release`

###### 输入（`in_ac_electricity_release`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：计量适用的处理、漂洗、矫直、检验、精整和放行活动用电。
- 纳入条件：始终纳入放行过程用电，并记录实际发生的可选操作。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022`
- 采集协议：`cp_surface_release`

#### 输出

##### 产品流

###### 输出（`out_reference_product`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：其他管材，如开缝、铆接或类似的封闭式管材 `29ae082c-4fd0-45b8-8138-a85adf168ea4`
- 流属性/单位：质量 / kg
- 数量规则：测量通过所声明尺寸、路线、表面和检验准则的产品净质量。
- 纳入条件：始终作为定量参考产出纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：恰为1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_unsd_cpc_3_0_2025`
- 采集协议：`cp_surface_release`

##### 废物流

###### 废物（`out_waste_alkaline_liquor`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：质量 / kg
- 数量规则：称量或计量离开边界的废碱性槽液；必要时按有记录密度转换。
- 纳入条件：仅排放分类碱洗槽液时纳入，不得与漂洗废水合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_jrc_fmp_bref_2022`
- 采集协议：`cp_surface_release`

###### 废物（`out_cleaning_wastewater`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：质量 / kg
- 数量规则：计量离开边界的分类清洗与漂洗废水，必要时按有记录密度转换。
- 纳入条件：仅产生单独清洗废水时纳入，排除已报告的浓缩废碱性槽液。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 来源：`src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022`
- 采集协议：`cp_surface_release`

##### 基本流

###### 基本流（`out_fossil_co2_heat`）

该原子交换跨越相应过程边界，并按所述数量规则计量。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或由炉窑燃料量、组成、含碳量和氧化记录计算；不含上游燃料供应排放。
- 纳入条件：表面或热处理燃烧化石燃料时纳入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg工厂门口合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 来源：
- 采集协议：`cp_surface_release`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
|---|---|---|---|
| `alloc_01` | 共用产线与仪表 | 优先物理细分或路线专用计量；剩余共用负荷按已测机器时间、能耗或加工质量等因果动因分配，并披露动因与份额。 |  |
| `alloc_02` | 废钢与过程废物 | 在前景边界报告每项废物及去向，不在前景清单中抵扣原生生产；回收或处理后果属于下游模型。 |  |
| `alloc_03` | 联产品 | 对不可避免的可销售联产品披露身份与数量、论证分配层级与因子并检验合理备选方案；不得隐藏负投入抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `cp_material_preparation` | `material_preparation_and_forming` | 材料准备与成形的全部投入产出行 | 仪表、衡器、领料、库存和废物记录 | 数量、单位、时间、批次、设备、库存变化、气体条件、去向 | 按批次与合格产出核对过程专用计量和质量记录 | kg; m3; MJ | 每批或每项交易并汇总至报告期 | 与参考产出相同的代表性报告期 | 声明的制造场址 | 分别汇总适用原子行并按合格净产出归一化 | 校准、发票、批次、库存与废物联单 |
| `cp_mechanical_closure` | `mechanical_seam_closure` | 铆钉、封闭用电和封闭废钢 | 领料、接头图、仪表和废钢记录 | 铆钉数量与质量、退料、设备能耗、废钢质量、批次和路线 | 将路线专用领料及计量与接头结构和产出核对 | kg; MJ | 每个适用批次并汇总至报告期 | 与参考产出相同的代表性报告期 | 声明的机械封闭产线 | 仅纳入机械封闭路线，汇总原子行并归一化 | 接头图、领退料、仪表与废钢称重 |
| `cp_surface_release` | `surface_conditioning_and_release` | 处理投入、废物、排放及参考产出 | 仪表、槽液、燃料、实验室、衡器、接收和废物记录 | 水、化学品浓度、能耗、燃料条件、废物量、产出质量、接收状态 | 核对操作记录，未测量时由燃料计算排放，并将放行质量关联接收记录 | kg; m3; MJ | 每批、计量期或处置并汇总至报告期 | 与参考产出相同的代表性报告期 | 声明的处理与放行操作 | 保持原子行和可选路线标志，按接收净产出归一化 | 校准、浓度、燃料规格、接收与处置记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
|---|---|---|---|---|---|
| `calc_material_yield` | 钢质量核对 | 合格产品净质量除以同范围扁平钢材投入，并依据废钢、库存和废品调查不匹配。 | `in_non_alloy_steel`; `out_post_industrial_steel_scrap_forming`; `out_post_industrial_steel_scrap_closure`; `out_reference_product` | 成材率及核对结果 |  |
| `calc_energy_normalization` | 分过程电力 | 以有记录方法将各过程电力转换至MJ并除以合格净产出，验证前不得合并过程行。 | `in_ac_electricity_forming`; `in_ac_electricity_closure`; `in_ac_electricity_release`; `out_reference_product` | 分过程电力强度 |  |
| `calc_cutting_co2` | 切割燃烧 | 优先直接测量，否则由切割燃料及有记录的组成、含碳量和氧化情况计算，不含上游排放。 | `in_natural_gas_cutting` | `out_fossil_co2_cutting` |  |
| `calc_heat_co2` | 热处理燃烧 | 优先直接测量，否则由热处理燃料及有记录的组成、含碳量和氧化情况计算，不含上游排放。 | `in_natural_gas_heat` | `out_fossil_co2_heat` |  |
| `calc_cleaning_balance` | 清洗系统平衡 | 核对工艺水和清洗液与废碱液、清洗废水、槽液库存、蒸发、带出及滞留，并说明残差。 | `in_process_water`; `in_sodium_hydroxide`; `out_waste_alkaline_liquor`; `out_cleaning_wastewater` | 清洗系统平衡与残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
|---|---|---|---|
| `dq_identity` | 产品 | 识别钢号、尺寸、缝路线、表面状态和接收状态。 | 产品规格、批次流转与接收记录 |
| `dq_temporal` | 报告期 | 覆盖全部合格产量、废品、投入和运行交换，并说明异常活动。 | 期间核对与运行日志 |
| `dq_metering` | 测量与计算行 | 记录校准、气体条件、溶液浓度、来源与单位转换。 | 校准、实验室和计算记录 |
| `dq_completeness` | 清单 | 纳入全部适用原子交换，区分不适用与零，核对采购、库存、生产和废物。 | 完整性清单与平衡 |
| `dq_route` | 条件操作 | 区分开缝、铆接及其他机械路线，仅纳入实际操作。 | 路线编码、接头图和运行日志 |
| `dq_uncertainty` | 估算与分配 | 保留推导并评估对物料平衡、能源、废物和直接化石源二氧化碳的影响。 | 不确定性与敏感性记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
|---|---|---|---|
| `val_identity` | 产品与分类 | 确认CPC 41289身份及限定信息，并排除无缝、焊接、铸造、管件、钻杆、套管、油管及有色金属产品。 | `src_unsd_cpc_3_0_2025` |
| `val_route` | 条件过程行 | 确认开缝路线无机械封闭交换，铆钉仅用于铆接，且未隐藏焊材、焊接用电或焊接产品流。 | `src_nist_riveted_pipe_2009`; `src_epa_steel_pipe_1995` |
| `val_reference` | 定量参考 | 确认为检验后恰好1 kg合格且不含包装的参考产品，并统一归一化。 |  |
| `val_mass_balance` | 含钢流 | 核对扁平钢材、适用铆钉、合格产品、分类废钢、废品及库存变动，说明残差。 |  |
| `val_energy` | 电力与燃料 | 确认原始计量、单位转换、路线归属、气体条件及准备、封闭、放行能耗分离。 |  |
| `val_waste` | 过程废物 | 确认废切削液、废碱液、清洗废水和废钢分别报告，无重复或隐藏合并废物流。 | `src_jrc_fmp_bref_2022` |
| `val_emissions` | 直接化石源二氧化碳 | 由对应燃料记录复算或与直接测量比较，并排除上游电力和燃料供应排放。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
|---|---|
| dataset_role | CPC 41289钢制管材的工厂门口前景生产数据集 |
| downstream_use | 按声明路线与背景链接构建过程和生命周期模型投影 |
| allowed_use | 与声明钢号、尺寸、缝路线、表面状态、工厂地理和交付状态相匹配的产品系统 |
| excluded_use | 无缝、焊接、铸造、管件、钻杆、套管、油管或有色金属产品；未经限定信息审查的通用替代 |
| required_metadata | 报告期；工厂与地理；钢号与尺寸；封闭路线；缝结构；表面与热处理状态；气体条件；废物去向；分配 |
| required_quality_disclosure | 计量、校准、浓度、库存核对、条件路线、估算、分配、平衡及未解决UUID状态 |
| update_trigger | 产品身份、封闭路线、工厂技术、能源或材料供应、处理、废物去向、分配、数据期或公共UUID状态发生实质变化 |

## 11. 数据源

| 来源ID | 类型 | 引用 | 用途 |
|---|---|---|---|
| `src_unsd_cpc_3_0_2025` | official_guidance | 联合国统计司，《产品总分类》第3.0版结构，2025年6月30日，CPC 41289。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 官方产品身份及与相邻无缝和焊接管材子类的区分 |
| `src_nist_riveted_pipe_2009` | official_guidance | 美国国家标准与技术研究院NEHRP关于MCEER-08-0016的官方记录及其所链接的完整报告PB2009107910；原文核验采用第5.4.3.3节的搭接铆接钢管制造说明。https://nehrpsearch.nist.gov/article/PB2009-107910/XAB | 钢板边缘重叠、纵横向搭接、铆接及捻缝封闭 |
| `src_doe_roll_forming_2003` | official_guidance | 美国能源部，Module 3C: Fabrication Technology，辊式成形说明。https://www.energy.gov/sites/default/files/2021-07/Module_3C.pdf | 板材经多道成形辊获得均匀横截面 |
| `src_epa_steel_pipe_1995` | official_guidance | 美国环境保护署，Development Document for the Metal Products and Machinery Point Source Category，钢管生产说明。https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30003VJS.TXT | 扁平来料、切割、成形、可选退火、淬水、矫直、碱处理和漂洗；焊接说明仅用于排除 |
| `src_jrc_fmp_bref_2022` | official_guidance | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，2022年，DOI 10.2760/196475。https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 | 制管背景、路线处理、水与化学品管理、处理流分类及监测 |
