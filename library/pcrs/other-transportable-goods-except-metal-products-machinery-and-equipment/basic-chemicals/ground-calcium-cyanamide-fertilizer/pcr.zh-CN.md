---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ground-calcium-cyanamide-fertilizer
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 电石氮化法粉状氰氨化钙肥料

## 1. 范围与适用性

本方法适用于外购工业电石与分离气态氮进行氮化，经冷却、粉磨后以散装粉状氰氨化钙肥料在厂门交付。工业产品含实际残余石灰、碳及电石，不假定为纯CaCN2。生产者原件区分粉状和颗粒状产品（`alzchem-route`）。所选前景从外购电石和氮气开始，不照搬生产者一体化厂界。

排除颗粒或加硝态氮配方、氰胺水溶液、尿素/AN/CAN、硫酸铵、任意氮肥混合物、石灰尿素合成路线及试剂级纯CaCN2。不量化田间肥效、替代石灰抵扣、土壤排放或施肥优势。宽泛分类标签不能证明集合制造流程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ground-calcium-cyanamide-fertilizer |
| classification_refs | CPC 3.0 34619，仅建议narrower；剩余类别归属须独立确认。 |
| covered_products | 散装粉状工业氰氨化钙肥料；声明实际组成。 |
| excluded_products | 造粒/富集混合肥；氰胺溶液；试剂级；其他氮肥。 |
| representative_product | 粉状石灰氮肥料，不指定商业SKU或含量。 |
| production_route | 外购电石+分离气态N2；氮化、冷却、粉磨及散装出厂。 |
| market_state | 无包装粉体；按声明水分的出厂净质量。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在厂门供应声明的粉状氰氨化钙肥料。 |
| How much | 1 kg 出厂粉体净质量，排除运输容器。 |
| How well | 批次证书声明总氮、氰胺态氮、其他氮形态、水分、残余电石、游离石灰/碳及粒度；不设通用含量。 |
| How long or cycle | 一个声明生产期及厂门交付；不设农艺服务期限。 |
| reference_flow_link | finished_powder |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 氮肥 `fc45dbd4-a3a4-420d-849b-a370b5261a84`；本稿将广义身份限定为散装粉状氰氨化钙肥料。 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 路线；散装粉体状态；实际SKU/等级及批次；产品质量与氮质量；总氮及形态；水分；残余CaC2；游离石灰/碳；粒度；场址及期间；供应背景基准；供电地区/电压。 |

缺失限定信息时前景参考定义不完整。氮含量单独报告，不替代参考分母。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | finished_powder | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用出厂粉体净质量；采用cp_product采集；扣除运输皮重。水分和氮含量保留同批次基准。 |
| nutrient_basis | finished_powder | Mass | kg | 按实测批质量和实测氮质量分数另计kg N。不得用kg N替代kg肥料，不假定纯CaCN2换算。 |
| gas_basis | nitrogen_in | Mass | kg | 采用校准质量交付量，或记录体积的温压、湿干基准、组成、压缩因子和供应参考条件；不设数据库密度默认值。 |
| power_basis | electricity_in | Net calorific value | MJ | 保留实测kWh并记录电能换算1 kWh = 3.6 MJ。净热值是平台属性名，不代表燃烧假定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 氮化厂接收的外购工业电石及分离气态氮。 |
| starting_condition_role | foreground_start |
| product_classification_scope | 粉状氰氨化钙子集；不声称覆盖整叶制造。 |
| recursive_input_rule | 外购同类粉体保留外部投入及其上游数据集；再粉磨与氮化分开，不无限递归。 |
| upstream_dataset_requirement | 链接兼容的电石、N2、电力和水供应数据；上游负荷计一次。一体化电石或空分须单独计量扩边，不遗漏或重复外购投入。 |
| disclosure | 披露场址、期间、库存变化、正常/异常工况、公用工程供应、粉尘回用、排水去向及上游排除。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | foreground | 将接收、电石粉磨、氮化、冷却、成品粉磨、抽风、实际安装的间接冷却、废物转移及散装出厂合为一个计量前景单元；保留阶段计量和物料平衡。 | alzchem-route, jrc-cww-2016 |
| boundary_upstream | carbide_in | 电石制造是上游电热过程。BREF电石数据不是氮化默认值。不得把上游回收CO当作氮化产品，也不得重复计上游CO2。 | jrc-lvic-s-2007 |
| boundary_complete | foreground | 维护物种/公用工程/残余物筛查。新增实际燃料、化学品、包装、污染物或冷却添加剂须逐一增原子行并验证身份后才可声称数据完整；不得因本稿未列就认定不存在。 | jrc-cww-2016 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| nitridation | 电石氮化及粉体加工 | required | 声明的外购电石粉体路线 | foreground | finished_powder |

### 过程：电石氮化及粉体加工（`nitridation`）

#### 输入

##### 产品流

###### 氮化用电石（`carbide_in`）

称量实际投料电石；测定CaC2、游离石灰、碳、水分和杂质。不指定拜耳法候选UUID。

- 选定流: 氮化用电石
- 流属性/单位: Mass / kg
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_material
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `alzchem-route`, `jrc-lvic-s-2007`

###### 氮气（`nitrogen_in`）

计量空分供应的气态N2；氮平衡保留吹扫及未反应气体；以实测质量或有记录的气态换算核对。

- 选定流: 氮气 `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- 流属性/单位: Mass / kg
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_material
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `alzchem-route`

###### 交流电（`electricity_in`）

计量反应加热、粉磨、冷却循环、抽风及散装输送用电。所选身份仅适用于中国电网平均、用户侧1–35kV；核实实际供电。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Net calorific value / MJ
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_energy
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `alzchem-route`

###### 自来水（`cooling_water_in`）

仅在安装间接冷却时计量外购自来水补水；不把内部循环量计作投入。记录实际水源及体积换算的实测密度。

- 选定流: 自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位: Mass / kg
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_water
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `jrc-cww-2016`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 氮肥（`finished_powder`）

采用cp_product计量合格粉状氰氨化钙肥料。所选广义氮肥身份在物理范围上包含本产品，配方未指定；它不证明纯CaCN2或供应数据。不采用源Fertilizer,N数量及其未澄清的养分/产品质量基准。前景仅设一个输出并保留实际阶段计量。

- 选定流: 氮肥 `fc45dbd4-a3a4-420d-849b-a370b5261a84`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `source_rule`
- 采集协议: `cp_product`
- 来源: `alzchem-route`

##### 废物流

###### 粉尘（`dust_out`）

仅称量交给外部废物接收方的含氰氨化钙收集粉尘；记录组成、残余电石、水分及接收条件。内部回用粉尘不是外排。

- 选定流: 粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位: Mass / kg
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_residue
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residue`
- 来源: `jrc-cww-2016`

###### 送厂外处理的间接冷却排污水（`cooling_purge`）

如有，计量交给处理运营方的实际间接冷却排污水；保留去向、组成、杀生剂使用及处理边界。直接环境排放须另列逐物种基本流。

- 选定流: 送厂外处理的间接冷却排污水
- 流属性/单位: Volume / m3
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_water
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `jrc-cww-2016`

##### 基本流

###### 氨（`ammonia_air`）

计量控制设施后进入室外空气、未特指子介质的NH3；按NH3分子质量而非氨氮表达。检查水分引起的转化；不设默认正排放或历史削减系数。

- 选定流: 氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `alzchem-route`, `jrc-cww-2016`

###### 乙炔（`acetylene_air`）

检查残余电石与水分接触路径，并计量实际进入室外空气、未特指子介质的C2H2。职业接触浓度不是工厂排放负荷。

- 选定流: 乙炔 `4d9a8790-3ddd-11dd-911f-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `icsc-cyanamide-2006`, `jrc-cww-2016`

###### 颗粒物 (PM2.5)（`pm_fine_air`）

计量控制后逸出的空气动力学直径不大于2.5微米颗粒，包括有记录的无组织源，介质为室外空气未特指。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-cww-2016`

###### 颗粒物 (PM2.5 - PM10)（`pm_coarse_air`）

仅记录大于2.5且不大于10微米的非重叠粒径段，介质为室外空气未特指。如采用可比的累积PM10和PM2.5测量，须扣除PM2.5；不可再与累积PM10相加。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-cww-2016`

###### 颗粒物（> PM10）（`pm_large_air`）

记录进入室外空气未特指介质的大于10微米逸出颗粒；仅在测量可比且匹配时用总颗粒物扣除PM10。缺失粒径段为未知，不是零。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测归属本生产期的交换量/合格粉体净千克数；采用 cp_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-cww-2016`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | nitridation | 在负荷分配前保留实物质量、氮和碳平衡。反应碳留在粉体时属于产品组成；内部粉尘回用不是共产品。不得把实物输出乘分配份额。 | alzchem-route, jrc-cww-2016 |
| allocation_subdivide | nitridation | 用阶段计量及生产期记录分离其他生产。不设默认共产品抵扣或分配比。实际产生外售共产品时，须先记录其身份、接收方、实物平衡及经审查的分配决定再计算负荷。 | jrc-cww-2016 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | nitridation | finished_powder | 称重及化验 | 批次；毛重；皮重；粉体净量；水分；总氮；氰胺态氮；硝态/铵态/尿素态氮；残余CaC2；石灰；碳；粒度；期初期末库存；唯一新验收/退货/返工批次关联；失败/零产出批次；期初期末WIP质量/组成及结转负荷 | 采用校准验收净称量及代表性批次化验；返工/撤回后每份新验收实物仅计一次。独立用发运、退货及期初期末成品库存核对验收量；跨期承接WIP质量、组成及相关负荷，不遗漏或重复计数。 | kg | 逐批 | 完整声明生产期 | 同粉体线及等级 | 每 1 kg 参考流 | 校准；采样方法；化验不确定性；库存台账 |
| cp_material | nitridation | carbide_in; nitrogen_in | 前景测量 | 投入批次；等级；供应方；交付及投料质量；库存；气态条件；化验 | 校准秤及气体质量计；核对投料、交付和库存。体积计量时记录气态换算及供应条件。 | kg | 逐批或工况；有连续表时连续采集 | 与cp_product相同完整生产期 | 所选前景全部归属阶段 | 每 1 kg 参考流 | 称重单；校准；供方化验；气体基准 |
| cp_energy | nitridation | electricity_in | 前景测量 | 表起止数；阶段；运行小时；电压；地区；供应方；共享负荷 | 读取专用电表；量化有依据的共享负荷并核对账单。保留kWh及MJ换算。 | kWh | 逐批或工况；有连续表时连续采集 | 与cp_product相同完整生产期 | 所选前景全部归属阶段 | 每 1 kg 参考流 | 电表校准；负荷归属；供应边界 |
| cp_water | nitridation | cooling_water_in; cooling_purge | 前景测量 | 补水；排污体积；密度；温度；回路；接收方；组成；添加剂 | 分别计量补水和实际厂外排污；称重或测密度取得水质量。核对循环、蒸发和库存；识别所有添加化学品。 | kg; m3 | 逐批或工况；有连续表时连续采集 | 与cp_product相同完整生产期 | 所选前景全部归属阶段 | 每 1 kg 参考流 | 校准；回路图；处理合同；分析 |
| cp_residue | nitridation | dust_out | 前景测量 | 收集粉尘量；内回用；外运；组成；残余电石；接收方 | 称量单独收集粉尘及库存；匹配外运联单和接收条件；不把总捕集粉尘当空气排放。 | kg | 逐批或工况；有连续表时连续采集 | 与cp_product相同完整生产期 | 所选前景全部归属阶段 | 每 1 kg 参考流 | 秤；转移单；组成及接收条件 |
| cp_air | nitridation | ammonia_air; acetylene_air; pm_fine_air; pm_coarse_air; pm_large_air | 前景测量 | 源；物种/CAS；控制设施；浓度；气量；温压；湿干基准；测试时长；工况；粒径段；检出限 | 逐工况采用控制后匹配的出口浓度和气量测量；独立表征无组织源。物种及气量统一气态条件；按覆盖运行小时积分负荷并保留不确定性。 实测体积流率仅在其对应时段积分；已积分气体体积则以浓度乘该兼容体积求负荷，绝不再乘运行小时。先保留原始期间负荷，再仅做一次生产期归一化。 | kg | 逐批或工况；有连续表时连续采集 | 与cp_product相同完整生产期 | 所选前景全部归属阶段 | 每 1 kg 参考流 | 检测报告；方法；校准；气态条件；粒径方法；工况覆盖 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_basis | all inventory rows | 定义同场址、产品/等级、状态和氮化路线的完整生产期池。分配负荷或相除前保留期间原始总量，纳入全部归属本池的启停、失败和零产出批次、清洗/损失、退货、返工及期初期末WIP与结转负荷。Q为cp_product逐份唯一计数的新验收粉体净kg；发运/库存仅独立核对，不再次校正同一分母。仅换算分子单位并完成有据负荷归属后，各归属总量仅除以同一正Q一次；参考输出为1 kg。Q=0时保留全部原始总量及库存/去向，不生成每kg结果、不虚构产量或剔除失败期间。 | cp_product; cp_material; cp_energy; cp_water; cp_residue; cp_air | 每1 kg参考流交换量 |  |
| element_balance | nitridation | 分配前核对完整实测湿物流及独立N/Ca/C/H/O和实际杂质元素账，含库存/WIP及实际气液去向。CaC2 + N2 -> CaCN2 + C是反应身份，不是收率/配方，且不产生化学计量水；区分残余电石、游离碳/石灰及氰胺结合碳。仅在已筛查的残余电石/水分路径实际发生时，用CaC2 + 2 H2O -> C2H2 + Ca(OH)2约束物种质量；实际反应量、耗水及形成干组分须有独立证据。将实测水分/游离水与干组分生成消耗分开，不从COD或未解释闭合残差推导水、蒸发、转化率、产率或缺失物种。 | cp_material; cp_product; cp_residue; cp_air | 分配前实物元素平衡 | alzchem-route, jrc-lvic-s-2007, jrc-cww-2016, icsc-cyanamide-2006 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_basis | all inventory rows | 分别保留实测基准、供应产品身份及背景数量兼容性。有效流UUID不证明供应数据集完整。 | cp_material; cp_energy; cp_water |
| quality_unknown | all inventory rows | 未知不等于零。缺席须有设备/路线及采样证据。保留检出限；无通用收率、水分、密度、组成或排放因子。 | cp_air; cp_product |
| quality_period | nitridation | 生产期覆盖启停、正常及可信异常工况；说明未测期间及不确定性。 | cp_air; cp_energy; cp_product |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_powder | 可用guidance/数据接受前，须有一个1 kg粉体输出、完整限定信息及已解决的产品质量参考身份。计量通过不能解决身份。 |  |
| validate_balances | nitridation | 将实物质量/N/Ca/C和库存平衡与分配负荷分开检查；结合不确定性及检出限调查差额。内部转移以相等实际数量抵消。 | jrc-cww-2016 |
| validate_emissions | nitridation | 核对控制后室外负荷、NH3/C2H2分子基准及不重叠颗粒粒径段。不得重复加入捕集废粉尘、累积PM10或上游电石排放。直接水排放须独立验证物种及介质。 | jrc-cww-2016, icsc-cyanamide-2006 |
| validate_completeness | all inventory rows | 参考/电石/废物身份未验证、换算无支持、物质路径未测或供应方未限定时，拒绝完整数据声明。仍需独立科学审核。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 身份及质量接受后，作为兼容的散装粉状氰氨化钙肥料投入。 |
| allowed_use | 仅限声明场址/期间/含量及外购电石路线。 |
| excluded_use | 整CPC叶；颗粒/富集混肥；纯物质或kg N替代；使用阶段声明；把未完成稿当接受数据集。 |
| required_metadata | 参考限定；边界；供应链接；库存；采集协议；身份解决；工况覆盖。 |
| required_quality_disclosure | 不确定性；实际完整度；未决身份；有条件的公用工程/废物身份；分配及排除。 |
| update_trigger | 路线、含量、供应方、公用工程、粉尘处理或监测变化；身份澄清或新独立证据。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| alzchem-route | literature | Alzchem, Product calcium cyanamide, Manufacture / Types / Quality; https://www.alzchem.com/en/brands/perlka/product-calcium-cyanamide/ | 生产者路线和产品状态区分；历史单厂削减率、含量及温度不作通用默认。 |
| jrc-lvic-s-2007 | official_guidance | European Commission, LVIC-S BREF, August 2007, 7.2.1.1, pp.356-357 (PDF401-402); https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic-s_bref_0907.pdf | 用于上游电石制造及边界区分，并支持7.2.1.1节残余电石与水的反应身份；不采用历史能耗/纯度、实际水解程度或排放默认值。 |
| jrc-cww-2016 | official_guidance | European Commission, CWW BREF, 2016, BAT2 pp.543-544 (PDF573-574); https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | 化工横向物流清单及监测，不是肥料特定因子。 |
| icsc-cyanamide-2006 | official_guidance | ILO/WHO, ICSC1639 Calcium cyanamide, Notes; https://inchem.org/documents/icsc/icsc/eics1639.htm | 残余电石/水分乙炔筛查，无释放比例或LCI因子。 |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC3 Explanatory Notes, 30Jun2025, p.165; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于34619剩余类别标签及相邻身份；narrower归属仍须主控裁定。 |
