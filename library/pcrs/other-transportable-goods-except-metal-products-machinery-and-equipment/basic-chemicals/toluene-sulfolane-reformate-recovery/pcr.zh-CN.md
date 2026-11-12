---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.toluene-sulfolane-reformate-recovery
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 重整油经湿环丁砜萃取及分馏回收甲苯

## 1. 范围与适用性

本归因型制造PCR覆盖从接收的适于萃取的化石重整油，经湿环丁砜液液萃取、富液汽提、真空溶剂回收、萃余液水洗、溶剂再生、白土精制及苯甲苯分馏得到的散装商品液态甲苯。C8以上釜底切割物不再精制即离开。热力采用外购蒸汽，冷却采用循环水回路。[jrc-lvoc-2017，§4.2.2.2]

上游催化重整及必要加氢精制不进入前景，但保留经验证的上游负荷。不包括裂解汽油或煤焦油进料、仅萃取精馏或干溶剂或NMP或DMF或DMSO路线、甲苯合成或歧化、混合溶剂配制、废溶剂再生、二甲苯异构化及厂内燃料燃烧。实际场址增加这些工序时，应先扩展并审查清单，再声明适用，不能将其删除。供应商现行ED Sulfolane规格描述另一种简化方案，不是此处默认值。[honeywell-aromatics-recovery；jrc-lvoc-2017]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.toluene-sulfolane-reformate-recovery |
| classification_refs | CPC 3.0 34110; narrower |
| covered_products | 声明的重整油回收路线所产散装商品液态甲苯 |
| excluded_products | 以纯组分账户代替商品整料；稀释甲苯混合物；废溶剂；冒充甲苯的苯或二甲苯 |
| representative_product | 甲苯（CAS108-88-3），整料验收液态商品 |
| production_route | 重整油湿环丁砜液液萃取；白土精制及苯甲苯分馏 |
| market_state | 工厂交付门散装液体，声明实际含量、水、杂质及交接状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能 | 供应作为化工原料的商品甲苯 |
| 数量 | 1 kg |
| 质量 | 按实际商品等级验收，有甲苯含量、水和指定杂质的测量；不默认通用纯度 |
| 周期 | 一次工厂门交付；不包含下游使用寿命 |
| reference_flow_link | accepted_toluene |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 甲苯 `33ac34b7-d691-4eda-8563-daef49a05157` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CAS108-88-3; 商品整料; 含量及方法; 水及苯和非芳烃杂质; 验收规格; 液态温压; 散装工厂交付门; 湿环丁砜重整油路线; 实际场址供应方及期间; 进料适用性; 不可变首次验收事件及队列和Q/Q0; 同基准D_new/FG_new/L_new去向; 上游边界及分配方法 |

保留官方原生甲苯标识及整料质量。其通用液态化学品含义允许已声明的商品残余杂质，但不能识别刻意稀释的混配物。原生生产混合措辞或单一CAS均不能证明供应方相容或路线平均数据集。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 | kg | 采用整料液态产品净质量，排除储罐及容器皮重；每1千克参考流不乘甲苯含量。含量由cp_reference另行测量。首次验收Q锁定为原事件商品整料质量；后续实物去向须按实测转换回同一基准，不能另定Q。 |
| volume_mass | reformate_feed; accepted_toluene; water_makeup; cooling_makeup | 质量 | kg | 采用同温压下实测或可追溯且对应组成的密度换算液体体积；披露修正，不得用纯甲苯密度换算湿混合物。 |
| utility_bases | electricity; indirect_steam; direct_steam; condensate_return | 能量及质量 | MJ; kg | 电力按1千瓦时=3.6兆焦。蒸汽商品及返还凝结水仍按千克并记录状态。热量核对=输入千克数乘比焓之和减返还千克数乘比焓之和，同一焓基准且千焦除以1000换成兆焦。直接蒸汽及水汽提器循环另记。不得套用通用兆焦每千克因子或重复购买同一蒸汽。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 回收装置接收实际适于萃取的重整油，具备进料组成及上游适用性证据 |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC 3.0 34110; narrower |
| recursive_input_rule | 外购同类甲苯属于有证据且有负荷的上游输入，不是新回收产出或内部循环。应另加原子输入，不得混入生产Q。 |
| upstream_dataset_requirement | 实际重整油供应方包括重整、切割及必要进料处理；公用工程、溶剂白土及外部处理链接须匹配组成、属性和边界 |
| disclosure | 记录实际来源厂、进料批次适用性、全部边界、公用工程回水约定、外包处理、排除工序及清单缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | recovery_unit | 纳入接收储存、各萃取回收再生水洗白土分馏工序、内部转移、启停清洗损失、装卸及最终排放。不得重复上游炼厂工序或默认其无负荷。实际额外化学品、包装、再生或控制设施须在完整性声明前各列实物交换。 | `jrc-lvoc-2017` |
| boundary_acceptance | accepted_toluene | Q>0为声明期间唯一首次验收事件所实测商品整料净千克数之和；各不可变事件及批次仅按原首次验收基准计入一次。按同一新验收队列及基准核对Q = D_new + FG_new + L_new：D_new为扣除关联退回的净发运量，FG_new为期末已验收成品，L_new覆盖所有其他验收后净去向，包括尚未计入D_new或FG_new的实际净退回、损失、报废、降级、使用及期末转回返工或在制品的量。各去向须互斥且穷尽，基准变化须依据实测记录转换。仅在证明其他净去向均为零时可用D_new+FG_new两项式。后续损失不减少Q；期初成品、外购产品、验收前不合格品、退回、复验、再验收及内部毛循环均不新增Q。旧验收批次保留原Q0。 | `jrc-ilcd-general-2010` |
| boundary_carry | recovery_unit | 按批次队列携带原料、溶剂、床层、在制及成品的质量组分库存，以及已积累上游及工序负荷向量。部分原料在制负荷结转至首次验收，仅增加后续加工，包括实际归属于该队列的失败、不合格及返工活动，避免重复进料负荷。失败产出在首次验收前不产生Q。已验收物料转回在制品仍保留原事件及负荷向量；再验收不新增Q。期初成品发出是原负荷的转移。后续储存、损失、退回及维修服务修正归回原验收队列并用原验收量Q0；不得除以当前Q。Q0未知时保留未归一化原始负荷并挂起修正，不虚构分母。 | `jrc-ilcd-general-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| recovery_unit | 重整油湿环丁砜回收及分馏 | required | 仅声明路线；各工序分表 | foreground_process | accepted_toluene; 1 kg |

### 过程：湿环丁砜回收 (`recovery_unit`)

#### 输入

##### 产品流

###### 催化重整石脑油萃取进料 (`reformate_feed`)

接收经加氢精制或以其他证据证明适于萃取的重整油，保留逐批C6至C8以上组成、水、硫及烯烃分析。上游重整、进料切割及必要的加氢精制属于实际上游供应边界，不得无负荷或在此重复。记录整股混合物质量及分析，不能只记录其中甲苯。

- 选定流: 催化重整石脑油萃取进料
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `jrc-lvoc-2017`

###### 环丁砜溶剂补充料 (`sulfolane_makeup`)

记录四氢噻吩-1,1-二氧化物补充料（CAS126-33-0）；若供货中有水及其他组分，均须声明。保留供应整料质量及组分台账；纯环丁砜标识不能独自代表稀释供料。贫液及富液循环为内部转移，不能重复算作新料。

- 选定流: 环丁砜溶剂补充料
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `jrc-lvoc-2017`

###### 工艺补充水 (`water_makeup`)

进入湿溶剂调整及萃余液水洗的外部液态水。仅计量新补充量。循环洗水、汽提水及进料夹带水保留在内部水台账。须识别实际供水方或直接取水及处理。

- 选定流: 工艺补充水
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utility`
- 来源: `jrc-lvoc-2017`

###### 芳烃萃取物精制用活性白土 (`clay_charge`)

分馏前用于去除微量烯烃杂质的新白土。记录实际矿物配方、装填量、服务周期及供应方。不默认白土寿命或用量；核对已耗服务和床层存量，但不得删除完整的新料及废料实物交换。

- 选定流: 芳烃萃取物精制用活性白土
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_consumable`
- 来源: `jrc-lvoc-2017`

###### 外购交流电 (`electricity`)

包括萃取及循环泵、真空设备、冷却泵、分馏辅助设备、储罐转输和可归属控制设施。计量实际电压及地域；千瓦时乘以3.6换算。外购电力与蒸汽及液态水分别记录。

- 选定流: 外购交流电
- 流属性/单位: 能量 / MJ
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utility`
- 来源: `jrc-lvoc-2017`

###### 外购间接加热蒸汽 (`indirect_steam`)

按实际压力、温度、干度及供应方回水约定，记录供应重沸器和溶剂回收再生换热器的整股蒸汽商品。分别记录蒸汽质量、焓及凝结水返还。仅链接一份蒸汽供应负荷；衍生兆焦热量账户属于核对，不能作为另一份购热交换。

- 选定流: 外购间接加热蒸汽
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utility`
- 来源: `jrc-lvoc-2017`

###### 外购直接接触汽提蒸汽 (`direct_steam`)

记录实际用于汽提、真空喷射器或白土蒸吹的外部蒸汽，并按用汽点拆账。水汽提器内部产生的蒸汽属于内部链接，不能重复外购。直接接触凝结液进入实际含污染物水账户，不属于清洁公用工程回水。

- 选定流: 外购直接接触汽提蒸汽
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utility`
- 来源: `jrc-lvoc-2017`

###### 冷却补充水 (`cooling_makeup`)

声明的循环冷却回路所用新鲜液态补水。与工艺补水分别计量，并记录蒸发、飘滴、排污及存量；循环量不能重复算作取水。直流冷却或制冷剂冷却设计须另行完整扩展。

- 选定流: 冷却补充水
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utility`
- 来源: `jrc-lvoc-2017`

###### 储罐氮封用氮气 (`nitrogen`)

仅在实际储罐或溶剂系统使用氮封时纳入。保留供应纯度、压力及计量质量；气体体积仅在声明温度、压力、组成和压缩性后换算。无此流须有运行证据，不设默认吹扫量。

- 选定流: 储罐氮封用氮气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_consumable`
- 来源: `jrc-lvoc-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 甲苯 (`accepted_toluene`)

工厂交付门的一股验收散装液态甲苯产品。保留商品整料净质量、实测甲苯含量、水、苯及非芳烃杂质和验收规格。此流不是纯组分质量、溶剂混配物、废溶剂或运输后市场产品。原生通用生产混合标识不规定技术比例或供应方。每1千克输出为唯一首次验收参考坐标；实际发运、期末库存及验收后损失在独立实物账各计一次。后续退回返工再验收保留原队列及Q0。

- 选定流: 甲苯 `33ac34b7-d691-4eda-8563-daef49a05157`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reference`
- 来源: `jrc-lvoc-2017`

###### 回收苯商品 (`benzene_coproduct`)

苯塔馏出并按实际纯度及边界售往有记录用户的独立苯产品。记录整料质量、分析、去向及价格。不得无相容性证明就把巴西运输接口或限定技术构成的原生混合物绑定到此单一重整油回收输出。

- 选定流: 回收苯商品
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_outputs`
- 来源: `jrc-lvoc-2017`

###### 甲苯塔C8以上芳烃釜底产品 (`c8_aromatic_cut`)

离开甲苯塔的一股未再分离的有用C8以上芳烃切割物。保留混合二甲苯异构体、乙苯及更高沸点组分分析和接收方。不得把整股切割物改称纯二甲苯或对二甲苯。后续二甲苯精制和异构化不属于本路线，由下游接收方负责。

- 选定流: 甲苯塔C8以上芳烃釜底产品
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_outputs`
- 来源: `jrc-lvoc-2017`

###### 水洗后非芳烃重整油萃余液 (`raffinate`)

经溶剂水洗后有用的非芳烃萃余液，保留残余芳烃、环丁砜及水的实际分析。买方及炼油或溶剂用途须有证据。该混合物不是某种纯烷烃，不自动获得避免汽油收益。

- 选定流: 水洗后非芳烃重整油萃余液
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_outputs`
- 来源: `jrc-lvoc-2017`

###### 返还间接蒸汽凝结水 (`condensate_return`)

实际返还蒸汽供应方的未污染液态水，记录质量、温度及同一基准焓。此公用工程回水不是独立销售共产品，不获分配份额。未返还或受污染凝结水进入实际水或废物账户。

- 选定流: 返还间接蒸汽凝结水
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utility`
- 来源: `jrc-lvoc-2017`

##### 废物流

###### 环丁砜再生器降解残渣 (`solvent_regenerator_residue`)

实际溶剂再生器排污，含环丁砜降解物及残留烃类。测量排出的整料质量、组成、废物分类及接收处理。内部再生溶剂属于回流，不是本废物。

- 选定流: 环丁砜再生器降解残渣
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastes`
- 来源: `jrc-lvoc-2017`

###### 废芳烃精制白土 (`spent_clay`)

实际蒸吹后失活白土整料，含白土、烃、水及沉积物。记录周期、移除质量、残留污染物及处理去向。记录实际新料替换及床层存量变化；服务摊销不能代替整料交换。

- 选定流: 废芳烃精制白土
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastes`
- 来源: `jrc-lvoc-2017`

###### 含BTX及环丁砜水相排污 (`process_effluent`)

来自溶剂及水回收、苯塔接收罐水包及白土蒸吹并送往外部处理的实际水相排污。仅在共有经验证的处理接口时合并，并在合并前保留分来源体积、密度和分析物。此流是污染水混合物，不是排入河流的水基本流。

- 选定流: 含BTX及环丁砜水相排污
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastes`
- 来源: `jrc-lvoc-2017`

###### 循环冷却排污水 (`cooling_blowdown`)

送往实际接收方的液态冷却回路排污，与BTX工艺废水和公用工程凝结水返还分开。保留水处理添加剂和杂质分析；清单完整前须将每项实际新添加剂各列输入。

- 选定流: 循环冷却排污水
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastes`
- 来源: `jrc-lvoc-2017`

###### 送外部治理的捕集芳烃工艺尾气 (`captured_vent`)

跨界送往实际外部共用治理或回收服务的捕集气体。交接处测量整股气体质量及物质组成，并纳入实际处理负荷。不得又把被捕集物质作为直接空气排放；基本输出仅含最终未捕集及残余排放。

- 选定流: 送外部治理的捕集芳烃工艺尾气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

##### 基本流

###### 苯排入室外空气 (`benzene_air`)

分别测量捕集治理后烟囱、真空、储罐装卸和逸散苯，积分不重叠的排放。CAS71-43-2；错误环境隔室的基本流不能替代。

- 选定流: 苯排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

###### 甲苯排入室外空气 (`toluene_air`)

按来源及运行时间测量最终残余甲苯（CAS108-88-3）。甲苯产品UUID不能用作基本排放；捕集转移和最终排放数量互不重叠。

- 选定流: 甲苯排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

###### 邻二甲苯排入室外空气 (`oxylene_air`)

仅在存在时计量邻位异构体（CAS95-47-6），与间位、对位及其他C8烃分开；总挥发性有机物仅作核对汇总。

- 选定流: 邻二甲苯排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

###### 间二甲苯排入室外空气 (`mxylene_air`)

仅在存在时计量间位异构体（CAS108-38-3）；保留采样方法、检出限及排放隔室。

- 选定流: 间二甲苯排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

###### 对二甲苯排入室外空气 (`pxylene_air`)

仅在存在时计量对位异构体（CAS106-42-3）；纯异构体排放不能代表整股芳烃切割物。

- 选定流: 对二甲苯排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

###### 乙苯排入室外空气 (`ethylbenzene_air`)

存在时计量实际最终空气排放中的乙苯（CAS100-41-4）；其不同于各二甲苯异构体及甲苯。

- 选定流: 乙苯排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

###### 环丁砜排入室外空气 (`sulfolane_air`)

筛查最终尾气及夹带气溶胶中的环丁砜（CAS126-33-0）；保留采样相态并计量实际残余质量。低挥发性不能证明不存在，捕集气溶胶不是直接排放。

- 选定流: 环丁砜排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

###### 二氧化硫排入室外空气 (`sulfur_dioxide_air`)

筛查溶剂降解及最终尾气处理的二氧化硫（CAS7446-09-5），仅计量实际最终排放。不按化学计量假定所有损失环丁砜都变为二氧化硫。

- 选定流: 二氧化硫排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

###### 氮气排入室外空气 (`nitrogen_air`)

若使用氮封，计量实际未捕集或最终残余氮气；保留捕集转移边界，不用强加吹扫率推算氮损失。

- 选定流: 氮气排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

###### 水蒸气排入室外空气 (`water_vapour_air`)

用独立水台账计量实际冷却蒸发及其他最终水蒸气排放。与飘滴、废水及内部工艺蒸汽分开；实际液滴及组分排放另列。

- 选定流: 水蒸气排入室外空气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于新首次验收生产队列的累计实物交换数量除以Q；cp_reference。保留继承材料负荷向量、原分子单位及独立实际期间实物台账。旧队列服务另记。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_releases`
- 来源: `jrc-lvoc-2017`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | recovery_unit | 先保留未分配的整股质量、组分、水及能量平衡。细分计量工序，将可直接识别的产品储存装卸和专用塔负荷归给实际致因产品。保留萃余液、苯及C8以上产品功能、混合残余物和共用溶剂回收；不得按分配份额缩放实物共产品数量。 | `jrc-ilcd-general-2010`; `jrc-lvoc-2017` |
| allocation_causality | recovery_unit | 对各剩余共用负荷，以实测组分回收及工序响应检验并记录物理因果。仅对证明由处理质量驱动的负荷允许质量份额；组分致因时使用相应实测组分份额。能量分配仅限确实提供有用能量的产品，且有热值或焓基准；BTX化学品及萃余液不都属于燃料功能。不设通用质量或热值默认分配。 | `jrc-ilcd-general-2010` |
| allocation_residual | recovery_unit | 对无决定性物理因果的剩余共用负荷，按声明且与研究一致的经济份额a_i=m_i*p_i/sum(m_j*p_j)，覆盖实际有用共产品的分离边界，采用同期间实测净价格、统一货币及正价值。缺失零价负价情况留待审查，不虚构份额。检验合理价格敏感性；不得把已分配负荷与避免产品收益合并。废物处理留在责任工序；内部溶剂水循环、凝结水返还及待治理捕集气体不获可售产品份额。 | `jrc-ilcd-general-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | recovery_unit | accepted_toluene | measurement | 批号；不可变首次验收事件标识及时间；实测验收整料净千克数；原首次验收基准；含量水杂质；规格；液体状态；皮重密度；净发运D_new及关联退回；期末已验收成品FG_new；互斥L_new净退回损失报废降级使用及返工在制品去向；期初成品；复验及再验收；失败返工活动；基准转换及不确定性；Q；原Q0 | 校准净称量或经温度修正的罐计量并使用实测相容密度；色谱含量及水分析。Q锁定为唯一首次验收事件实测质量之和。按同批同首次验收基准，以互斥且穷尽的D_new/FG_new/L_new核对：发运扣除关联退回后，将其剩余净去向仅记入FG_new或L_new一次；实测基准变化须转换，不能把毛循环作为新增量。再验收不改变Q。另保留实际期间外部交换及全部原料在制成品库存。 | kg | 逐批或连续计量；完整期间核对 | 一个声明的完整运行期，包括启停 | 实际回收装置及声明路线 | 每 1 kg 参考流 | 校准、原始分析、不可变事件记录、完整批次去向核对及缺口披露 |
| cp_material | recovery_unit | reformate_feed; sulfolane_makeup | measurement | 供应方；准确配方；整料千克；组分分析；进料适用性；新供料；转移；期初期末原料溶剂在制及结转负荷向量 | 逐次称量或罐计量新接收量；分析代表批次；核对独立贫富液汽提回收水洗转移表及组分取样。 | kg | 逐批或连续计量；完整期间核对 | 一个声明的完整运行期，包括启停 | 实际回收装置及声明路线 | 每 1 kg 参考流 | 校准原始分析批次核对及缺口披露 |
| cp_utility | recovery_unit | electricity; indirect_steam; direct_steam; condensate_return; water_makeup; cooling_makeup | measurement | 工序；仪表；千瓦时；蒸汽千克温压干度焓；回水千克状态；水千克；蒸发及排污项；供应方约定；损失；校准 | 分表计量萃取回收再生及各塔和冷却工序；区分直接间接蒸汽及实物水。核对外购公用工程和完整蒸汽凝结水水量平衡。 | MJ; kg | 逐批或连续计量；完整期间核对 | 一个声明的完整运行期，包括启停 | 实际回收装置及声明路线 | 每 1 kg 参考流 | 校准原始分析批次核对及缺口披露 |
| cp_consumable | recovery_unit | clay_charge; nitrogen | measurement | 实际配方；新装千克；周期；床层保有质量；移除；氮封使用；仪表状态；气体换算；增量服务台账 | 记录领用库存、实际新废料周期及独立计量服务使用。共用周期仅按有证据使用拆分服务负荷，完整实物交换仍保留在真实期间。 | kg | 逐批或连续计量；完整期间核对 | 一个声明的完整运行期，包括启停 | 实际回收装置及声明路线 | 每 1 kg 参考流 | 校准原始分析批次核对及缺口披露 |
| cp_outputs | recovery_unit | benzene_coproduct; c8_aromatic_cut; raffinate | measurement | 流标识；整料千克；所有实测组分；去向；销售用途证据；分离边界；净价格；货币；库存；负荷向量 | 分别称量或罐计量及分析各独立输出；核对验收买方记录，不把未分离切割物变为纯组分。 | kg | 逐批或连续计量；完整期间核对 | 一个声明的完整运行期，包括启停 | 实际回收装置及声明路线 | 每 1 kg 参考流 | 校准原始分析批次核对及缺口披露 |
| cp_wastes | recovery_unit | solvent_regenerator_residue; spent_clay; process_effluent; cooling_blowdown | measurement | 来源；整料千克或体积密度；含水组成；周期；接收方；处理；库存；联单；浸出分析记录 | 计量每次实际移除，保留分别的来源流、处理接口及组成。核对新废料及水量平衡；选择真实处理，不默认通用处置。 | kg | 逐批或连续计量；完整期间核对 | 一个声明的完整运行期，包括启停 | 实际回收装置及声明路线 | 每 1 kg 参考流 | 校准原始分析批次核对及缺口披露 |
| cp_releases | recovery_unit | captured_vent; benzene_air; toluene_air; oxylene_air; mxylene_air; pxylene_air; ethylbenzene_air; sulfolane_air; sulfur_dioxide_air; nitrogen_air; water_vapour_air | measurement | 排口；物质CAS；相态；浓度；干湿气流；温压；运行时间；控制设施；捕集转移；最终残余；检出限；水蒸发 | 筛查实际组分排放，测量代表性日常启停装卸逸散工况；以相容尾气流量及小时数积分浓度。区分转移和残余边界，其他每种实际物质分别补充原子行。 | kg | 逐批或连续计量；完整期间核对 | 一个声明的完整运行期，包括启停 | 实际回收装置及声明路线 | 每 1 kg 参考流 | 校准原始分析批次核对及缺口披露 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 归属于新首次验收队列的各累计实物交换数量，包括继承上游在制项、实际失败返工活动及声明范围内验收后服务和损失，除以锁定的正首次验收Q；accepted_toluene为1千克参考核算坐标，不是新增外部实物输出。继承向量仅结转一次，增量工序仅加入一次。保留未分配实物台账及单位。另用细分及有记录共用份额计算归属负荷向量，再各除以自身队列原验收量Q或Q0。不得删除共产品质量、因后续损失缩减Q、重复计入再验收或把期初成品服务移入当前Q。 | cp_reference; period records; cohort ledger | per 1 kg reference flow | `jrc-ilcd-general-2010` |
| acceptance_event_bridge | recovery_unit | Q = 声明商品整料验收基准下唯一首次验收事件实测质量之和；Q = D_new + FG_new + L_new是同基准完整去向核对，不是替代分母。从D_new扣除的关联净退回须按剩余去向仅记入FG_new或实际L_new去向一次；跟踪内部转移及再验收，不加总毛经过量。须显式核对实测组成、水分及基准变化。首次验收100千克、净发运60千克、期末成品30千克、验收后损失10千克时，Q=100千克，归属负荷100单位的结果为100/100=1单位每千克；不完整90千克分母会得到100/90=1.111...，不得使用。未知残差保留为未解决问题，不得推定零损失或改写Q来强制闭合。 | cp_reference; event ledger; same-basis destination and stock records | locked Q and complete destination bridge | `jrc-ilcd-general-2010` |
| component_balance | recovery_unit | 各整股流按实测组分千克=整料千克乘实测质量分数计算。对总质量及守恒元素碳氢硫，核对外部输入加期初原料在制成品库存等于实际外部输出加期末原料在制成品库存，净元素生成量为零。此含储存的实物边界中，净外部发运及实际损失废物排放各计一次；Q及内部验收返工转移均不是新增外部输出。实际期间实物数量与同首次验收基准D_new/FG_new/L_new分开，并显式核对转换。对各反应物种X，包括环丁砜降解及水，采用期初X + 外部输入X + 实际G_X = 期末X + 外部输出X + 实际C_X；用匹配分析或有依据化学计量乘实测反应程度确定实际生成消耗。物种转化未知时保持未解决，不强制物种守恒或假定完全降解。保留实测损失和不确定性。原料在制成品负荷向量与实物质量分开。未知残差为问题，不能虚构产品或当作零。 | cp_reference; cp_material; cp_outputs; cp_wastes; cp_releases; stocks | unallocated component and water balances | `jrc-lvoc-2017`; `jrc-ilcd-general-2010` |
| heat_check | indirect_steam; direct_steam; condensate_return | 用实测千克及同一基准状态计算输入减返还净焓，千焦除以1000为兆焦。追踪直接蒸汽进入工艺水并区分清洁间接回水。内部回收热水不是新的供应输入或避免热力收益。 | cp_utility; measured mass; specific enthalpy; states | physical heat and water check | `jrc-lvoc-2017` |
| release_integral | benzene_air; toluene_air; oxylene_air; mxylene_air; pxylene_air; ethylbenzene_air; sulfolane_air; sulfur_dioxide_air | 对逐物质浓度乘相容气体流率乘运行时间积分，修正单位后除以Q。仅汇总不重叠排口相态，保留不确定性和检出限。捕集尾气仅进入一次外部处理，不能在此将捕集分子和处理最终排放都计为直接排放。 | cp_releases; concentration; flow; time; Q | kg per 1 kg reference flow | `jrc-lvoc-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 链接供应方前确认完整实物标识、类型、相态组成、属性单位及边界。普通未解决UUID和供应方保留显式缺口，不等于流不存在；甲苯产品不能标识空气排放。原生CPC35499分类债务不改写化学CAS及类型或独立官方CPC34110范围。 | 原生记录及供接收方分析 |
| quality_coverage | recovery_unit | 覆盖正常异常运行、组分变化、溶剂降解、水洗蒸吹排污、实际清洗添加剂、库存及全部输出去向。JRC历史BB2能耗范围及供应商纯度回收率均不是工厂默认值。声明完整前补充所有遗漏的实际原子交换。 | 完整期间运行及缺失数据登记 |
| quality_cohorts | cp_reference | 证明唯一事件锁定的首次验收Q及互斥穷尽、同基准的D_new/FG_new/L_new完整桥接，包括实际验收后损失及净退回。原料在制成品结转及实际失败返工负荷各保留一次，区分实物平衡与验收事件，所有旧队列后续服务修正均保留原Q0。旧分母未知时仅允许原始修正记录留待审查。记录抽样、基准转换及分配不确定性，不虚构容差。 | 不可变事件及批次关联的库存去向记录、负荷向量、校准及验收记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | accepted_toluene | 要求唯一商品整料液态甲苯参考输出及全部限定信息；拒绝苯乙烯、聚合物、混配溶剂、排放、错误市场边界或仅组分数量。核心标识缺失阻断可用方法学；通用名称不能单独验证研究。 | `jrc-lvoc-2017` |
| validate_quantities | all inventory rows | 要求事件锁定Q>0、有限非负实物数量、显式带符号净退回调整、共同期间及双语1千克基准。核对唯一首次验收质量及互斥穷尽、同基准的D_new/FG_new/L_new桥接；后续损失不能减少Q，期初成品、退回、再验收及内部循环不能增加Q。按实测不确定性检验体积密度、分数百分数约定、完整蒸汽回水水量区分及含储存的质量组分闭合，不得将Q新增为外部输出。保留失败返工负荷及原队列Q0。拒绝去向缺失、未知残差、按组分缩放产品参考、将循环算新料及重复蒸汽热力负荷。 | `jrc-lvoc-2017`; `jrc-ilcd-general-2010` |
| validate_allocation | recovery_unit | 核对各可售输出及分支点、细分因果证据和剩余经济份额。份额仅对相应有用共功能之和为1；保留完整实物输出、无避免产品收益、废物回流排除及原队列Q0。未解决分配属于研究待审，不能虚构合格因子。 | `jrc-ilcd-general-2010` |
| validate_completeness | recovery_unit | 核对最终空气物质相态、捕集气体接收方、BTX溶剂水处理、废白土溶剂残渣、供应方相容及库存向量。实际额外添加剂排放须作原子扩展。结构计量检查通过不能删除标识供应数量缺口，也不授予科学翻译或研究批准。 | `jrc-lvoc-2017`; `jrc-ilcd-general-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 经验证工厂门的声明散装甲苯回收路线，具备完整实际上游处理链接及显式分配队列元数据 |
| excluded_use | 通用甲苯生产平均；其他进料溶剂路线；纯组分数量替代；已完成比较声明或自动避免汽油收益 |
| required_metadata | 参考限定信息；场址时间；进料组成适用性；公用工程蒸汽回水；各共产品废物空气去向；库存负荷向量；不可变验收事件；Q及Q0；同基准D_new/FG_new/L_new及基准转换；实际分配及供应方固定标识 |
| required_quality_disclosure | 原生分类债务；未解决普通标识供应方；取样工况；分析不确定性；缺失记录；原始来源局限；分配价格敏感性；审查及研究状态 |
| update_trigger | 进料适用性组成、萃取技术溶剂、产品边界规格、蒸汽冷却治理、共产品用途、库存规则或分配证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-lvoc-2017 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Large Volume Organic Chemicals (2017), JRC109279, DOI 10.2760/77304; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/JRC109279_LVOC_Bref.pdf | §4.2.2.2及图4.3（印刷197至199页/PDF235至237页）：适用进料、湿环丁砜循环、萃余液水洗、白土及分馏；§§4.3.1.2、4.3.2.2、4.3.3至4.3.6（印刷212至218页/PDF250至256页）：最终空气、水、溶剂白土废物及公用工程。仅定性路线证据，不默认历史能耗或纯度。 |
| jrc-ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March2010, EUR24708EN/JRC48157, DOI10.2788/38479; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC48157/ilcd_handbook-general_guide_for_lca-detailed_guidance_12march2010_isbn_fin.pdf | §§7.9.2至7.9.3（印刷255至272页/PDF275至292页）：细分、逐流决定性物理因果及剩余市场价值分配。队列库存处理及首次验收规则是本PCR显式前景协议综合，不是引用的ILCD工厂公式或默认分配因子。 |
| honeywell-aromatics-recovery | literature | Honeywell UOP, Aromatics Recovery, official technology page, snapshot retrieved 2026-11-06; https://uop.honeywell.com/en/industry-solutions/petrochemicals/aromatics-recovery | 独立供应商反证用于区分重整油切割塔顶料的简化ED Sulfolane与传统Sulfolane。此湿液液路线不采用供应商纯度回收率或成本声明。 |
