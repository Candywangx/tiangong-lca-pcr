---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.glucose-and-glucose-syrup-fructose-and-fructose-syrup-lactose-and-lactose-syrup-invert-dfd54172
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 葡萄糖及葡萄糖浆；果糖及果糖浆；乳糖及乳糖浆；转化糖；其他未另分类糖及糖浆；人造蜂蜜；焦糖

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 23210 完整产品类别的前景数据包：葡萄糖及葡萄糖浆、果糖及相关果糖浆、乳糖及乳糖浆、转化糖、其他未另分类糖及糖浆、人造蜂蜜和焦糖。当申报产品仍属于该类别时，液态、浓缩、干燥、结晶、调配、转化及热转化的商业形态均在范围内。

本 PCR 不限定单一路线。它支持淀粉水解和糖化、可选的葡萄糖异构化制果糖、含乳糖物流的回收与精制、蔗糖转化、人造蜂蜜或其他糖浆的调配，以及焦糖的受控热转化。前景过程图只纳入报告设施实际发生的操作。

本 PCR 不包括以原淀粉或改性淀粉为参考产品、归入 CPC 23210 之外的蔗糖产品、天然蜂蜜、产品身份并非糖或糖浆本身的配制食品或饮料、药物剂型以及糖产品下游使用。农业生产、淀粉生产、乳或乳清生产、蔗糖生产及其他上游原料生产在前景边界外；同址实施且明确纳入时除外。

数据库支持的代表产品形态是 `Dextrose Monohydrate`，它不是本宽类别所有产品的通用身份。前景数据包必须声明实际产品子类和形态。若天工数据库中存在更贴合实际葡萄糖浆、果糖浆、乳糖产品、转化糖、人造蜂蜜、焦糖或其他所含形态的产品流，必须替换代表 UUID；不得把代表 UUID 静默复用于不同形态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.glucose-and-glucose-syrup-fructose-and-fructose-syrup-lactose-and-lactose-syrup-invert-dfd54172 |
| classification_refs | CPC 3.0: 23210 |
| covered_products | 葡萄糖及葡萄糖浆；干葡萄糖浆；各类右旋糖；果糖及含果糖糖浆；乳糖及乳糖浆；转化糖及转化糖浆；其他未另分类糖及糖浆；人造蜂蜜；焦糖 |
| excluded_products | 作为最终产品的原淀粉或改性淀粉；归入其他分类的蔗糖产品；天然蜂蜜；配制食品、饮料和药物剂型；糖产品下游使用 |
| representative_product | Dextrose Monohydrate，代表含一分子结晶水的纯化结晶 D-葡萄糖；仅为代表形态，不是其他类别成员的默认身份 |
| production_route | 所申报路线的原料制备；水解、糖化、异构化、转化、回收、调配或焦糖化；纯化；浓缩；结晶或干燥；包装等操作组合 |
| market_state | 报告设施出厂门处按生产状态交付的散装或包装液态、浓缩、干燥、结晶、调配、转化或热转化糖产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产具有实际商业子类和物理形态的所申报 CPC 23210 糖或糖浆产品 |
| How much | 报告设施门处按供应状态计的 1 kg 净产品 |
| How well | 符合所申报商业或监管规格，并按适用情况报告产品子类、物理形态、总固形物或水分基准和组成描述符 |
| How long or cycle | 申报报告期所代表的一个生产批次或生产活动期 |
| reference_flow_link | rf_declared_sugar_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 一水结晶葡萄糖 `8f56ee97-f5f8-4685-a958-74f586b40cd9`（仅为代表产品形态） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际产品子类；物理形态；净质量基准；总固形物或水分；适用时的干基组成、葡萄糖当量或果糖含量；原料类别与来源；转化和精制路线；设施地理位置；包装状态；分配方法；是否保留或替换代表流 UUID |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

只有实际产品为 Dextrose Monohydrate 且数据集规格与该身份相符时，才能保留代表产品流。其他情况下，数据生产者必须先选择并完整回读更具体的天工产品流；若无法解析，则应保留显式身份待审项，而不得使用代表 UUID 代替。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告申报门处按供应状态计的 1 kg 净产品；未经换算，不得把干固形物、溶液体积或含包装毛质量作为参考数量。 |
| `dry_matter_conversion` | 糖浆、湿晶体和溶液记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 供应态和 kg 干物质 | 保留实测总固形物或水分数据，并用批次特定值换算供应态与干物质量；同时披露两个基准。 |
| `volume_to_mass` | 液态产品、水和液态投入记录 | 实测质量或带密度的实测体积 | kg | 仅使用与温度和组成相符的实测或供应商密度把体积换算为质量；保留原始值、温度及换算过程。 |
| `energy_units` | 电力、蒸汽、燃料和回收能源 | 能量或燃料特定属性 | kWh、MJ 或原始发票单位 | 保留原始计量或发票单位并记录全部换算；不得把电力、热能和燃料质量合并为一个无区分数值。 |
| `coproduct_mass` | 可销售共产品和回收产品物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在一致湿基或干基上分别计量各共产品，并保留分配所需的组成或水分信息。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 所申报碳水化合物原料、中间糖物流和其他外购物料进入报告设施 |
| starting_condition_role | 路线特定糖制造或精制的前景门到厂起点 |
| product_classification_scope | CPC 3.0 子类 23210，不依赖 Dextrose Monohydrate 代表形态 |
| recursive_input_rule | 外购且本身属于 CPC 23210 的糖或糖浆作为带独立供应商数据集的上游产品投入记录，不在本前景数据包中递归重新制造 |
| upstream_dataset_requirement | 每种外购原料、能源载体、过程化学品、纯化介质、包装材料和外包处理服务均需适当地域与技术的上游数据集，或明确披露未解析数据 |
| disclosure | 声明实际产品子类与形态、原料类别、路线操作、同址整合上游操作、排除或外包操作、循环物流、共产品、废水去向、包装状态、地理位置、报告期及分配方法 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景制造 | 纳入从申报原料接收到报告设施实际执行的路线特定转化、纯化、浓缩、结晶或干燥、调配或焦糖化、包装、储存和装运等全部厂内操作。 | `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995` |
| `boundary_route_selection` | 路线特定操作 | 只纳入适用单元操作，但必须明确声明路线，并在行政接收之外至少纳入一项形成产品或精制产品的操作。 | `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_inputs` | 外购产品和能源投入 | 上游生产留在前景边界之外，每种外购物料、能源、包装和服务均链接上游数据集；同址一体化生产则必须纳入前景并披露。 |  |
| `boundary_direct_releases` | 直接排放和废物 | 纳入归属于前景系统的实测直接大气和水体排放、固体与液体废物、废纯化介质、废水处理、回收能源和场外处理路线。 | `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `boundary_downstream_exclusion` | 下游生命周期 | 排除申报门之后的分销、产品使用、掺入食品或其他产品及生命末期；研究明确扩展边界并单独报告时除外。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | 原料接收与制备 | required | 始终纳入；仅采用报告设施实际执行的原料操作 | 前景原料接收、清理、稀释、溶解、筛分或制浆 | kg 制备后碳水化合物物流 |
| `route_specific_conversion` | 路线特定碳水化合物转化 | conditional | 现场发生水解、液化、糖化、异构化、蔗糖转化、乳糖回收、调配或受控热转化时纳入 | 转化形成申报糖身份的前景过程 | kg 转化或调配糖物流 |
| `product_finishing` | 纯化、浓缩、结晶、干燥、包装和储存 | required | 始终纳入；只记录适用精制步骤并明确说明省略步骤 | 前景精制和设施门产品输出 | 1 kg 净参考产品 |
| `onsite_wastewater_treatment` | 厂内废水处理 | conditional | 现场处理废水或回收能源/物料时纳入 | 前景处理与直接排放核算 | kg 或 m3 处理废水 |

### 过程：原料接收与制备（`feedstock_preparation`）

#### 输入

##### 产品流

###### 申报碳水化合物原料（`declared_carbohydrate_feedstock`）

记录每种跨越设施边界的路线特定原料，例如淀粉浆、葡萄糖液、蔗糖溶液、乳清或富乳糖物流、外购糖或其他申报糖中间品。不得用一个通用原料量掩盖混合原料。

- 选定流：按实际供应商身份选择的路线特定原料；无类别通用默认 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 供应态；适用时 kg 干物质
- 数量规则：按原料批次实测净接收量，扣除退货并链接实测水分或总固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_receipts`
- 来源：`eu-jrc-fdm-bref-2019`

###### 制备用水（`preparation_water`）

记录本过程洗涤、稀释、溶解、制浆和清洗所用淡水及外供过程水。内部循环水单独跟踪，不再次作为外部投入计数。

- 选定流：Process water；可用时选择适当地域产品流
- 流属性/单位：实测质量或体积 / kg 或 m3
- 数量规则：经校准仪表计量或由校准批次加入量计算，并扣除单独计量的回流水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

#### 输出

##### 产品流

###### 制备后碳水化合物物流（`prepared_carbohydrate_stream`）

记录送往转化或精制的制备后物流质量与组成。该内部产品流把实测原料和水量平衡连接至下一适用过程。

- 选定流：路线特定制备后碳水化合物物流；内部前景流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，或由校准罐位和批次特定密度计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_streams`
- 来源：

##### 废物流

###### 原料制备废弃物（`feedstock_preparation_rejects`）

记录离开本过程的筛除异物、不合格原料、过滤残渣和其他废弃物，并注明去向及处理路线。

- 选定流：路线特定制备废弃物或废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物类型由容器、秤或处置记录实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 来源：

##### 基本流

### 过程：路线特定碳水化合物转化（`route_specific_conversion`）

#### 输入

##### 产品流

###### 制备后或外购含糖物流（`conversion_feedstock_stream`）

记录进入水解、糖化、异构化、转化、乳糖回收、调配或焦糖化的实际原料。本过程不适用时，将制备后物流直接送往产品精制。

- 选定流：路线特定内部或外购含糖物流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 供应态；适用时 kg 干物质
- 数量规则：实测转移或接收质量，并记录批次特定固形物或组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_streams`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

###### 转化剂和加工助剂（`conversion_agents`）

按实际物料身份分别记录酶、酸、碱、催化剂、盐、脱色剂、离子交换再生剂和调配原料。只纳入申报路线实际使用的物料。

- 选定流：依据采购规格选择的物料特定产品流
- 流属性/单位：采购单位属性并保留 SI 换算
- 数量规则：发往批次的质量或体积减实测退回量，再按合格产品输出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processing_materials`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

###### 转化用电（`conversion_electricity`）

记录搅拌、泵送、分离、控制和其他转化设备的计量电力。

- 选定流：适当地域电力供应产品流
- 流属性/单位：Energy / kWh
- 数量规则：分表计量；无专用表时采用有文件依据的设备工时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 转化热能或燃料（`conversion_thermal_energy`）

记录糊化、反应温控、转化、焦糖化、清洗及其他路线特定热负荷所用蒸汽、热或燃料。

- 选定流：实际蒸汽、热或燃料投入流
- 流属性/单位：能量或燃料特定属性 / MJ、kg、Nm3 或原始计量单位
- 数量规则：实测用量，或记录锅炉和输配分配并保留换算效率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

#### 输出

##### 产品流

###### 转化、倒转、调配或热转化糖物流（`converted_sugar_stream`）

记录送往精制的实际中间产品身份、质量、总固形物或水分及组成描述符。

- 选定流：路线特定内部糖物流；内部前景流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，并附批次特定固形物和产品身份检验结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_streams`
- 来源：`eu-jrc-fdm-bref-2019`; `codex-cxs-212-1999`

##### 废物流

###### 转化废水（`conversion_wastewater`）

记录转化过程的排污、洗涤液、废再生液、按废物管理的母液损失及其他废水，不重复计算送回再用的水。

- 选定流：路线特定废水流
- 流属性/单位：实测质量或体积 / kg 或 m3
- 数量规则：按去向计量排放量或采用有平衡依据的罐体体积记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

##### 基本流

### 过程：纯化、浓缩、结晶、干燥、包装和储存（`product_finishing`）

#### 输入

##### 产品流

###### 路线特定精制进料（`finishing_feed_stream`）

记录进入实际精制序列的转化物流或直接外购/制备糖物流，并识别是否实施纯化、蒸发、结晶、干燥、调配、包装或储存。

- 选定流：路线特定内部或外购精制进料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 供应态；适用时 kg 干物质
- 数量规则：实测转移或接收质量，并记录固形物和组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_streams`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

###### 纯化、精制和包装材料（`finishing_materials`）

按身份记录精制实际消耗的活性炭、过滤助剂、树脂补充和再生剂、抗结剂、包装及其他材料。

- 选定流：依据采购规格选择的物料特定产品流
- 流属性/单位：采购单位属性并保留 SI 换算
- 数量规则：领用量减实测退回量或可复用库存变化，再按合格产品输出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processing_materials`
- 来源：`codex-cxs-212-1999`; `eu-jrc-fdm-bref-2019`

###### 精制用电（`finishing_electricity`）

记录过滤、泵送、离心、冷却、结晶、干燥、输送、包装和储存中归属于产品的电力。

- 选定流：适当地域电力供应产品流
- 流属性/单位：Energy / kWh
- 数量规则：分表计量；无专用表时采用有文件依据的设备工时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 精制热能或燃料（`finishing_thermal_energy`）

记录蒸发、浓缩、干燥、热清洗和温控所用蒸汽、热或燃料，各能源载体保持分列。

- 选定流：实际蒸汽、热或燃料投入流
- 流属性/单位：能量或燃料特定属性 / MJ、kg、Nm3 或原始计量单位
- 数量规则：实测用量，或记录锅炉和输配分配并保留换算效率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

##### 废物流

#### 输出

##### 产品流

###### 申报 CPC 23210 糖产品（`declared_sugar_product`）

按实际子类和形态记录合格净产品输出。只有匹配的一水结晶葡萄糖产品才能选用 `Dextrose Monohydrate`；否则选择更具体产品流或保留显式待解析身份问题。

- 选定流：仅实际产品匹配时使用 一水结晶葡萄糖 `8f56ee97-f5f8-4685-a958-74f586b40cd9`；否则使用路线特定产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格净输出并归一化为恰好 1 kg 参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：报告设施门处 1 kg 净申报产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_records`
- 来源：`codex-cxs-212-1999`

###### 可销售共产品和回收组分（`saleable_coproducts`）

分别记录以经济或功能用途离开系统的每种可销售共产品或回收组分，包括母液、纤维、麸质、胚芽组分、回收糖物流或其他输出。

- 选定流：共产品特定产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg，并申报湿基或干基
- 数量规则：按共产品实测发运质量或经库存调整的生产质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

##### 废物流

###### 精制固体和液体废物（`finishing_wastes`）

按处理去向记录废活性炭、过滤介质、按废物管理的不合格产品、清洗残渣、包装废物和其他废物。

- 选定流：按物料及处理路线选择废物特定流
- 流属性/单位：Mass / kg
- 数量规则：容器、秤、转移联单或服务商记录的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 来源：`eu-jrc-fdm-bref-2019`

###### 精制废水（`finishing_wastewater`）

按厂内或场外去向记录未回用冷凝水、洗涤水、废再生液、入排水系统产品损失和其他废水。

- 选定流：路线特定废水流
- 流属性/单位：实测质量或体积 / kg 或 m3
- 数量规则：计量排放量或有平衡依据的罐体体积，并扣除单独计量回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

##### 基本流

###### 转化与精制直接大气排放（`direct_air_emissions`）

记录干燥器、物料处理、锅炉、焦糖化和其他现场源的实测或许可直接排放。不得因为某污染源没有公开因子而创建零排放。

- 选定流：每种实测或计算排放的物质特定基本流
- 流属性/单位：物质质量 / kg
- 数量规则：监测排放质量，或由实测活动数据和适用来源因子形成的有文件依据计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `us-epa-ap42-9-9-7-1995`

### 过程：厂内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理材料和能源（`wastewater_treatment_inputs`）

纳入厂内处理时，分别记录处理化学品、电力、热和外供处理服务。

- 选定流：投入特定化学品、电力、热或服务流
- 流属性/单位：投入特定属性和原始计量或发票单位
- 数量规则：处理系统仪表、库存、发票或批次记录，并分配到产品相关废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

##### 废物流

###### 送处理的前景废水（`wastewater_to_treatment`）

记录原料制备、转化和精制送入处理的废水，不重复计算内部转移。

- 选定流：路线特定废水流
- 流属性/单位：实测质量或体积 / kg 或 m3
- 数量规则：汇总流向处理系统的实测或有平衡依据的内部转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`

#### 输出

##### 产品流

###### 回收沼气或有用处理输出（`recovered_treatment_output`）

只有实测且实际利用或外供时，才记录回收沼气、可回用水或其他有用处理输出；否则从实施清单中省略本行。

- 选定流：输出特定产品流
- 流属性/单位：输出特定属性和实测单位
- 数量规则：实测回收量，扣除放空燃烧、内部损失和未利用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 废水处理污泥（`wastewater_treatment_sludge`）

按实测湿质量以及可用时干质量记录污泥或其他处理残渣，并注明最终处理路线。

- 选定流：匹配处理去向的污泥或残渣流
- 流属性/单位：Mass / kg 湿物；可用时 kg 干物质
- 数量规则：实测移除质量并记录水分或固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

##### 基本流

###### 处理水排放（`treated_water_discharge`）

按受纳环境记录排水体积和监测污染物负荷。场外处理转移仍作为废物或服务流，不作为本设施基本排放。

- 选定流：受纳环境对应的水流及污染物特定基本流
- 流属性/单位：水体积和污染物质量 / m3 和 kg
- 数量规则：各污染物由匹配期间排水体积乘实测浓度，或采用直接负荷测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多功能前景操作 | 首先通过对单独计量操作进行细分来避免分配；只有明确论证被替代功能和数据时才扩展系统。 | `eu-pef-recommendation-2021-2279`; `iso-14044-2006` |
| `allocation_physical` | 不可分离联合生产 | 无法细分或合理扩展系统时，采用能反映实测投入产出随共产品变化情况的物理关系；不得只因质量数据易得就选择质量分配。 | `eu-pef-recommendation-2021-2279`; `iso-14044-2006` |
| `allocation_economic_last_resort` | 无合理物理关系的共产品 | 仅把报告期经济分配作为最后选择；记录产品与共产品数量、价格、币种、价格期间、来源记录及对重大价格变化的敏感性。 | `eu-pef-recommendation-2021-2279` |
| `allocation_waste_status` | 残渣、回收物流和废物 | 根据有记录的去向、规格及经济或功能用途把输出分类为产品、共产品或废物；不得仅凭标签给予零负担或信用。 |  |
| `allocation_internal_recycling` | 内部循环水、糖浆、母液、热和处理输出 | 把内部循环表示为内部转移，只计算补充投入、损失、外供输出和处理负担，避免同一数量重复计数。 | `eu-jrc-fdm-bref-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_receipts` | `feedstock_preparation` | 申报碳水化合物原料 | 接收、称重和供应商质量记录 | 物料身份；供应商；批次；毛重、皮重和净重；总固形物或水分；组成；退货量 | 地磅或校准秤，加供应商证明和接收检验 | kg 供应态；kg 干物质 | 每批 | 完整报告期 | 全部纳入接收点 | 按物料汇总合格净接收量并按合格输出归一化 | 校准、磅单、证明和拒收记录 |
| `cp_process_water` | `feedstock_preparation` | 制备和过程水 | 仪表和批次记录 | 仪表编号；期初期末读数；批次加入量；循环水转移；用途 | 校准仪表或校准容器加入 | m3 或 kg | 连续或每批 | 完整报告期 | 全部纳入过程 | 外部补充水减实测回流水；内部回用单列 | 仪表校准、平衡检查和缺失数据日志 |
| `cp_intermediate_streams` | `feedstock_preparation`; `route_specific_conversion`; `product_finishing` | 内部碳水化合物物流 | 储罐、流量计和实验室记录 | 物流身份；来源和去向；质量或体积；密度；温度；总固形物；组成 | 校准质量或体积测量并匹配取样 | kg；m3；质量分数 | 每次转移或每批 | 完整报告期 | 全部纳入过程转移 | 用匹配密度换算质量，保留供应态与干物质基准，并按批次核对 | 仪器校准、样品编号、实验室方法和质量平衡 |
| `cp_processing_materials` | `route_specific_conversion`; `product_finishing` | 转化、纯化、精制和包装材料 | 库存领用、批记录和采购记录 | 物料身份；批次；领用量；退回量；浓度；单位；用途 | 受控仓库领用或计量投加 | kg、L 或采购单位 | 每批或每次领用 | 完整报告期 | 全部纳入过程 | 领用减退回，必要时用实测浓度或密度换算 | 库存核对、投加校准和采购规格 |
| `cp_energy_records` | `route_specific_conversion`; `product_finishing` | 电力、蒸汽、热和燃料 | 仪表、发票和设备运行记录 | 载体；仪表编号；读数；燃料量；蒸汽条件；分配驱动；换算因子 | 优先分表；否则采用有文件依据的工程分配 | kWh、MJ、kg、Nm3 或发票单位 | 连续、每月或每批 | 完整报告期 | 全部纳入过程和共用公用工程 | 扣除外供量，保留各载体总量，并按记录驱动分配共用公用工程 | 仪表校准、发票核对和换算表 |
| `cp_final_product_records` | `product_finishing` | 申报参考产品 | 生产、包装、仓储和质量记录 | 实际产品子类；使用的流 UUID；批次；毛重、皮重和净重；总固形物或水分；组成；包装；放行状态 | 校准秤或质量流量计，加放行检验 | kg 供应态；kg 干物质 | 每批和每次发运 | 完整报告期 | 全部纳入产品线 | 合格净输出经库存变化和退货调整；清单归一化至 1 kg | 校准、批次放行、仓储核对和产品规格 |
| `cp_waste_and_coproducts` | `feedstock_preparation`; `product_finishing` | 废弃物、共产品和废物 | 称重、容器、联单和发运记录 | 物料身份；产品/废物状态；质量；水分；去向；处理；分配所需收益 | 校准秤或服务商记录 | kg 湿物；kg 干物质 | 每次移除或发运 | 完整报告期 | 全部纳入过程 | 按身份和去向汇总；产品与废物分列 | 称重记录、联单、去向证据和库存核对 |
| `cp_wastewater_records` | `route_specific_conversion`; `product_finishing`; `onsite_wastewater_treatment` | 废水产生和转移 | 仪表、储罐和路线记录 | 来源过程；去向；体积；适用时密度；回用体积；转移时间 | 校准流量计或有平衡依据的储罐测量 | m3 或 kg | 连续或每次转移 | 完整报告期 | 全部纳入排水和转移点 | 汇总净外排或处理转移；外部投入输出总量不含内部回用 | 仪表校准、水量平衡、路线图和缺失数据日志 |
| `cp_direct_emissions` | `product_finishing` | 直接大气排放 | 烟道测试、连续监测、许可和活动记录 | 排放源；污染物；浓度；流量；时长；活动；计算时的因子及来源 | 合规监测或源特定计算 | kg 污染物 | 监测事件和运行期 | 报告期内有代表性运行 | 全部纳入直接源 | 按源计算匹配期间质量并汇总，不用无依据零值替代未检出 | 实验室报告、校准、运行日志和计算文件 |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | 处理投入、残渣和回收输出 | 仪表、库存、实验室和移除记录 | 投入身份；数量；处理体积；污泥质量和固形物；回收气或水；去向 | 处理系统仪表、校准秤和实验室检验 | 投入特定；m3；kg；MJ | 连续、每批或每次移除 | 完整报告期 | 厂内处理系统 | 按实测废水源负荷分配处理总量并核对输出 | 仪表校准、处理日志、实验室结果和去向记录 |
| `cp_effluent_monitoring` | `onsite_wastewater_treatment` | 处理后排放和污染物负荷 | 排水仪表和实验室记录 | 排水体积；采样时间；污染物；浓度；受纳环境；检出限 | 校准排水仪表及有代表性的合规采样 | m3；mg/L；kg | 许可或运行监测频率 | 完整报告期 | 每个纳入排放口 | 匹配体积与浓度期间并计算污染物质量负荷 | 交接记录、认可实验室结果、仪表校准和许可记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | 全部前景数量 | 归一化数量 = 报告期数量 / 报告期合格净产品 kg | 采集的投入或输出数量；`cp_final_product_records` 合格净输出 | 每 1 kg 参考产品的数量 |  |
| `convert_to_dry_matter` | 原料、中间品、产品和共产品记录 | 干质量 = 供应态质量乘实测总固形物质量分数；保留未换算记录和试验基准 | 供应态质量；匹配总固形物或水分结果 | kg 干物质及换算链 | `codex-cxs-212-1999` |
| `liquid_volume_to_mass` | 液态产品和投入记录 | 质量 = 实测体积乘同一组成和温度下的实测或规定密度 | 体积；密度；温度；组成 | kg 供应态 |  |
| `effluent_pollutant_load` | 直接水体排放 | 污染物负荷 = 匹配期间排水体积乘实测浓度，并显式换算单位 | `cp_effluent_monitoring` 体积和浓度 | 每 1 kg 参考产品的 kg 污染物 | `eu-fdm-bat-2019-2031` |
| `foreground_mass_balance` | 各过程和报告期 | 在一致湿基与干基上核对实测质量投入、产品和共产品输出、废物、水转移、库存变化及有记录损失；调查重大未解释差额 | 全部物料采集协议 | 签署的过程和设施质量平衡核对 |  |
| `economic_allocation_share` | 经批准的经济分配 | 分配份额 = 同一报告期和市场基准下参考产品收益 / 联合生产产品总收益 | 共产品数量；价格；币种；价格期间 | 已披露分配因子和敏感性 | `eu-pef-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 记录必须说明实际产品子类、形态、规格、总固形物或水分基准、路线、包装状态和所选天工流 UUID；使用代表 UUID 时必须证明匹配 Dextrose Monohydrate。 | 批次放行、规格、流回读及适用时 `codex-cxs-212-1999` |
| `dq_temporal_coverage` | 全部前景记录 | 覆盖完整且有代表性的报告期，识别停机和异常生产活动，并量化任何外推或缺失区间。 | 仪表和生产完整性核对 |
| `dq_measurement` | 实测数量 | 使用校准仪表或秤，并保留原始单位、换算、校准状态以及不确定度或仪器分辨率。 | 校准证明和计算记录 |
| `dq_material_balance` | 物料流 | 按过程和设施核对湿质量与干质量；调查并披露重大未解释差额，不强行闭合。 | 签署的质量平衡工作表 |
| `dq_energy_separation` | 能源投入 | 分列电力、外购热或蒸汽以及各种燃料；披露共用公用工程分配和换算效率。 | 仪表、发票和分配工作表 |
| `dq_water_and_wastewater` | 水和废水 | 区分外部水投入、内部回用、废水转移、场外处理和直接排放；把监测污染物负荷与正确体积和期间匹配。 | 水量平衡、路线图和监测记录 |
| `dq_allocation` | 多功能操作 | 保留层级决策、分配驱动、共产品分类、来源记录、因子计算及采用经济数据时的敏感性。 | 分配工作表和批准记录 |
| `dq_source_currency` | 外部规则和规格 | 在数据集发布时核验适用于设施和市场的产品规格、法规、许可及监测方法仍为现行。 | 有日期的来源复核和发布检查表 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_scope` | 产品身份 | 确认申报产品属于完整 CPC 3.0 子类 23210，且不是排除的淀粉、蔗糖、天然蜂蜜、配制食品、饮料或药物剂型。 | `un-cpc-v3-2025` |
| `validate_representative_flow_use` | 参考产品流 | 仅实际产品为 Dextrose Monohydrate 时接受 `8f56ee97-f5f8-4685-a958-74f586b40cd9`；其他形态必须使用更具体的已核验流或显式未解析身份发现，绝不静默复用代表流。 | `codex-cxs-212-1999` |
| `validate_reference_support_chain` | 参考计量 | 确认 Product flow 参考使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，且不带数据集版本后缀。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 缺少实际产品子类、形态、净质量基准、固形物或水分、适用组成描述符、原料、路线、地理位置、包装和分配方法时，拒绝符合性。 | `codex-cxs-212-1999` |
| `validate_route_coverage` | 过程图 | 确认过程图记录实际产品形成路线，并纳入全部适用转化和精制操作；现场实施时还须纳入厂内废水处理。 | `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995` |
| `validate_foreground_coverage` | 前景清单 | 发生相应流时，必须具备原料、水、加工材料、电力、热能或燃料、合格产品、共产品、废物、废水和直接排放的采集或计算值；不存在的流应记录为不适用，不得填无依据零值。 | `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `validate_mass_and_dry_basis` | 质量平衡 | 确认供应态和干物质量使用匹配批次或期间的固形物数据，并调查和披露质量平衡差额。 | `codex-cxs-212-1999` |
| `validate_allocation` | 多功能性 | 确认先考虑细分或合理系统扩展，且任何物理或经济分配可由保留记录和敏感性证据复现。 | `eu-pef-recommendation-2021-2279`; `iso-14044-2006` |
| `validate_data_currency` | 数据集发布 | 确认来源复核、流身份、技术、产品规格、许可条件和前景记录在发布时仍具代表性；否则更新或披露限制。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所申报 CPC 23210 糖或糖浆产品的单元过程前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅当产品子类、物理形态、固形物或水分基准、原料、路线、地理位置、包装状态和设施门与目标用途相符或已显式调整时，供下游 process 或 lifecyclemodel 使用 |
| excluded_use | 在葡萄糖、果糖、乳糖、转化糖、人造蜂蜜、焦糖、液态糖浆、干糖浆、无水晶体和一水合物之间静默替代；未经代表性复核用作通用糖市场数据集；未经额外审查用于产品比较声明 |
| required_metadata | canonical PCR id；CPC 参考；实际产品子类；物理形态；所选产品流 UUID；参考质量基准；总固形物或水分；适用组成描述符；原料；路线；设施和地理位置；报告期；技术；包装；边界；分配方法；上游数据集 |
| required_quality_disclosure | 前景记录覆盖率；缺失数据处理；仪表和秤质量；质量和水量平衡；湿基到干基换算；直接排放和废水监测；共产品分类；分配因子和敏感性；未解析流身份；来源复核日期 |
| update_trigger | 实际产品形态或规格、原料、转化或精制路线、流身份、场址或地理、能源系统、废水去向、共产品处理、分配基准、包装、许可、外部方法来源或重大前景数据质量变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | `official_guidance` | 联合国统计司，Central Product Classification Version 3.0，代码 23210，https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-10） | 完整产品类别范围和分类身份 |
| `codex-cxs-212-1999` | `standard` | Codex Alimentarius Commission，CXS 212-1999，Standard for Sugars，修订至 2022 年，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+212-1999%2FCXS_212e.pdf（检索于 2026-08-10） | 标准化糖的产品定义、组成与固形物限定、标签区别及放行质量证据 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，2019，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries（检索于 2026-08-10） | 淀粉甜味剂工序分解、路线操作、水和能源核算、共产品、直接排放及废水处理边界 |
| `eu-fdm-bat-2019-2031` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-10） | 适用时的资源使用、废水和直接排放监测及质量要求 |
| `us-epa-ap42-9-9-7-1995` | `official_guidance` | United States Environmental Protection Agency，AP-42 Section 9.9.7 Corn Wet Milling，January 1995，https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-7.pdf（检索于 2026-08-10） | 淀粉路线葡萄糖浆和右旋糖工序分解及潜在直接排放源识别；不作为通用定量因子 |
| `eu-pef-recommendation-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-10） | 分配层级及物理或经济分配选择的披露 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management - Life cycle assessment - Requirements and guidelines，含已发布修订，https://www.iso.org/standard/38498.html（检索于 2026-08-10） | 生命周期清单和分配框架 |
