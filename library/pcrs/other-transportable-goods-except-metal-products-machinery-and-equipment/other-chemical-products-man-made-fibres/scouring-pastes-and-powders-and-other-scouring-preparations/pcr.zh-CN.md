---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.scouring-pastes-and-powders-and-other-scouring-preparations
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 水性矿物磨料擦洗膏制造与交付

## 1. 范围与适用性

本较窄方法覆盖一种非漂白水性矿物磨料擦洗膏：由独立采购组分湿分散，继而灌装、质量放行、仓储、搬运及密闭塑料瓶实际验收交付。供货实例为Ecover Global Cream Cleaner500ml及其公开成分组；场址必须确认天然研磨碳酸钙路线、完整配方和供货状态。这里不重建该厂商专有工艺。Omya专利的对比GCC膏只支持湿分散操作；其中的碱、合成增稠剂和香精配方不同，不在此提供默认值。[ecover-cream-supply; omya-cream-dispersion]

排除干擦洗粉、酸除垢剂、含氯或氧漂白配方、表面反应或沉淀碳酸钙磨料生产、蜡溶剂抛光品、表活皂合成、使用服务和功效用量等效。不凭CPC标签加入皂、漂白剂或香精。实际场址若使用这些物质或酸碱反应加工，应依据原始制造及物种证据重审本窄范围，不能静默添加通用配方。物理相同的抛光制剂应交复用评估。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.scouring-pastes-and-powders-and-other-scouring-preparations |
| classification_refs | CPC3.0:35334; narrower |
| covered_products | 非漂白水性研磨碳酸钙膨润土石英磨料膏，采用采购椰油基葡糖苷制剂及公开醇防腐剂甘油黄原胶投入 |
| excluded_products | 干粉；反应型酸漂白配方；纯磨料；蜡抛光品；口腔皮肤化妆品；洗衣制剂 |
| representative_product | Ecover Global Cream Cleaner，500ml塑料瓶供货；无默认瓶质量密度配方比例纯度或清洁用量 |
| production_route | 接收称量各独立组分；在水中润湿分散矿物胶粉；控制搅拌及加入表活醇；实际均化检验；灌装封盖；质量放行；存储发运 |
| market_state | 密闭塑料瓶湿膏；实际验收交付时扣包装的膏净质量 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供应声明硬表面矿物磨料清洁膏；不声明清洁功效等效 |
| How much | 1 kg |
| How well | 满足实际声明配方固水比例分散稳定性物态及质量验收规格；无通用功效阈值 |
| How long or cycle | 一个有记录的生产库存交付核算期间，含期初末批群负荷 |
| reference_flow_link | delivered_cream |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 洗涤剂 `1ee04905-0d1a-453e-9d3a-9ce612d79be0` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际净验收交付门及期间; 单一非漂白水性矿物擦洗SKU及配方版本; 天然研磨碳酸钙等级及粒度分布; 膨润土石英身份及水分; 整份表活制剂浓度及载体水; 变性醇各组分及浓度; 膏体水及干固体比例; 瓶封盖标签及运输包装物料表; 实测净质量或带温度的实际密度; 场址地理供货路线及实际单元操作; 匹配的期初末在制品成品及结转负荷; 物理损失排放检测覆盖及实际物种证据; 声明质量验收标准且无用量或清洁等效默认值 |

参考UUID只提供宽身份，保留终端库存卡内全部身份限制。参考门Q为实际净验收交付膏，不是新增质量放行产量P、瓶数或标称500ml。未交付期末成品不计Q。退回与再验收不能再造一份实物量；使用持续批件标识及有记录的更正账。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用1kg净交付湿膏。全部库存采集量匹配该实际交付门产品路线状态；Q>0。 |
| wet_dry | material and product | Mass | kg | 收料总湿质量、实测固体活性和载体水分开。干质量=m_wet*x_dry只作子账，不同时采购整份溶液和组分。 |
| volume_mass | liquid and bottle | Mass | kg | 优先净称量。必要体积换算采用实际混合物密度和单位m=rho_actual(T)*V；不用原生次级属性系数或纯水矿物密度。 |
| integrated_volume | measured gas or liquid | Volume | m3 | 积分体积V已是期间量；流率v才需时间积分，不能将积分体积再乘时长。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际接收门采购就绪级原料公用工程和包装；声明期初原料在制品成品及其上游工艺负荷向量 |
| starting_condition_role | foreground_input_gate |
| product_classification_scope | CPC3.0:35334 narrower aqueous mineral cream |
| recursive_input_rule | 采购成品膏应为带上游负荷的显式投入，不是现场新增配制；内部退回返工膏合并抵消 |
| upstream_dataset_requirement | 须有供应商兼容的全制剂等级浓度地理及provider证据；本PCR和宽UUID不提供配方数量或背景负荷 |
| disclosure | 整个前景至实际验收交付：湿分散损失失败运行返工包装质控仓储搬运发运及在制品成品结转负荷；声明实际交付地点运输范围。 |

下列一个合并过程包含不同物理操作；内部转移抵消，但其真实操作负荷保留。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | cream_delivery | 纳入声明门内所有实际组分准备粉料搬运润湿分散加醇质控取样灌装封盖清洗排放控制仓储发运。失败零产出及返工保留负荷，不假设零尘零VOC。 | ecover-cream-supply; omya-cream-dispersion; niosh-carbonate-dust; niosh-ethanol-volatility |
| boundary_stocks | cream_delivery | 区分生产放行P与实际交付Q。勾稽原料在制品成品期初末质量和负荷。合并交付过程中新放行膏仅是生产至仓库的内部移交，不得把P和期末成品相加作为终端输出。 |  |
| boundary_chemistry | cream_delivery | 不从类别推断酸碱氯的组合。任何真实转化均须独立物种反应证据；区分反应气水、水合结构水变化、物理蒸发与夹带。闭合残差或COD不能证明这些项。 | nist-water-phase |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cream_delivery | 湿分散灌装库存交付 | required | 实际合格非漂白水性矿物膏路线 | 合并物理前景且原始子账各有owner | 1 kg |

### 过程：擦洗膏制造与交付 (`cream_delivery`)

#### 输入

##### 产品流

###### 碳酸钙磨料 (`carbonate`)

记录独立采购的研磨矿物、实际天然来源、粒度分布和水分。不得替换成沉淀或酸表面反应碳酸钙；制造商成分名称本身不能证明天然等级。

- 选定流: 天然研磨碳酸钙粉
- 流属性/单位: Mass / kg
- 数量规则: 实际carbonate的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_material
- 来源: ecover-cream-supply; omya-cream-dispersion; niosh-carbonate-dust

###### 膨润土流变矿物 (`bentonite`)

记录供货等级、水分和实际水化分散；不得将黏土表示成碳酸钙或默认其质量全为干固体。

- 选定流: 膨润土粉
- 流属性/单位: Mass / kg
- 数量规则: 实际bentonite的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_material
- 来源: ecover-cream-supply

###### 石英磨料 (`quartz`)

将石英等级、粒度、结晶二氧化硅含量和实际投料与碳酸钙、膨润土分开记录；颗粒子账独立评估其粉尘。

- 选定流: 石英粉
- 流属性/单位: Mass / kg
- 数量规则: 实际quartz的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_material
- 来源: ecover-cream-supply; niosh-quartz-dust

###### 整份椰油基葡糖苷制剂 (`coco_glucoside`)

记录独立采购的整份水性制剂；实际活性含量、载体水及其他组分只作子账，不重复采购活性物或水；不得抄用专利20percent溶液浓度。

- 选定流: 水性椰油基葡糖苷表面活性剂制剂
- 流属性/单位: Mass / kg
- 数量规则: 实际coco_glucoside的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_material
- 来源: ecover-cream-supply

###### 整份变性醇制剂 (`denatured_alcohol`)

公开Alcohol denat.为整份商业投入。以供应商原始记录确认乙醇身份、浓度、水和每一种实际变性剂；公开成分表未给出这些数量。每种实际挥发性变性剂分别增补实名排放卡，不再重复采购纯乙醇。

- 选定流: 变性乙醇制剂
- 流属性/单位: Mass / kg
- 数量规则: 实际denatured_alcohol的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_material
- 来源: ecover-cream-supply; niosh-ethanol-volatility

###### 甘油制剂 (`glycerin`)

采用整份供货甘油等级和浓度；载体水只进入子账，不增加第二份成分投入。

- 选定流: 甘油制剂
- 流属性/单位: Mass / kg
- 数量规则: 实际glycerin的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_material
- 来源: ecover-cream-supply

###### 防腐剂制剂 (`phenoxyethanol`)

记录这一份采购防腐制剂的浓度和组分；无证据不得将供应商混配制剂当作纯苯氧乙醇。

- 选定流: 苯氧乙醇防腐剂制剂
- 流属性/单位: Mass / kg
- 数量规则: 实际phenoxyethanol的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_material
- 来源: ecover-cream-supply

###### 黄原胶流变调节剂 (`xanthan`)

记录独立供货胶粉、含量水分与实际润湿；不强加通用聚合物增稠剂替代或专利Rheosolve配方。

- 选定流: 黄原胶粉
- 流属性/单位: Mass / kg
- 数量规则: 实际xanthan的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_material
- 来源: ecover-cream-supply

###### 独立供应的配方水 (`blend_water`)

只记录独立加入的水并区分溶液携带水；500ml瓶容积不等于产品质量，纯水密度不等于擦洗膏密度。

- 选定流: 配方水
- 流属性/单位: Mass / kg
- 数量规则: 实际blend_water的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_material
- 来源: ecover-cream-supply

###### 清洗水 (`clean_water`)

设备和灌装线实际冲洗水与产品保留配方水分记；回用于配方的冲洗液为内部转移，只计一次。

- 选定流: 设备清洗水
- 流属性/单位: Mass / kg
- 数量规则: 实际clean_water的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_utilities
- 来源:

###### 电力 (`electricity`)

完整期间计量分散、泵送、灌装、检验、通风除尘、清洗、仓储和搬运负荷；纳入分配给该产品批群的失败运行和待机负荷。

- 选定流: 场址供电
- 流属性/单位: Electrical energy / kWh
- 数量规则: 实际electricity的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_utilities
- 来源:

###### 外购工艺热 (`heat`)

仅在实际加热时适用，单记计量交付热量；常温混合不能作为删除实际加热或干燥的理由。现场燃料供热须使用具体燃料及独立燃烧排放，不能再重复计外购热。

- 选定流: 外购工艺热
- 流属性/单位: Energy / MJ
- 数量规则: 实际heat的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_utilities
- 来源:

###### 搬运柴油 (`diesel`)

实际柴油搬运设备使用时适用。记录燃料、发动机状态和独立测量或独立因子支持的每个燃烧物种；电动搬运计入电力。不默认零燃烧排放或使用总尾气组合流。

- 选定流: 柴油
- 流属性/单位: Mass / kg
- 数量规则: 实际diesel的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_utilities
- 来源:

###### 空瓶 (`bottle`)

商业实例只支持再生及植物来源塑料瓶，不支持树脂等级或再生比例。称量实际采购瓶并保存树脂物料表、再生含量和供应商证据。

- 选定流: 空塑料擦洗膏瓶
- 流属性/单位: Mass / kg
- 数量规则: 实际bottle的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_packaging
- 来源: ecover-cream-supply

###### 瓶封盖 (`cap`)

记录实际独立采购的单件封盖、材质和质量；随瓶整体供货的封盖不得重复采购。

- 选定流: 塑料瓶封盖
- 流属性/单位: Mass / kg
- 数量规则: 实际cap的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_packaging
- 来源:

###### 瓶标签 (`label`)

纳入实际供货的单件标签及其组分物料表证据；现场印刷时改为实际基材、油墨和胶黏剂分别交换。

- 选定流: 印刷瓶标签
- 流属性/单位: Mass / kg
- 数量规则: 实际label的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_packaging
- 来源:

###### 瓦楞运输纸箱 (`carton`)

称量实际运输纸箱并依据实际复用次数分摊；不默认统一纸箱数量。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass / kg
- 数量规则: 实际carton的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_packaging
- 来源:

###### 托盘缠绕膜 (`film`)

实际使用时纳入；称量单一薄膜制品并记录树脂及废物。

- 选定流: 托盘拉伸缠绕膜
- 流属性/单位: Mass / kg
- 数量规则: 实际film的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_packaging
- 来源:

###### 木托盘 (`pallet`)

实际使用时纳入；记录实物质量、复用、维修及真实返运，不默认每次发货使用一只新托盘。

- 选定流: 木运输托盘
- 流属性/单位: Mass / kg
- 数量规则: 实际pallet的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_packaging
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收交付擦洗膏 (`delivered_cream`)

唯一终端产品输出：在声明交付门实际验收的本非漂白水性矿物磨料擦洗膏净质量，扣除瓶及其他包装。原生宽身份描述清除硬表面污垢、灰尘、污渍和异味的制剂，包含液体、粉末、喷雾和颗粒形态，并说明表面活性剂为主要成分；不规定擦洗膏配方。原生附加名称分量、地理locationOfSupply及CAS均未给出；类型为Product flow，全部属性仅Mass，无密度。其35310表活分类与硬表面清洁制剂描述不一致，保留为身份债务。不据此推断工厂、区域混合、等级或供应商负荷；本数据集必须独立提供擦洗膏定性规格。

- 选定流: 洗涤剂 `1ee04905-0d1a-453e-9d3a-9ce612d79be0`
- 流属性/单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_delivery
- 来源: ecover-cream-supply

##### 废物流

###### 报废擦洗膏 (`reject_cream`)

只计离开废物边界的废次品或退回报废膏；内部返工为转移。纳入湿质量、水固体有机物组成及实际处理。

- 选定流: 报废水性擦洗膏
- 流属性/单位: Mass / kg
- 数量规则: 实际reject_cream的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_balance
- 来源:

###### 捕集矿物尘 (`captured_dust`)

实际捕集混合矿物粉为单一废物流；区分碳酸盐黏土石英组成、细粉与水分。经核实内部复用不算新外购矿物或向空气排放。

- 选定流: 捕集矿物粉尘残渣
- 流属性/单位: Mass / kg
- 数量规则: 实际captured_dust的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_balance
- 来源:

###### 冲洗废水 (`rinse_effluent`)

记录流向实际受纳处理端的未处理水排放实测量及固体乙醇含量。COD仅为水质观察，不能反推碳物种或反应水。

- 选定流: 擦洗膏设备冲洗废水
- 流属性/单位: Mass / kg
- 数量规则: 实际rinse_effluent的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_balance
- 来源:

###### 废瓶 (`bottle_scrap`)

记录实际废次瓶和破损瓶；分出残留膏，防止内容物质量同时计入包装废物与膏废物。

- 选定流: 废塑料瓶
- 流属性/单位: Mass / kg
- 数量规则: 实际bottle_scrap的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_balance
- 来源:

###### 废封盖 (`cap_scrap`)

独立记录实际废次封盖。

- 选定流: 废塑料封盖
- 流属性/单位: Mass / kg
- 数量规则: 实际cap_scrap的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_balance
- 来源:

###### 废标签 (`label_scrap`)

记录实际废标签；若发生其他离型底纸或胶废物，分别增加原子行。

- 选定流: 废瓶标签
- 流属性/单位: Mass / kg
- 数量规则: 实际label_scrap的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_balance
- 来源:

###### 废纸箱 (`carton_scrap`)

记录实际废次及寿命终了纸箱和处理。

- 选定流: 废瓦楞纸箱
- 流属性/单位: Mass / kg
- 数量规则: 实际carton_scrap的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_balance
- 来源:

###### 废缠绕膜 (`film_scrap`)

实际用膜和产废时适用；不默认回收抵扣。

- 选定流: 废拉伸缠绕膜
- 流属性/单位: Mass / kg
- 数量规则: 实际film_scrap的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_balance
- 来源:

###### 废托盘 (`pallet_scrap`)

实际托盘报废时适用；区分维修及可复用返还托盘。

- 选定流: 废木托盘
- 流属性/单位: Mass / kg
- 数量规则: 实际pallet_scrap的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_balance
- 来源:

##### 基本流

###### 空气矿物颗粒物 (`mineral_pm`)

独立量化未捕集的实际颗粒排放。保留实测粒级、碳酸盐黏土石英组成与检测覆盖；需要时增加各自证据支持的物种粒级行。不能因终产品为湿膏而默认无尘。

- 选定流: 矿物颗粒物向空气排放
- 流属性/单位: Mass / kg
- 数量规则: 实际mineral_pm的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_emissions
- 来源: niosh-carbonate-dust; niosh-quartz-dust

###### 乙醇向空气排放 (`ethanol_air`)

根据实际接收混合灌装储存条件测量乙醇损失，或使用独立论证的物种特定模型。NIOSH纯乙醇挥发性只支持开展调查，不能作为损失因子或膏体密度。其他变性剂和苯氧乙醇实际排放时，须有各自实名行与证据。

- 选定流: 乙醇向空气排放
- 流属性/单位: Mass / kg
- 数量规则: 实际ethanol_air的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_emissions
- 来源: niosh-ethanol-volatility

###### 物理蒸发水 (`water_vapour`)

独立测量物理蒸发，不能把反应水或质量闭合残差充作蒸发。区分游离吸附结构水变化及冷凝水；NIST相变记录不提供工厂速率。

- 选定流: 水蒸气向空气排放
- 流属性/单位: Mass / kg
- 数量规则: 实际water_vapour的A_i/Q；原始分子归属于交付批群，仅在唯一报告计算中除一次
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_emissions
- 来源: nist-water-phase

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_shared | cream_delivery | 先用独立计量批次追踪避免分配。真实共享公用工程仓储搬运负荷须保留实测总量因果驱动全部产品分母、合计为1的比例和敏感性。产品特定失败返工负荷留在其批群，不暗扣损失。 |  |
| allocation_returns | cream_delivery | 内部回收膏粉及退回再验收不是共产品或新产出。用同一持续批群账分配保留负荷。纳入实际废物处理；真实可销售共产品须独立身份数量和有依据分配，不默认回收抵扣。 |  |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | cream_delivery | ingredient and preparation records | weighing and supplier records | batch_id; supplier_lot; recipe_version; wet_mass; assay; solids; water; impurities; rejected_charge; opening_raw; closing_raw | Owner：配制工艺员。保存所有合格范围运行包括失败的未归一收料称量实耗及原料库存移动。保留整份制剂与组分子账，不重复采购。确认天然碳酸钙胶矿等级及真实变性剂，不套专利配方。 只保留原始总量和结转向量；calc_normalize是唯一报告归一，此处不另执行 | kg and actual assays | 逐批及完整申报期间 | 同一完整生产库存交付期间，含失败运行及库存结转 | 实际实名制造交付场址及路线 | 每 1 kg 参考流 | 校准发票原始检测批次链接原始计量交付库存及复核记录 |
| cp_utilities | cream_delivery | actual operating loads | meter and fuel records | meter_start; meter_end; timestamps; rate; integrated_volume; unit; temperature; density; heating; failed_run_energy; shared_driver | Owner：公用工程工程师。保存原始读数及匹配操作清洗待机排放控制仓储搬运发运负荷，记录实际电燃料加热配置。流率与积分体积分开。此处不除Q；按真实条件工序独立采集投入与各排放物种。 只保留原始总量和结转向量；calc_normalize是唯一报告归一，此处不另执行 | kWh; MJ; kg; m3; h | 逐批及完整申报期间 | 同一完整生产库存交付期间，含失败运行及库存结转 | 实际实名制造交付场址及路线 | 每 1 kg 参考流 | 校准发票原始检测批次链接原始计量交付库存及复核记录 |
| cp_packaging | cream_delivery | each packaging article | BOM weighing and stock records | article_id; supplier; resin; mass; counts; opening; closing; scrap; reuse; returns; net_fill; tare | Owner：包装工程师。分别称量实际瓶封盖标签纸箱薄膜托盘并保存组成库存返还证据。纳入灌装废次和真实负荷。采购完整制品含其嵌入组分，不重复采购组分。 只保留原始总量和结转向量；calc_normalize是唯一报告归一，此处不另执行 | kg and count | 逐批及完整申报期间 | 同一完整生产库存交付期间，含失败运行及库存结转 | 实际实名制造交付场址及路线 | 每 1 kg 参考流 | 校准发票原始检测批次链接原始计量交付库存及复核记录 |
| cp_delivery | cream_delivery | net accepted delivery and all stocks | traceable delivery acceptance and inventory | unique_lot_unit; P_release; gross_delivery; tare; accepted_net; returns; reacceptance; opening_WIP; closing_WIP; opening_FG; closing_FG; burden_vectors; storage_days; dispatch | Owner：质量物流主管。保存未归一实测净交付及验收退回更正，分记新放行P、期初末在制品成品质量及结转负荷，保留同期间放行仓储发运全账。跨退回期间追踪唯一实物，防再验收造产量；对既往申报作显式更正。未交付期末成品不得入Q。此处不除任何原始分子。 只保留原始总量和结转向量；calc_normalize是唯一报告归一，此处不另执行 | kg; burden vectors; day | 逐批及完整申报期间 | 同一完整生产库存交付期间，含失败运行及库存结转 | 实际实名制造交付场址及路线 | 每 1 kg 参考流 | 校准发票原始检测批次链接原始计量交付库存及复核记录 |
| cp_balance | cream_delivery | mass species water and wastes | weighing assays and treatment manifests | opening_mass; receipts; WIP; FG; delivered; wastes; captured_dust; effluent; water_states; elemental_assays; reaction_evidence; uncertainty | Owner：过程衡算工程师。保留完整原始湿干元素物种账、全部取样废弃退回材料、实测水状态及结转负荷。实物衡算独立于生命周期负荷归属。真实反应须独立化学计量物种及程度证据；不得用同一残差拟合两个未知出口或反应水。 只保留原始总量和结转向量；calc_normalize是唯一报告归一，此处不另执行 | kg and elemental/species assays | 逐批及完整申报期间 | 同一完整生产库存交付期间，含失败运行及库存结转 | 实际实名制造交付场址及路线 | 每 1 kg 参考流 | 校准发票原始检测批次链接原始计量交付库存及复核记录 |
| cp_emissions | cream_delivery | particulate ethanol water and additional actual species | source-specific measured emissions | test_location; timestamps; exhaust_rate; integrated_volume; concentration; particle_fractions; mineral_assay; ethanol; denaturant_species; vapour; condensate; capture; uncertainty | Owner：环境测量工程师。采集未归一源浓度体积或有原始方法时段覆盖的物种特定因子；区分捕集尘与排放、乙醇与其他有机物、物理水蒸气与反应结构水变化。若实际存在反应气水，须独立证据；不凭空造物种。缺测不能变零。 只保留原始总量和结转向量；calc_normalize是唯一报告归一，此处不另执行 | kg; mg/m3; m3; h | 逐批及完整申报期间 | 同一完整生产库存交付期间，含失败运行及库存结转 | 实际实名制造交付场址及路线 | 每 1 kg 参考流 | 校准发票原始检测批次链接原始计量交付库存及复核记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_conversion | physical raw ledgers | 每个原始单位只一次换算至行单位；m=rho_actual(T)*V仅采用实际溶液密度。干活性载水子账用实测分数，不重复外部采购。流率用integral(rate dt)，积分V不再乘时间。 | raw_quantity; raw_unit; measured_density; measured_fraction; integrated_volume; duration | converted raw ledger |  |
| calc_delivery | terminal delivered_cream | Q=sum(唯一实际净验收交付膏)减去不再保留为交付的有记录退回更正；Q>0。解决跨期退回更正，避免再验收重复计件。P为独立记录的质量放行质量。期初末成品在制品各保留质量负荷，未交付期末成品不属Q。 | unique accepted net; returns; corrections; opening_FG; closing_FG; opening_WIP; closing_WIP | Q in kg and physical stock ledger |  |
| calc_burden | unnormalised delivery-cohort burdens | 逐流保留全部当前期间归属产品的原始负荷D_i、期初结转O_i及期末结转C_i；交付批群分子A_i=D_i+O_i-C_i，附批次归属及共享分配。采购与消耗另保留原料库存调整。纳入失败零产出返工退回包装仓储搬运发运负荷；未交付在制品负荷结转不删除。抵消内部膏粉转移而非其操作负荷。区分当期实测实物排放与历史结转排放负荷。 | D_i; O_i; C_i; lot attribution; shared allocation | unnormalised A_i and carry reconciliation |  |
| calc_normalize | all inventory cards | 在calc_conversion、calc_delivery和calc_burden之后，仅一次报告x_i=A_i/Q每1kg净交付湿膏。终端膏Q/Q=1kg。卡片数量规则和protocol aggregation_rule均指同一次报告操作，collection_method从不预除Q。已经归一的向量不得再除。 | A_i; Q | x_i per1kg net delivered cream |  |
| calc_physical_closure | complete physical mass elements and water | 逐物理组分：期初原料在制品成品加外部收料及实际有证据反应吸收，等于交付加期末原料在制品成品加实际废物排放及独立支持的转化，明确取样退回不确定性。放行P为内部项。按实际分析保留C/Si/Ca及水子账。残差不能证明反应气水蒸发或COD推导物种。 | physical stock and receipts; delivery; waste; emissions; assays; independently supported species | separate closure and unresolved residual | nist-water-phase |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_recipe | all materials | 确认实际整份供货状态全部成分变性剂等级浓度地理路线；公开列表专利实例不能填未知比例纯度。 | 供应商原件工艺记录完整物料表 |
| quality_gate | reference and burdens | 须正Q唯一验收交付账与原始分子结转勾稽。库存负荷未解决或遗漏失败运行时交付结果不完整。 | 批次退回在制品成品原始期间审计 |
| quality_species | emissions and water | 保留检出限检测覆盖不确定性；缺失不等于零。每个物种因子反应水声明独立论证；物理蒸发捕集尘分立。 | 原始源检测分析及物种证据 |
| quality_native | all selected UUIDs | 宽参考身份保留全部披露名称注释地理属性限制。生产数据前核对辅助原生身份与供应商provider；UUID或Schema成功不是方法批准。 | 完整精确原生原件及provider兼容证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_cream | 要求唯一声明终端产品行与参考UUID、1kg Mass及实际交付门Q一致；不得将共用UUID的中间物或联产品改名绕过。保留十三项完整必需限定信息。 |  |
| validate_inventory | cream_delivery | 每卡一项物理交换。真实投入废物排放物种操作结转负荷完整；条件项不存在须有不适用证据。不默认零VOC粉尘，不凭标签添加漂白剂香精。 | ecover-cream-supply; niosh-carbonate-dust; niosh-ethanol-volatility |
| validate_accounting | all ledgers | 核对单位换算无重复归一、完整在制品成品结转、退回共享分配、物理质量元素闭合及独立支持的物种反应水与物理蒸发区分。未解释残差是发现项，不能拟合为排放。 | nist-water-phase |
| validate_evidence | dataset applicability | EPO实验室对比膏不是Ecover配方或工厂；不强加专利转速配方百分比pH磨损用量或排放因子。制造商营销不是功能等效；数据集真实配方门检测决定适用性。 | omya-cream-dispersion; ecover-cream-supply |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 按质量提供明确限定擦洗膏至声明交付门的上游供应 |
| allowed_use | 用于SKU化学物态供应路线门及完整负荷核算匹配的情形 |
| excluded_use | 通用CPC35334默认值、皂表活合成、漂白酸产品、抛光或清洁用量等效、纯矿物供应 |
| required_metadata | 全部必需限定信息期间路线真实场址库存范围原始账owner及来源身份 |
| required_quality_disclosure | 参考原生分类债务、辅助provider身份未决、配方不确定性、检测限制、库存结转及覆盖；不推断科学批准 |
| update_trigger | 配方等级供货状态包装实际工艺门来源provider或物种证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ecover-cream-supply | literature | Ecover Global, Cream Cleaner, snapshot2026-10-16. https://global.ecover.com/global/products/ecover/cream-cleaner/ | 仅500ml瓶供货及公开成分组；无工厂工艺比例浓度树脂等级质量密度地点功效因子；不采用使用说明数值。 |
| omya-cream-dispersion | literature | Omya International AG, EP2883573A1,2015-06-17, Example3 paras0130-0133 Table7 comparative Sample10, PDFp14. https://data.epo.org/publication-server/rest/v1.2/publication-dates/20150617/patents/EP2883573NWA1/document.pdf | 原始实验室湿分散GCC膏过程拆解；碱增稠剂柠檬聚山梨酯配方不同，不是Ecover制造工业速率或数值默认；排除样品11/12表面反应矿物。 |
| niosh-carbonate-dust | official_guidance | NIOSH Pocket Guide, Calcium carbonate, reviewed2019-10-30, snapshot2026-10-16. https://www.cdc.gov/niosh/npg/npgd0090.html | 独立纯碳酸钙粉尘及天然合成身份背景；不是石英证据排放因子产品密度，不能由职业限值推排放质量。 |
| niosh-ethanol-volatility | official_guidance | NIOSH Pocket Guide, Ethyl alcohol, reviewed2019-10-30, snapshot2026-10-16. https://www.cdc.gov/niosh/npg/npgd0262.html | 仅独立纯乙醇挥发物种证据；不是混合物损失率实际变性剂身份混合物密度或零VOC。 |
| nist-water-phase | official_guidance | NIST Chemistry WebBook SRD69, Water, phase change data, snapshot2026-10-16. https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=4 | 仅独立物理水相变背景；无反应水化学计量场址蒸发或热能因子。 |
| niosh-quartz-dust | official_guidance | NIOSH Pocket Guide, Silica crystalline as respirable dust, snapshot2026-10-16. https://www.cdc.gov/niosh/npg/npgd0684.html | 仅独立石英结晶二氧化硅颗粒身份；无产品排放因子实际等级膏密度，不能把浓度限值换成排放质量。 |
