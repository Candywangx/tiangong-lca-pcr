---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-steel-not-further-work-55e07ecd
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 除冷轧外未经进一步加工的宽度在600毫米及以上的合金钢（硅电工钢除外）平板轧材

## 1. 范围与适用性

本 PCR 适用于生产者工厂门口交付的合金钢卷材、带材或板材，但不包括硅电钢；产品宽度为 600 mm 及以上，最后的材料加工状态为冷轧或冷减薄。边界涵盖酸洗与表面准备、冷轧、钢种或订单要求的退火与平整轧制、按订单尺寸进行的精整以及发运准备。所接收热轧合金钢原料的上游生产负荷由供应商特定或具有代表性的关联上游数据集表示。

本 PCR 不包括硅电钢、单独分类的不锈钢、宽度小于 600 mm 的产品、未经冷减薄的热轧产品、涂镀产品，以及通过成形、制造、机加工或其他下游转化进一步加工的产品。退火、平整轧制、表面涂油和包装仅在为交付符合本类别的冷轧产品而实施时纳入，并须分别披露。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-steel-not-further-work-55e07ecd |
| classification_refs | CPC 3.0 `41223` |
| covered_products | 宽度为 600 mm 及以上，以卷材、带材或板材交付，且除所声明纳入的精整操作外未经进一步加工的冷轧或冷减薄合金钢平板轧材，但不包括硅电钢 |
| excluded_products | 硅电钢；单独分类的不锈钢；宽度小于 600 mm；仅经热轧的产品；涂层、镀层、制造、成形或机加工产品；下游使用产品 |
| representative_product | 生产者工厂门口交付的无涂层宽幅冷轧合金钢卷 |
| production_route | 热轧合金钢原料；酸洗和漂洗；冷轧；有条件的退火和平整轧制；精整和发运准备 |
| market_state | 工厂门口交付的干燥卷材、带材或板材，声明钢种、尺寸、表面状态、调质状态、边缘状态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产者工厂门口交付的符合要求的宽幅冷轧合金钢平板轧材声明数量 |
| How much | 净产品质量 1,000 kg |
| How well | 符合所声明的合金牌号、订购厚度和宽度、力学性能、表面状态、调质状态、边缘状态和检验状态 |
| How long or cycle | 一个生产批次或报告期汇总；该工厂门口声明单位不设定使用阶段寿命 |
| reference_flow_link | `reference_cold_rolled_alloy_steel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂门口交付的冷轧合金钢产品净质量 1,000 kg |
| 参考产品流 | 除冷轧外未经进一步加工的宽度在600毫米及以上的合金钢（硅电工钢除外）平板轧材 `d572d61f-b115-4a81-a187-8d7d111a0d65` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金牌号及标准；排除硅电钢；宽度和厚度；卷材、带材或板材形态；退火态或全硬态；调质和表面精整；边缘状态；涂层状态；生产场址和地理范围；报告期；净质量基准；包装状态；工厂门口边界 |

构建前景数据包时，每项必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和钢中间产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用不含托盘、包覆物、捆带、卷芯和其他发运包装的净干产品质量；商业记录采用毛重时，记录毛重到净重的核对。 |
| `electricity_energy_conversion` | 所有交流电行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留供应商或电表记录的 kWh，并严格按 1 kWh = 3.6 MJ 转换为 MJ；保留原始 kWh 记录，并识别电表、电压等级、供应商或电网组合以及分配方法。 |
| `natural_gas_volume_conditions` | 退火天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按明确声明的温度、压力和干湿基准条件报告气态天然气体积；保留用于统一体积的仪表修正或供应商说明。 |
| `process_mass_balance` | 各过程及整个前景链 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一时间基准上，将投入钢质量与合格中间品、参考产品、钢废料、氧化皮或过滤残渣、在制品留存量以及实测库存变化核对。 |

## 5. 系统边界

前景边界始于符合要求的热轧合金钢原料进入酸洗线或酸洗-轧制联合线，止于符合要求的冷轧产品完成精整并可发运。关联上游数据集提供热轧原料、外购化学品、电力、燃料、水、气体和包装的负荷。离开前景场址的废物须关联处理或回收数据集。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_include_cold_rolling_chain` | 前景生产 | 纳入酸洗和漂洗、冷轧、钢种或订单要求的退火和平整轧制、精整、厂内物料搬运、可直接归属的公用工程、排放控制、废水处理以及工厂门口前实施的包装。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_link_upstream_inputs` | 产品和公用工程投入 | 每项外购产品投入均须关联在地理和技术上具有代表性的上游数据集，并披露供应商特定替代；不得因前景从酸洗开始而截断热轧钢生产。 | `worldsteel-lci-methodology-2017` |
| `boundary_exclude_downstream_conversion` | 下游生命周期 | 排除工厂门口后的运输、制造、成形、涂镀、装配、使用、维护和寿命终结；单独声明的扩展研究可以纳入，但不得改变本参考流。 | `un-cpc-3-0-2025`; `worldsteel-lci-methodology-2017` |
| `boundary_conditional_operations` | 退火、平整轧制、表面涂油和包装 | 仅在为所报告产品实际实施时纳入各操作及其原子交换；否则记录该操作未发生，不得套用通用路线平均值。 | `ec-jrc-fmp-bref-2022` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 所接收的热轧合金钢平板卷材或带材，不包括硅电钢，并声明供应商、牌号、尺寸、表面状态、质量和上游数据集 |
| starting_condition_role | 带有关联上游生产负荷的前景转化投入 |
| product_classification_scope | CPC 3.0 `41223`，限于宽度 600 mm 及以上的冷轧合金钢平板轧材且不包括硅电钢 |
| recursive_input_rule | 若符合要求的冷轧产品重新作为投入，应按分别识别的再生、返工或外购产品流记录其既有数据集；不得递归套用本 PCR 来隐藏先前生产阶段。 |
| upstream_dataset_requirement | 优先采用供应商特定的热轧合金钢数据集；否则采用有文件依据、在区域和技术上具有代表性，并与原料牌号、再生含量核算和工厂门口边界一致的数据集。 |
| disclosure | 声明原料来源、合金牌号、已知时的 BOF/EAF 或供应商技术、场址、地理范围、报告期、酸洗酸路线、轧机类型、润滑系统、退火和平整路线、表面涂油、包装、废物处理以及任何被排除的厂内操作。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| pickling_and_surface_preparation | 酸洗与表面准备 | required |  | 前景表面准备 | 离开酸洗线的酸洗合金钢带 kg |
| cold_rolling | 冷轧 | required |  | 前景厚度减薄 | 冷轧后的冷减薄合金钢带 kg |
| annealing_temper_finishing_and_packing | 退火、平整轧制、精整与包装 | required | 退火、平整轧制、湿式平整剂、表面涂油和各包装组件仅在为所报告产品实际实施时适用。 | 前景最终调质和参考产品发运 | 净质量 1,000 kg 的符合要求参考产品 |

### 过程：酸洗与表面准备（`pickling_and_surface_preparation`）

#### 输入

##### 产品流

###### 热轧合金钢原料（`hot_rolled_alloy_steel_feed`）

所接收的宽幅热轧合金钢卷材或带材是在冷轧前去除氧化皮的物理原料。

- 选定流：热轧合金钢平板卷材或带材，不包括硅电钢
- 流属性/单位：Mass / kg
- 数量规则：进入酸洗线并验收的实测净原料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_material_mass`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用盐酸（`hydrochloric_acid_input`）

仅在场址采用盐酸酸洗路线时记录盐酸，并保留外购溶液浓度。

- 选定流：盐酸溶液
- 流属性/单位：Mass / kg 外购溶液和 kg HCl 当量
- 数量规则：实测补加量减去有文件记录并返回同一浴液系统的回收溶液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_acid_and_water`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用硫酸（`sulfuric_acid_input`）

仅在场址采用硫酸酸洗路线时记录硫酸，不得与盐酸行合并。

- 选定流：硫酸溶液
- 流属性/单位：Mass / kg 外购溶液和 kg H2SO4 当量
- 数量规则：实测补加量减去有文件记录并返回同一浴液系统的回收溶液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_acid_and_water`
- 来源：`ec-jrc-fmp-bref-2022`

###### 脱盐漂洗水（`demineralized_rinse_water`）

单独记录进入漂洗的脱盐水或等效水质用水，不计入闭路内部循环水。

- 选定流：除盐水 `9385842f-1815-4f19-a6b9-3dbb7ccbbffc`
- 流属性/单位：Mass / kg
- 数量规则：进入酸洗漂洗系统的实测补充水质量；仅计量体积时，采用有文件依据且对应所声明测量条件的水密度换算为 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_acid_and_water`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用交流电（`pickling_electricity`）

记录带钢处理、泵送、抽风、干燥和可直接归属于酸洗线设备的用电，边界为用电点。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：工序分表读数；否则采用有文件依据的共用电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_energy`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 酸洗合金钢带（`pickled_alloy_steel_strip`）

离开酸洗的除鳞、漂洗并干燥带钢作为表面准备过程的定量输出计量。

- 选定流：酸洗合金钢平板带材
- 流属性/单位：Mass / kg
- 数量规则：经库存变化修正的实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_material_mass`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

###### 酸洗工序合金钢切边料（`pickling_trim_scrap`）

为获得要求宽度而去除的清洁切边料作为独立钢废料输出记录，并记录厂内回收去向。

- 选定流：清洁合金钢切边废料
- 流属性/单位：Mass / kg
- 数量规则：离开酸洗过程的称量或质量平衡切边废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 废盐酸酸洗液（`spent_hydrochloric_pickle_liquor`）

废盐酸酸洗液离开浴液系统去再生、回收、处理或处置时予以记录。

- 选定流：废盐酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量减去返回同一工艺回路的酸洗液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 废硫酸酸洗液（`spent_sulfuric_pickle_liquor`）

硫酸路线将酸洗液转移出浴液系统时，单独记录废硫酸酸洗液。

- 选定流：废硫酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量减去返回同一工艺回路的酸洗液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸性漂洗废水（`acidic_rinse_wastewater`）

离开冷轧前景去厂内或外部处理的酸性漂洗水或洗涤器用水，应在处理替代前记录。

- 选定流：钢铁酸洗酸性漂洗废水
- 流属性/单位：Volume / m3
- 数量规则：酸洗及相关废气净化的实测排放或转移体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 排入空气的氯化氢（`hydrogen_chloride_to_air`）

采用盐酸路线且排放已测量或须报告时，记录酸洗抽风或净化装置出口的氯化氢。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测出口质量，或浓度乘以标准化干烟气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 酸洗合金钢带输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

### 过程：冷轧（`cold_rolling`）

#### 输入

##### 产品流

###### 酸洗带钢原料（`pickled_strip_feed`）

记录进入轧机机架的酸洗宽幅合金钢带，以衔接表面准备和轧制质量平衡。

- 选定流：酸洗合金钢平板带材
- 流属性/单位：Mass / kg
- 数量规则：经库存变化修正的冷轧机入口实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 冷轧后的冷减薄带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_material_mass`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧制油（`rolling_oil_input`）

按配方记录进入润滑或乳化液补充的外购轧制油，不计入留在回路内循环的油。

- 选定流：冷轧润滑油
- 流属性/单位：Mass / kg
- 数量规则：实测新润滑油补加量减去未开封退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷轧后的冷减薄带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_lubricant_and_water`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧制冷却补充水（`rolling_cooling_water`）

记录加入轧制乳化液、直接冷却或间接冷却回路的新水，不计入厂内循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨入冷轧冷却系统的实测补充水质量；仅计量体积时，采用有文件依据且对应所声明测量条件的水密度换算为 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷轧后的冷减薄带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_lubricant_and_water`
- 来源：`ec-jrc-fmp-bref-2022`

###### 冷轧用交流电（`cold_rolling_electricity`）

记录轧机传动、带钢处理、泵送、过滤、抽风以及可直接归属冷却的用电，边界为用电点。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：轧线分表读数；否则采用有文件依据的共用电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷轧后的冷减薄带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_energy`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷轧后的冷减薄带钢（`cold_reduced_strip_output`）

在任何下游退火、平整轧制或精整前，计量离开主要轧机机架的冷减薄带钢。

- 选定流：冷轧后的冷减薄合金钢平板带材
- 流属性/单位：Mass / kg
- 数量规则：经在制品库存变化修正的实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_material_mass`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

###### 废轧制油（`used_rolling_oil`）

从轧制系统移出并送外部回收、处理或处置的废润滑油单独记录，不计入厂内循环油。

- 选定流：废冷轧油
- 流属性/单位：Mass / kg
- 数量规则：离开轧制过程的实测废物发运或储罐转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷轧后的冷减薄带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_waste`
- 来源：`ec-jrc-fmp-bref-2022`

###### 含油轧制废水（`oily_rolling_wastewater`）

从冷轧转移到处理设施的含油水或破乳液，在处理前按一个具体废物流记录。

- 选定流：含油冷轧废水
- 流属性/单位：Volume / m3
- 数量规则：转移至厂内或外部废水处理的实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷轧后的冷减薄带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_waste`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧制乳化液过滤残渣（`rolling_filter_residue`）

含油过滤残渣或污泥离开轧制乳化液调理循环系统时予以记录。

- 选定流：含油轧制乳化液过滤残渣
- 流属性/单位：Mass / kg
- 数量规则：实测废物容器或发运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷轧后的冷减薄带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_waste`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

### 过程：退火、平整轧制、精整与包装（`annealing_temper_finishing_and_packing`）

#### 输入

##### 产品流

###### 冷减薄带钢原料（`cold_reduced_strip_feed`）

无论冷减薄带钢直接进入精整，还是先经退火和平整轧制，均记录其进入最终调质工序序列的质量。

- 选定流：冷轧后的冷减薄合金钢平板带材
- 流属性/单位：Mass / kg
- 数量规则：进入最终调质工序序列的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_and_packaging`
- 来源：`ec-jrc-fmp-bref-2022`

###### 退火用天然气（`annealing_natural_gas`）

仅为燃气退火或可直接归属的热调质记录气态天然气，并声明炉型和体积基准条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：适用退火炉消耗的修正后仪表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy_and_gases`
- 来源：`ec-jrc-fmp-bref-2022`

###### 退火和精整用交流电（`annealing_finishing_electricity`）

记录适用时的电加热退火、炉辅机、平整轧制、矫直、纵切、剪切、检验、涂油、包装和物料搬运用电，边界为用电点。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：工序序列分表读数；否则采用有文件依据的共用电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy_and_gases`
- 来源：`ec-jrc-fmp-bref-2022`

###### 保护用氮气（`protective_nitrogen`）

仅在退火采用保护气氛时记录所供应氮气，并声明纯度和交付状态。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：Volume / m3，按声明的基准条件
- 数量规则：退火工序实测交付或计量消耗的氮气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy_and_gases`
- 来源：`ec-jrc-fmp-bref-2022`

###### 保护用氢气（`protective_hydrogen`）

使用退火保护气氛时单独记录所供应氢气，不得与氮气合并。

- 选定流：工业氢气
- 流属性/单位：Volume / m3，按声明的基准条件
- 数量规则：退火工序实测交付或计量消耗的氢气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy_and_gases`
- 来源：`ec-jrc-fmp-bref-2022`

###### 湿式平整轧制剂（`temper_rolling_agent`）

仅在采用湿式平整轧制时记录配制的平整轧制剂；干式平整轧制在本行无数量。

- 选定流：湿式平整轧制剂
- 流属性/单位：Mass / kg
- 数量规则：发放至平整机的新鲜制剂实测量减去未开封退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_and_packaging`
- 来源：`ec-jrc-fmp-bref-2022`

###### 防锈油（`anticorrosion_oil`）

仅对涂油产品记录跨界并留在交付钢材表面的防锈油，同时声明配方和产品留存状态。

- 选定流：钢带用防锈油
- 流属性/单位：Mass / kg
- 数量规则：实测耗油量减去回到同一系统的回收过喷量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_and_packaging`
- 来源：`ec-jrc-fmp-bref-2022`

###### 发运用钢捆带（`steel_strapping`）

声明包装状态包含钢捆带时，单独记录用于固定发运卷材、带材或板材的钢带。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass / kg
- 数量规则：实测或通过采购与库存核对得到的捆带消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_and_packaging`
- 来源：`ec-jrc-fmp-bref-2022`

###### 防护包装纸（`packaging_paper`）

使用与产品一同交付的纸质包覆或衬纸时，单独记录。

- 选定流：防护包装纸
- 流属性/单位：Mass / kg
- 数量规则：实测或通过采购与库存核对得到的纸张消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_and_packaging`
- 来源：`ec-jrc-fmp-bref-2022`

###### 发运用木托盘或垫木（`wooden_pallet`）

使用随产品跨越工厂门口的木托盘或垫木时予以记录；生产者保留的可重复使用托盘不纳入。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：随参考产品发运的托盘或垫木实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_and_packaging`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考冷轧合金钢产品（`reference_cold_rolled_alloy_steel`）

该流是在全部所报告纳入操作完成后、运输越过生产者工厂门口前的 CPC 41223 净合格产品。

- 选定流：除冷轧外未经进一步加工的宽度在600毫米及以上的合金钢（硅电工钢除外）平板轧材 `d572d61f-b115-4a81-a187-8d7d111a0d65`
- 流属性/单位：Mass / kg
- 数量规则：净产品质量 1,000 kg 的固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：外部来源（`external_source`）
- 来源：`un-cpc-3-0-2025`; `worldsteel-lci-methodology-2017`

##### 废物流

###### 精整合金钢切边料（`finishing_trim_scrap`）

精整期间去除的清洁合金钢修边料、纵切料或缺陷段作为独立废料输出记录并注明去向。

- 选定流：清洁合金钢精整切边废料
- 流属性/单位：Mass / kg
- 数量规则：经库存变化修正的精整工序实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 废湿式平整轧制剂（`spent_temper_rolling_agent`）

采用湿式平整轧制时，记录离开工艺系统去处理或处置的废平整轧制液。

- 选定流：废湿式平整轧制剂
- 流属性/单位：Mass / kg
- 数量规则：离开平整轧制系统的实测转移或发运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 厂内燃料燃烧产生的化石源二氧化碳（`fossil_carbon_dioxide`）

燃气退火或其他所纳入厂内燃料燃烧的直接化石源二氧化碳在排放边界记录，不得由上游燃料数据集替代。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：可归属于所纳入操作的经核证烟道、燃料碳平衡或监管排放台账质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 排入空气的氮氧化物（`nitrogen_oxides_to_air`）

按场址所监测的具体物种和报告约定记录所纳入退火燃烧产生的氮氧化物，并须声明报告约定。

- 选定流：按所声明 NOx 约定报告的排入空气氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：实测出口浓度乘以标准化干烟气体积，或经核证的监管排放记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 排入空气的一氧化碳（`carbon_monoxide_to_air`）

退火燃烧的一氧化碳在炉窑排放点已测量或须报告时予以记录。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测出口浓度乘以标准化干烟气体积，或经核证的监管排放记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste_and_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 所有前景过程 | 按生产线、电表或仪表、生产批次和产品族优先细分；将直接测量的投入、输出、废物和排放归属于造成这些交换的产品。 | `worldsteel-lci-methodology-2017` |
| `allocation_shared_energy` | 共用电力、燃料、蒸汽、压缩空气和冷却 | 优先直接计量；否则采用设备运行时间与额定负荷、交付能量或热负荷等有文件依据的物理关系。仅在不存在更具因果性的参数时采用质量分配，并对重要共用负荷进行敏感性检验。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_scrap` | 厂内循环的钢切边料和废料 | 记录产生量和去向，但不得将厂内循环废钢同时计作外部废物信用和外部废钢投入；披露在此前景转化边界外采用的任何再循环模型。 | `worldsteel-lci-methodology-2017` |
| `allocation_co_product_expansion` | 输出的回收酸、氧化铁或其他回收材料 | 仅在被替代产品、功能等效性、市场用途和替代比例均有文件依据时优先系统扩展；否则分别报告该输出，并披露所选有理由的分割方法及敏感性。 | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pickling_material_mass | pickling_and_surface_preparation | 钢原料、酸洗输出和库存 | 地磅、钢卷跟踪和库存记录 | 卷号；牌号；宽度；厚度；投入 kg；输出 kg；期初和期末在制品 kg | 校准秤和钢卷生产系统 | kg | 每卷或每批 | 同一代表性报告期，通常连续 12 个月 | 每条纳入的酸洗线 | 核对投入、输出、废料和在制品，并按酸洗输出归一化 | 校准证书；钢卷谱系；签署的质量平衡 |
| cp_pickling_acid_and_water | pickling_and_surface_preparation | 酸和漂洗水投入 | 采购、储罐、浓度和仪表记录 | 化学品标识；浓度；接收 kg；储罐变化；回收返回量；用水 m3；仪表标识 | 储罐平衡和校准水表 | kg; m3 | 每次交付及每日或每批仪表读数 | 与产品质量相同报告期 | 每个纳入的浴槽和漂洗系统 | 外部净补加量除以酸洗输出 | 供应商证书；储罐校准；仪表校准；路线日志 |
| cp_pickling_energy | pickling_and_surface_preparation | 酸洗电力 | 间隔电表或共用电表分配记录 | 电表标识；kWh；开始和结束时间；产量 kg；电压；供应商或电网组合；分配因子 | 校准电表 | 保留 kWh；报告 MJ | 连续或每班 | 与产品质量相同报告期 | 纳入的酸洗设备和辅机 | 汇总 kWh，扣除有文件依据的非工艺负荷，按 3.6 转换并按输出归一化 | 电表校准；能源发票；分配工作表 |
| cp_pickling_waste_and_emissions | pickling_and_surface_preparation | 切边料、废酸液、废水和 HCl 排放 | 废物发运、储罐转移、废水表、烟道试验或 CEMS 记录 | 流标识；质量或体积；浓度；烟气体积；处理去向；路线；日期 | 校准秤或仪表，适用时采用认可监测 | kg; m3 | 每次转移及监测事件 | 包括异常运行的代表性运行期 | 酸洗线及相关净化设施 | 分别汇总每个原子流，并按酸洗输出归一化 | 转移联单；实验室报告；监测仪 QA；处理接收凭证 |
| cp_rolling_material_mass | cold_rolling | 酸洗原料和冷减薄输出 | 钢卷跟踪和库存记录 | 卷号；牌号；投入 kg；输出 kg；期初和期末在制品 kg | 校准秤和钢卷生产系统 | kg | 每卷或每批 | 与轧制公用工程和废物相同报告期 | 每台纳入的轧机 | 核对原料、输出和在制品，并按冷减薄输出归一化 | 校准证书；钢卷谱系；签署的平衡表 |
| cp_rolling_lubricant_and_water | cold_rolling | 新轧制油和冷却补充水 | 采购、储罐、领用、退回和仪表记录 | 配方；新油 kg；退回 kg；储罐变化；用水 m3；回路类型 | 储罐平衡和校准水表 | kg; m3 | 每日或每批 | 与轧制输出相同报告期 | 每个润滑和冷却回路 | 仅计入跨越边界的外部补充量，并按输出归一化 | 供应商记录；储罐校准；仪表校准；回路图 |
| cp_rolling_energy | cold_rolling | 冷轧电力 | 间隔电表或共用电表分配记录 | 电表标识；kWh；轧机标识；运行时间；输出 kg；分配因子 | 校准电表 | 保留 kWh；报告 MJ | 连续或每班 | 与轧制输出相同报告期 | 轧机传动及可直接归属的辅机 | 汇总 kWh，按 3.6 转换，并按输出归一化 | 电表校准；能源发票；分配工作表 |
| cp_rolling_waste | cold_rolling | 废油、含油废水和过滤残渣 | 废物储罐、处理和发运记录 | 流标识；kg 或 m3；固体或含油量；去向；日期 | 校准储罐、秤或流量计 | kg; m3 | 每次转移或发运 | 与轧制输出相同报告期 | 轧制和乳化液调理系统 | 分别汇总各废物并按输出归一化 | 联单；处理接收凭证；实验室分析 |
| cp_finishing_material_and_packaging | annealing_temper_finishing_and_packing | 钢原料、最终产品、有条件的制剂、油和包装 | 钢卷跟踪、材料领用、包装和库存记录 | 卷号；原料 kg；产品 kg；制剂 kg；油 kg；捆带 kg；纸 kg；托盘 kg；操作状态 | 校准秤和生产或仓储系统 | kg | 每卷或每次发运 | 与精整公用工程和排放相同报告期 | 纳入的退火、平整、精整和包装操作 | 汇总每个原子交换，核对库存，并按 1,000 kg 净产品归一化 | 校准；钢卷谱系；领用记录；包装清单 |
| cp_finishing_energy_and_gases | annealing_temper_finishing_and_packing | 天然气、电力、氮气和氢气 | 公用工程仪表和供应商记录 | 仪表标识；天然气 m3；体积条件；电力 kWh；氮气 m3；氢气 m3；炉窑和生产线状态 | 校准仪表和供应商说明 | m3; 保留 kWh；报告 MJ | 连续或每批 | 与最终产品相同报告期 | 纳入的炉窑、生产线和辅机 | 按因果关系分配，电力按 3.6 转换，并按 1,000 kg 产品归一化 | 仪表校准；发票；批次日志；分配工作表 |
| cp_finishing_waste_and_emissions | annealing_temper_finishing_and_packing | 切边料、废制剂、CO2、NOx 和 CO | 秤、废物发运、CEMS、烟道试验、燃料碳平衡或监管台账 | 流标识；kg；浓度；标准化烟气体积；氧基准；燃料碳数据；去向；日期 | 校准秤及经核证监测或台账方法 | kg | 每批、每次发运或监测事件 | 覆盖适用炉窑运行的代表性期间 | 精整操作及其排放点 | 汇总每个原子流，并按 1,000 kg 净产品归一化 | 联单；认可试验；CEMS QA；经核证排放声明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_pickling_exchange | 酸洗清单行 | 归一化数量 = 报告期交换量 / 报告期酸洗带钢输出量 | cp_pickling_material_mass; cp_pickling_acid_and_water; cp_pickling_energy; cp_pickling_waste_and_emissions | 每 kg 酸洗带钢输出的数量 | `ec-jrc-fmp-bref-2022` |
| normalize_rolling_exchange | 冷轧清单行 | 归一化数量 = 报告期交换量 / 报告期冷减薄带钢输出量 | cp_rolling_material_mass; cp_rolling_lubricant_and_water; cp_rolling_energy; cp_rolling_waste | 每 kg 冷减薄带钢输出的数量 | `ec-jrc-fmp-bref-2022` |
| normalize_reference_exchange | 最终调质清单行 | 归一化数量 = 报告期交换量 / 报告期净参考产品 kg * 1,000 | cp_finishing_material_and_packaging; cp_finishing_energy_and_gases; cp_finishing_waste_and_emissions | 每 1,000 kg 净参考产品的数量 | `worldsteel-lci-methodology-2017` |
| convert_electricity_kwh_to_mj | 所有电力行 | 报告 MJ = 实测 kWh * 3.6 | 原始 kWh；电表标识 | 以 MJ 表示的电力，并保留原始 kWh |  |
| reconcile_process_steel_mass | 各前景过程 | 钢投入 + 期初在制品 = 合格钢输出 + 钢废料 + 其他实测含钢输出 + 期末在制品；调查并披露残差 | 对应过程的材料质量协议 | 经核对的质量平衡及残差 | `worldsteel-lci-methodology-2017` |
| calculate_stack_mass | 采用浓度数据时的 HCl、NOx 和 CO 排放 | 排放质量 = 有效浓度 * 标准化干烟气体积，适用时修正到声明的氧和湿度基准 | 浓度；烟气体积；时间；氧；湿度；监测 QA | 排放物种 kg | `ec-jrc-fmp-bref-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_product_identity | 参考产品和中间品 | 保留钢卷谱系、合金牌号标准和化学成分牌号、非硅电钢状态、订购和实测宽度与厚度、冷减薄状态、表面和调质状态以及涂层状态。 | 钢卷工艺卡；检验证书；订单规范 |
| dq_temporal_representativeness | 所有前景行 | 采用一致的代表性报告期，通常为连续 12 个月；披露停产、异常运行、批次变化和任何较短期间。 | 带日期的生产、公用工程、废物和排放记录 |
| dq_geographic_technology | 上游数据集和公用工程 | 尽可能匹配生产地理范围、供应商路线、电力供应、轧机类型、酸洗酸路线、润滑回路和退火技术；披露替代。 | 供应商声明；数据集元数据；场址工艺说明 |
| dq_measurement | 仪表、秤、储罐和监测仪 | 使用处于有效校准期内的设备，并保留原始数值、单位、基准条件、检出限和修正因子。 | 校准证书；QA 日志；原始导出数据 |
| dq_completeness | 过程清单 | 核对三个过程部分并记录每个被排除或不适用的原子交换；无法解释的质量平衡残差和未分配共用公用工程必须纠正。 | 签署的质量平衡；完整性检查表；分配工作表 |
| dq_source_and_uuid_status | 证据和流身份 | 保留来源引用并标记每个未解决的 Tiangong 流 UUID；不得以代理流静默替代具体产品、化学品、废物或基本排放。 | 来源登记；UUID 审计；清单中的未解决项 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认净输出等于 1,000 kg，且所有必需限定信息证明合金牌号、非硅电钢属性、宽度至少 600 mm、冷轧状态、未经进一步加工和工厂门口状态。 | `un-cpc-3-0-2025`; `worldsteel-lci-methodology-2017` |
| `validate_process_alignment` | 过程图和清单 | 确认必需过程部分存在，有条件操作明确为存在或不存在，且每张清单卡是与所述过程、方向和流类型关联的单一原子交换。 | `ec-jrc-fmp-bref-2022` |
| `validate_mass_balance` | 各过程和整个前景链 | 对一致期间执行钢质量和总质量平衡检查；调查并披露残差，不得强制调整参考输出来闭合。 | `worldsteel-lci-methodology-2017` |
| `validate_energy_and_gas_units` | 电力和天然气 | 确认 kWh 到 MJ 转换、电表覆盖、共用电表分配和天然气体积基准条件；拒绝无单位的能量或天然气数值。 | `worldsteel-lci-methodology-2017` |
| `validate_waste_and_emission_boundaries` | 废物和基本排放 | 确认废物在关联处理或回收前记录，厂内直接排放未与上游燃料数据集重复，并声明监测基准和净化装置出口。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_no_double_counting` | 上游、废钢、回收和再循环模型 | 确认热轧原料负荷、内部废钢、输出废钢、回收化学品、废物处理和任何再循环信用各表示一次，并披露所选分配模型。 | `worldsteel-lci-methodology-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查和发布后可为 `secondary_dataset`; `background_dataset` |
| downstream_use | 用于构建前景过程和需要宽幅冷轧非硅电合金钢投入的从摇篮到工厂门口产品系统 |
| allowed_use | 用于所声明的合金牌号、宽度、厚度、表面和调质状态、生产路线、场址或代表地理范围、技术和报告期；仅按披露的产量加权规则汇总场址。 |
| excluded_use | 硅电钢、无明确限定的通用合金钢、宽度小于 600 mm、涂镀或进一步制造产品、没有适当应用特定功能单位和审查的公开比较声明，或超出所披露代表性的区域和技术 |
| required_metadata | 规范 PCR id；CPC 引用；参考流限定信息；生产者和地理范围；期间；合金牌号；尺寸；产品形态；表面、调质、边缘、涂层和包装状态；上游原料数据集；酸洗、轧制、退火和精整路线；分配和再循环方法；UUID 状态 |
| required_quality_disclosure | 一手数据比例；仪表和秤覆盖；质量平衡残差；时间、地理和技术代表性；共用公用工程分配；有条件操作；废物处理；排放监测；未解决 UUID 和外部范围证据需求 |
| update_trigger | 合金系列、宽度或厚度范围、酸洗化学品、轧机或润滑技术、退火燃料或气氛、精整和包装规范、场址或电力供应、上游原料数据集、分配或再循环方法发生变化，或报告期超出声明有效期 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《产品总分类》第 3.0 版结构，41223 行，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（访问日期：2026-09-03） | 官方分类身份、材料状态、宽度阈值以及 CPC 标题所表达的排除项 |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | 欧盟委员会联合研究中心，《黑色金属加工工业最佳可行技术参考文件》，EUR 31321 EN，JRC131649，2022，DOI 10.2760/196475。https://publications.jrc.ec.europa.eu/repository/handle/JRC131649（访问日期：2026-09-03） | 冷轧工序顺序；酸洗用酸和漂洗；轧制润滑和冷却；退火气氛和燃料；平整、精整、包装、废物、废水及监测排放候选项 |
| `worldsteel-lci-methodology-2017` | `handbook` | 世界钢铁协会，《钢铁产品生命周期清单方法报告》，2017，ISBN 978-2-930069-89-0。https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf（访问日期：2026-09-03） | 工厂门口声明单位、从摇篮到工厂门口边界关联、钢铁产品过程链、数据质量、质量平衡、共产品分配、废钢及防重复计量规则 |
