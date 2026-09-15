---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48211-48212-48232-and-48233-48241-to-e06fba0a
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 指定光学、摄影、电影、精密、医疗及外科设备用零件和附件；显微切片机

## 1. 范围与适用性

本 PCR 适用于 CPC 48281 边界内一种已声明的市场就绪产品：所引用光学、摄影、电影、精密、医疗或外科机器、仪器、器械和用具的零件与附件，以及显微切片机。边界涵盖从外购材料坯料和外购分总成开始，经成形或机加工、清洗、任何已声明的厂内成形或表面处理、最终装配、验收测试和产品特定包装，直至制造工厂门。

前景从进入场址的外购合金钢坯料、组件、化学品、包装和交付公用工程开始，其上游生产由供应商或背景数据集表示。工厂门后的配送、安装、维护、使用、更换、主机设备生产和生命末期均排除。灭菌默认排除；若声明产品以无菌状态交付，则纳入的灭菌路线必须具有单独的具体过程、原子交换和证据。光学精加工、聚合物成型、电子分总成制造及其他材料路线不得被合金钢代表路线默示代表；实际存在时必须声明，并用实际原子输入与输出实例化。

代表路线为：精密合金钢仪器零件经机加工和抛光，可选择进一步成形或水基表面处理，再按适用情况与外购电子件进行机械装配、测试和包装。本路线提供可配置的数据生产结构，并不主张本类别所有产品具有相同材料组成或工艺顺序。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48211-48212-48232-and-48233-48241-to-e06fba0a |
| classification_refs | CPC 3.0：48281（exact） |
| covered_products | CPC 48281 所列货品的市场就绪零件和附件、显微切片机，以及该正式类别边界内的其他零件和附件。 |
| excluded_products | 分类在 CPC 48281 之外的完整主机设备；安装、维修和维护服务；在本类别之外独立销售的通用原材料和分总成；以及作为独立产品销售的包装。 |
| representative_product | 以机加工和抛光合金钢为主要材料、完成机械装配和包装的精密仪器零件。 |
| production_route | 外购合金钢条/杆材 → 机加工与抛光 → 条件性成形及水基表面处理 → 最终装配、验收测试及包装。 |
| market_state | 在制造工厂门完成制造、验收和包装；必须声明无菌/非无菌状态以及是否纳入灭菌。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付一种已声明、市场就绪的 CPC 48281 零件、附件或显微切片机，并提供规定的兼容功能或切片功能。 |
| How much | 1 kg 验收合格产品净质量，不含包装。 |
| How well | 满足所选产品适用的尺寸、表面、光学、电气、医疗、兼容性和验收规范。 |
| How long or cycle | 工厂门一次性交付；使用寿命和使用循环不在本从摇篮到工厂门参考范围内。 |
| reference_flow_link | 工厂门处 1 kg 已声明的验收合格参考产品。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 48211、48212、48232和48233、48241至48249、48251至48253小类商品的零件和附件，显微切片机，光学、照相、电影、精密、医疗或外科机器、仪器、器械和用具的零件和附件（未另列明）。 `4e3c502e-82f3-4d0e-9cba-7e9b49eae4cb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类型（零件、附件或显微切片机）；主机设备类别和兼容性或显微切片机功能；主要材料和完整材料组成；产品净质量；制造路线；成形、清洗和表面处理规范；尺寸和性能验收规范；是否含电子件；无菌/非无菌状态及是否纳入灭菌；包装配置；制造地域和技术；数据期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量不含包装的验收合格产品净质量；将全部过程交换归一化至 1 kg 验收合格产品。 |
| `mu_material_mass` | 材料、中间品、废料和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按每个流所声明的一致干基/接收态称重；核对坯料投入、产品、废料、废物和库存变化。 |
| `mu_electricity` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始能量单位，并一致换算为所选 TianGong 流的 MJ；记录换算和电表边界。 |
| `mu_water_and_solutions` | 工艺用水、废水和水性槽液行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接测量质量；如测量体积，则记录温度、密度来源和换算，并将补加水与配方化学品分开。 |
| `mu_packaging_separation` | 包装投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别测量每个包装组件，并从 1 kg 产品净质量参考量中排除全部包装质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址入口处的外购合金钢坯料，以及已声明的外购组件、化学品、包装和交付公用工程。 |
| starting_condition_role | 上游生产在前景之外，必须链接至供应商特定或具有代表性的背景数据集。 |
| product_classification_scope | CPC 48281 内一种已声明产品；变体材料和工艺路线仅在适用于该产品时实例化。 |
| recursive_input_rule | 已属于 CPC 48281 的外购投入作为具有自身数据集的上游产品投入记录；不得在本前景过程中递归复制其制造清单。 |
| upstream_dataset_requirement | 每种外购坯料、组件、化学品、包装和交付能源投入均需地域和技术具有代表性的上游数据集，或记录数据缺口。 |
| disclosure | 声明产品子类型、主要和辅助材料、路线选择、外包/厂内步骤、不合格品处理、包装、无菌状态、地域、技术、数据期间及全部排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 前景系统 | 纳入成形/机加工、抛光、清洗、适用的厂内成形或表面处理、最终装配、验收测试和包装，直至工厂门；排除下游配送、使用和生命末期。 | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `sb_actual_route` | 产品特定路线 | 只纳入已声明产品实际发生的过程步骤，并记录跨越每个已纳入前景边界的全部材料、能源、废物和基本流交换。 | `ec-pef-2021` |
| `sb_outsourced_steps` | 外包加工 | 用供应商过程数据集表示外包成形、精加工、组件制造或灭菌，避免在前景内重复计入其内部交换。 | `ec-pef-2021` |
| `sb_waste_destination` | 废物输出 | 将低合金钢废料、废切削液、清洗废水和废碱液作为不同交换记录，并声明其处理或回收去向。 | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `precision_machining` | 精密机加工与抛光 | `required` | 适用于代表路线；仅当产品不采用机加工时，才以另一条已声明成形路线替代。 | 将外购合金钢坯料转化为经检验的机加工及抛光仪器零部件。 | 离开过程的机加工及抛光零部件质量。 |
| `forming_surface_treatment` | 配置的成形及水基表面处理 | `conditional` | 当已声明产品在厂内接受进一步成形、碱性清洗、电解或化学表面处理时纳入。 | 生产满足已声明表面规范的成形及表面处理后零件。 | 合格精加工零件的质量和处理表面积。 |
| `assembly_test_packaging` | 最终装配、验收测试及包装 | `required` | 已声明市场就绪产品必须纳入；各条件性组件行仅在实际存在时适用。 | 装配适用组件，测试规定功能并包装验收合格产品。 | 验收合格产品净质量，归一化至 1 kg。 |

### 过程：精密机加工与抛光（`precision_machining`）

#### 输入

##### 产品流

###### 合金钢条或杆材坯料（`input_alloy_steel_bar_stock`）

外购合金钢条或杆材作为代表零件的主要材料进入场址。记录实际合金牌号、尺寸、采购质量和库存变化。

- 选定流：除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外） `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位：Mass / kg
- 数量规则：发往产品批次的坯料质量，并按期初和期末库存修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 机加工与抛光用电力（`input_machining_electricity`）

计量切割、铣削、车削、磨削、抛光、泵和机加工边界内直接归属辅助设备的用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于产品批次的电表计量或分表分配电能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 机加工工艺用水（`input_machining_process_water`）

记录切削液配制和机加工单元内直接零件清洗所补加的工艺用水；闭路内循环在跨越过程边界前不得重复计为投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越机加工过程边界的计量补加水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 切削液补加（`input_cutting_fluid`）

记录加入机加工系统的外购切削液浓缩液或即用液，并与工艺用水分开。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：报告期补加的外购切削液质量，并按库存修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机加工及抛光仪器零部件（`output_machined_polished_parts`）

在可选的进一步成形或表面处理之前，对离开本过程的合格机加工及抛光零部件称重。

- 选定流：机加工及抛光仪器零部件 `3e316c61-0e12-46f9-a442-7abf779d3346`
- 流属性/单位：Mass / kg
- 数量规则：转移至下一过程的合格零件实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_machining_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 废物流

###### 分流的低合金钢机加工废料（`output_low_alloy_steel_scrap`）

对送往同一已声明回收或处理路线的切屑、切边和不合格低合金钢零件称重；不得将有色金属、聚合物或电子废件混入本行。

- 选定流：低合金钢废料 `afedcccd-b9f3-4941-8ba4-d3135b8abb67`
- 流属性/单位：Mass / kg
- 数量规则：离开机加工过程的分流废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 废机加工冷却液（`output_spent_coolant`）

记录从循环机加工系统排出并送往回收或处理的废切削液，同时声明其含水和金属污染状态。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：依据废物转移、槽罐液位下降和库存记录测得的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 基本流

### 过程：配置的成形及水基表面处理（`forming_surface_treatment`）

#### 输入

##### 产品流

###### 进入处理的机加工及抛光零部件（`input_machined_parts_for_treatment`）

仅在条件过程于厂内发生时纳入该转移。本流为内部中间品，在计入库存变化后必须与 `precision_machining` 的对应转移量相等。

- 选定流：机加工及抛光仪器零部件 `3e316c61-0e12-46f9-a442-7abf779d3346`
- 流属性/单位：Mass / kg
- 数量规则：转入条件过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_inputs`
- 来源：`ec-jrc-stm-bref-2006`

###### 成形及表面处理用电力（`input_surface_electricity`）

条件过程存在时，纳入可直接归属的成形设备、槽液循环、整流、泵、漂洗和干燥用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于处理产品的计量或分表分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_inputs`
- 来源：`ec-jrc-stm-bref-2006`

###### 槽液和漂洗用工艺用水（`input_surface_process_water`）

纳入跨越条件表面处理边界的新鲜补加水和漂洗水；不得将内部循环水重复计为新投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于处理产品的计量补加水和漂洗水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_inputs`
- 来源：`ec-jrc-stm-bref-2006`

###### 碱性处理用氢氧化钠（`input_sodium_hydroxide`）

仅在为碱性清洗、蚀刻或槽液调节实际加入时纳入氢氧化钠；声明浓度以及溶液/产品质量基准。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：采购和加入的有效产品质量，并按槽液库存变化修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_inputs`
- 来源：`ec-jrc-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成形及表面处理后的仪器零部件（`output_formed_finished_parts`）

完成已声明的成形、处理、漂洗和干燥顺序后，对合格零件称重。

- 选定流：成形及表面处理后的仪器零部件 `1931c303-d934-4e2c-8c43-5e2ad198699a`
- 流属性/单位：Mass / kg
- 数量规则：转移至最终装配的合格精加工零件实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_outputs`
- 来源：`ec-jrc-stm-bref-2006`

##### 废物流

###### 分流的水性清洗废水（`output_cleaning_wastewater`）

记录转移至处理的水性清洗和漂洗废水。声明其中金属、清洗剂和悬浮物组成及去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：离开条件过程边界的实测废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_outputs`
- 来源：`ec-jrc-stm-bref-2006`; `us-epa-fabricated-metal-products-1995`

###### 废碱液（`output_waste_alkaline_liquor`）

将清洗或处理产生的废碱性槽液与日常漂洗废水分开记录，并声明化学组成、浓度、污染情况和去向。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的槽罐排液或废物转移实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_outputs`
- 来源：`ec-jrc-stm-bref-2006`

##### 基本流

### 过程：最终装配、验收测试及包装（`assembly_test_packaging`）

#### 输入

##### 产品流

###### 进入装配的未表面处理机加工零部件（`input_machined_parts_for_assembly`）

仅当 `forming_surface_treatment` 不适用、机加工及抛光零部件直接进入装配时纳入该原子转移。

- 选定流：机加工及抛光仪器零部件 `3e316c61-0e12-46f9-a442-7abf779d3346`
- 流属性/单位：Mass / kg
- 数量规则：条件处理过程不存在时进入装配的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 进入装配的成形及表面处理后零部件（`input_finished_parts_for_assembly`）

仅在 `forming_surface_treatment` 适用时纳入该原子转移；计入库存变化后应与对应过程输出核对。

- 选定流：成形及表面处理后的仪器零部件 `1931c303-d934-4e2c-8c43-5e2ad198699a`
- 流属性/单位：Mass / kg
- 数量规则：从条件过程转入装配的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`ec-jrc-stm-bref-2006`

###### 仪器电子与传感分总成（`input_electronics_subassembly`）

仅对实际含有电子/传感分总成的已声明产品纳入该外购分总成；其供应商制造数据集保留在本装配过程之外。

- 选定流：仪器电子与传感分总成 `9ac88fe8-230b-4c72-8165-d3d9908264e8`
- 流属性/单位：Mass / kg
- 数量规则：纳入验收合格产品的外购分总成实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`ec-pef-2021`

###### 机械装配用钢螺钉（`input_steel_screws`）

记录实际装入验收合格产品的钢螺钉质量；声明钢牌号、涂层和尺寸。

- 选定流：钢螺钉 `35a4d7dc-1c42-4eb2-a48a-0f9a5abce9d6`
- 流属性/单位：Mass / kg
- 数量规则：领用螺钉采购质量减去退回未用库存和装配废件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`ec-pef-2021`

###### 聚乙烯防护袋（`input_polyethylene_bag`）

记录用于保护已声明产品的每个聚乙烯袋。树脂牌号、膜厚、再生料含量和尺寸为产品限定信息。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass / kg
- 数量规则：随验收合格产品包装的聚乙烯袋实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`ec-pef-2021`

###### 瓦楞纸运输箱（`input_corrugated_board_boxes`）

将瓦楞纸箱与聚乙烯袋及任何新增包装组件分别记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：随验收合格产品包装的瓦楞纸箱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`ec-pef-2021`

###### 装配与验收测试用电力（`input_assembly_electricity`）

计量可直接归属于装配工具、检验、功能测试和包装设备的用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于验收合格产品的计量或分表分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`ec-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的市场就绪参考产品（`output_reference_product`）

该输出为已验收、功能测试合格并完成交付包装的产品，以产品净质量表示；包装质量保留在单独投入行中。

- 选定流：48211、48212、48232和48233、48241至48249、48251至48253小类商品的零件和附件，显微切片机，光学、照相、电影、精密、医疗或外科机器、仪器、器械和用具的零件和附件（未另列明）。 `4e3c502e-82f3-4d0e-9cba-7e9b49eae4cb`
- 流属性/单位：Mass / kg
- 数量规则：验收合格产品净产出实测质量，并归一化至恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_output`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | 共享制造过程 | 在可行时通过分表计量或拆分产品特定生产批次、机加工单元、处理线、装配及包装来避免分配。 | `ec-pef-2021` |
| `al_physical_causality` | 其余共享投入与输出 | 无法拆分时，以实测机器时间、处理表面积、槽装载量或产品质量等有记录的因果物理驱动因素分配共享电力、水、化学品和废物；不得使用任意均分。 | `ec-pef-2021`; `ec-jrc-stm-bref-2006` |
| `al_scrap_reporting` | 低合金钢废料 | 将废料作为具有实际去向的单独废物输出记录。不得在前景过程内计入避免原生材料的抵扣；任何回收约定应在下游生命周期模型中一致应用。 | `ec-pef-2021` |
| `al_rework` | 返工或不合格零件 | 将额外加工及可归属公用工程分配给引发返工的产品批次；无法回收的分流合金钢不合格品计入 `output_low_alloy_steel_scrap`。 | `us-epa-fabricated-metal-products-1995` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_inputs` | `precision_machining` | 外购坯料、切削液、工艺用水及电力 | 采购、库存、批次领用及仪表记录 | lot_id; product_id; stock_grade; opening_inventory; receipts; issues; closing_inventory; water_meter; electricity_meter; cutting_fluid_addition | 将材料领用与库存核对；读取专用仪表或以有记录的分表向生产批次分配。 | kg; MJ | 每批，并按月核对 | 具有代表性的连续 12 个月，或已披露的较短生产活动期 | 机加工边界内场址全部作业 | 汇总可归属记录、扣除库存变化，并除以验收合格产品净质量 | 经校准秤和仪表记录；采购发票；批次流转单；库存核对 |
| `cp_machining_outputs` | `precision_machining` | 机加工零件、低合金钢废料及废切削液 | 转移、称量、槽罐及废物转移记录 | lot_id; conforming_part_mass; scrap_mass; scrap_grade; coolant_drawdown; coolant_shipment; destination | 称量合格转移量和分流废料；以槽罐液位和转移文件核对废切削液。 | kg | 每批和每次废物转移 | 与机加工投入相同期间 | 机加工单元和切削液系统 | 按批次汇总输出，并与投入和库存变化核对 | 经校准秤；转移记录；废物联单；槽罐液位日志 |
| `cp_surface_inputs` | `forming_surface_treatment` | 零件、氢氧化钠、工艺用水及电力 | 批次、槽液、加药及仪表记录 | lot_id; input_part_mass; process_sequence; treated_area; water_meter; electricity_meter; sodium_hydroxide_receipts; bath_opening; bath_closing | 仅在条件过程适用时采集；按处理活动期核对补加量和槽液库存。 | kg; m2; MJ | 每个处理批次，并按月核对槽液 | 与产品数据集相同期间 | 用于产品的全部厂内成形和水基处理线 | 汇总可归属批次投入，并除以验收合格产品净质量 | 批次流转单；槽液分析；经校准加药和公用工程仪表 |
| `cp_surface_outputs` | `forming_surface_treatment` | 精加工零件、清洗废水及废碱液 | 转移、废水仪表/槽罐及废物转移记录 | lot_id; finished_part_mass; wastewater_mass_or_volume; density; wastewater_composition; spent_bath_mass; destination | 称量精加工转移量；计量或称量分流的水性流；保留组成样品和去向记录。 | kg | 每批和每次排放/转移 | 与表面处理投入相同期间 | 处理线至转移处理或回收的边界 | 分别汇总各流；仅使用有记录的密度换算体积 | 经校准秤/仪表；实验室分析；槽罐日志；废物联单 |
| `cp_assembly_inputs` | `assembly_test_packaging` | 机械零件、电子件、螺钉、包装及电力 | 物料清单、领料、装配、仪表及包装记录 | lot_id; part_mass; electronics_mass; screw_mass; bag_mass; box_mass; electricity_meter; accepted_count; reject_count | 将领用组件和包装与验收合格件及退回库存核对；计量可归属电力。 | kg; MJ | 每个装配批次 | 与最终输出相同期间 | 最终装配、验收测试及包装区 | 汇总净领用量和可归属能源，并除以验收合格产品净质量 | 经批准物料清单；经校准秤/仪表；批次记录；验收记录 |
| `cp_final_output` | `assembly_test_packaging` | 验收合格参考产品 | 最终检验及发运记录 | lot_id; product_type; compatibility_or_function; accepted_count; accepted_net_mass; packaging_mass; reject_mass; specification_result | 对不含包装的验收合格产品称重，并链接至通过的验收规范和发运记录。 | kg | 每个成品批次 | 具有代表性的连续 12 个月，或已披露的生产活动期 | 已声明场址全部验收合格产量 | 汇总验收合格净质量，并将全部行归一化至 1 kg | 经校准成品秤；检验放行；不合格日志；发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化交换量 = 报告期可归属交换量 / 同期验收合格产品净质量 | 可归属交换量；验收合格产品净质量 | 每 1 kg 参考产品的交换量 | `ec-pef-2021` |
| `calc_machining_mass_balance` | `precision_machining` | 将合金钢坯料领用量与机加工零件转移量、低合金钢废料及实测在制品变化核对；调查并披露物料差额，不得强行配平。 | 坯料领用；零件质量；废料质量；在制品变化 | 有记录的机加工质量平衡差额 | `us-epa-fabricated-metal-products-1995` |
| `calc_surface_mass_balance` | `forming_surface_treatment` | 针对实际处理化学体系，核对投入零件质量、精加工零件质量、槽液补加、废水、废碱液及过程库存变化；对遗漏材料新增具体流行。 | 批次投入；批次输出；槽液库存变化 | 有记录的表面处理质量平衡差额 | `ec-jrc-stm-bref-2006` |
| `calc_transfer_reconciliation` | 内部零件转移 | 上游输出质量应等于下游投入质量，仅按实测库存变化和已声明损失调整；同一批次的两个备选装配投入行相互排斥。 | 转移记录；库存变化；路线标志 | 已核对内部转移 | `ec-pef-2021` |
| `calc_packaging_separation` | 包装和参考产品 | 分别报告聚乙烯袋和瓦楞纸箱质量；验收合格产品净质量不含包装。 | 包装后总质量；产品净质量；袋质量；箱质量 | 分离的净产品和包装交换 | `ec-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考流 | 识别准确产品类型、兼容主机或显微切片机功能、材料组成、净质量、性能规范、无菌状态和包装配置。 | 经批准产品规范、物料清单、图纸、验收及放行记录 |
| `dq_route_coverage` | 过程边界 | 根据实际路线确认每个过程图纳入条件，并记录外包步骤且避免重复计量。 | 过程流转单、供应商范围、路线图及数据集链接 |
| `dq_measurement` | 前景交换 | 使用经校准仪表/秤，或从有代表性的测量边界进行有记录分配；保留原始单位和换算记录。 | 校准证书、仪表导出、称量单和分配工作簿 |
| `dq_temporal` | 报告期间 | 优先采用覆盖正常波动的连续 12 个月；披露生产活动期或较短期间数据并说明代表性。 | 生产日历、批次清单、停机和维护记录 |
| `dq_completeness` | 清单 | 核对物料清单、采购和废物记录；为代表模式缺少但实际适用的交换新增具体产品流、废物流或基本流行。 | 质量平衡、发票核对、废物联单和例外日志 |
| `dq_uuid_identity` | TianGong 引用 | 保留已核实 UUID、流类型、属性和单位组；不得从空白 TianGong generalComment 推断产品特定限定信息。 | state-100 直接读取身份审计和前景产品规范 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_reference_complete` | 参考流 | 缺少任何必需限定信息、产品净质量、验收规范或精确参考产品 UUID 时校验失败。 | `un-cpc-3-0-structure-2025` |
| `vr_route_consistent` | 过程图 | 代表路线必须包含 `precision_machining` 和 `assembly_test_packaging`；声明 `forming_surface_treatment` 时必须包含全部条件性表面处理行，过程不存在时则不得包含这些行。 | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `vr_atomic_inventory` | 清单行 | 每行必须只有一个原子交换，并具有已核实 UUID、流类型、属性、单位、数量规则、采集协议和适用路线条件。 | `ec-pef-2021` |
| `vr_mass_reconciliation` | 材料及中间品转移 | 检查机加工、处理、装配和包装质量核对，并要求调查和披露物料差额。 | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `vr_allocation_documented` | 共享作业 | 要求提供拆分证据或因果物理分配驱动因素，禁止任意均分或未披露经济分配。 | `ec-pef-2021` |
| `vr_data_quality` | 完成的数据集 | 检查时间覆盖、校准、物料清单完整性、废物去向、供应商数据集链接和归一化一致性。 | `ec-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；仅当产品与已声明子类型、兼容性/功能、组成、路线和市场状态匹配时，方可作为 `background_dataset`。 |
| downstream_use | 用于已声明 CPC 48281 产品工厂门处前景过程和 lifecyclemodel 构建。 |
| allowed_use | 从摇篮到工厂门研究，以及使用产品特定且地域和技术具有代表性匹配的下游产品系统。 |
| excluded_use | 在不同光学、电子、聚合物、医疗、外科或显微切片机产品之间无条件采用类别平均替代；数据集未纳入的使用阶段、寿命、灭菌或生命末期声明。 |
| required_metadata | PCR id 和版本；产品类型；主机兼容性或显微切片机功能；物料清单；净质量；路线；表面处理；电子件；无菌状态；包装；地域；技术；数据期间；分配；上游数据集链接；排除项。 |
| required_quality_disclosure | 一手数据占比；时间和地域覆盖；仪表和秤校准；分配驱动因素；质量平衡差额；废物去向；供应商数据质量；数据缺口和偏离。 |
| update_trigger | 产品设计或材料组成、主机兼容性/功能、主要制造路线、处理化学体系、电子件、灭菌、包装、场址/地域、分配方法发生变化，或实测投入、输出或数据质量发生重大变化。 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-07） | 正式类别身份、上级范围和参考产品分类。 |
| `us-epa-fabricated-metal-products-1995` | `official_guidance` | 美国环境保护署，《Profile of the Fabricated Metal Products Industry》，EPA/310-R-95-007，1995-09，https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/fabmetsn.pdf（检索日期 2026-09-07） | 代表性金属成形、机加工、清洗与精加工顺序；切削液；废物和排放节点；前景过程分解。 |
| `ec-jrc-stm-bref-2006` | `official_guidance` | 欧盟委员会，《Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics》，2006-08，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索日期 2026-09-07） | 条件性水基/电解/化学处理边界、预处理、漂洗、干燥、公用工程、废水和废槽液分流。 |
| `ec-pef-2021` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，《关于使用环境足迹方法》，2021-12-15，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期 2026-09-07） | 生命周期边界完整性、企业特定数据质量、物理分配层级、一致性与完整性检查。 |
