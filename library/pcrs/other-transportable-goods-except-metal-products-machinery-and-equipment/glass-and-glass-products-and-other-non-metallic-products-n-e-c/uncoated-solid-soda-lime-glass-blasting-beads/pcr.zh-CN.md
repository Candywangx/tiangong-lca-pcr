---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.uncoated-solid-soda-lime-glass-blasting-beads
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 未涂覆实心钠钙玻璃喷砂珠

## 1. 范围与适用性

从工业平板玻璃再生碎料制造未涂覆实心钠钙玻璃喷砂珠：接收分选、粉碎预筛、实际水分调理、燃气火焰球化、空气冷却收集、终筛粒度配级、质控及唯一首次质量放行。真实包装仓储搬运发运作为原批次服务独立核算。这仅为较窄的制造玻璃珠磨料，不是通用颗粒基本流或全部其他玻璃制品。

排除空心微球、涂覆珠、复合填料制剂、棱角玻璃粉、纤维原料球、光学装饰球、道路标线性能系统、平板器皿泡沫块及真空胆。购成品珠混配包装不能满足此路线。一体原料熔制、熔体雾化、湿式球化及其他燃料富氧路线须另具适用证据并完整新增原子交换。不规定固定配方温度收率节能炉寿命密度或喷砂性能。

主要原件支持通用单元的透明综合，不声称同一SKU工厂配方。SWARCO支持真实钠钙喷砂用途及碎料转化；FHWA支持共同珠流转及仅混配反例，不支持喷砂验收或现行健康法律阈值；专利支持燃气空气实心珠设备及替代方案。案例数值非默认，ILCD独立支持分配。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.uncoated-solid-soda-lime-glass-blasting-beads |
| classification_refs | CPC 3.0:37199; narrower |
| covered_products | 未涂覆实心钠钙玻璃喷砂珠 |
| excluded_products | 空心涂覆复合光学纤维产品; 玻璃粉; 购珠分装 |
| representative_product | 首次放行干燥分级球形喷砂珠 |
| production_route | 再生碎玻璃→粉碎预筛→火焰成球→空气冷却收集→筛分配级→首次放行 |
| market_state | 裸干实心未涂覆牌号，包装独立追踪 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供制造的实心未涂覆喷砂玻璃珠 |
| How much | 唯一首次质量放行的1 kg净干裸珠 |
| How well | 实际牌号粒度球形缺陷应力验收，不承诺通用性能 |
| How long or cycle | 一次唯一首次放行，后续服务保留原批次观测窗口 |
| reference_flow_link | finished_beads |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 玻璃珠 `56932669-9eec-47ff-a6b7-a542c0d99f78` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实心钠钙玻璃及再生平板玻璃来源; 未涂覆非复合状态; 实际粒度分布及试验; 球形率缺陷验收; 热历史及应力质控门; 炉体及真实燃料空气冷却路线; 唯一首次放行净干裸质量Q及批次; 干质量水分测法; 原料在制成品历史及全工况; 原生身份供方限制; 分子物种及游离反应相态水证据; 每种包装构造退回; 实物资产流体及服务负荷; 原批次服务观测窗口 |

全部限定信息须在元数据描述参考备注或等效字段声明。参考限制：仅限球形玻璃珠磨料及喷砂产品。原生同义名备注支持喷砂，但CAS、配方、牌号、直径、涂层、空心状态、路线、地域及供方未固定。须确认真实实心钠钙玻璃、未涂覆及粒度球形缺陷应力验收；排除空心陶瓷光学球、棱角粉、纤维原料球及复合填料。不推定密度或单颗质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 唯一首次放行干裸kg Q含期末成品。计数体积须独立整批质量或实测同配置质量密度，不猜单颗质量或套原生次级系数。 |
| electricity_unit | electricity; service_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 分配前kWh乘3.6转换，无载体质量。 |
| fuel_unit | fuel | Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` | MJ | 实测高位热值及积分气量，不用低位热值；载体质量为本次采购子账。 |
| mass_unit | cullet; process_water; lubricant; screen; refractory; furnace_asset; air_o2; air_n2; air_ar; air_h2o; air_co2; finished_beads; secondary_grade; reject_glass; captured_dust; sludge; wastewater; spent_screen; spent_refractory; spent_oil; co2_generated; co_air; no_air; no2_air; so2_air; methane_air; water_air; pm_air; n2_air; o2_air; ar_air; ambient_co2_air; fg_return; pe_purchase; pe_returned_in; pe_gross_out; pe_return_out; pe_waste; pp_purchase; pp_returned_in; pp_gross_out; pp_return_out; pp_waste; pallet_purchase; pallet_returned_in; pallet_gross_out; pallet_return_out; pallet_waste; fg_dispatch; service_glass_waste; pe_supplier_included; pp_supplier_included; pallet_supplier_included | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整配方及独立实物物种流保留实测kg状态水分。资产服务当量与实物库存分开；不得将质量/kg套在MJ或tkm。 |
| transport_unit | freight | Transport mass-distance | tkm | 真实载荷吨乘真实公里，非车辆质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收真实再生平板碎料及真实整份供给并关联上游负荷 |
| starting_condition_role | foreground_gate |
| product_classification_scope | 仅CPC3.0:37199声明实心未涂覆喷砂子集 |
| recursive_input_rule | 内部玻璃成对向量抵消，外部供给返回保留供方原批负荷 |
| upstream_dataset_requirement | 相符玻璃回收供给运输燃料公用工程物品资产处理状态及供方边界 |
| disclosure | 牌号路线供方; 全工况库存; 水物种; 包装资产; 观测服务 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | 包含完整碎料分选粉碎预筛实际调理进料火焰球化真实空气系统冷却收集终筛配级检测首次放行，保留公用工程除尘维护及真实后续原批包装仓储发运。购成品珠包装非本制造。 | `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| boundary_history | manufacture | 每未归一交换向量保留转换后原活动实际分配及继承历史：A_i = B_open_i + C_i - B_close_i。制造B_close仅含原料在制真实未分配存储，不含已首次放行期末成品。保留全部失败零产出启停待机清理返工及期初期末在制；内部返料成对抵消实物及全部向量，不新增供方负荷。 | `jrc-ilcd-attributional-2010` |
| boundary_species | all physical streams | 总质量相关元素与分子物种反应水独立核验。游离结构水进气湿气蒸发燃烧水须独立观测，一个残差不定两个未知。速率仅积分一次，总计气液体积不再乘时间；使用真实状态物质专属独立密度。不以NOx、VOC、COD、总碳、总金属或粒径指标拟物种。不叠加整空气及子项或整制剂及重复组分。 | `us4385917-bead-furnace`; `fhwa-bead-workflow-2014` |
| boundary_physical | all processes | 制造成品服务合并物理门按真实总流转闭合，独立于负荷分配。接收退回发运废物包装资产不乘经济份额。资产在装流体保留期初新增维修拆出期末磨耗台账，真实当期服务负荷分开，不固定寿命猜重量或每kg整机。 | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| boundary_extend | all inventory rows | 卡片为有限初始路线清单；核对每实际供给出口，真实不同化学品燃料滤材气物种包装维修资产冷凝液换热返回均新增具体原子交换及自身原生广延属性。缺席须证据，未知非零或不适用。实际外购蒸汽热须热状态焓载体质量供方水能协议及外部产品返回，不假定不存在锅炉。空心涂覆复合核心路线改变须重审适用性。 | `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 碎玻璃至首次放行 | required | 声明实心珠火焰路线 | foreground | 1 kg reference flow |
| services | 原批次服务 | conditional | 真实观测并保留原Q | supporting | 原首次Q，不新增产量 |

### 过程：完整玻璃珠制造 (`manufacture`)

#### 输入

##### 产品流

###### 洁净再生钠钙平板玻璃碎料 (`cullet`)

接收真实平板碎玻璃，分选涂层陶瓷金属不相容玻璃，粉碎预筛。整份收到碎料计一次，干玻璃游离水杂质为子账。按声明模型纳入回收分选及上游玻璃再生负荷，不虚构原生砂碱石灰采购。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_raw经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：洁净再生钠钙平板玻璃碎料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_raw采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw`
- 来源：`swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### 制造用电 (`electricity`)

计量粉碎筛分进料风机压缩空气抽排质控电动搬运及真实干燥冷却，含全部非生产工况。 中国用户侧电网平均交流电产品，1–35千伏消费组合到用户，净热值/MJ。匹配真实电压地域供方边界，否则更换身份。分配前以3.6将kWh转MJ；无载体质量，不重复供方输配损失。 数量关联：采用未除原始cp_energy经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行一次计算x_i，采用cp_energy采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### 球化炉天然气 (`fuel`)

含真实点火升温待机停炉，保留独立载体质量实物子账，不再加一次燃料采购。 全球厂内生产组合天然气产品、工业炉燃烧路线，参考为总热值/MJ而非低位热值。未固定CAS组成密度供方。测积分体积、压力、温度、压缩因子、组成、独立密度及高位热值。载体质量及碳氢硫为一次采购子账，消除选用供方的下游燃烧重叠。 数量关联：采用未除原始cp_energy经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：天然气 `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：使用本行一次计算x_i，采用cp_energy采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`us4385917-bead-furnace`

###### 外部处理工艺水 (`process_water`)

仅真实抑尘清洗冷却补水清理。干式空气冷却不意味着水淬或蒸汽锅炉。 经处理工业工艺用水产品、质量/kg。再生循环水同义名不使内部循环成为新采购。水质供方温度地域未指定，须核实处理、外部供水边界及独立密度；非蒸汽或基本取水。 数量关联：采用未除原始cp_water经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_water采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### 矿物基齿轮润滑油 (`lubricant`)

条件纳入实际整份采购制剂；保留在装流体期初期末补充泄漏回收报废，真实不同制剂逐项另增。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_assets经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：矿物基齿轮润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_assets采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### 不锈钢筛网 (`screen`)

条件纳入实际替换，记录合金形态新件维修在装备件拆出磨耗，不作每kg整台筛机。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_assets经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：不锈钢筛网
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_assets采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### 成型氧化铝炉用耐材 (`refractory`)

仅实际安装时纳入整份成型炉衬及结合剂水分新维修废旧库存；氧化铝粉非炉衬，无衬钢炉不虚构耐材。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_assets经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：成型氧化铝炉用耐材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_assets采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`us4385917-bead-furnace`

###### 玻璃珠球化炉 (`furnace_asset`)

按cp_assets有依据真实服务份额计资产制造服务当量kg，不是每kg珠的实物采购。实物资产库存及当期服务负荷分开；不虚构寿命重量每kg整机或重复供方内含替换件。其他真实资产逐项新增。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_assets经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：玻璃珠球化炉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_assets采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`us4385917-bead-furnace`; `jrc-ilcd-attributional-2010`

###### 再生碎玻璃道路货运服务 (`freight`)

真实货吨乘公里及有据空返分摊，真实铁路等另增；质量参考车辆身份不作tkm。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_logistics经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：再生碎玻璃道路货运服务
- 流属性/单位：Transport mass-distance / tkm
- 数量规则：使用本行一次计算x_i，采用cp_logistics采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_logistics`
- 来源：`fhwa-bead-workflow-2014`; `swarco-cullet-industrial-beads`

##### 废物流

##### 基本流

###### 环境空气氧进入 (`air_o2`)

测真实一次二次进料冷却总O2，分开内部循环。 分子O2、CAS7782-44-7，空气可再生元素资源基本流、质量/kg。液体离子同位素同义名不授权外购氧气，仅真实环境总O2进入；出口另用排放身份，不叠加整份空气及子项。 数量关联：采用未除原始cp_air经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_air采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`us4385917-bead-furnace`

###### 环境空气二氮进入 (`air_n2`)

原生分子二氮CAS7727-37-9，空气可再生元素资源基本流，Mass/kg。独立实测环境N2毛进入量；不含N2的总氮及NOx/氨均非本物种。液态/同位素别名不重新定义规范普通N2身份。不设干空气比例或由衡算残差推出。 数量关联：采用未除原始cp_air经calc_conversion、calc_history及真实归属后的本行唯一calc_reference x_i，卡片和聚合不再相除。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_air采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`us4385917-bead-furnace`

###### 环境空气氩进入 (`air_ar`)

原生普通氩CAS7440-37-1，空气可再生元素资源基本流，Mass/kg。实测天然大气Ar毛进入量；同位素别名不授权放射性41Ar或Ar-40富集气体。不代表外购钢瓶气，不固定空气组成或残差推算。 数量关联：采用未除原始cp_air经calc_conversion、calc_history及真实归属后的本行唯一calc_reference x_i，卡片和聚合不再相除。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_air采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`us4385917-bead-furnace`

###### 环境空气水蒸气进入 (`air_h2o`)

测绝对湿度及积分空气，排放UUID不代表资源输入。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_air经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：环境空气水蒸气进入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_air采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`us4385917-bead-furnace`

###### 环境空气二氧化碳进入 (`air_co2`)

真实环境CO2实物输入，非化石生成或自动抵扣。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_air经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：环境空气二氧化碳进入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_air采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`us4385917-bead-furnace`

#### 输出

##### 产品流

###### 首次放行喷砂珠 (`finished_beads`)

Q为成球冷却筛分配级后首次通过真实粒度球形缺陷应力验收的净干裸珠kg。排除包装游离水废品放行前消耗样及在制品。Q已包含该批期末成品，不再加其产量也不扣其制造负荷。 仅限球形玻璃珠磨料及喷砂产品。原生同义名备注支持喷砂，但CAS、配方、牌号、直径、涂层、空心状态、路线、地域及供方未固定。须确认真实实心钠钙玻璃、未涂覆及粒度球形缺陷应力验收；排除空心陶瓷光学球、棱角粉、纤维原料球及复合填料。不推定密度或单颗质量。 数量关联：采用未除原始cp_release经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：玻璃珠 `56932669-9eec-47ff-a6b7-a542c0d99f78`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`

###### 次级粒度牌号未涂覆实心钠钙玻璃珠 (`secondary_grade`)

仅真实独立放行可售牌号，在参考Q之外保留自身质控质量共同出口状态价值；内返及未售废品不自动作共产品。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_balance经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：次级粒度牌号未涂覆实心钠钙玻璃珠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_balance采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_balance`
- 来源：`swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

##### 废物流

###### 废弃钠钙玻璃 (`reject_glass`)

按去向记录真实对外废品，区分内返可售牌号，不自动抵扣。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_balance经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：废弃钠钙玻璃
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_balance采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_balance`
- 来源：`fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### 捕集钠钙玻璃粉尘 (`captured_dust`)

真实捕集干尘及分析水分，非排出PM或结晶硅。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：捕集钠钙玻璃粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_emissions采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### 湿式玻璃研磨污泥 (`sludge`)

条件实际湿收集，整份湿泥一次，固体游离水子账不重复作废物。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_water经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：湿式玻璃研磨污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_water采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### 玻璃工艺清洗废水 (`wastewater`)

真实外送处理废物，记录积分体积密度分析；直排须另列真实基本物种水。COD总金属非分子物种。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_water经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：玻璃工艺清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_water采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### 废旧不锈钢筛网 (`spent_screen`)

真实拆出合金附着玻璃水分去向，内修为转移。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_assets经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：废旧不锈钢筛网
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_assets采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### 废旧成型氧化铝炉用耐材 (`spent_refractory`)

条件实际拆出及附着玻璃水分结合剂转化，独立新供给。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_assets经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：废旧成型氧化铝炉用耐材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_assets采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

###### 废矿物基齿轮润滑油 (`spent_oil`)

真实拆出整份废油，水污染子账，核对库存泄漏处理。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_assets经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：废矿物基齿轮润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_assets采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`fhwa-bead-workflow-2014`; `us4385917-bead-furnace`

##### 基本流

###### 新生成化石二氧化碳 (`co2_generated`)

独立确定化石氧化，区分进气CO2及玻璃杂质其他碳。 分子CO2、CAS124-38-9，化石源排至未特指空气基本流。不采用同位素离子干冰同义噪声，仅以独立证据记录新生成化石CO2，环境穿流及其他碳源分开。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_emissions采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### 一氧化碳排放 (`co_air`)

真实不完全燃烧物种，含启动异常。 分子化石CO、CAS630-08-0，排至未特指空气基本流。烟气低温同义名不授权整份废气或液体采购；须实际CO物种，不用总碳VOC。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_emissions采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### 一氧化氮排放 (`no_air`)

真实NO，不猜NOx拆分。 分子NO、CAS10102-43-9，排至未特指空气基本流。不采用HNO硝酰同义噪声，须真实NO，不用以NO2计总NOx。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_emissions采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### 二氧化氮排放 (`no2_air`)

真实NO2相态物种，不用总NOx当量。 分子NO2、CAS10102-44-0，排至未特指空气基本流。N2O4同义名不授权四氧化二氮质量，独立确认相态平衡物种，不猜NOx分摊。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_emissions采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### 二氧化硫排放 (`so2_air`)

真实燃料杂质硫及SO2证据，非总SOx。 分子SO2、CAS7446-09-5，排至未特指空气基本流。原生硫氧化物字样不授权总SOx硫酸盐颗粒，须实际SO2及硫证据，不抄系数。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_emissions采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### 化石甲烷排放 (`methane_air`)

真实本地未燃泄漏化石甲烷，不重复上游泄漏。 分子化石CH4、CAS74-82-8，排至未特指空气基本流。大量同义噪声混入石墨炭黑甲醛无关化合物，均不采用；仅一致基本名CAS介质限定CH4。须真实化石甲烷物种，不用燃气采购VOC总烃。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_emissions采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### 水蒸气出口 (`water_air`)

测实际湿排气及独立湿气游离蒸发燃烧水，不套未测燃料生成水系数。 H2O、CAS7732-18-5水蒸气排至未特指空气基本流，不采用重水氚水冰基团同义名。一个真实出口含独立确定的进气湿气游离水蒸发燃烧水子账。液滴排污冷凝液另列，不重复采购水。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_emissions采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### 玻璃工艺排气颗粒物 (`pm_air`)

分时分位测治理后干PM，不重复捕集尘或叠加PM10及PM2.5嵌套总量。 排至未特指空气的颗粒基本流、质量/kg、粒径未特指。原生熟料案例明确为非约束示例，不转移熟料系数化学粒度烟囱高度表征假设。仅真正未知粒径使用，已知互斥分级须精确身份且不叠加重叠总量。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_emissions采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us4385917-bead-furnace`; `fhwa-bead-workflow-2014`

###### 排至空气的二氮 (`n2_air`)

原生分子二氮CAS7727-37-9，向未细分即时室外空气排放的基本流，Mass/kg。按湿/干状态独立实测N2毛排出量并保留元素/反应证据；不固定空气比例或假定进入等于排出。液态/同位素别名不授权其他状态；资源、不含N2总氮及NOx不是本出口。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实归属后的本行唯一calc_reference x_i，卡片和聚合不再相除。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_air采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`us4385917-bead-furnace`

###### 排至空气的分子氧 (`o2_air`)

原生分子氧CAS7782-44-7，向未细分即时室外空气排放的基本流，Mass/kg。独立实测剩余O2毛量及烟气湿/干状态，不以理论需氧或固定干空气比例推出。离子/激发态/液态/同位素噪声别名不重新定义规范普通O2；资源、土壤或长期记录不代表该出口。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实归属后的本行唯一calc_reference x_i，卡片和聚合不再相除。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_air采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`us4385917-bead-furnace`

###### 排至空气的氩 (`ar_air`)

原生普通氩CAS7440-37-1，向未细分即时室外空气排放的基本流，Mass/kg。在同一气体控制体独立实测天然Ar毛排出量。受污染的同位素别名不授权放射性/Ar-40专用替代、固定空气比例或未测衡算残差。 数量关联：采用未除原始cp_emissions经calc_conversion、calc_history及真实归属后的本行唯一calc_reference x_i，卡片和聚合不再相除。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_air采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`us4385917-bead-furnace`

###### 排至空气的环境源二氧化碳 (`ambient_co2_air`)

核对真实环境进出，不作化石生成或自动负抵扣。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_air经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：排至空气的环境源二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_air采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`us4385917-bead-furnace`

### 过程：原批次服务 (`services`)

#### 输入

##### 产品流

###### 原批次退回珠 (`fg_return`)

真实干珠及独立新增水污包装关联原放行发运，复验不新增Q或再采购。 仅限球形玻璃珠磨料及喷砂产品。原生同义名备注支持喷砂，但CAS、配方、牌号、直径、涂层、空心状态、路线、地域及供方未固定。须确认真实实心钠钙玻璃、未涂覆及粒度球形缺陷应力验收；排除空心陶瓷光学球、棱角粉、纤维原料球及复合填料。不推定密度或单颗质量。 数量关联：采用未除原始cp_service经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：玻璃珠 `56932669-9eec-47ff-a6b7-a542c0d99f78`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_service采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 放行后流转用电 (`service_electricity`)

真实包装仓储电动叉车装载复验返工增量，原批Q及观测窗口，不复制制造或虚构未来零服务。 中国用户侧电网平均交流电产品，1–35千伏消费组合到用户，净热值/MJ。匹配真实电压地域供方边界，否则更换身份。分配前以3.6将kWh转MJ；无载体质量，不重复供方输配损失。 数量关联：采用未除原始cp_service经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行一次计算x_i，采用cp_service采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 聚乙烯内袋 (`pe_purchase`)

真实新供整件实测皮重构造，另购内衬封口维修件逐项新增，不计珠Q。 一件完整聚乙烯袋产品，CAS9002-88-4，厂内生产组合、质量/kg；容量牌号供方未固定。仅限真实PE袋内衬，另购PP外袋独立记录。整件供货仅采购一次，不猜皮重，不等同PP。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 聚乙烯内袋 (`pe_supplier_included`)

仅真实随供应投入实物进入、且包装负荷已含于该供货的整份物件。完整毛进入仅记录一次，与新增采购和收到外退分开；已含负荷不重复采购。该运动仅作实物账，不纳入裸珠Q。 完整聚乙烯袋产品，CAS9002-88-4，厂内生产混合，Mass/kg，容量、品级及供方未固定；仅真实PE袋/内衬，独立外购PP外袋另列，整份供货物件仅采购一次，不猜皮重或以PP替代。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实归属后的本行唯一calc_reference x_i，卡片和聚合不再相除。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 聚乙烯内袋 (`pe_returned_in`)

真实外部退回整件及状态原负荷，不作新采购，内复用抵消。 一件完整聚乙烯袋产品，CAS9002-88-4，厂内生产组合、质量/kg；容量牌号供方未固定。仅限真实PE袋内衬，另购PP外袋独立记录。整件供货仅采购一次，不猜皮重，不等同PP。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 聚丙烯编织散装袋 (`pp_purchase`)

真实新供整件实测皮重构造，另购内衬封口维修件逐项新增，不计珠Q。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：聚丙烯编织散装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 聚丙烯编织散装袋 (`pp_supplier_included`)

仅真实随供应投入实物进入、且包装负荷已含于该供货的整份物件。完整毛进入仅记录一次，与新增采购和收到外退分开；已含负荷不重复采购。该运动仅作实物账，不纳入裸珠Q。具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：聚丙烯编织散装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 聚丙烯编织散装袋 (`pp_returned_in`)

真实外部退回整件及状态原负荷，不作新采购，内复用抵消。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：聚丙烯编织散装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 整件木托盘 (`pallet_purchase`)

真实新供整件实测皮重构造，另购内衬封口维修件逐项新增，不计珠Q。 木质托盘产品、质量/kg，木材厂生产组合、木板木条路线。尺寸处理水分承载未固定。活跃电能分类矛盾，但名称木材路线属性及保留木包装来源分类一致指向木托盘；披露孤立分类瑕疵。匹配真实整件托盘供方，复用非采购。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 整件木托盘 (`pallet_supplier_included`)

仅真实随供应投入实物进入、且包装负荷已含于该供货的整份物件。完整毛进入仅记录一次，与新增采购和收到外退分开；已含负荷不重复采购。该运动仅作实物账，不纳入裸珠Q。 木质托盘产品，Mass/kg，木材厂生产混合、木板/木条路线；尺寸、处理、含水量及承载未固定。现行电力分类与规范木名/路线不符，是孤立分类缺陷；保留木包装原始分类，核实实际整托盘及供方，复用不等于采购。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实归属后的本行唯一calc_reference x_i，卡片和聚合不再相除。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`





###### 整件木托盘 (`pallet_returned_in`)

真实外部退回整件及状态原负荷，不作新采购，内复用抵消。 木质托盘产品、质量/kg，木材厂生产组合、木板木条路线。尺寸处理水分承载未固定。活跃电能分类矛盾，但名称木材路线属性及保留木包装来源分类一致指向木托盘；披露孤立分类瑕疵。匹配真实整件托盘供方，复用非采购。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 聚乙烯内袋 (`pe_gross_out`)

随总实物发运的真实整件含重复流转，不按经济净Q缩放，不作新珠产量或自动共产品。 一件完整聚乙烯袋产品，CAS9002-88-4，厂内生产组合、质量/kg；容量牌号供方未固定。仅限真实PE袋内衬，另购PP外袋独立记录。整件供货仅采购一次，不猜皮重，不等同PP。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 聚乙烯内袋 (`pe_return_out`)

真实独立返所有者供方及状态去向，与客户发运内复用分开。 一件完整聚乙烯袋产品，CAS9002-88-4，厂内生产组合、质量/kg；容量牌号供方未固定。仅限真实PE袋内衬，另购PP外袋独立记录。整件供货仅采购一次，不猜皮重，不等同PP。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 聚丙烯编织散装袋 (`pp_gross_out`)

随总实物发运的真实整件含重复流转，不按经济净Q缩放，不作新珠产量或自动共产品。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：聚丙烯编织散装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 聚丙烯编织散装袋 (`pp_return_out`)

真实独立返所有者供方及状态去向，与客户发运内复用分开。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：聚丙烯编织散装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 整件木托盘 (`pallet_gross_out`)

随总实物发运的真实整件含重复流转，不按经济净Q缩放，不作新珠产量或自动共产品。 木质托盘产品、质量/kg，木材厂生产组合、木板木条路线。尺寸处理水分承载未固定。活跃电能分类矛盾，但名称木材路线属性及保留木包装来源分类一致指向木托盘；披露孤立分类瑕疵。匹配真实整件托盘供方，复用非采购。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 整件木托盘 (`pallet_return_out`)

真实独立返所有者供方及状态去向，与客户发运内复用分开。 木质托盘产品、质量/kg，木材厂生产组合、木板木条路线。尺寸处理水分承载未固定。活跃电能分类矛盾，但名称木材路线属性及保留木包装来源分类一致指向木托盘；披露孤立分类瑕疵。匹配真实整件托盘供方，复用非采购。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 原批次玻璃珠总发运 (`fg_dispatch`)

此前已首次放行干珠至真实工厂发运门，重发不新增Q；新增水污及包装总质量分开。 仅限球形玻璃珠磨料及喷砂产品。原生同义名备注支持喷砂，但CAS、配方、牌号、直径、涂层、空心状态、路线、地域及供方未固定。须确认真实实心钠钙玻璃、未涂覆及粒度球形缺陷应力验收；排除空心陶瓷光学球、棱角粉、纤维原料球及复合填料。不推定密度或单颗质量。 数量关联：采用未除原始cp_service经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：玻璃珠 `56932669-9eec-47ff-a6b7-a542c0d99f78`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_service采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

##### 废物流

###### 废聚乙烯袋 (`pe_waste`)

真实报废整件及附着玻璃水污染子账和处理，不自动回收抵扣。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：废聚乙烯袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 废聚丙烯编织袋 (`pp_waste`)

真实报废整件及附着玻璃水污染子账和处理，不自动回收抵扣。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：废聚丙烯编织袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 废木托盘 (`pallet_waste`)

真实报废整件及附着玻璃水污染子账和处理，不自动回收抵扣。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_packaging经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：废木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_packaging采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

###### 废弃钠钙喷砂玻璃珠 (`service_glass_waste`)

原批历史及真实后续损失返工，不扣历史首次Q，不虚构补产。 具体原子身份未绑定，绑定前须匹配真实原生族形态路线地域介质类型属性单位供方。 数量关联：采用未除原始cp_service经calc_conversion、calc_history及真实分配后的本行唯一calc_reference x_i，卡片聚合不再相除。

- 选定流：废弃钠钙喷砂玻璃珠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行一次计算x_i，采用cp_service采集未除原始量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`fhwa-bead-workflow-2014`; `jrc-ilcd-attributional-2010`

##### 基本流

## 7. 分配与共产品处理

归因型首次放行制造及独立真实后续批次服务。仅研究情境确需分配时应用此层级，实物平衡仍保留总量。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared operations | 先真实或有据虚拟细分专属牌号作业交换。计量真实筛分混配包装，玻璃及继承向量归真实接收方；说明剩余共同炉交换不可分原因，内返非共产品。 | `jrc-ilcd-attributional-2010` |
| allocation_causality | remaining joint exchanges | 独立证明逐交换决定性物理因果；现有质量件数能量比例不自动成为因果准则。不同交换可需不同关系，记录边界证据不确定性敏感性后执行一次。 | `jrc-ilcd-attributional-2010` |
| allocation_residual | genuine inseparable remainder | 仅无决定性物理因果的真实不可分剩余采用同期真实状态共同出口市场价值。采可比真实数量价格牌号水分币种时空交付基准，去后续加工包装增值。不得任意物理经济选择固定比例猜废价或自动回收替代抵扣；各共功能负荷和恢复原共同量。 | `jrc-ilcd-attributional-2010` |
| allocation_returns | returns and services | 返回复验重发不新增Q；原制造负荷保留一次，仅原批窗口真实后增量。首次方法不默变净交付归一化，后者须另审总G与R及原交付逆转桥接和真实新增水损失返工。 真实返工须制造方许可及具体品级实际验收；材料/水增减及新废物流逐一实测，数据完成前补其原子交换。重熔或品级/路线变化须重审适用性和继承历史，不假定许可、纯度恢复或复验新增Q。 | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_raw | manufacture | cullet | weighing | 批号; 来源玻璃; 供方; 毛净kg; 水分; 杂质; 分选损失; 粉碎筛分; 调理; 全工况 | 经校准整批称量及代表性水分组成杂质检测，保留收到基原单位及真实损失。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | kg | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_release | manufacture | finished_beads | quality_release | 批次; 牌号; 实心未涂覆; 粒度分布; 球形率; 缺陷应力测法; 首次时间; 裸干kg; 水分; 消耗试样; 库存状态 | 称验收裸批，用不改变玻璃的代表性水分法求干质量；唯一首次验收关联真实牌号试验，复验发运标已放行。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | kg | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_energy | manufacture | electricity; fuel | meter | 表号; 起止; kWh; 积分气量; 压力; 温度; 压缩因子; 组成; 独立密度; 高位热值; 载体质量; 碳氢硫; 工况; 供方范围 | 校准表计及燃料分析，分离生产非生产；转换前保留原单位高位热值，独立载体质量元素子账不重复采购。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | kWh; m3; kg; MJ | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_water | manufacture | process_water; sludge; wastewater | water_record | 位置; 积分体积; 温度; 独立密度; 水分; 固体; 溶解物种; 循环; 排污; 冷凝液; 相态; 处理; 反应水观测 | 独立测外部液体进出口及相态，以独立观测燃料证据分进气湿气游离结构水蒸发燃烧水，一个残差不定两个未知。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | m3; kg | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_air | manufacture | each gross air species | gas_record | 气路; 时段; 积分体积或真速率; 干湿基; 温度; 压力; 独立密度组成; O2; N2; Ar; CO2; 湿度; 循环; 去向 | 测一次二次进料冷却气及出口并核干湿状态，换算真实单物种，速率仅积分一次，积分体积不再乘时间。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | m3; kg | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_emissions | manufacture | each emission; captured_dust | species_record | 出口; 时段; 气流状态; 浓度基准; 分子物种; 相态; NO及NO2; 碳源; 干PM粒径; 捕集尘; 检出限; 工况 | 治理后真实代表性采样及物种质量计算，保留未检出不确定性，不由总量拟物种或叠粒径箱；水出口受独立燃料湿气液体记录约束。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | kg; m3 | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_assets | manufacture | each asset; lubricant; screen; refractory | asset_record | 资产配置; 实物总期初新增维修拆出期末; 在装备件; 油流体; 水分; 磨耗; 实测质量; 真实使用小时; 有据服务容量; 供方范围 | 实物资产流体平衡与真实当期制造服务份额分开，逐资产支持服务容量使用历史负荷，不猜固定寿命质量或每kg整机；遗漏真实机器维修材料逐项新增。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | kg; h | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_logistics | manufacture | freight | shipment_record | 运单; 真实货吨; 公里; 方式路线; 空返; 边界 | 真实运单路线，保留吨公里原字段，各真实方式独立。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | t; km; tkm | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_balance | manufacture | stocks; secondary_grade; reject_glass | stock_record | 批号; 实物量; 干湿状态; 期初期末原料在制未分配; 每继承交换向量; 失败零产出启停待机清理返工; 共产品状态价值 | 批库存历史与质量物种元素闭合独立核对，首次放行期末成品不入制造B_close，真实专属作业剩余分配有据。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | native extensive unit; kg | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_service | services | each original-cohort service | cohort_service_record | 原批Q; 观测起止; 期初期末成品; 总发运; 实返干珠; 原交付; 新增水污; 新损失返工; kWh; 成对内部Q; 实际制造方返工许可及品级验收; 真实新增材料/水及拆除旧材料; 原交付冲回; 各继承向量 | 逐流转追原放行历史，独立测返回及新增水污染，仅采观测增量，复验重发非新生产，明确窗口。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 | kg; kWh | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |
| cp_packaging | services | each PE bag; PP sack; pallet | article_stock_record | 构造; 皮重; 期初空件; 期初附在制; 期初附成品; 期初复用件; 采购; 外部退回接收; 对应期末; 总实物发出; 对外返出; 废物; 维修; 供方已含实物进入; 供货负荷已含; 真实物件水分增减; 新增和拆出维修件; 每项继承交换向量 | 按真实构造状态计称并校准皮重，包含实际放行前附着物品供方物料清单维修外返及全部期末；内复用抵消，不每循环再采购。  采集聚合仅汇未除原始记录并保留原单位历史，先转换分配核历史，唯一calc_reference生成每1 kg参考流x_i；聚合字段仅引用该结果，不再除Q。 采购、供方已含进入、收到外退、毛发运和单独外退五方向分列，存量互斥，各接收仅一次。真实木/纸水分及新旧维修组件原子化，整物件和已含组成不重复采购。 | kg; item | 每批事件及代表性表计时段 | 全生产期全工况，服务为原批次观测起止 | 真实纳入场址及有记录供方出口 | 每 1 kg 参考流 | 校准; 原记录; 批状态追溯; 完整性; 不确定性检出限 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_conversion | all inventory rows | 分配前将原广延量转各行分子单位。电力MJ = 表计kWh *3.6，燃料MJ用实际积分气及高位热值、独立载体质量子账；kg为称重独立物态密度；tkm = 真吨 * 公里。真速率积分一次，积分体积不再积分。件质量须实测同配置整件整批，不猜次级系数。 | raw_i; conversion_i; cp_raw; cp_energy; cp_water; cp_air; cp_logistics | C_i | `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| calc_history | all inventory rows | 真实转换分配后A_i = B_open_i + C_i - B_close_i，保留各继承向量。制造B_close仅原料在制真实未分配，不含已入Q首次成品。内部转移抵消一次，服务仅原批窗口真实增量，不再采购制造。资产服务份额 = 有据实际使用 / 有据服务容量，作用原资产负荷且独立于实物库存。 C_i标明接收或已校正消耗读数，不再二次存量校正。每项原料/在制/非在制实物量保留逐交换向量；普通废物废品和失败负荷不自动转出负荷或抵扣。全部FG/包装运动卡A_i为完整实测毛运动，不加负荷向量、不对同腿再校存量、不乘分配份额；仅账目腿不生成供方采购/共产品抵扣。已对留存期末成品提供的真实服务保留其负荷，不因留存而扣除。 | B_open_i; C_i; B_close_i; cp_balance; cp_assets; cp_service | A_i | `jrc-ilcd-attributional-2010` |
| calc_reference | all inventory rows | x_i = A_i / Q；A_i为本行分子单位已归属未归一交换量；Q为唯一首次放行净干裸珠kg。这是唯一归一化，卡片聚合引用同一x_i不再除。Q = 0保留原负荷历史，不出单位结果；成品1 kg为参考身份，不另加输出。 | A_i; Q; cp_release | x_i | `jrc-ilcd-attributional-2010` |
| calc_physical | all physical streams | 制造成品服务合并门：期初实物库存 + 真实外部总输入 = 期末库存 + 真实外部总输出。内部Q转移成对抵消，独立核总质量水相关玻璃金属元素及分子物种，资产流体库存分开。不经济缩实物，不以残差拟合两未知。 | gross_i; stock_open_i; stock_close_i; cp_balance; cp_water; cp_air; cp_emissions; cp_assets | physical_closure_i | `us4385917-bead-furnace`; `fhwa-bead-workflow-2014` |
| calc_packaging | services | PE袋PP袋托盘分别：opening_empty + opening_attached_WIP + opening_attached_FG + opening_reusable + purchases + supplier_included_arrival + external_returns_received = closing_empty + closing_attached_WIP + closing_attached_FG + closing_reusable + gross_outbound + external_return_out + waste。保留负荷向量维修供给，抵消内复用而非外部总流转。不入裸玻璃Q、不每次复用再采购、不自动共产品抵扣。 全部存量类别和接收互斥，已含供货不发生第二次采购；真实单独实测物件水分增减及新增/拆出维修组件列于各自实物侧，保留原向量，不重复采购组成。 | cp_packaging; stock_open_i; stock_close_i; gross_i | packaging_closure_i | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014` |
| calc_fg | services | OpeningFG + Q + 实际外部返回干珠 + 真实许可新增干玻璃 = closingFG + 实物总发运干珠 + 服务玻璃废物 + 另列实际干玻璃出口。新增水污染独立平衡，合并门内部Q抵消不重复输出制造，原制造保留一次，后增量保留原Q观测窗口。 真实干材料增减须自身原子记录及制造方验收，不假定该增减发生或退回等重。 | cp_service; cp_release; Q; gross_i | fg_closure_i | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | all processes | 证明真实实心未涂覆钠钙喷砂牌号全碎料至首次路线及验收测法，定性综合非数值工厂性能证据。 | 供方玻璃历史; 显微; 路线; 牌号质控放行记录 |
| dq_history | all inventory rows | 保留原单位全工况继承向量Q0不确定性明确服务窗口，不遗漏失败未知历史负荷。 | 校准; 原日志; 库存批历史; 观测覆盖 |
| dq_native | all inventory rows | 绑定前核完整原生状态形态路线地域介质类型CAS属性单位链及完整消费卡限制，区分未绑定辅料供方与真实核心身份方法缺口。 | 查询成员; 精确原生记录; 供方状态边界证据 |
| dq_physical | all processes | 独立质量元素物种水相态包装资产证据核总物理门，不残差拟合经济缩质量；未解析物种未检出明确保留。 | 闭合; 物种相态分析; 物品及资产流体账 |

## 9. 校验规则

以下规则继承完整实心未涂覆钠钙喷砂碎玻璃火焰首次放行范围及全部上级边界批次条件。工程检查不审批科学翻译映射发布。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference product | 核真实实心玻璃珠磨料钠钙牌号未涂覆全原料终端路线及唯一放行。通用颗粒基本流空心纤维涂覆复合身份或购珠包装不能替代；真实核心原生身份主要路线终端证据缺失使方法不可用，无论形式检查。 | `swarco-cullet-industrial-beads`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| validate_quantity | all inventory rows | 双语须相同Q原生分子单位原转换实际分配历史，仅一次A_i/Q。采集卡片不再除，Q0不出单位值；未知关系未解决不宣称通过。 | `jrc-ilcd-attributional-2010` |
| validate_gates | all physical streams | 核制造成品服务合并总质量元素物种水及完整包装返回资产流体历史。已入首次Q期末成品保留制造负荷，不重复内部Q任意经济物理比例或自动抵扣。 | `jrc-ilcd-attributional-2010`; `fhwa-bead-workflow-2014`; `us4385917-bead-furnace` |
| validate_native | all inventory rows | 复核采用完整基本名同义备注CAS状态路线形态地域介质类型全部属性精确单位链。原生噪声矛盾族限制保留各完整消费上下文，未绑定辅料原子不替泛集合。 | `swarco-cullet-industrial-beads`; `us4385917-bead-furnace` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 相符未涂覆实心喷砂珠牌号归因供给及声明观测服务 |
| allowed_use | 独立适用性复核后牌号状态路线首次边界匹配使用 |
| excluded_use | 全部37199; 空心涂覆复合光学纤维道路性能外推; 未审净交付全寿命服务 |
| required_metadata | 实心钠钙玻璃及再生平板玻璃来源; 未涂覆非复合状态; 实际粒度分布及试验; 球形率缺陷验收; 热历史及应力质控门; 炉体及真实燃料空气冷却路线; 唯一首次放行净干裸质量Q及批次; 干质量水分测法; 原料在制成品历史及全工况; 原生身份供方限制; 分子物种及游离反应相态水证据; 每种包装构造退回; 实物资产流体及服务负荷; 原批次服务观测窗口 |
| required_quality_disclosure | 原证据; 未绑定身份供方限制; 工况历史; 分配; 质量物种水闭合; 不确定性; 批次服务窗口; 审查状态 |
| update_trigger | 玻璃来源牌号涂覆实心状态路线燃料冷却供方库存历史服务窗口或新证据改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| swarco-cullet-industrial-beads | literature | SWARCO Indusferica, How Glass Cullet Turn into High-Grade Industrial Products. https://www.swarco-indusferica.com/en/b/glass-cullet-industrial-products/ | 制造商原件：平板碎玻璃粉碎预筛竖炉成球真实钠钙喷砂用途；不套宣传节能尺寸产能，无LCA分配依据。 |
| fhwa-bead-workflow-2014 | official_guidance | FHWA-HRT-14-021, Screening Level Assessment of Arsenic and Lead Concentrations in Glass Beads Used in Pavement Markings, January2014, pp.34–37 (PDF44–47), especially p.36 Bead Manufacturing/Bead Blending. https://www.govinfo.gov/content/pkg/GOVPUB-TD2-PURL-gpo50114/pdf/GOVPUB-TD2-PURL-gpo50114.pdf | 完整官方原件：共同碎料研磨炉冷却筛分配级质控包装流转及仅混配反例。道路标线范围不证明喷砂规格现行健康法律阈值配方排放数值或分配。 |
| us4385917-bead-furnace | literature | US4385917A, Method for making glass beads, granted1983-05-31, description and Figures1–6. https://patentimages.storage.googleapis.com/56/27/39/74c510f37c2920/US4385917.pdf | 完整专利原件：燃气空气设备碎料进料表面张力成球空气冷却离散实心球收集。替代燃料富氧及尺寸温度配方效率数值为案例，非默认或LCA分配依据。 |
| jrc-ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, First edition March2010, §§7.9.2–7.9.3, pp.255–272 (PDF275–292). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分虚拟细分逐交换决定性物理因果，仅剩余真实状态共同出口市场价值。前景协议独立落实台账，不推珠配方路线数值分配。 |
