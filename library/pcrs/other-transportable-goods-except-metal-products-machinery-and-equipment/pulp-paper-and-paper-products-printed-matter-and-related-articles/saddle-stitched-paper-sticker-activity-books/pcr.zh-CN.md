---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.saddle-stitched-paper-sticker-activity-books
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 外购已印刷纸页干法组装骑马订纸质贴纸活动书

## 1. 范围与适用性

本方法仅覆盖一种实物结构：柔性纸质贴纸活动书，由已印刷的无胶内容页、已印刷半切的涂布纤维素纸贴纸、已干燥的可移除水性丙烯酸压敏胶及涂硅纸离型底纸组成，并以金属骑马订结合。前景从已完全印刷裁切整饰的外供纸页及封面接收开始，继而检查、配页、折页、骑马订、裁切及包装。上游操作仍须纳入链接系统。这是作者定义的交接边界，并不声称引用的一体化生产者把印刷外包。[china4u-sticker; sunnywell-sticker; basf-psa]

UNSD明确从CPC3.0:32292排除贴纸书并指向32690。32690残余名称不规定统一产品或路线。本记录的narrower映射仅覆盖上述纸、压敏胶、底纸、订钉的具体结构，不能覆盖其余残余类。内容、受众和营销标签本身不另建PCR身份。[un-cpc3-2025]

这里的可移除性针对贴附后的指定印刷纸被粘表面，而非仅从底纸离型。核实供给压敏胶牌号及约定的剥离、残胶、纤维损伤测试，申报停留时间、调湿条件和基材；永久或高初粘牌号、UV丙烯酸热熔胶须另做适用性审查。产品系列中的其他标签用途不扩大本范围。[basf-psa]

实质差异包括含随书底纸与矩阵纸的净参考质量、独立的含胶复合损失、可剥离性与底纸完整性验收，以及不同纸页组分的配页订合。既有涂布纸单张图像印刷、水性柔印压敏标签、EVA平装书及热固杂志方法可支持匹配的上游子过程，却不能直接定义本完整产品及分母。

排除散装标签贴花、无交付贴纸的空白贴纸收藏册、无内容页的全贴纸本、合成材料贴纸面材、玩具或立体机关书、硬壳胶装螺旋装订、安全印刷，以及厂内印刷、湿涂布覆膜、半切或燃烧。供方表面整饰必须在背景中作为真实材料层记录，不得当裸纸隐藏。把排除的现场阶段纳入前景时须进行明确的经审查扩展、补原子清单并替换对应供方阶段。不设历史配方、纸张定量、页数、损耗、因子或单厂数量通用默认值。[sunnywell-sticker; china4u-sticker; basf-psa]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.saddle-stitched-paper-sticker-activity-books |
| classification_refs | CPC 3.0 32690；narrower；范围及接受裁定以 `classifications/mappings/cpc-3.0-to-pcr.yaml` 及其引用的 ADR 为准 |
| covered_products | 第1节明确组分结构及接收整饰路线的纸质贴纸活动书 |
| excluded_products | 第1节排除的全部结构及现场路线 |
| representative_product | 外供纸质压敏贴纸及纸底纸页、金属骑马订柔性活动册 |
| production_route | 外供整饰纸页封面→接收检查→配页折页→金属骑马订→裁切检查→运输包装 |
| market_state | 整饰厂门已验收干燥完整成书，贴纸未剥离且含底纸矩阵纸 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在一本订合册中提供配套纸质活动页及可剥离纸贴纸 |
| How much | 1 kg已验收完整贴纸活动书净质量 |
| How well | 申报尺寸页数贴纸配置；配页订钉裁切合格；约定离型剥离黏附检验且底纸完整；不同设计不按质量视为普遍功能等效 |
| How long or cycle | 一个生产期至出厂验收；不设固定复贴次数或寿命 |
| reference_flow_link | `finished_book` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 印刷品 `a07593ed-90ed-4236-b90d-7a41ec14871c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址生产期配置；内容封面贴纸页数尺寸；纸牌号含水率；压敏胶化学组成、可移除牌号、被粘表面停留时间调湿条件及干涂量；底纸硅层矩阵纸质量和保留状态；实际整饰层；外供印刷半切涂布背景交接；订丝牌号表层；验收剥离测试；净质量包装皮重；供电国家电压供方；处理路线；分配和证据未决 |

各限定信息须在可追溯数据包元数据或采集记录中申报。UUID身份本身不确立已链接供方数据集。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用cp_output及校准秤称量验收完整批次。保留的底纸、矩阵纸、胶层、整饰及订钉属于成书净质量；排除运输包装及不合格品。 |
| `common_denominator` | 所有清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 全部行及采集聚合均在相同场址生产期配置下按每1 kg参考流。实测归属生产期交换量除以实测验收成书净质量。零或缺失分母阻止归一化；件数面积不代替实测质量。 |
| `composite_basis` | sticker_sheets, cover_sheets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 来料复合物接收态质量与干面材、干胶、底纸、整饰质量不同。仅以实际供方组分面积涂量记录和实测含水率取得比例。不得把裸贴纸供方量套入含底纸整页，也不重复计组分背景。 |
| `electricity_units` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计量交付电力；1 kWh = 3.6 MJ。保留该电力身份的原生净热值属性及供方边界；该属性不证明交付蒸汽热量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收已完全印刷半切整饰贴纸复合页、已印刷内容页封面、钢丝及真实运输纸箱 |
| starting_condition_role | 外供整饰部件交接；此前生产链接一次，未排除 |
| product_classification_scope | 仅纸质压敏胶底纸骑马订活动书子集；建议CPC3.0:32690 narrower |
| recursive_input_rule | 外购完整书或返工书保留原有生产历史；不得递归至自身最终输出。厂内退回仍为内部实物交接。 |
| upstream_dataset_requirement | 真实纸浆造纸涂布、印刷、压敏胶聚合涂胶干燥、底纸硅层、半切、已供给整饰、钢材、包装、公用工程及接收处理供方，数量基准相容 |
| disclosure | 实物层配置、前景交接、供方路线数量基准、时间场址、治理、数据缺口及下游研究情景 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_scope` | physical applicability | 要求明确纸面材压敏胶纸底纸订合活动书结构；不能用营销类别代替结构或认定全残余类覆盖。 | `un-cpc3-2025`; `china4u-sticker` |
| `b_foreground` | p_assemble | 纳入接收损耗、检查配页折页订合裁切、实际集尘、包装、归属电力维护及全部实测废物净排放。印刷涂胶覆膜半切为外供阶段；现场发生时须明确扩展并替换对应上游阶段。 | `sunnywell-sticker`; `china4u-sticker` |
| `b_upstream` | supplied parts | 完整纳入真实制浆造纸涂布、干燥压光裁切损纸废水；外供印刷油墨印版清洗能源排放；压敏胶聚合涂布干燥损失；底纸硅层及保留整饰。BREF7.1.4/7.1.10属于造纸厂，不作装订厂因子；木材胶合板原件不能证明造纸。EPA油墨资料用于区分供方路线，不规定默认留存百分比。 | `jrc-paper-bref-2015`; `epa-offset-ctg-2006`; `basf-psa` |
| `b_ledgers` | physical and allocated ledgers | 报告一个前景组装单元并保留阶段独立计量。内部交接两端质量含水组成一致。未分配的材料水化石生物碳及能量平衡与已分配环境负荷账分开；实物联产品输出不得乘分配份额。随书交付保留底纸矩阵纸为产品，不是现场废物。整场址实物账须包含来料包装、出货包装、退料及维护库存。供方退回两端匹配，不作消耗或自动当废物，但归属运输检查搬运负荷仍保留。出货包装跨出实物厂界且仍不计成书净参考质量。复用只移交已有包装库存，不再次记为新购纸箱。 |  |
| `b_releases` | nature boundary | 区别集尘与室外排放、可过滤区间与累计可凝结颗粒。以真实场址有效协议纳入逸散；烟道Method201A不能计室内暴露或外推含水滴气流。真实水分交换及其他排放须分别识别加行，不把质量余差塞入颗粒。上游处理实际生物CO2仍纳入LCI，即使某气候报表口径不含。 | `epa-method201a-2020` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_assemble` | 接收纸页组装骑马订裁切包装 | required | 所述外供部件结构 | foreground | `finished_book` |

实物过程图：外供纸页组分→接收检查→配页折页→钢丝订合→裁切检查→包装。各阶段保留未分配库存不合格品水碳及交接。单一最终输出避免参考身份重复；已知内部部件交接在阶段实物记录中保留。条件卡不设正数量默认值，无发生须有证据。

### 过程：贴纸书组装（`p_assemble`）

#### 输入

##### 产品流

###### 已印刷半切的涂布纸丙烯酸压敏胶贴纸复合页（涂硅纸底纸）（`sticker_sheets`）

接收一种已印刷、已半切的完整复合页：涂布纤维素纸面材、已干燥的可移除水性丙烯酸压敏胶及涂硅纸离型底纸。记录各保留层、油墨、实际表面整饰、含水率及随页交付的矩阵纸。完整外购整页只设一项交换，包含面材、干压敏胶、涂硅底纸及全部交付矩阵纸；不把已含的胶、硅层或底纸另加为前景购入。分层账核对交付复合物质量，矩阵面积不重复计入。供方半切保留底纸完整，不预设厂内涂胶或半切。纸质标签候选尚不能确定整张含底纸复合页的身份及参考质量包含范围，故不采用其UUID。

- 选定流: 已印刷半切的涂布纸丙烯酸压敏胶贴纸复合页（涂硅纸底纸）
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_parts采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_parts`
- 来源: `china4u-sticker`; `sunnywell-sticker`; `basf-psa`

###### 胶印印刷纸张（`content_sheets`）

接收已印刷、尚未折页装订的无胶涂布纸内容页。核实常规平张湿式胶印及交接时已完成油墨固着。选定印刷工序中间物不是成书，也不是仅限厂内交接的记录。记录配料、涂层、油墨、含水率、尺寸和真实供方背景。

- 选定流: 胶印印刷纸张 `aa6d7b70-e247-4651-bd5f-692e988aebd7`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_parts采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_parts`
- 来源: `china4u-sticker`; `sunnywell-sticker`

###### 印刷品（`cover_sheets`）

接收一种已印刷的柔性涂布纸板封面。申报供方已施加的保护层、化学身份、干燥保留质量及供方过程。广义机械印刷身份包含本纸质封面子集。完整备注谈及邮寄印刷品的收费规则及纸质3D原型；它不是邮政服务流，不规定必须使用原型工艺，也不证明本供方配方。该身份不证明任何特定覆膜或光油供方。

- 选定流: 印刷品 `a07593ed-90ed-4236-b90d-7a41ec14871c`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_parts采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_parts`
- 来源: `china4u-sticker`; `sunnywell-sticker`

###### 钢丝（`stitch_wire`）

接收沿折叠书脊成形订钉的非合金钢丝。记录直径、牌号、表面层及保留量与切头质量。广义钢丝身份仅在实物确为非合金钢时使用；不预设热浸镀锌淬火路线、锌比例或再生料含量。表面层、牌号和供方基准兼容性须另核验。

- 选定流: 钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_parts采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_parts`
- 来源: `china4u-sticker`; `sunnywell-sticker`

###### 交流电（`electricity`）

计量接收、配页折页、骑马订、裁切、除尘、压缩空气及包装实际消耗的低于1千伏电网平均交流电。本选定流限定供给地区CN，仅用于有据的CN供应。其他国家或电压须另选经核验的替代身份，不假定地区可替换。要求真实电网、年份、地区及损耗边界；不能以纯水电供应或变压服务代替电网消费电力。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 通过cp_energy采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源:

###### 完整出货瓦楞运输纸箱（`carton`）

称量实际空瓦楞运输纸箱及其已供给接缝，独立于成书净质量。记录材料牌号、含水率、封箱结构和供方。真实另加的封箱胶带、薄膜、托盘或标签须分别加卡，不给通用包装比例。这是一只完整容器，不是未加工纸板或单独接缝胶。现有纸箱UUID固定原生及再生纤维比例，本结构尚不能证明符合；尚无已确认的无此限制完整容器UUID。

- 选定流: 完整出货瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_parts采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_parts`
- 来源:

###### 来料完整瓦楞供方纸箱（`incoming_carton`）

仅在发生时记录随外供纸页接收的一只完整瓦楞纸箱。材料含水接缝污染独立于部件质量称量。核对库存、供方退回、复用至出货包装及分离废弃。若纸页供方已含包装供应负荷，仍保留本实物交换并核对已有负荷，不重复计一次生产负荷。尚无已确认的无此限制相容完整容器UUID，不能用纸板或固定纤维比例纸箱替代。

- 选定流: 来料完整瓦楞供方纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_parts采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_parts`
- 来源:

###### 整饰设备用矿物润滑油（`lubricating_oil`）

仅在整饰设备维护实际消耗时记录一种矿物润滑油。按牌号计量领用、退回及设备内留存库存。全合成润滑油记录虽备注石油炼制，也不能代表本矿物油身份；不预设通用配方或用量。

- 选定流: 整饰设备用矿物润滑油
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_maintenance采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_maintenance`
- 来源:

#### 输出

##### 产品流

###### 印刷品（`finished_book`）

已验收的完整骑马订贴纸活动书。净参考质量包含封面内容页、贴纸、保留的压敏胶油墨整饰层、离型底纸、随书交付的矩阵纸、含水及订丝；排除运输纸箱和不合格品。广义机械纸质印刷身份包含本子集，未发现相反路线或材料硬限定；完整原生备注谈及邮寄印刷品的收费规则和纸质3D原型。产品流类型、纸质印刷路线、工厂状态、质量参考和分类共同支持本实物子集；两段备注均不确立邮政服务或原型工艺。身份不证明背景过程。仅设一个最终产品输出。

- 选定流: 印刷品 `a07593ed-90ed-4236-b90d-7a41ec14871c`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克。
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `source_rule`
- 采集协议: `cp_output`
- 来源: `china4u-sticker`; `sunnywell-sticker`

##### 废物流

###### 废纸（未指定）（`paper_trims`）

分离计量产生状态的已印刷无胶纸及纸板裁边料。广义废纸身份在本行限定为该一项实测废物流，记录油墨涂层整饰污染、含水率及实际接收方。不预设清洁纸回收率或再生料抵扣。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_waste采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `china4u-sticker`; `sunnywell-sticker`

###### 已印刷纸丙烯酸压敏胶涂硅底纸复合裁边料（`sticker_trims`）

一种外购已印刷纸面材、丙烯酸压敏胶、涂硅纸底纸复合页的裁边废物流。保留油墨整饰污染及实际组分比例。不得改称清洁废纸、纯胶或裸隔离纸废料，尚无已确认的完整复合物UUID。

- 选定流: 已印刷纸丙烯酸压敏胶涂硅底纸复合裁边料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_waste采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `china4u-sticker`; `sunnywell-sticker`

###### 不合格已装订纸质贴纸活动书（`reject_books`）

一种不合格已装订贴纸书废物流，保留实际纸、胶、底纸、整饰层及订丝组成。记录件数及实测净质量。厂内返工不作外部废物流；拆解后分别交付的组分须加独立卡并与原不合格品质量核对。

- 选定流: 不合格已装订纸质贴纸活动书
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_waste采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `china4u-sticker`; `sunnywell-sticker`

###### 钢废料，边角料（`wire_scrap`）

骑马订机成形订钉切割产生的钢丝切头，不是晶圆切割钢丝，也不预设为来料矫直废物。选定切割边角废料身份覆盖该钢流，其边界不包含后续处理。记录表面层、污染、实测质量及接收处理，不预设回收抵扣。

- 选定流: 钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_waste采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `china4u-sticker`; `sunnywell-sticker`

###### 收集的印刷纸裁切粉尘（`collected_dust`）

独立收集的干燥印刷纸裁切粉尘，记录收集位置所对应的颜料、矿物、压敏胶、底纸及整饰污染。称量集尘库存及出厂量。该固废不是厂界空气颗粒排放，也不自动视为可回收废纸；未确认粉末状态及组成的精确UUID。

- 选定流: 收集的印刷纸裁切粉尘
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_waste采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源:

###### 废润滑油（`spent_oil`）

仅在发生时记录已申报维护牌号产生的废矿物润滑油。记录允许石油基或合成废润滑油且不限定处理，本行仅取石油基子集。保留污染、库存变化、质量及真实接收路线，不暗含稀释水或溶剂。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_maintenance采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_maintenance`
- 来源:

###### 废纸（未指定）（`incoming_carton_waste`）

一种分离的来料废弃瓦楞纸包装流。记录真实聚合物胶污染及接收方；广义废纸身份不意味清洁包装或通用2%损耗。复用纸箱仍属实物库存，不同时作为新购纸箱重复计量。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_waste采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源:

##### 基本流

###### 颗粒物 (PM2.5)（`pm_fine`）

仅计量干裁切实际经治理后跨入室外空气、标称空气动力学粒径不大于2.5微米的颗粒物，空气子介质未特指。采用cp_air，不给默认粉尘因子，不以室内暴露或高层大气土壤身份替代。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_air采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-method201a-2020`

###### 颗粒物 (PM2.5 - PM10)（`pm_mid`）

仅记录实际室外大于2.5且不大于10微米粒径区间。仅由相容的累计PM10与PM2.5结果或直接回收区间质量取得；不得再把累计PM10作为另一排放行相加。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_air采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-method201a-2020`

###### 颗粒物（> PM10）（`pm_coarse`）

仅记录实际室外大于10微米颗粒。使用有效采样装置的对应区间质量；仅在采样回收温度基准一致且总颗粒覆盖完整相容时才可用总量减PM10。粗颗粒未知时保持未决，不能记零或校正流。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 通过cp_air采集的实测归属生产期交换量除以验收成书净质量；每1 kg参考流。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-method201a-2020`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_subdivide` | shared operations | 优先专属生产期阶段计量。共享整饰电力及辅助服务负荷采用有据的机器运行时间负载因果证据，保留开机及不合格品作业。页数价格或质量不能自动证明因果份额。 |  |
| `a_residual` | joint burdens | 若细分或合理因果关系仍不能解决联合负荷，另定义论证研究分配并保留完整实物价值证据（真实销售数量、价格、币种、价格日期、估值边界和换算）；保留未分配总量且份额和为一。未知分配阻止相关数据完整性。份额不改变实物输出。 |  |
| `a_waste` | residues | 按真实污染和接收条件判定接收流。废物不因有售价或可回收标签而变联产品。申报的研究回收末端规则配真实处理仅应用一次；供方再生料或外排废料不自动带来避免负荷抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `p_assemble` | finished_book | 验收称量 | 批次配置；验收件数；成书净质量；包装皮重；含水率；页底纸矩阵纸订钉组成；验收测试 | 校准秤按完整交付配置称量净批次，排除可拆运输包装并核对件数。件数面积校核使用实测书重，不用目录定量默认值。 | kg | 每验收批次 | 同一申报生产期并保留实际日期 | 明确一个场址配置，外供过程明确链接 | 每 1 kg 参考流 | 校准库存核对原记录及不确定性检出限 |
| `cp_parts` | `p_assemble` | product inputs | 材料批次记录 | SKU供方；接收退回期初期末质量；含水率；页面积件数；分层组分涂量底纸矩阵纸整饰；组分元素碳检测及化石生物来源；钢丝牌号；背景参考基准；外部内部退回供受方；来料出货包装复用库存；进出空气温压湿度体积和材料调湿含水变化 | 校准称量并核对供方库存组分记录；每个接收实物部件独立称量。使用真实水分元素碳分析或匹配供方证书及碳来源记录，不设固定含碳比例、不以生物质平衡认证替代实物来源。核对湿干面积基准并保留来源不确定性；购入复合物只计一次，组分仅为上游分解。供方退料及各阶段交接两端核对。来料包装独立称量，即使供应负荷已含部件背景也保留实物且不重复计负荷。出货包装及封箱材料作为净参考质量以外的实物厂界输出记录。 | kg | 每批次及库存变化 | 同一申报生产期并保留实际日期 | 明确一个场址配置，外供过程明确链接 | 每 1 kg 参考流 | 校准库存核对原记录及不确定性检出限 |
| `cp_energy` | `p_assemble` | electricity | 阶段仪表记录 | 仪表校准；kWh；阶段运行待机开机；空压集尘分配；电网供电国家电压年份地区供方；输入输出能量库存变化散热及计量估计不确定性 | 读取校准分表及真实共享计量归属记录；核对总能量及供方交付电边界。不因电力属性名称推断蒸汽燃料。电功及其散热只记一次；内部压缩空气不另作外购电力交换。记录实物能量平衡与不确定性，不虚构热量或把未知损失自动记零。 | kWh; MJ | 每班次生产期 | 同一申报生产期并保留实际日期 | 明确一个场址配置，外供过程明确链接 | 每 1 kg 参考流 | 校准库存核对原记录及不确定性检出限 |
| `cp_waste` | `p_assemble` | waste outputs | 分离废物账 | 废物流来源阶段；kg；期初期末库存；含水率；纸油墨涂层压敏胶底纸整饰钢污染；组分碳检测及来源；接收处理；返工状态 | 分离校准容器及交接称量并保留接收方证据。集尘固废与室外排放分开，随书底纸矩阵纸与出厂废物分开。不合格品拆解返工保留实物历史。 | kg | 每收集交接及库存变化 | 同一申报生产期并保留实际日期 | 明确一个场址配置，外供过程明确链接 | 每 1 kg 参考流 | 校准库存核对原记录及不确定性检出限 |
| `cp_maintenance` | `p_assemble` | lubricating_oil; spent_oil | 维护批次账 | 牌号SDS；领用退回；设备库存；运行小时；废油含水污染接收方 | 称量真实牌号领用留存及分别交付废油；按设备生产期作业因果归属。不使用须有记录；泄漏擦布其他牌号须独立原子行。 | kg | 每维护及生产期 | 同一申报生产期并保留实际日期 | 明确一个场址配置，外供过程明确链接 | 每 1 kg 参考流 | 校准库存核对原记录及不确定性检出限 |
| `cp_air` | `p_assemble` | pm_fine; pm_mid; pm_coarse | 排放计量生产期 | 排口治理；运行小时；空气体积温压湿干基准；分级滤膜旋风质量；空白回收检出限；逸散协议；空气动力学分级基准 | 由具备能力实验室记录适用采样校准、代表性运行覆盖及单位基准。无水滴干燥固定排口可按Method201A计可过滤粒径区间，满足完整采样温度回收条件。它不是逸散室内方法，也不证明总量可凝结覆盖。另以独立论证的场址协议调查逸散途径；数量无支持时保持未知。 | kg; mg/m3; m3; h | 代表运行及生产期治理变化 | 同一申报生产期并保留实际日期 | 明确一个场址配置，外供过程明确链接 | 每 1 kg 参考流 | 校准库存核对原记录及不确定性检出限 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_campaign` | all inventory rows | 每行以申报单位的实测归属生产期净分子除以kg单位验收完整成书净质量，不设数值消耗默认值；最终参考输出为1 kg。 | cp_parts; cp_energy; cp_waste; cp_maintenance; cp_air; cp_output | per 1 kg reference flow |  |
| `physical_reconciliation` | physical ledgers | 同含水组成基准下核对期初库存及来料与验收完整书、外排废物排放及期末库存。水和化石生物碳另立账；实测含水变化或加真实基本水分交换，不把余差归粉尘。明确包含外部供方退料、出货包装及维护留存库存。用实测材料含水变化及匹配湿干体积基准的进出空气温压湿度区分净H2O吸附解吸与穿流环境空气湿度；不把全部排气湿度当产品蒸发，不以干固体闭合湿质量账。完整数据集须把实际跨界水分按正确方向相态介质另列原子交换；未知不是零。另核电输入、有效功、储能及散热，保留估计不确定性且不产生环境抵扣。允差由真实仪器不确定性和未决项决定，不设通用百分比。 | cp_parts; cp_output; cp_waste; cp_maintenance; cp_air | unallocated physical balances |  |
| `particle_intervals` | pm_fine; pm_mid; pm_coarse | 使用匹配生产期治理采样基准。PM2.5为累计细颗粒；PM2.5–PM10为PM10减PM2.5；>PM10为直接回收超粒径或相容已核验总量减PM10。负差不相容差值不接受，不相加PM2.5和累计PM10。Method201A可过滤覆盖与可凝结覆盖仍分开。 | cp_air | three disjoint outdoor fractions | `epa-method201a-2020` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_parts` | supplied components | 查明各材料层状态及数量相容供方阶段，包括上游已移除矩阵底纸、涂布干燥水。缺材料层质量供方单位基准或出厂废物去向时不能声称完整链接数据集。 | cp_parts; supplier primary records |
| `dq_acceptance` | finished_book | 保留约定底纸离型测试，并另做指定印刷纸被粘表面可移除黏附测试，记录压敏胶牌号、停留调湿、剥离残胶纤维损伤、底纸完整性、配置及订合裁切验收试验。厂家安全质量宣传不是真实产品检验或认证。 | cp_output; actual test records |
| `dq_completeness` | all rows | 分别保留真实数量检出限不使用证据及具体身份未决。空UUID未知排放缺供方数据不是零或已验证替代；身份查询不批准数据质量。 | all collection records |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_reference` | finished_book | 要求唯一最终参考输出及校准含底纸矩阵纸验收质量。参考数量清单分母采集聚合及中英文范围一致。限定或参考基准缺失即完整性不成立。 |  |
| `v_chain` | all inputs and wastes | 核对流类型状态路线CAS正式中文名原生参考属性单位组单位及每行供方数量兼容。原生地区路线压力浓度组成相态为硬匹配条件，不能以未来采集缺口豁免。广义身份不能掩盖相反路线或遗漏底纸；未决行须明确经审查的实物匹配后才能链接数据。 |  |
| `v_ledgers` | physical balances and allocation | 分配前核对未分配质量水碳能量内部链接、供方退料、来料出货包装、维护及不合格返工废物库存。另核负荷份额与供受一致；真实负差或无法解释余差阻止相关数据验收。 |  |
| `v_air` | air releases | 要求粒径不重叠室外介质正确且真实治理计量覆盖，不重复集尘固体、不作无据零值。>PM10逸散可凝结未知保留；方法本身不证明已经检测。 | `epa-method201a-2020` |
| `v_boundary` | scope/provider review | 拒绝裸贴纸替代、明确排除贴纸书的儿童图书UUID、不相容合成介质装订路线、重复供方阶段或未记录现场扩展。candidate方法不是独立科学批准或已接受CPC映射。 | `un-cpc3-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 申报下游研究中明确路线匹配的贴纸活动书供应 |
| allowed_use | 仅实测有据配置、供方处理链接完整且不确定性已申报；配送使用末端另评估 |
| excluded_use | 全CPC32690平均、裸贴纸标签替代、其他装订材料、安全批准或通用每书数量默认值 |
| required_metadata | 全部参考限定；地区日期技术、供应交接、分层质量含水率公用工程接收方分配原证据 |
| required_quality_disclosure | 覆盖执行跳过检查；来源独立性限制；身份供方数量未决；计量不确定性不使用证据 |
| update_trigger | 纸胶底纸整饰订丝装订印刷路线、供方边界、场址治理仪表方法、验收设计或更强证据变化 |

## 11. 数据源

| 来源id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | [UNSD CPC3.0 Explanatory Notes, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf); PDF/printed149 and152; read2026-10-12 | 32292排除贴纸书指向32690残余坐标；不提供制造配方 |
| `sunnywell-sticker` | handbook | [Sunnywell Child Sticker Printing with a Book](https://www.sunnywellprinter.com/child-sticker-printing-with-a-book.html); specific example and surrounding options; read2026-10-12 | 真实纸贴纸册骑马订覆膜封面能力；单厂案例，数量价格均不采用 |
| `china4u-sticker` | handbook | [Chinaprinting4u Children’s Sticker Book Printing](https://www.chinaprinting4u.com/sticker-book-printing); Paper and Binding sections; read2026-10-12 | 内容封面贴纸纸质组分及骑马钉装能力；不证明具体配方供方 |
| `basf-psa` | handbook | [BASF Solutions for Pressure-Sensitive Adhesives](https://www.basf.com/dam/jcr:af4f1f47-5762-36bc-97b9-ab5d4358ec87/basf/www/hk/documents/en/products-industries/dispersions/adhesives/BASF_PSA_brochure_EN.pdf); PDF3 printed3–4, Specialty Paper Label / Books & Publications; read2026-10-12; edition date unstated | 独立可移除丙烯酸分散体纸贴纸用途能力；产品系列指南，不给SKU用量安全批准 |
| `jrc-paper-bref-2015` | official_guidance | [JRC Production of Pulp, Paper and Board BREF, 2015](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf); 7.1.4 PDF703/printed665, 7.1.10 PDF708/printed670; read2026-10-12 | 真实上游造纸损纸裁切粉尘；不作装订印刷因子或木加工数据 |
| `epa-offset-ctg-2006` | official_guidance | [EPA Offset Lithographic/Letterpress CTG, September2006](https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf); PDF13/printed7; read2026-10-12 | 上游常规胶印吸收氧化路线区别热固辐射路线；不采用历史留存排放百分比 |
| `epa-method201a-2020` | official_guidance | [EPA Method201A, October7,2020](https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf); sections1–3/PDF1–3; EPA internet copy with its version caveat; read2026-10-12 | 条件性无水滴固定源可过滤粒径计量及限制；不作通用因子合规或逸散监测声明 |
