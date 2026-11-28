---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.pyrotechnic-articles
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封民用海上手持救生信号成品：法国首次市场投放环境核算

## 1. 范围与适用性

本方法适用于一个有记录支持的完整密封民用海上手持救生信号成品队列，以有偿或无偿向下游提供为目的首次投放法国全国市场的非操作性环境核算。产品此前已在国外由工厂放行并不妨碍适用。前景是由既有匿名环境及行政书面记录支持的首次全国投放核算关口，不增设制造工位、工厂放行要求或采购人规格。

PYReO 2022 和 2024 年市场统计表将手持类单列，以类别平均质量估算全国投放质量。2022 年覆盖人群从休闲航海扩展至专业海事。上述事实不能证明某参与者的实际整品或包装质量，也不能提供清单因子、收集概率或产品性能。应采用实际队列记录而非这些平均值（`pyreo-market-2022`、`pyreo-market-2024`）。

参考量是该关口按质量表示的声明核算单位，不是救生服务功能单位或全生命周期比较单位。成品生产保留在完整供方环境黑箱内。过期产品收集的人群和功能不同；取消一换一规则后，不能仅因旧品回收与新品首次投放出现在同一年，就将两者逐件归属（`pyreo-committee-2023`、`ademe-pchim`）。

仅需要既有的非敏感书面记录。不得开封、开展实物操作试验或索取成分、制造、性能、起动、操作或使用信息。证据缺失将阻止合格数据集的形成，不能替换为假想工序或零负担。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.pyrotechnic-articles |
| classification_refs | CPC 3.0 35460，Pyrotechnic articles。该限定范围的 narrower 映射已获接受，见 docs/adr/2026-11-22-accept-cpc-35460-civilian-maritime-distress-signal-first-french-market-placement.md。保留冻结的 2025 年 6 月坐标。2026 年 10 月 CPC3 第 1569 行再次确认标题及 HS 2022 品目 3604，不替换冻结来源。 |
| covered_products | 在一个有证据的队列和责任申报人总体内，以有偿或无偿向下游提供为目的首次投放法国全国市场的完整密封民用海上手持救生信号成品；适用时区分专业及休闲人群。 |
| excluded_products | 烟雾信号、降落伞信号、节庆用品、电气替代品及其他产品类别；近邻 35450 的配制炸药及起始用品、35440 的制剂和 35470 的电子用化学品；零部件、仅供境内直接自用的队列、法国已投放品转售，以及以收集或处理为参考功能的活动。 |
| representative_product | 一件由记录定义的密封民用海上手持救生信号成品，从成品接收到法国首次事件之间保持不变；不规定品牌、假定质量或技术规格。 |
| production_route | 成品供方环境黑箱后接法国首次市场投放核算；实际包装或服务增量另有证据，不展开内部生产。 |
| market_state | 已完成且密封；既往工厂放行与既往法国投放是不同字段，合格队列中的产品此前没有法国投放事件。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 核算指定密封成品队列首次投放法国市场所归属的环境清单。 |
| How much | 1 千克净完整密封成品，不含有独立证据的外部运输包装。 |
| How well | 以文件证明类别、成品及密封状态、法国首次事件、责任申报人及适用国家发布机关和年份，不作操作或性能声明。 |
| How long or cycle | 原始队列期间每件产品仅发生一次法国首次事件，后续服务保留该原始队列锚点。 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 首次投放法国市场的密封民用海上手持救生信号成品 |
| 参考流属性 | 质量（Mass）`93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组（Units of mass）`93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 匿名产品及队列身份；全国范围及适用发布机关和年份；责任申报人及唯一经销商品牌角色；有偿或无偿向下游提供分支；既往法国投放；分别记录工厂放行、法国事件、申报和实际交接日期；实测完整整品净质量及包装排除；事件发生时覆盖实际保管方的实体周界，适用时含有证据的匿名受托保管方；供方环境清单包覆盖；归属期间及原始队列分母；条件交换适用性和覆盖缺口。 |

全部限定信息必须在数据集元数据或等效数据包字段声明。不得从零部件、化学品、废物或其他信号类别推定具体商品 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_net_mass | 参考产品 | 质量（Mass）`93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过 cp_cohort 使用完整密封整品的既有可追溯净质量记录；仅排除具有独立证据的外包装，不减去未经证明属于外包装的整品部分。数据采集不开展实物操作。 |
| cohort_mass_basis | 所有清单行 | 质量 | kg | 分母为正的原始队列净质量 Qc。按件数转质量时须有整品实测或同质批次实测及抽样依据；全国类别平均质量不是本地实测值。 |
| separate_outer_pack | box_purchased, box_first_nonpurchase, box_true_return, box_outward, discarded_outer_box | 质量 | kg | 每种实际包装分别具有实测质量及实物和负担账；不得假定每件商品一个箱，也不得减去估算包装质量。 |
| accounting_energy | accounting_electricity | 能量（Energy）`f6811440-ee37-11de-8a39-0800200c9a66` | kWh | 保留既有核算用电电表记录的 kWh。能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` 支持 1 kWh = 3.6 MJ。这只是计量依据，未来具体供方流的原生属性另行核实；相同能量单位组不能推出净热值属性。 |
| zero_current_placement | 参考产品 | 质量 | kg | 当期首次投放为零时不生成新的当期投放强度，不除以零。保留已投放库存及其负担；单独报告后续服务强度须具有有证据且为正的原始队列分母。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有既往法国投放状态文件、承接环境负担和外包装覆盖证据的完整密封成品；允许此前已在国外工厂放行。 |
| starting_condition_role | 成品环境核算接口，不是零负担起始材料或新制造的商品。 |
| product_classification_scope | 35460 内限定的民用海上手持成品；冻结 2025 年 6 月坐标，2026 年 10 月仅补充分类核证。 |
| recursive_input_rule | 完整且兼容的整品环境清单包仅连接一次，不重建内部过程；法国已投放品不得重复经过首次法国投放关口成为新产出。 |
| upstream_dataset_requirement | 兼容的完整成品清单，明确参考数量、属性、单位、状态、时间相关性及实际包装和服务覆盖；缺失覆盖属于数据资格缺口。 |
| disclosure | 声明队列、国家发布机关和年份、责任角色、匿名保管实体周界、既往投放、承接负担、实际交接及供方、包装、服务的重叠。无需采购细节、地址、路线、设备或产品技术资料。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_national_event | 首次投放 | 绑定有日期的法国定义及实际责任申报人。区分境内制造、首次全国引入或进口、有偿或无偿向下游提供及唯一经销商品牌责任。境内直接自用不在本方法向下游提供队列中，但调节更广制度总体时须与适用的制度排除项分别保留。国外工厂放行、申报、其他国家销售或后续发运本身不能证明法国事件。 | french-producer-definition, ademe-pchim |
| boundary_closed_product | 供方整品 | 密封整品的完整环境清单包保持黑箱，不重建制造、内部材料、操作条件或性能。缺失供方覆盖须保持未知，不捏造投入、排放或影响因子。 | ec-pef-method, pyreo-market-2024 |
| boundary_two_stocks | 产品实物周界 | 本方法仅限于事件发生时有证据的实体周界确实覆盖实际保管方的队列，适用时可包含匿名受托第三方。在同一周界内建立法国投放前与法国已投放两本相邻库存账。仅有申报人的法律产权不能将边外商品纳入两账。周界外法国首次事件在全国申报桥另列，不虚记为本地收发或这两账中的 Q。Q 仅从前账流出并流入后账一次，合并抵销。期初已投放库存、旧品退回、转售及后续发运均不创造 Q。仍在周界内的留样保持库存。 | french-producer-definition, ademe-pchim |
| boundary_packs_services | 条件接口 | 实际具有独立证据的外包装及归属服务计一次，避免与供方覆盖重叠。费用或付款既非实物交换，也非环境因子。不得假定有纸箱、托盘、用电或运输；实际存在的其他接口须补充独立有证据的原子行后才能声称完整。 | ademe-pchim, ec-pef-method |
| boundary_later_events | 首次投放之后 | 关口可能不伴随实物外发。后续库存及服务另行调节，不增加参考产出。过期品收集和处理是另一功能，不与新投放品一换一归属，也不自动抵扣。 | pyreo-committee-2023, ademe-pchim |

### 互斥实物流转条件卡

每次跨界只有一个来源或去向类型。整品卡连接 cp_article_ledger 和 cp_cohort，纸箱卡连接 cp_outer_box。这是适用规则，不是创造物流的指令。投放后的调节记录不增加本关口清单产出。本方法的实物队列须覆盖事件时的实际保管方；若仅能证明申报人自身周界，边外事件仍在两账之外另报。全部 A_V/R_V/D_V/W_V 项通过 cp_later_services 保留自身原始队列、原量、既往累计负担及互斥归属。

| condition_id | 实际条件 | 账目后果 | 清单关联或排除 |
| --- | --- | --- | --- |
| article_first_unplaced_in | 首次外部接收且密封整品没有既往法国投放 | A_U；外部剩余负担与新增分开 | sealed_article_input 仅取实际队列归属份额，不自动成为 Q |
| article_unplaced_true_return | 同一未投放件在自身此前外发后退回，仍无法国投放 | R_U，与首次接收互斥 | sealed_article_input 承接退回，不新计制造 |
| article_first_french_event | 合格投放前产品的法国首次事件有文件 | Q 从 U 流出并流入 V 一次，即使实物未动 | reference_product 一次，不捏造发运 |
| article_unplaced_out | 实际投放前退回或转移，尚无合格法国事件 | X_U 及接收负担归属 | unplaced_article_transfer，不产生 Q 或自动抵扣 |
| article_unplaced_waste_out | 未投放完整密封整品实际作为废物交接到边外 | W_U | unplaced_article_waste，留置库存不是交接 |
| article_first_already_placed_in | 首次接收此前已在别处法国投放的外来件 | A_V，保留自身原队列归属 | 仅投放后调节，不计新队列 sealed_article_input 或 reference_product |
| article_placed_true_return | 此前外发过的同一法国已投放件实际退回 | R_V | 投放后调节及有证据的服务增量，不创造 Q |
| article_placed_out | 实际后续发运、调拨、退供方或出口 | D_V，去向子类互斥并保留剩余负担 | 投放后调节，不再次 reference_product |
| article_placed_waste_out | 法国已投放品实际向外作废物交接 | W_V | 独立报废归属，不是 unplaced_article_waste 或新投放抵扣 |
| outside_first_french_event | 法国首次事件发生于有证据的实体周界之外 | Qoutside 另列，全国合格总量 = Qinside + Qoutside，逐件互斥 | 不虚记本地收发，只有 Qinside 进入本方法 U/V 和分母 |
| retained_or_held | 留样、留置、拒收或登记变化但仍在边内 | 按既往法国投放状态留在 U1 或 V1 | 不造跨界，保留状态记录 |
| box_purchased_in | 实际购买纸箱首次从边外接收 | P | box_purchased，取得与使用负担分开 |
| box_first_nonpurchase_in | 无购买且无同箱先前外发链接的首次外部接收，含随商品或另行借入无偿 | F | box_first_nonpurchase，不受供方覆盖影响 |
| box_same_item_return | 实际同箱退回且有原外发链接 | R | box_true_return，不属 P 或 F |
| box_actual_out | 实际随商品、退还或其他转移外发 | O 及唯一接收归属 | box_outward；投放后流转仍属后续服务核算 |
| box_actual_waste_out | 有独立证据的未受污染纸箱实际废物交接 | W | discarded_outer_box；其他废物身份未核实 |
| later_external_electricity | 归属旧队列的既有实际后续用电记录 | cp_later_services，能量属性及 kWh 计量，具体供方原生属性独立核实 | 仅为外部补充的单交换记录，不进入 accounting_electricity 或任何新增产品关口输入输出 |
| box_still_inside | 仅账目或产权变化，纸箱仍在边内 | K1 | 不外发，边外仅产权库存不能同时计入 K1 |

### 实物未移位事件的调节示例

这是代数记账示例，不是实测案例、产品质量或因子。一件密封商品已有实测净质量 m。实际匿名受托保管方处于有证据的实体周界内，申报人自身不必有现场收发。期初 U0 = 1 件（m 千克），V0 = 0；有文件的法国首次事件发生但商品未动：Q = 1 件（m 千克），U1 = 0，V1 = 1 件（m 千克），所有外部跨界均为零。下一期间实际交割：V0 = 1，D_V = 1，V1 = 0，Q = 0，原始队列仍为 1 件及 m 千克。任何实际后续服务仅作为外部补充清单，除以有证据的该原始 m，不增加参考输出。若保管方不在有证据周界内，事件改列全国调节桥的 Qoutside，不进入申报人的 U/V 库存。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| first_france_gate | 密封成品法国首次市场投放核算 | required | 合格队列和正的原始 Qc 均有证据；条件卡须对应实际交换。 | 归属既有整品清单包及实际包装、服务增量，不发生产品转化。 | 每 1 kg 参考流 |

卡片定义独立接口，不代表已观察到的活动。原始实物总进出与归属队列的清单不同。期初库存是承接库存，不是新的外部接收；后续发运不重复参考产出。非参考调出保留接收方的负担归属，不自动成为共产品或负抵扣。

### 过程：法国首次投放核算（`first_france_gate`）

#### 输入

##### 产品流

###### 本队列的完整密封整品（`sealed_article_input`）

完整供方成品及有证据的期初承接共同支持本队列。承接不再触发采购或生产负担，兼容的整品环境清单包仅核入一次。

- 选定流：密封民用海上手持救生信号成品
- 流属性/单位：质量 / kg
- 数量规则：经库存调节后归属本队列的整品质量除以原始队列净质量，另行披露实际归属的投放前损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_article_ledger`
- 来源：`french-producer-definition`、`ademe-pchim`、`ec-pef-method`

###### 购买的外部瓦楞纸箱（`box_purchased`）

仅在实际购买并跨周界接收的瓦楞外箱有独立记录时适用。取得与后续使用分账，实物周转不重复计制造。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：归属队列的购买纸箱取得质量除以原始队列净质量，区分实物接收与负担消耗。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_outer_box`
- 来源：`ademe-pchim`、`ec-pef-method`

###### 首次非购买外部纸箱接收（`box_first_nonpurchase`）

仅在随来料、另行借入或无偿调拨的首次外部接收时适用，无论供方是否覆盖。不能证明同一箱先前从本周界外发的，不是真退回。承接覆盖未知不能当作零负担。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：归属队列的首次非购买纸箱接收质量除以原始队列净质量，只承接有记录的既往剩余负担及实际新增服务。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_outer_box`
- 来源：`ademe-pchim`、`ec-pef-method`

###### 同一纸箱真实退回（`box_true_return`）

仅在实际流入能连接到同一实物纸箱先前从本周界流出的记录时适用。笼统的退回标签或产权记录不足，不创造新的纸箱制造负担。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：归属队列的真实退回纸箱质量除以原始队列净质量，守恒其剩余负担并将实际新增服务计一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_outer_box`
- 来源：`ec-pef-method`

###### 实际核算用电（`accounting_electricity`）

仅在既有非操作性环境记录证明供方清单包之外的归属用电时适用。不为该关口增设专用工位、制造操作或假定用电量。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：归属的计量核算用电量除以原始队列净质量，未来供方的原生流属性独立核实。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_accounting_energy`
- 来源：`ec-pef-method`

##### 废物流

不假定废物输入。过期品接收属于独立收集功能。

##### 基本流

密封核算关口不推定直接排放或资源取用。任何实际新增交换须有独立证据行，上游排放保留在供方清单包内。

#### 输出

##### 产品流

###### 唯一法国首次投放参考产品（`reference_product`）

保持不变的密封成品仅跨核算关口一次，包括实物仍在保管周界内的情况。后续发运不是本关口的第二次产出。

- 选定流：首次投放法国市场的密封民用海上手持救生信号成品
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cohort`
- 来源：`pyreo-market-2022`、`pyreo-market-2024`、`french-producer-definition`

###### 法国投放前实际对外转移（`unplaced_article_transfer`）

仅在尚未法国投放的实物退回或转移时适用，并明确接收方核算归属。不是共产品或自动生产抵扣。若该事件实际构成法国首次投放，则应归入 Q。

- 选定流：尚未法国投放的密封民用海上手持救生信号成品
- 流属性/单位：质量 / kg
- 数量规则：不重复的实际未投放整品外发质量除以原始队列净质量，剩余负担转入实际接收归属。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_article_ledger`
- 来源：`french-producer-definition`、`ec-pef-method`

###### 实际外发外部纸箱（`box_outward`）

仅在随商品外发、退还或其他转移发生实际周界外流时适用，每次跨界只有一个接收归属。内部指定用途或产权变更不构成跨界；投放后的流转仍属于后续服务记录。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：归属队列的外发纸箱质量除以原始队列净质量，另保留同箱身份、实际接收归属和剩余负担。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_outer_box`
- 来源：`ademe-pchim`、`ec-pef-method`

##### 废物流

###### 独立记录的废弃外箱（`discarded_outer_box`）

仅在证据表明该实际瓦楞外箱未受污染且作为纸或纸板废物独立交接时适用。不推定污染判定、处理工序或回收抵扣，其他废物身份须另行核实。

- 选定流：废弃未受污染的瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：归属队列且独立记录的废纸箱质量除以原始队列净质量，实际有独立证据的接收服务覆盖计一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_outer_box`
- 来源：`ademe-pchim`、`ec-pef-method`

###### 实际完整密封未投放品废物交接（`unplaced_article_waste`）

仅在此前尚未投放的密封整品实际作为废物向外交接时适用。仍在周界内的留置或重新登记件属于库存，法国已投放过期品退回不能改记为该项未投放损失。

- 选定流：完整密封废弃民用海上手持救生信号成品
- 流属性/单位：质量 / kg
- 数量规则：归属队列且实际交接的未投放整品废物质量除以原始队列净质量，将完整接收方环境服务作为黑箱核实，不规定处理方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_article_ledger`
- 来源：`ademe-pchim`、`ec-pef-method`

##### 基本流

不假定成品释放排放、纸箱回收抵扣或过期产品处理排放。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_cohort_first | 整品及服务 | 优先直接归属实际队列或功能并拆分共享记录；不能避免分配时，论证可量化的因果物理关系。费用、价格、全国比例或任意均分不自动成为环境因子。状态变化、退回或转移不是共产品。 | ec-pef-method, ademe-pchim |
| allocation_inherited_vectors | 原件、队列及交换 | 独立守恒剩余已发生环境清单：期初承接加外部带入剩余份额加真正新增，等于当期归属加期末承接加互斥外转或其他归属。不在退回时重复原制造，不抹除未知承接负担。实物卡片数量不是自动新增制造的供方乘数：仅 Bcurrent 计入参考队列，BX/Bother 保持独立接收归属，不作负抵扣。 | ec-pef-method |
| allocation_boxes | 实际纸箱池 | 区分购买、首次非购买外部接收和同箱真退回；定义同一实体周界，边外仅产权记录不能同时成为外发件与边内库存。实测负担消耗及实际服务计一次，不假定寿命、周转次数或退回率。 | ec-pef-method, ademe-pchim |
| allocation_later_service | 已投放队列 | 保留原量和累计负担；后续服务是 cp_later_services 下的外部补充记录，明确排除于本期关口清单；其增量不重建原始整品输入、参考产出或生产负担。未关联的旧货或外来已投放件保持独立归属。 | pyreo-committee-2023, ec-pef-method |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

采用既有匿名环境及行政书面记录。计量证据针对封闭整品及独立实测的普通外包装，不要求实物操作、产品测试、采购细节、地址、路线或设备信息。匿名供方及接收方证据引用可连接兼容环境清单包，无需披露上述细节。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | first_france_gate | 唯一全国投放 | 环境及行政事件记录 | 匿名件或批次；成品及密封状态；既往法国投放；法国首次事件及依据；申报人角色；发布机关和年份；有偿或无偿向下游提供或自用；分别记录工厂、申报及交接日期；合格件数；实测净质量；外包装排除；Qc | 调节文件资格与既有可追溯整品或批次实测，独立核对首次提供及交接证据；不新增操作或测试，申报本身不足。 | kg | 逐事件及结账 | 原始队列首次投放期间 | 声明的匿名保管实体周界和责任申报人总体 | 每 1 kg 参考流 | 适用日期的发布机关和年份；类别和资格证据；实测质量来源；去重及申报调节 |
| cp_article_ledger | first_france_gate | 接收、库存及去向 | 匿名库存和交接记录 | 件或队列；既往法国投放；期初期末件数及质量；首次外部接收；真退回原外发链接；Q；投放前转移；后续发运；实际废物交接；留样；接收归属；清单包覆盖 | 按系统边界条件卡连接相邻账；以实际跨界和关口日期分别核对件数与实测质量；承接期初库存，不再次声明生产。 | kg | 逐跨界或状态事件及结账 | 期间及期初期末库存 | 两账相同且明确的实体周界 | 每 1 kg 参考流 | 两个库存等式；同件退回链接；不同的工厂、关口、申报及交接证据；保留未解释差额 |
| cp_outer_box | first_france_gate | 一种实际外箱池 | 外包装环境记录 | 实际箱型及身份；空箱实测质量或同质包装批次实测；期初期末；购买接收；随商品或另行借入无偿首次非购买接收；同箱真退回；外发废物交接；供方包含；剩余负担；消耗份额 | 在实体周界内调节一种实际纸箱，区分全部外部来源，不受供方是否包含影响；使用既有包装实测，其他每种实际包装须有独立卡和账。 | kg | 每次外部跨界及结账 | 队列期间及实际纸箱承接 | 匿名实体纸箱池，不含边外库存 | 每 1 kg 参考流 | 包装实测证据；互斥来源；供方覆盖对照；取得或周转不重复计费；库存及负担闭合 |
| cp_accounting_energy | first_france_gate | 条件性实际用电 | 既有环境计量及分配记录 | 计量 kWh；期间；归属份额；因果分配；供方重叠；未来原生流属性和单位；未决覆盖 | 采用既有归属核算用电总量，核对期间、分配和供方覆盖；kWh 计量与供方流身份分开，不要求专用操作或设备。 | kWh | 每个记录期间及结账 | 实际声明的核算服务期间 | 仅具有证据且归属队列的服务 | 每 1 kg 参考流 | 计量总量证据；因果份额；无重叠；另行核实供方原生属性和单位 |
| cp_later_services | first_france_gate | 仅外部补充记录，排除于本期关口清单 | 旧队列库存和服务环境记录 | 原始队列及首次投放期间；原合格件数和净 Qc；既往累计负担；A_V/R_V/D_V/W_V 子类及原退回链接；实际后续期间；每记录一个服务交换，若有用电则按 kWh 计量；实际原生属性单位和兼容环境供方；互斥归属；增量 | 各旧队列独立保留。实际后续用电作为独立单交换补充接口，不成为新增关口输入；其他实际服务交换各有具体补充记录。缺失正的原 Qc 时只能保留原始服务量，不能生成强度。 | 来源交换单位 | 每次实际后续服务或事件 | 连接有证据的原首次投放期间的后续期间 | 相同实际保管实体周界及互斥原队列归属 | 每 1 kg 参考流 | 正的原 Qc 证据；保留既往负担；不重计整品生产或参考输出；服务属性单位独立核实；无本期关口重叠 |
| cp_burden_ledger | first_france_gate | 承接及新增清单 | 兼容整品、包装及服务环境清单包 | 原件队列交换；参考数量属性单位；期初剩余；外部带入剩余；真正新增向量；当期归属；期末剩余；互斥外转及其他归属；重叠 | 将每个向量分量对应到实物归属，不索取产品内部资料；缺失供方、承接或服务数据保持未知，区分历史来源与当日观察。 | 来源交换单位 | 逐清单包或归属及结账 | 原队列历史及所选期间 | 相同实物和队列归属对照 | 每 1 kg 参考流 | 逐分量守恒；供方兼容；质量及能量依据；负担一次销账；明确覆盖缺口 |

### 计算规则

这些守恒及归属等式是方法规则，不是经验因子。件数与实测质量分别检查，所有分子和清单向量保持相同原始队列及覆盖基准。

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_reference_mass | reference_product | Qc = 原始队列中不重复的合格首次法国投放件的可追溯整品净质量之和。件数交叉核对质量，按件转质量须有同质批次实测证据；外包装单独排除，强度计算要求 Qc 为正。 | cp_cohort; cp_article_ledger | 原始队列净质量和合格件数 | pyreo-market-2022, pyreo-market-2024, ec-pef-method |
| adjacent_article_stocks | 整品流转条件卡 | U0 + A_U + R_U = Q + U1 + X_U + W_U; V0 + Q + A_V + R_V = V1 + D_V + W_V。U 为实物保管的尚未法国投放库存，V 为实物保管的法国已投放库存，0/1 为期初期末。A_U 为首次外部未投放接收，R_U 为同件未投放真退回，X_U 为未投放外转，W_U 为未投放实际废物交接；A_V 为首次外部已法国投放接收，R_V 为同件已投放真退回，D_V 为实际后续外发退回转移，W_V 为已投放实际废物交接。每项保留自身原始队列、原始件数净质量和互斥接收归属。首次外部接收与真退回互斥；仅 Qinside 进入 Qc，Qoutside 在全国调节桥另列；合并时 Q 抵销，留置或改登记件仍在期末库存。 | cp_article_ledger; cp_cohort | 同一实体周界内闭合的件数和质量 | french-producer-definition, ademe-pchim |
| box_physical_stock | 纸箱流转条件卡 | K0 + P + F + R = K1 + O + W，每种实际包装分别按实测质量和件数核算。P 为购买首次接收，F 为首次非购买外部接收，R 为有证据的同箱真退回；O/W 为互斥的实际外发去向，内部使用或产权变更不是跨界。 | cp_outer_box | 含全部非购买来源的纸箱库存 | ec-pef-method, ademe-pchim |
| remaining_burden_balance | 所有清单行 | B0 + Bext_remaining + Bnew = Bcurrent + B1 + BX + Bother，逐分量使用相同交换单位。B0/B1 为期初期末剩余负担，Bext_remaining 为外部带入的已发生剩余份额，Bnew 仅为真正新增；当期、外转与其他归属互斥。退回仅带回原剩余负担加实际新服务；实际废物及损失后果明确归属，不消失。 | cp_burden_ledger; cp_article_ledger; cp_outer_box | 承接及新增环境清单守恒 | ec-pef-method |
| mass_basis_inventory | 所有清单行 | 每项独立归属的交换分子除以按千克计的原始 Qc。未作库存和负担归属时不能将全期接收、费用或实物周转除以当期投放量；转移、废物及期末库存分开，不自动抵扣。 | cp_cohort; cp_burden_ledger | 每 1 kg 参考流的交换及独立其他归属 | ec-pef-method |
| later_service_increment | 旧队列服务 | 当期 Q 为零时保留旧队列数量及累计负担。原 Qc 有证据且为正时，可另报后续服务增量除以该原始 Qc；合并兼容期间时保留前期累计强度，仅加该增量，不重建原始整品输入、参考输出或上游负担。未关联旧货不能借用新队列分母。 | cp_cohort; cp_article_ledger; cp_later_services; cp_burden_ledger | 独立旧队列服务强度或不可得结果 | pyreo-committee-2023, ec-pef-method |
| statutory_population_bridge | 行政申报 | 按互斥的类别、年份、地域、境内直接自用、适用排除、更正及时间分支，将本向下游提供队列调节至更广适用申报。识别唯一经销商品牌的责任变化，不重复全国首次事件；有证据保管周界内的 Qinside 与互斥边外事件 Qoutside 分别调节；申报更正及收集总量不创造物流或 Q。 | cp_cohort | 与实物库存独立的申报调节 | french-producer-definition, ademe-pchim |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_non_operational | 全部采集 | 仅用既有密封成品环境及行政记录，不索取成分、制造、性能、操作、设备或使用资料。 | 匿名记录及覆盖声明 |
| dq_first_national_event | 资格 | 绑定适用日期的发布机关和年份、责任申报人及独立于工厂放行和申报的法国首次事件；缺失有日期的制度确认属于资格缺口。 | cp_cohort；独立首次提供及实际交接证据 |
| dq_measurement | 整品及包装 | 实际封闭整品和外包装质量记录与队列及状态匹配，披露可追溯性、计量基准和不确定性，不开展实物操作；全国平均、目录质量和收集总量不能替代。 | 既有实测记录及适用的同质批次抽样依据 |
| dq_complete_interfaces | 库存及负担 | 两本整品账、每种实际包装账及各负担分量均闭合；其他实际包装、托盘、公用事业、损失或服务有独立证据行，缺少数据不能证明不存在。 | cp_article_ledger; cp_outer_box; cp_burden_ledger；适用性证据 |
| dq_supplier | 环境清单包 | 核对实际产品状态、广延属性及单位、原队列适用性和精确包装服务覆盖。流身份本身不是环境清单，也不能证明供方等效。 | 整品、包装及服务环境证据及重叠对照 |
| dq_statistics | 公开统计 | 区分市场、收集及处理的人群年份，含 2022 年扩围和取消一换一；年度比例不能成为原队列收集概率。 | 已检查 PYReO 核算页，不采用定量默认值 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | 参考产品 | 原始队列净质量须为正，参考输出唯一且全部限定信息完整；不编造 UUID、质量、因子或活动。身份支持与实际环境供方兼容分别核对。 | ec-pef-method |
| validate_event_states | 队列及库存账 | 法国首次事件与工厂放行、申报、发运分别验证；两本整品账按件数和质量闭合，合并 Q 抵销；外来旧货、退回、后续发运和留样不创造 Q。 | french-producer-definition, ademe-pchim |
| validate_packs | 实际包装接口 | 购买、首次非购买接收及同件真退回来源互斥，实际外发废物事件及实体周界可核对；供方覆盖与剩余负担调节一次，任何实际未表示包装均阻止完整性。 | ademe-pchim, ec-pef-method |
| validate_burdens | 逐原件队列交换 | 剩余负担逐分量闭合，不重复制造、重叠归属、无依据抵扣或将未知覆盖置零。期初商品、外来已投放件和借入无偿包装保持原有归属。 | ec-pef-method |
| validate_zero_and_collection | 旧队列及过期品 | 当期零投放不抹除旧数量或负担；后续服务强度须有正的原质量且不产生新商品输出。售出收集总量不能证明一换一、处理概率或避免生产抵扣。 | pyreo-market-2022, pyreo-market-2024, pyreo-committee-2023 |
| validate_completeness | 数据包 | 未知身份、适用日期制度、实际质量、条件交换或供方服务清单覆盖保持明确；投影有效不授予科学批准或研究资格，缺失证据时不得声称完整产品影响。 | ademe-pchim, ec-pef-method |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 仅在具备证据并独立取得资格后作为 secondary_dataset；限定首次全国投放环境清单，不是制造或使用指导。 |
| downstream_use | 仅对兼容的密封产品、原始队列、全国事件及声明关口覆盖作为 background_dataset；后续服务增量单独识别。 |
| allowed_use | 以实际原队列和服务调节及完整兼容供方清单包支持本法国首次关口环境核算。 |
| excluded_use | 仅凭本关口声称全生命周期或 PEF 符合性；救生功能比较；制造、成分、起动、操作或使用指导；其他类别；从转售、申报或发运推定生产；用总量比例归属收集处理。 |
| required_metadata | 匿名队列产品；全国发布机关年份及范围；申报人角色；法国首次及其他独立日期；原始净质量；既往投放；实体周界；精确供方、包装、服务覆盖；全部限定信息及交换身份。 |
| required_quality_disclosure | 实际本地质量、库存、负担证据和不确定性；来源年份类别限制；未决 UUID、供方及覆盖；条件接口和排除；独立审查、科学及研究状态；全国平均不作本地实测。 |
| update_trigger | 发布机关年份或制度人群变化、首次提供证据、投放历史更正、产品包装状态或供方覆盖变化、实际新增交换、原队列后续服务或新解决的身份计量证据。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-june2025 | official_guidance | UNSD CPC 3.0 完整说明，2025-06-30，PDF 第 173 页：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅冻结 35460 标题及近邻 35440/35450/35470 边界，不支持工艺或因子。 |
| unsd-cpc-october2026 | official_guidance | UNSD 完整说明，2026-10-23，CPC3!A1569:D1569：https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 仅核证 35460 和 HS 2022 品目 3604，不替换冻结坐标或证明整叶适用。 |
| pyreo-market-2022 | dataset | PYReO 2022 活动报告，第 3 节第 7 页限定核算页：https://pyreo.fr/wp-content/uploads/2024/12/PYREO-Rapport-Act-2022_WEB-2.pdf | 手持类单列、全国件数与估算质量、2022 人群变化；不采用本地质量、因子或概率。 |
| pyreo-market-2024 | dataset | PYReO 2024 活动报告，第 3 节第 7 页限定核算页：https://pyreo.fr/wp-content/uploads/2025/10/PYREO-Rapport-Act-2024_WEB.pdf | 明示类别平均全国估算及类别、年份、人群限制，不证明本地整品包装或实际前景。 |
| pyreo-committee-2023 | official_guidance | PYReO 利益相关方委员会纪要，2023-11-13，第 2 页环境核算部分：https://pyreo.fr/wp-content/uploads/2025/01/2023.11.13-PV-CPP-PYReO.pdf | 扩围及取消一换一，年度估计不是实际原队列收集概率。 |
| french-producer-definition | official_guidance | 法国 2020-1725 号法令，2020-12-29，第 7 条第 3° 修订 R543-229(1°)，JORF 初始正式文本，经 ELI article_7 别名阅读：https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000042754164 | 全国生产者和申报人正式定义，经 ADEME 交叉支持；有偿无偿、全国引入进口、自用和唯一经销商品牌。不裁定具体队列，须有适用日期原文及制度说明。 |
| ademe-pchim | official_guidance | ADEME 化学品生产者责任，申报、责任人、包装及认可机构核算部分：https://filieres-rep.ademe.fr/en/filieres-REP/filiere-PCHIM | 独立的全国申报和角色背景；投放、收集、处理数据分开，包装及费用覆盖；总量非参与者批次证据，不采用处理或操作资料。 |
| ec-pef-method | official_guidance | 欧盟委员会建议 (EU) 2021/2279，经更正合并附录 I 第 3.2.2、4.4.9、4.5 节，PDF 第 33、79、87–88 页：https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | 独立检查边界披露、实际周转包装生命周期归属及拆分分配原则，不声称完整 PEF 符合性，不采用原文示例质量、周转率或抵扣。 |
