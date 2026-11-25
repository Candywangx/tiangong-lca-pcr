---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-hides-skins-and-leather
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 整张干盐渍牛原皮的非专门商店店内零售服务

## 1. 范围与适用性

本方法仅覆盖非专门零售店向终端自用顾客交接一整张未鞣制、毛被状态明确的干盐渍牛原皮的服务。以物种、整张规格及尺寸或质量等级、保存状态、毛被和质量等级声明同配置池；不同配置不可直接合并。仅限店内自取、人工搬运、非机械调温的干态存放区；收货时保存处理已完成。现场不再撒盐、盐渍、浸泡、清洗原皮、裁切、脱毛或鞣制。此为明确子集，不能泛化到整个分类叶。UN 解释仅列 0295 原皮、生皮和生毛皮；标题中的 leather 不构成纳入鞣革的依据。该分类边界采用 `un-cpc-62115`；保存状态差异采用 `fao-hides-2009` 的定性说明，不引用其时间、含水量、盐率或行业均值。

排除鲜皮、湿盐皮、冷藏或冷冻路线、其他物种和生毛皮、半张或皮块、鞣革、皮革制品、批发、配送及顾客后续加工。顾客出行和商品成功售出后的使用及报废不属于该增量服务。实际机械制冷、燃烧供热、害虫防治、不同包装或化学品、车辆、维修或其他资产若被发现，不能静默省略：须先新增具体双语原子卡、单过程协议、计算与身份审查，再同步并审查扩展范围。未知配置不满足本路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-hides-skins-and-leather |
| classification_refs | CPC 3.0 62115; narrower |
| covered_products | 整张干盐渍牛原皮的非专门店内终端自用零售服务 |
| excluded_products | 鞣革；皮革制品；批发；配送；现场保存加工；其他物种与状态 |
| representative_product | 一个同配置池中一整张原皮最终保留验收对应的服务 |
| production_route | 已保存原皮收货 → 身份与品级核对 → 被动干态存放 → 人工包装与店内交接 → 退货及最终去向核对 |
| market_state | 未鞣制；干盐渍；整张；毛被、盐及含水状态有记录；店内终端自用 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 从零售收货闸口至顾客店内保留验收的整张原皮增量零售服务 |
| How much | 一整张同配置原皮对应的一项完成服务；不是一张原皮商品的生产 |
| How well | 核对物种、整张完整性、品级、毛被、保存及污染状态，符合实际顾客验收规格；不规定无依据的性能阈值 |
| How long or cycle | 声明池时间及退货观察截止日，贯穿收货、存放、交接及迟发退回校正；不设默认存放期 |
| reference_flow_link | service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一整张干盐渍牛原皮的店内零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | pool_id; configuration_id; 终端自用顾客及店内渠道; 牛物种及来源; 整张规格与尺寸或质量品级; 未鞣制干盐渍状态及毛被; 原始收货与验收净质量; 含水与盐状态及测量方法; 验收规格及污染状态; 收货与顾客闸口; 池期间及退货关闭日; 退回重售与损失责任; 场址电力边界及无机械调温证据; 资产与终端责任账; 身份和背景未解决项 |

必需限定信息须在实际数据包逐项声明。服务流 UUID 尚未核验，不可使用原皮商品 UUID 替代；计数属性和单位组本身不能证明服务流身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| service_count | service | 物品数量 | Item(s) | 仅按经过合格验收且最终由顾客保留的唯一整张原皮计服务 N；支付行和重复交接不作产出。外部保留的拒收商品为单独 F 去向。纯价格折让保持 N 不变。 |
| physical_mass | ldpe_sheet; cotton_twine; water; hypochlorite_solution; saline_wastewater; discarded_hide; salt_sweepings; ldpe_scrap; twine_scrap; receipt_board; water_vapour; air_water; removed_load_cell; retired_scale; retired_rack; shell_demolition | 质量 | kg | 物料以实际状态净质量记录；原皮商品、盐及水分别核对。包装和松散盐排除在原皮验收净质量之外；附着盐及原生水分保留且声明。不得用物品数量代替未知质量。 |
| liquid_conversion | water; hypochlorite_solution; saline_wastewater | 质量 | kg | 体积乘同批次、同温度实测密度；制剂质量与有效成分质量不重复。实测排水不加蒸发或贮存变化；供水表进口不再扣回用。 |
| single_normalization | all inventory rows | 按交换定义的属性 | per reference flow | 先取得原始总量，完成一次归属，再除 N 一次；N=0 的池保留总量且不可归一化，不得删除或设为零。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已完成保存处理的整张干盐渍牛原皮抵达店方收货闸口；原皮、包装、盐及水状态和所有权有记录 |
| starting_condition_role | incremental_retail_service |
| product_classification_scope | CPC 3.0 62115 的明确子集，0295 原皮；不含鞣革 |
| recursive_input_rule | 不得把同类零售服务作为未说明的递归投入；实际外包环节必须有不重复的具体边界与卡 |
| upstream_dataset_requirement | 供应投入采用实际供应数据；原皮及其原收货前运输留在商品链，仅服务责任造成的永久损失在 lost_hide_supply 耦合一次 |
| disclosure | 声明闸口、渠道、全部池、商品与服务背景责任、资产、外包和未知项；本方法不构成完整产品足迹或标准符合性声明 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_receipt` | service; lost_hide_supply; discarded_hide; receipt_board | 在同一收货闸口，为每张原皮确定商品系统的生产、保存、供应商包装与进货运输责任方。成功售出或重售商品保留该责任方；不得对每张进货给本服务增加供应。服务造成的不可恢复损失，通过 lost_hide_supply 将原闸口背景转入一次，包括匹配的进货运输。退供应商须有明确持续背景责任和核实去向；抵款或退款不证明恢复。 | ghg-product-2011 |
| `boundary_terminal` | all inventory rows | 纳入全部服务运行、卫生、包装、实际维修、相关完整资产制造安装及终端责任。处理供应方从实测交接点开始，对收集运输和处理各明确一次。资产供应数据排除这里已表达的运行、更换及寿命终结。 | jrc-retail-2013 |
| `boundary_screen` | all inventory rows | 通过场址检查、合同和台账，覆盖全池筛查公用工程、制冷、燃烧、化学或虫害处理、运输、排水、直接排放、进货包装及全部资产。仅有证据证明不存在才可条件排除；未知项须采集。具体卡外的实际交换须先双语原子扩展后才能称数据完整。 | jrc-retail-2013 |
| `boundary_external_fate` | service; lost_hide_supply; discarded_hide | 外部保留但被拒收的商品记为 F，并记录实际保管方与实物状态；F 不是 N，也不自动成为 discarded_hide。确定谁继续承担生产、保存及进货运输背景，以及服务造成不可恢复损失时是否经 lost_hide_supply 转入。未有合格验收、核实重售或退回、或确认处置前，去向和责任保持未解决；单纯价格折让不改变商品去向或 N。 | ghg-product-2011 |
| `boundary_capital_components` | building_shell; steel_rack; digital_scale; scale_load_cell; removed_load_cell; retired_scale; retired_rack; shell_demolition | building_shell 完整实物包包括地基、承重及围护构件、屋顶/墙/地板、永久隔断、门窗、固定电气布线与控制配电以及永久安装灯具，连同其初次安装。排除独立表达的 steel_rack、digital_scale 及全部称重传感器，排除其他可移动或插接设备、后续更换维修、运行及终端处理。该固定包范围为强制规定，不是后续建模者可自由选择的范围。shell_demolition 载体采用相同组分范围，仅计实际剩余物料；货架、衡器和另行拆下的配件不得再进入其终端质量。固定设施若另行拆出，须新增实际具体原子载体与事件卡，并核对剩余壳体载体，已为净重时不得再扣一次拆件。供应方完整包清单或规格须匹配此范围及明确的跨卡重叠矩阵；组成不明、遗漏或重叠须先解决，否则阻断数据完整性。 | ghg-product-2011; jrc-retail-2013 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 收货、被动干态存放与店内交接 | required | 全部范围内零售事件，包括失败交接 | foreground_service | N 项最终保留验收的整张原皮服务 |
| hygiene | 场所卫生 | conditional | 实际湿法清洁或使用所列清洁剂；须据证据判定不存在 | supporting_process | 归属于 N 的实际清洁事件 |
| fates | 商品责任与剩余去向 | required | 全部收货原皮身份及关联废物或环境水分传递 | supporting_process | 与 N 核对的全部池去向 |
| capital | 使用资产的制造与初次安装 | required | 全部所用货架、衡器及建筑壳体容量，无论自有或租赁 | supporting_process | 持久账记录的完整资产归属份额 |
| maintenance | 实际衡器称重传感器更换 | conditional | 有日期工单证实更换；另外筛查全部其他实际维修 | supporting_process | 实际归属更换事件 |
| retirement | 资产终端责任 | required | 使用资产须有证据的实际或拟定完整终端载体 | supporting_process | 持久账记录的完整终端载体责任 |

### 过程：收货、被动干态存放与店内交接（`retail`）

#### 输入

##### 产品流

###### 交流电（`electricity`）

收货、干态存放、照明、结账和称重的使用点交流电。供应方电压与供电组合另需场址证据；此流身份不证明供电绩效。 纳入条件：始终纳入

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：3.6 * E_attr / N；cp_electricity
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 低密度聚乙烯包裹薄膜（`ldpe_sheet`）

为成功或失败交接实际消耗的新低密度聚乙烯单一聚合物薄膜。随顾客交付的包装仍计为投入；顾客闸口后的处置不纳入。 纳入条件：仅在使用低密度聚乙烯包裹膜时；以包装规格及领用账证明未使用。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：LDPE_attr / N；cp_ldpe_sheet
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ldpe_sheet`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 未涂层棉捆扎绳（`cotton_twine`）

用于捆扎整张原皮的一种未涂层棉绳产品；不是其他纤维绳的选择占位符。 纳入条件：仅在使用该棉绳时；保留捆扎规程与库存证据证明未使用。

- 选定流：未涂层棉捆扎绳
- 流属性/单位：质量 / kg
- 数量规则：Twine_attr / N；cp_cotton_twine
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cotton_twine`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

#### 输出

##### 产品流

###### 一整张干盐渍牛原皮的店内零售服务（`service`）

计数产品是具有记录的顾客店内验收时完成的零售服务，不是原皮商品或支付交易。 纳入条件：始终纳入

- 选定流：一整张干盐渍牛原皮的店内零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

### 过程：场所卫生（`hygiene`）

#### 输入

##### 产品流

###### 零售清洁使用点的自来饮用水（`water`）

为场所卫生而进口的水，不用于原皮浸泡、脱盐或再保存处理。供水生产属于供应方，本地使用属于本过程。 纳入条件：采用湿法场所卫生时；以清洁规程和用水筛查证明未使用。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Water_attr_kg / N；cp_water
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 次氯酸钠水溶液清洁剂（`hypochlorite_solution`）

一种购入的场所卫生用次氯酸钠水溶液制剂，声明实际有效组分比例和添加剂。本卡不指定消毒剂、浓度或安全阈值。 纳入条件：仅在使用此制剂时；以化学品库存和清洁规程证明未使用。

- 选定流：次氯酸钠水溶液清洁剂
- 流属性/单位：质量 / kg
- 数量规则：Solution_attr_kg / N；cp_hypochlorite_solution
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hypochlorite_solution`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

#### 输出

##### 废物流

###### 含盐场所清洁废水（`saline_wastewater`）

清洁产生并排出的一个实际湿载体，测定氯化物、悬浮有机污染物和清洁剂残留，不是各组分废物交换的加总。 纳入条件：湿法卫生有废水载体排出时；以规程及罐体或排水检查证明无排放。去向或体积未知为未解决。

- 选定流：含盐场所清洁废水
- 流属性/单位：质量 / kg
- 数量规则：Effluent_attr_kg / N；cp_saline_wastewater
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_saline_wastewater`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

### 过程：商品责任与剩余去向（`fates`）

#### 输入

##### 产品流

###### 零售收货闸口的整张干盐渍牛原皮，归属于服务造成的损失（`lost_hide_supply`）

零售责任区间内永久损失的唯一原皮的背景供应，包括相匹配的保存处理及至收货闸口运输；不是对每张售出或退回原皮另加供应。 纳入条件：发生永久商品损失时；否则以完整去向账平衡证明无损失。

- 选定流：零售收货闸口的整张干盐渍牛原皮，归属于服务造成的损失
- 流属性/单位：物品数量 / Item(s)
- 数量规则：L / N；cp_lost_hide_supply
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lost_hide_supply`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

##### 基本流

###### 从环境空气吸收的水分（`air_water`）

原皮与空气界面的原生水分传递，介质为环境空气。落盐、液体排出和固体降解分别处理；未识别的质量差不是水。 纳入条件：仅在测量区间有正向证据证明原皮吸收环境水分时。

- 选定流：从环境空气吸收的水分
- 流属性/单位：质量 / kg
- 数量规则：Water_negative_kg / N；cp_air_water
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air_water`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

#### 输出

##### 废物流

###### 废弃整张干盐渍牛原皮（`discarded_hide`）

实际交给处理方的不可恢复腐败或损坏原皮，包括附着盐和原生水分。 纳入条件：仅在实际原皮被废弃时；无实物回收的失窃不得自动计为废物。

- 选定流：废弃整张干盐渍牛原皮
- 流属性/单位：质量 / kg
- 数量规则：W_discarded_hide / N；cp_discarded_hide
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_discarded_hide`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 被原皮有机物污染的使用后氯化钠清扫物（`salt_sweepings`）

分离收集的松散保存盐及不可分离的原皮有机污染物；不计清洁盐替代收益。 纳入条件：收货原皮落盐或存放区清扫产生该载体时。

- 选定流：被原皮有机物污染的使用后氯化钠清扫物
- 流属性/单位：质量 / kg
- 数量规则：W_salt_sweepings / N；cp_salt_sweepings
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_salt_sweepings`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 零售低密度聚乙烯薄膜边角料（`ldpe_scrap`）

仅为店内低密度聚乙烯剪余膜及废弃包裹膜，不含交给顾客的包装。 纳入条件：存在店内低密度聚乙烯废膜时。

- 选定流：零售低密度聚乙烯薄膜边角料
- 流属性/单位：质量 / kg
- 数量规则：W_ldpe_scrap / N；cp_ldpe_scrap
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ldpe_scrap`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 零售未涂层棉绳剪余料（`twine_scrap`）

仅为店内未涂层棉绳剪余料，不含顾客包装中保留的棉绳。 纳入条件：存在店内棉绳剪余料时。

- 选定流：零售未涂层棉绳剪余料
- 流属性/单位：质量 / kg
- 数量规则：W_twine_scrap / N；cp_twine_scrap
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_twine_scrap`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 收货包装废瓦楞纸板（`receipt_board`）

随商品收货并在店内废弃的分离瓦楞纸板；其制造留在商品供应中，除非属于已耦合的损失商品份额。 纳入条件：进货使用瓦楞纸板时；以供应商包装规格证明未使用。

- 选定流：收货包装废瓦楞纸板
- 流属性/单位：质量 / kg
- 数量规则：W_receipt_board / N；cp_receipt_board
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_receipt_board`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

##### 基本流

###### 排入环境空气的水蒸气（`water_vapour`）

原皮与空气界面的原生水分传递，介质为环境空气。落盐、液体排出和固体降解分别处理；未识别的质量差不是水。 纳入条件：仅在测量区间有正向证据证明原皮水分逸入空气时。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Water_positive_kg / N；cp_water_vapour
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water_vapour`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

### 过程：使用资产的制造与初次安装（`capital`）

#### 输入

##### 产品流

###### 完整钢制原皮存放架（`steel_rack`）

一个指定完整实物资产的份额，包括制造与初次安装。须匹配实际完整资产供应数据集；无关维修材料质量的加总不得称为一个资产。 纳入条件：始终纳入

- 选定流：完整钢制原皮存放架
- 流属性/单位：物品数量 / Item(s)
- 数量规则：F_steel_rack / N；cp_steel_rack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steel_rack`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 完整数字零售衡器（`digital_scale`）

一个指定完整实物资产的份额，包括制造与初次安装。须匹配实际完整资产供应数据集；无关维修材料质量的加总不得称为一个资产。 纳入条件：始终纳入

- 选定流：完整数字零售衡器
- 流属性/单位：物品数量 / Item(s)
- 数量规则：F_digital_scale / N；cp_digital_scale
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_digital_scale`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 含固定电气及照明设施的完整零售建筑壳体（`building_shell`）

一个指定完整实物资产的份额，包括制造与初次安装。须匹配实际完整资产供应数据集；无关维修材料质量的加总不得称为一个资产。 纳入条件：始终纳入

- 选定流：含固定电气及照明设施的完整零售建筑壳体
- 流属性/单位：物品数量 / Item(s)
- 数量规则：F_building_shell / N；cp_building_shell
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_building_shell`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

### 过程：实际衡器称重传感器更换（`maintenance`）

#### 输入

##### 产品流

###### 完整替换衡器称重传感器（`scale_load_cell`）

与衡器匹配且实际安装的替换称重传感器，不是假定年度更换，也不属于原始衡器制造。 纳入条件：发生称重传感器更换时；以工单和资产检查证明未发生。

- 选定流：完整替换衡器称重传感器
- 流属性/单位：物品数量 / Item(s)
- 数量规则：Part_attr / N；cp_scale_load_cell
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_scale_load_cell`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

#### 输出

##### 废物流

###### 拆下的完整称重传感器电子废物（`removed_load_cell`）

与 scale_load_cell 同一有日期更换工单实际拆下的已识别传感器的实测终端载体。纳入条件：仅实际配对的更换与拆除事件符合；须核对 maintenance_id、removed_part_id 及新安装配件记录。不假定默认未来拆除。仍位于完整衡器内的原始传感器仅属于 retired_scale，不得产生本独立终端流。退役衡器使用其实测剩余净质量，先前拆件不得再次扣除。实际拆除后的质量或去向未知仍为未解决，不能视为不存在。

- 选定流：拆下的完整称重传感器电子废物
- 流属性/单位：质量 / kg
- 数量规则：T_removed_load_cell / N；cp_removed_load_cell
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_removed_load_cell`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

### 过程：资产终端责任（`retirement`）

#### 输出

##### 废物流

###### 退役完整数字衡器电子废物（`retired_scale`）

完整衡器，扣除另有记录的先前拆件的实测终端载体。终端搬运和处理不属于制造、初次安装及日常运行。 纳入条件：资产或配件存在时纳入，记录未来或实际终端路线；质量或路线未知为未解决，不能视为不存在。

- 选定流：退役完整数字衡器电子废物
- 流属性/单位：质量 / kg
- 数量规则：T_retired_scale / N；cp_retired_scale
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retired_scale`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 退役完整钢货架废料（`retired_rack`）

完整货架及附着涂层的实测终端载体。终端搬运和处理不属于制造、初次安装及日常运行。 纳入条件：资产或配件存在时纳入，记录未来或实际终端路线；质量或路线未知为未解决，不能视为不存在。

- 选定流：退役完整钢货架废料
- 流属性/单位：质量 / kg
- 数量规则：T_retired_rack / N；cp_retired_rack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retired_rack`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 零售建筑壳体及固定设施混合拆除废物（`shell_demolition`）

一个有组成记录的实际混合壳体拆除载体的实测终端载体。终端搬运和处理不属于制造、初次安装及日常运行。 纳入条件：资产或配件存在时纳入，记录未来或实际终端路线；质量或路线未知为未解决，不能视为不存在。

- 选定流：零售建筑壳体及固定设施混合拆除废物
- 流属性/单位：质量 / kg
- 数量规则：T_shell_demolition / N；cp_shell_demolition
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_shell_demolition`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_pool` | all inventory rows | 在结果已知前按配置、场址和区间声明前瞻池。同配置池保留失败、零销售、关闭及闲置批次；N=0 的池保留分子并明确不可归一化。不得合并无关配置制造产出。后续实物退货及重售按实际日期修订原始池服务分子、N 和去向，不得把同一历史作为新工作分到新池。 | ghg-product-2011 |
| `allocation_drivers` | all inventory rows | 优先采用直接细分与计量。共享照明和存放按全部实际商品实测占用面积时数归属；衡器、结账设备及其维修按记录任务分钟；卫生按实测受影响面积与清洁事件；货架按占用容量时数；建筑壳体按面积时数。直接量与共享分配须核对全部实测总量，并保留公共闲置、关闭及失败负荷。零驱动区间前须声明持续容量受益方；受益方缺失或总驱动为零时保持未解决。不得用销售额或售出原皮数量替代已证明的物理驱动。 | ghg-product-2011 |
| `allocation_asset` | steel_rack; digital_scale; building_shell; scale_load_cell; removed_load_cell; retired_scale; retired_rack; shell_demolition | 每个完整资产保持跨全部受益方与期间的唯一持久账。仅分配应归属的剩余制造安装份额，结转既有归属和最终残余，并在寿命修订后校正历史，不得重新开始整套负荷。运行、实际更换和终端载体账须互斥。终端责任采用独立核对的全寿命份额；禁止对同一终端质量既乘终端份额又乘制造份额。 | ghg-product-2011 |
| `allocation_fate` | all inventory rows | 本路线不设可售共产品收益。污染盐、原皮及包装为对应接收处理的实际载体；仅在有接收方、状态及持续责任证据时记录再用或退供应商。拒收商品或失败交接不自动成为废物或获得避免产品收益。任何可售回收产出须在使用前具名建卡、明确实际功能并独立审查分配。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_electricity | retail | electricity | measured_event_ledger | meter_id; interval_id; opening_kWh; closing_kWh; direct_kWh; common_kWh; beneficiary_id; area_hours; staff_task_minutes; outage; closed_period | 逐区间读取经核验电表，核对账单与分表边界。直接任务用电与公共照明分开；后者按所有商品受益方实测占用面积时数分配，包括闲置库存。结账设备仅按记录的员工任务分钟分配。关闭、失败和零驱动区间仍须保留并确定持续容量受益方；驱动缺失为未解决。 | MJ | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_ldpe_sheet | retail | ldpe_sheet | measured_event_ledger | roll_id; opening_kg; receipts_kg; closing_kg; issued_kg; unused_return_kg; shared_use_kg; event_id; offcut_id | 用经校准的秤称量膜卷的领出及未使用退库量，并与原皮事件核对，包括废弃包装和重新包裹。数量采用领出减未使用退库减独立记录的其他受益方用量。期初加收货减期末库存仅作独立盘存核对；内部退库已包含期末库存，不得再从净库存消耗扣一次退库量。以供应商规格确认聚合物和添加剂；其他复合膜须另建卡。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_cotton_twine | retail | cotton_twine | measured_event_ledger | spool_id; dispensed_kg; unused_return_kg; other_use_kg; measured_m; measured_kg_per_m; event_id; material_spec | 称量领出线轴与未用退库量，将消耗和剪余绳对应同一服务事件。核验纤维与涂层组成。仅在直接质量不可得时，使用实测长度乘供应商核实的实测线密度，并保留校准样本。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_service | retail | service | measured_event_ledger | pool_id; hide_id; configuration_id; receipt_event; original_sale_event; presentation_event; event_date; accepted; qualified_acceptance; refused; externally_retained_refused_F; physical_return; refund_only; resale; transfer; final_state; final_recipient; closure_date; receipt_net_kg; accepted_net_kg; grade; species; preservation; hair_state; moisture_method; salt_state | 逐整张原皮身份扫描，贯穿收货至最终去向。每次事件及池关闭时核对收银、验收签字、盘存及实物退货。经过合格验收且最终由顾客保留的每张原皮只计一次。仍由外部人员实物持有的拒收原皮是 F 去向，不是产出 N；须独立记录实际接收方、状态及持续背景责任。拒收、内部转移及重复交接不产生输出。没有实物或合格性撤销的纯财务退款及价格折让不改变 N。记录迟发实物退货的实际日期，重开原始池的分子和分母，并链接重售且不重复其早期负荷。 | Item(s) | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_water | hygiene | water | measured_event_ledger | meter_id; interval_id; quantity_mode; direct_import_kg; imported_m3; density_kg_per_m3; temperature_C; task_id; beneficiary_id; allocated_fraction | 在清洁事件读取进口水表，与供水账单及全部受益方核对。按记录温度取得可追溯的场址或供应商密度测量值。进口水表已排除内部回用，不得再次扣回用量。区分场所卫生与本路线不含的原皮处理。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_hypochlorite_solution | hygiene | hypochlorite_solution | measured_event_ledger | product_id; batch_id; quantity_mode; solution_kg; measured_solution_m3; density_kg_per_m3; active_mass_fraction; additive_composition; temperature_C; unused_return_kg; task_id; allocation_fraction | 称量实际制剂领出及退回量，核验配方和有日期的安全技术说明书，并对应清洁事件。按体积测量时使用该批次密度和温度。投入为制剂溶液质量；有效组分质量只作辅助核对，不另增产品投入。其他清洁剂须另建具体原子卡。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_saline_wastewater | hygiene | saline_wastewater | measured_event_ledger | discharge_id; discharge_m3; effluent_density_kg_per_m3; temperature_C; chloride; solids; residual_oxidant; recipient_id; treatment_boundary; allocated_fraction; transport_manifest | 用经校准的流量测量及代表性样本密度测量实际排水或罐体外送量。保留接收管网或场外处理的验收、组成和路线。供应方处理从记录的交接处开始；运输在供应包内或另行实测建模，两者不能同时计。蒸发及滞留水须独立记录，不得作为排放量。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_lost_hide_supply | fates | lost_hide_supply | measured_event_ledger | hide_id; receipt_event; original_pool_id; receipt_net_kg; species; preservation; grade; loss_event; loss_cause; final_recipient; supplier_return_acceptance; background_owner; supplier_dataset_basis; inbound_transport_scope | 使用 cp_service 原始事件 ID 的单过程视图。识别零售方责任下不可恢复的损失，与实物库存及接收方确认核对。重售或可转移商品继续留在原有商品背景链；退供应商须保留已确定的持续责任归属。失窃或遗失商品即使无废物载体也保留上游负荷。每张原皮供应数据须与原收货质量和保存状态相匹配。 | Item(s) | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_discarded_hide | fates | discarded_hide | measured_event_ledger | hide_id; waste_id; gross_kg; tare_kg; disposal_state; salt_content; moisture; recipient_id; route; background_owner | 交接前用经校准的秤逐个称量分离载体，扣容器皮重，记录实际水分与污染，将废物 ID 和原皮或收货 ID 对应已签收的接收方及路线记录。保留贮存变化，不得再把载体按组分或处理服务质量重复计入。不自动计替代收益。是否存在、质量或处理边界未知时不能称完整。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_salt_sweepings | fates | salt_sweepings | measured_event_ledger | waste_id; gross_kg; tare_kg; moisture; chloride; organic_fraction; hide_event_ids; recipient_id; route | 交接前用经校准的秤逐个称量分离载体，扣容器皮重，记录实际水分与污染，将废物 ID 和原皮或收货 ID 对应已签收的接收方及路线记录。保留贮存变化，不得再把载体按组分或处理服务质量重复计入。不自动计替代收益。是否存在、质量或处理边界未知时不能称完整。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_ldpe_scrap | fates | ldpe_scrap | measured_event_ledger | waste_id; gross_kg; tare_kg; polymer; contamination; event_ids; recipient_id; route | 交接前用经校准的秤逐个称量分离载体，扣容器皮重，记录实际水分与污染，将废物 ID 和原皮或收货 ID 对应已签收的接收方及路线记录。保留贮存变化，不得再把载体按组分或处理服务质量重复计入。不自动计替代收益。是否存在、质量或处理边界未知时不能称完整。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_twine_scrap | fates | twine_scrap | measured_event_ledger | waste_id; gross_kg; tare_kg; fibre; contamination; event_ids; recipient_id; route | 交接前用经校准的秤逐个称量分离载体，扣容器皮重，记录实际水分与污染，将废物 ID 和原皮或收货 ID 对应已签收的接收方及路线记录。保留贮存变化，不得再把载体按组分或处理服务质量重复计入。不自动计替代收益。是否存在、质量或处理边界未知时不能称完整。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_receipt_board | fates | receipt_board | measured_event_ledger | waste_id; receipt_id; gross_kg; tare_kg; coating; moisture; contamination; recipient_id; route | 交接前用经校准的秤逐个称量分离载体，扣容器皮重，记录实际水分与污染，将废物 ID 和原皮或收货 ID 对应已签收的接收方及路线记录。保留贮存变化，不得再把载体按组分或处理服务质量重复计入。不自动计替代收益。是否存在、质量或处理边界未知时不能称完整。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_water_vapour | fates | water_vapour | measured_event_ledger | hide_id; interval_id; opening_net_kg; closing_net_kg; opening_water_fraction; closing_water_fraction; moved_water_kg; moisture_method; uncertainty; air_compartment | 在同一标记状态及区间配对经校准的净称重与代表性水分测量，校正明确的收货、销售、退货及废物移动，并独立核对盐和组织固体平衡。确认空气介质及超出测量不确定性的方向，不得推定默认含水量；未知差额保持未解决。区间互斥，同一区间不得同时出现相反方向的净流。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_air_water | fates | air_water | measured_event_ledger | hide_id; interval_id; opening_net_kg; closing_net_kg; opening_water_fraction; closing_water_fraction; moved_water_kg; moisture_method; uncertainty; air_compartment | 在同一标记状态及区间配对经校准的净称重与代表性水分测量，校正明确的收货、销售、退货及废物移动，并独立核对盐和组织固体平衡。确认空气介质及超出测量不确定性的方向，不得推定默认含水量；未知差额保持未解决。区间互斥，同一区间不得同时出现相反方向的净流。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_steel_rack | capital | steel_rack | measured_event_ledger | asset_id; 货架尺寸和额定载荷；工厂涂层；安装配置; commissioned_date; ledger_snapshot_at; current_pool_start; total_life_capacity; prior_attributed_fraction; period_capacity; pool_capacity; remaining_all_capacity; all_beneficiaries; idle_capacity; revised_life_capacity; background_boundary | 维护跨期间及全部商品受益方的持久资产账。记录完整产品数量与技术规格、供应方制造安装范围，按对象分别实测占用货架容量时数、衡器任务分钟或建筑面积时数。闲置容量归属已记录的持续受益方。结转累计份额、残余责任和修订预期服务容量；寿命修订不得重新引入整套制造负荷。供应方范围排除运行、更换件及终端处理。 | Item(s) | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_digital_scale | capital | digital_scale | measured_event_ledger | asset_id; 额定量程；准确度等级；秤台；电子部件；电源; commissioned_date; ledger_snapshot_at; current_pool_start; total_life_capacity; prior_attributed_fraction; period_capacity; pool_capacity; remaining_all_capacity; all_beneficiaries; idle_capacity; revised_life_capacity; background_boundary | 维护跨期间及全部商品受益方的持久资产账。记录完整产品数量与技术规格、供应方制造安装范围，按对象分别实测占用货架容量时数、衡器任务分钟或建筑面积时数。闲置容量归属已记录的持续受益方。结转累计份额、残余责任和修订预期服务容量；寿命修订不得重新引入整套制造负荷。供应方范围排除运行、更换件及终端处理。 | Item(s) | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_building_shell | capital | building_shell | measured_event_ledger | asset_id; building_id; structural_fabric_spec; floor_area; fixed_wiring_and_luminaires_spec; initial_installation_spec; excluded_independent_assets; package_scope_matrix; commissioned_date; ledger_snapshot_at; current_pool_start; total_life_capacity; prior_attributed_fraction; period_capacity; pool_capacity; remaining_all_capacity; all_beneficiaries; idle_capacity; revised_life_capacity; background_boundary | 维护跨期间及全部商品受益方的持久资产账。记录完整产品数量与技术规格、供应方制造安装范围，按对象分别实测占用货架容量时数、衡器任务分钟或建筑面积时数。闲置容量归属已记录的持续受益方。结转累计份额、残余责任和修订预期服务容量；寿命修订不得重新引入整套制造负荷。供应方范围排除运行、更换件及终端处理。 | Item(s) | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_scale_load_cell | maintenance | scale_load_cell | measured_event_ledger | maintenance_id; asset_id; part_id; compatible_spec; installed_count; installation_scope; event_date; beneficiary_driver; all_beneficiary_driver; event_beneficiary_fraction; removed_part_id | 核对有日期的工单、配件发票、安装序列号及拆下零件。按记录的衡器任务将实际事件分配至全部受益方；技术人员出行与安装仅在指定供应边界或独立原子卡计入一次。不得使用无依据的周期频率。其他维修须有独立实测卡后才能称完整。 | Item(s) | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_removed_load_cell | maintenance | removed_load_cell | measured_event_ledger | maintenance_id; asset_id; removed_part_id; installed_part_id; removed_count; linked_replacement_count; event_id; gross_kg; tare_kg; carrier_composition; terminal_fraction; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; recipient_id; treatment_scope; transport_scope | 核对实际 scale_load_cell 更换工单及逐一识别的拆下与装入配件，将 removed_count 与 linked_replacement_count 对账并保留原始序列身份。交接时称量拆下的完整传感器，容器皮重仅扣一次，保留接收方、处理及运输边界。仅使用该配件截至实际拆除的容量时间历史；拆除后不存在未来受益方。仍位于完整退役衡器内的原始传感器不形成独立拆件载体。另行称量的衡器剩余量已排除拆件，不能再次扣减。质量或去向未知须记为未解决。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_retired_scale | retirement | retired_scale | measured_event_ledger | asset_id; event_id; gross_kg; tare_kg; earlier_removed_kg; carrier_composition; terminal_fraction; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; recipient_id; treatment_scope; transport_scope | 称量实际完整外送载体，或使用可追溯的完整资产清单及核验质量。记录先前拆件；明确再扣之前须检查终端称重是否已排除拆件。使用覆盖全部历史受益方和期间的持久终端责任账，将全部终端质量核对一次。退役前估计须使用有记录的完整资产质量及明确的拟定处理路线，标记不确定并在退役时替换；不得发明质量或去向。供应方处理和收集运输只计一次。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_retired_rack | retirement | retired_rack | measured_event_ledger | asset_id; event_id; gross_kg; tare_kg; earlier_removed_kg; carrier_composition; terminal_fraction; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; recipient_id; treatment_scope; transport_scope | 称量实际完整外送载体，或使用可追溯的完整资产清单及核验质量。记录先前拆件；明确再扣之前须检查终端称重是否已排除拆件。使用覆盖全部历史受益方和期间的持久终端责任账，将全部终端质量核对一次。退役前估计须使用有记录的完整资产质量及明确的拟定处理路线，标记不确定并在退役时替换；不得发明质量或去向。供应方处理和收集运输只计一次。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |
| cp_shell_demolition | retirement | shell_demolition | measured_event_ledger | asset_id; event_id; gross_kg; tare_kg; earlier_removed_kg; carrier_composition; terminal_fraction; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; recipient_id; treatment_scope; transport_scope | 称量实际完整外送载体，或使用可追溯的完整资产清单及核验质量。记录先前拆件；明确再扣之前须检查终端称重是否已排除拆件。使用覆盖全部历史受益方和期间的持久终端责任账，将全部终端质量核对一次。退役前估计须使用有记录的完整资产质量及明确的拟定处理路线，标记不确定并在退役时替换；不得发明质量或去向。供应方处理和收集运输只计一次。 | kg | 每事件并在池关闭时核对 | 全池含失败、关闭、闲置及迟发退货修订 | 声明场址及配置；保存原始事件 ID 与全部受益方 | 每参考流 | 计量校准、原始读数、盘点、规格、签收、分配及版本化核对账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_electricity | electricity | E_attr = direct_kWh + sum(common_kWh * eligible_driver / all_beneficiary_driver); electricity_MJ = 3.6 * E_attr / N。kWh 到 MJ 的换算仅在归属后执行一次。 | direct_kWh; common_kWh; eligible_driver; all_beneficiary_driver; N; cp_electricity | electricity_MJ | ghg-product-2011; jrc-retail-2013 |
| calc_ldpe_sheet | ldpe_sheet | LDPE_attr = issued_kg - unused_return_kg - shared_use_kg; LDPE_per_service = LDPE_attr / N。 | opening_kg; receipts_kg; closing_kg; issued_kg; unused_return_kg; shared_use_kg; N; cp_ldpe_sheet | LDPE_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_cotton_twine | cotton_twine | Twine_attr = dispensed_kg - unused_return_kg - other_use_kg; twine_per_service = Twine_attr / N。采用长度法时，dispensed_kg = measured_m * measured_kg_per_m。 | dispensed_kg; unused_return_kg; other_use_kg; measured_m; measured_kg_per_m; N; cp_cotton_twine | twine_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_service | service | N = count(声明的同配置池中经过合格验收且最终由终端顾客保留的唯一 hide_id); service_output = 1 Item(s)。后续实物撤销须修订原始 N 及全部应归属服务总量，不能只改分母。最终重售的原皮仅在最新保留验收时计一次，并关联全部历史。 | hide_id; configuration_id; accepted; qualified_acceptance; physical_return; resale; final_state; closure_date; cp_service | N | ghg-product-2011; jrc-retail-2013 |
| calc_water | water | import_kg = direct_import_kg（quantity_mode=mass）或 imported_m3 * density_kg_per_m3（quantity_mode=volume），两种模式互斥; Water_attr_kg = sum(import_kg * allocated_fraction); water_per_service = Water_attr_kg / N。直接实测质量替代体积密度换算，不能相加。 | quantity_mode; direct_import_kg; imported_m3; density_kg_per_m3; allocated_fraction; N; cp_water | water_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_hypochlorite_solution | hypochlorite_solution | solution_kg 在 quantity_mode=mass 时为实测领出制剂质量，在 quantity_mode=volume 时为 measured_solution_m3 * density_kg_per_m3，两种模式互斥; Solution_attr_kg = sum((solution_kg - unused_return_kg) * allocation_fraction); solution_per_service = Solution_attr_kg / N; auxiliary_active_kg = Solution_attr_kg * active_mass_fraction。溶液交换不得再次乘有效组分比例。 | quantity_mode; solution_kg; measured_solution_m3; density_kg_per_m3; unused_return_kg; allocation_fraction; active_mass_fraction; N; cp_hypochlorite_solution | solution_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_saline_wastewater | saline_wastewater | Effluent_attr_kg = sum(discharge_m3 * effluent_density_kg_per_m3 * allocated_fraction); effluent_per_service = Effluent_attr_kg / N。该实测排放模式不得再加供水减蒸发的重建量。 | discharge_m3; effluent_density_kg_per_m3; allocated_fraction; N; cp_saline_wastewater | effluent_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_lost_hide_supply | lost_hide_supply | L = count(服务承担背景责任的永久损失唯一 hide_id); loss_provision = L / N。质量基准供应模型对这些 hide_id 的 original_receipt_net_kg 求和一次，换算成相同整张原皮供应，不再乘损失率。 | hide_id; loss_event; background_owner; receipt_net_kg; N; cp_lost_hide_supply | loss_provision | ghg-product-2011; jrc-retail-2013 |
| calc_discarded_hide | discarded_hide | W_discarded_hide = sum(归属于该池的 gross_kg - tare_kg); discarded_hide_per_service = W_discarded_hide / N。收集至处理的运输仅在接收供应边界或独立原子运输卡内记录一次。 | gross_kg; tare_kg; waste_id; recipient_id; N; cp_discarded_hide | discarded_hide_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_salt_sweepings | salt_sweepings | W_salt_sweepings = sum(归属于该池的 gross_kg - tare_kg); salt_sweepings_per_service = W_salt_sweepings / N。收集至处理的运输仅在接收供应边界或独立原子运输卡内记录一次。 | gross_kg; tare_kg; waste_id; recipient_id; N; cp_salt_sweepings | salt_sweepings_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_ldpe_scrap | ldpe_scrap | W_ldpe_scrap = sum(归属于该池的 gross_kg - tare_kg); ldpe_scrap_per_service = W_ldpe_scrap / N。收集至处理的运输仅在接收供应边界或独立原子运输卡内记录一次。 | gross_kg; tare_kg; waste_id; recipient_id; N; cp_ldpe_scrap | ldpe_scrap_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_twine_scrap | twine_scrap | W_twine_scrap = sum(归属于该池的 gross_kg - tare_kg); twine_scrap_per_service = W_twine_scrap / N。收集至处理的运输仅在接收供应边界或独立原子运输卡内记录一次。 | gross_kg; tare_kg; waste_id; recipient_id; N; cp_twine_scrap | twine_scrap_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_receipt_board | receipt_board | W_receipt_board = sum(归属于该池的 gross_kg - tare_kg); receipt_board_per_service = W_receipt_board / N。收集至处理的运输仅在接收供应边界或独立原子运输卡内记录一次。 | gross_kg; tare_kg; waste_id; recipient_id; N; cp_receipt_board | receipt_board_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_water_vapour | water_vapour | B = opening_net_kg * opening_water_fraction - closing_net_kg * closing_water_fraction - moved_water_kg; Water_positive_kg = sum(已识别空气传递且 B > uncertainty 区间的 B); water_vapour_per_service = Water_positive_kg / N。moved_water_kg = 实测向外携带水量 - 实测向内携带水量，涵盖收货、实物退回、离库、废盐及废皮和任何已测渗出水。场所卫生用水不进入原皮原生水分账。仅在方向超过声明不确定性且原因已识别时采用空气传递量；未知或误差内差额仍未解决，不得自动设零或当作空气交换。实际渗出液须有独立原子载体卡。此法不测量同时发生的双向总交换。 | opening_net_kg; closing_net_kg; opening_water_fraction; closing_water_fraction; moved_water_kg; uncertainty; N; cp_water_vapour | water_vapour_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_air_water | air_water | B = opening_net_kg * opening_water_fraction - closing_net_kg * closing_water_fraction - moved_water_kg; Water_negative_kg = sum(已识别空气传递且 B < -uncertainty 区间的 -B); air_water_per_service = Water_negative_kg / N。moved_water_kg = 实测向外携带水量 - 实测向内携带水量，涵盖收货、实物退回、离库、废盐及废皮和任何已测渗出水。场所卫生用水不进入原皮原生水分账。仅在方向超过声明不确定性且原因已识别时采用空气传递量；未知或误差内差额仍未解决，不得自动设零或当作空气交换。实际渗出液须有独立原子载体卡。此法不测量同时发生的双向总交换。 | opening_net_kg; closing_net_kg; opening_water_fraction; closing_water_fraction; moved_water_kg; uncertainty; N; cp_air_water | air_water_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_steel_rack | steel_rack | F_steel_rack = (1 - prior_attributed_fraction) * pool_capacity / remaining_all_capacity; steel_rack_per_service = F_steel_rack / N。prior_attributed_fraction 为严格截至当前池本期之前的既有最终累计份额；pool_capacity 为当前池含闲置责任的容量时间归属量。在同一台账快照时点，remaining_all_capacity 包含当前池以及全部剩余未来受益方的暴露量，并使用同一资产特定量纲。修订的当前池份额替换旧版本，不得与旧版本相加。衡器可用分钟按任务记录加有记录的闲置责任归属，货架用容量时数，壳体用面积时数，须一致。跨期结转既有最终份额，将容量与实测可用量核对，最终剩余归属一次。寿命修订须在版本化完整账中替换受影响的历史份额及剩余容量，不得新增整套资产或再乘受益方比例。 | asset_id; ledger_snapshot_at; current_pool_start; prior_attributed_fraction; pool_capacity; remaining_all_capacity; revised_life_capacity; N; cp_steel_rack | steel_rack_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_digital_scale | digital_scale | F_digital_scale = (1 - prior_attributed_fraction) * pool_capacity / remaining_all_capacity; digital_scale_per_service = F_digital_scale / N。prior_attributed_fraction 为严格截至当前池本期之前的既有最终累计份额；pool_capacity 为当前池含闲置责任的容量时间归属量。在同一台账快照时点，remaining_all_capacity 包含当前池以及全部剩余未来受益方的暴露量，并使用同一资产特定量纲。修订的当前池份额替换旧版本，不得与旧版本相加。衡器可用分钟按任务记录加有记录的闲置责任归属，货架用容量时数，壳体用面积时数，须一致。跨期结转既有最终份额，将容量与实测可用量核对，最终剩余归属一次。寿命修订须在版本化完整账中替换受影响的历史份额及剩余容量，不得新增整套资产或再乘受益方比例。 | asset_id; ledger_snapshot_at; current_pool_start; prior_attributed_fraction; pool_capacity; remaining_all_capacity; revised_life_capacity; N; cp_digital_scale | digital_scale_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_building_shell | building_shell | F_building_shell = (1 - prior_attributed_fraction) * pool_capacity / remaining_all_capacity; building_shell_per_service = F_building_shell / N。prior_attributed_fraction 为严格截至当前池本期之前的既有最终累计份额；pool_capacity 为当前池含闲置责任的容量时间归属量。在同一台账快照时点，remaining_all_capacity 包含当前池以及全部剩余未来受益方的暴露量，并使用同一资产特定量纲。修订的当前池份额替换旧版本，不得与旧版本相加。衡器可用分钟按任务记录加有记录的闲置责任归属，货架用容量时数，壳体用面积时数，须一致。跨期结转既有最终份额，将容量与实测可用量核对，最终剩余归属一次。寿命修订须在版本化完整账中替换受影响的历史份额及剩余容量，不得新增整套资产或再乘受益方比例。 | asset_id; ledger_snapshot_at; current_pool_start; prior_attributed_fraction; pool_capacity; remaining_all_capacity; revised_life_capacity; N; cp_building_shell | building_shell_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_scale_load_cell | scale_load_cell | event_beneficiary_fraction = beneficiary_driver / all_beneficiary_driver，来自实际衡器任务并保留有记录的闲置责任; Part_attr = sum(实际 installed_count * event_beneficiary_fraction); part_per_service = Part_attr / N。供应方已含安装时不得重复配置安装服务。 | installed_count; beneficiary_driver; all_beneficiary_driver; event_beneficiary_fraction; maintenance_id; N; cp_scale_load_cell | part_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_removed_load_cell | removed_load_cell | terminal_fraction = lifetime_pool_capacity / lifetime_all_capacity; T_removed_load_cell = sum((gross_kg - tare_kg) * terminal_fraction); removed_load_cell_per_service = T_removed_load_cell / N。仅使用该实际拆下配件截至匹配 scale_load_cell 工单拆除日的全寿命容量时间，含已分配的闲置责任；该日后不存在未来受益方。将 maintenance_id 和 removed_part_id 与配对安装件及逐一拆除更换数量核对。仍留在 retired_scale 内的原始传感器不能独立纳入。最终份额合计为一。用修订 T 替换原始池的 prior_terminal_attribution，另记差额，不得将两个版本或差额再加到 T。载体已为净量时不得再扣 earlier_removed_kg，也不得再次乘制造份额。 | maintenance_id; removed_part_id; removed_count; linked_replacement_count; gross_kg; tare_kg; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; N; cp_removed_load_cell | removed_load_cell_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_retired_scale | retired_scale | terminal_fraction = lifetime_pool_capacity / lifetime_all_capacity; T_retired_scale = sum((gross_kg - tare_kg) * terminal_fraction); retired_scale_per_service = T_retired_scale / N。对全部实际和拟定全寿命受益方使用同一含闲置责任的资产容量时间分区；未来容量缺失保持不确定。最终份额合计为一。用修订 T 替换原始池的 prior_terminal_attribution，另记差额，不得将两个版本或差额再加到 T。载体已为净量时不得再扣 earlier_removed_kg，也不得再次乘制造份额。 | gross_kg; tare_kg; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; N; cp_retired_scale | retired_scale_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_retired_rack | retired_rack | terminal_fraction = lifetime_pool_capacity / lifetime_all_capacity; T_retired_rack = sum((gross_kg - tare_kg) * terminal_fraction); retired_rack_per_service = T_retired_rack / N。对全部实际和拟定全寿命受益方使用同一含闲置责任的资产容量时间分区；未来容量缺失保持不确定。最终份额合计为一。用修订 T 替换原始池的 prior_terminal_attribution，另记差额，不得将两个版本或差额再加到 T。载体已为净量时不得再扣 earlier_removed_kg，也不得再次乘制造份额。 | gross_kg; tare_kg; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; N; cp_retired_rack | retired_rack_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_shell_demolition | shell_demolition | terminal_fraction = lifetime_pool_capacity / lifetime_all_capacity; T_shell_demolition = sum((gross_kg - tare_kg) * terminal_fraction); shell_demolition_per_service = T_shell_demolition / N。对全部实际和拟定全寿命受益方使用同一含闲置责任的资产容量时间分区；未来容量缺失保持不确定。最终份额合计为一。用修订 T 替换原始池的 prior_terminal_attribution，另记差额，不得将两个版本或差额再加到 T。载体已为净量时不得再扣 earlier_removed_kg，也不得再次乘制造份额。 | gross_kg; tare_kg; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; N; cp_shell_demolition | shell_demolition_per_service | ghg-product-2011; jrc-retail-2013 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | 核验每卡真实原子流、方向、类型、状态、介质、属性单位及中英名称；空 UUID 未解决，不能用近似商品或质量属性凑齐服务身份。补齐供应背景与量值后才可声明具体数据完整。 | 官方原始响应、完整性记录、供应规格及逐卡审核 |
| coverage | all inventory rows | 逐卡记录存在、证实不存在或未知；未知不等于零。核对清单外全部实际交换，扩展原子卡及双语协议。 | 全池场址检查、合同、耗材与维修账、排水及废物去向 |
| event_history | service; lost_hide_supply; discarded_hide | 保持每张原皮唯一历史；实物退回与仅退款分离；原池分子、分母及最终责任同时重算，重售不重新生成背景。 | 版本化事件账、库存、验收与供应商及处理方确认 |
| mass_state | all inventory rows | 声明毛被、附着盐、松散盐、净质量、水分与污染的测量状态；分别核对组织固体、盐、水及包装。未知损耗不得当蒸发或废物；容器皮重只扣一次。 | 同一标签称重、代表性水分与盐检测、盘存及不确定性 |
| asset_history | capital; maintenance; retirement | 制造安装、运行、更换、退役互斥，完整资产规格与份额可追溯；寿命修订校正历史并核对全部受益方。未知终端质量和去向须披露并补采，不可为零。 | 持久资产账、工单、完整产品供应范围、终端载体及去向确认 |
| capital_package_scope | building_shell; steel_rack; digital_scale; scale_load_cell; removed_load_cell; retired_scale; retired_rack; shell_demolition | 供应方或制造商完整包身份及清单须匹配 boundary_capital_components；核验所含永久布线与灯具，以及排除的独立货架、衡器、传感器及维修。壳体拆除须采用相同原始/剩余组分范围。供应方范围或重叠未解决是阻断完整性的覆盖缺口。 | 供应清单及安装规格、资产 ID、跨卡组分与重叠矩阵、拆除工单及实测终端载体核对 |
| normalization | all inventory rows | 全池原始量与一次归属可复算；仅最终除 N，零产出池不可归一化；所有分配份额与总计量对账且不重复组分或目的地比例。 | 分子、N、驱动全量、分配总和、公式单位及版本差异 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | service | 物种、保存状态、整张配置、终端自用顾客或实物渠道不符合声明范围的数据包应拒绝。要求全部限定信息及闸口责任。范围改变须方法审查，不能静默替换。 | un-cpc-62115 |
| `validation_inventory` | all inventory rows | 每卡须有唯一且匹配其清单过程的协议 process_id、稳定原始事件 ID、完整单位、声明计算及核实供应方边界。共享事件或资产账的单过程视图复用原始 ID，但不得重复数量。身份、量值、是否不存在、背景或终端责任未知时须表现为未解决覆盖，不能是已认可完整。 | ghg-product-2011; jrc-retail-2013 |
| `validation_reconcile` | all inventory rows | 检查同配置 N、全部失败和零产出批次、实物库存及每项最终去向；迟发退货后重算原始分子和分母。检验分子分配合计、正确量纲、电量与液体换算、互斥水分传递方向、完整资产累计份额及终端载体平衡。拒绝二次归一化、遗漏损失商品负荷、重复商品供应或自动废物与收益假设。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | incremental_retail_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 已证实同配置与闸口的原皮零售服务贡献，结合不重复的商品链 |
| excluded_use | 完整原皮产品足迹；鞣革与皮革制品；批发或配送；未处理的其他保存状态或物种；未知身份视为核验通过 |
| required_metadata | 全部限定信息；原始与修订事件；N；分子与分配；供应及资产终端边界 |
| required_quality_disclosure | 逐卡身份及背景未解决项；是否存在；量值不确定性；零产出池；水分净传递局限；退货观察关闭及残余责任 |
| update_trigger | 规格、物种、保存、渠道、设施、能源、包装、清洁、资产寿命、退货去向或背景责任改变；迟发事件及新证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62115 | official_guidance | UNSD CPC Version 3.0, subclass 62115 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62115 | 分类解释仅0295原皮；子集范围判断，不证明市场规模或具体前景量 |
| fao-hides-2009 | handbook | Leach I. and Wilson R.T. (2009), Higher value addition through hides and skins, FAO Diversification booklet 8, pp.13-15 and22-23; https://www.fao.org/4/i0523e/i0523e.pdf | 仅保存状态、原皮与皮革差异、分级和标签的定性背景；不采用数值默认或完整技术规程 |
| ghg-product-2011 | standard | WRI/WBCSD (2011), Product Life Cycle Accounting and Reporting Standard, sections6.3.2,6.3.4 and chapter9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 功能单位服务幅度、质量与期间及优先细分/物理分配的一般依据；具体前景闸口、池及公式为本方法声明设计，不声明全面符合该标准 |
| jrc-retail-2013 | official_guidance | European Commission JRC (2013), Best Environmental Management Practice in the Retail Trade Sector, EUR25998 EN, chapter1.2, pp.4-6, Table1.2; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 用于筛查零售直接能源、水、化学品、包装和废物与间接商品链；不采用其因子、行业范围或设定某项活动必然存在 |
