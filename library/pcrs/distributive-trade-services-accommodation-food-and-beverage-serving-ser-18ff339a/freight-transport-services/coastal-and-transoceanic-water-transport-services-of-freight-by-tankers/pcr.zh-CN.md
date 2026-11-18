---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.coastal-and-transoceanic-water-transport-services-of-freight-by-tankers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 沿海远洋液货气体船货运工作量

## 1. 范围与适用性

覆盖专用液货气体船沿海及远洋承运原油和其他散装液体气体，包括真实天然气甲烷LNG、LPG、成品油化学品及兼容食品其他散装液体。真实常温加热冷藏低温加压围护动力及船岸船船转运构型均为条件，不将全部液货船限为油或假定全部制冷。排除仅内河货运、罐式集装箱包装货物服务、干散货、独立管道陆空运输、货物生产炼制液化贸易、纯船租赁及独立浮动储存加工功能。本承运所需一体化调理保留，独立场站供应明确仅计一次。

功能产品为具真实相态品质交接声明的合格货运工作量，不是原油LNG生产船舶制造压载移动或假设蒸发损失额度。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.coastal-and-transoceanic-water-transport-services-of-freight-by-tankers |
| classification_refs | CPC 3.0 65212 |
| covered_products | 覆盖专用液货气体船沿海及远洋承运原油和其他散装液体气体，包括真实天然气甲烷LNG、LPG、成品油化学品及兼容食品其他散装液体。真实常温加热冷藏低温加压围护动力及船岸船船转运构型均为条件，不将全部液货船限为油或假定全部制冷。排除仅内河货运、罐式集装箱包装货物服务、干散货、独立管道陆空运输、货物生产炼制液化贸易、纯船租赁及独立浮动储存加工功能。本承运所需一体化调理保留，独立场站供应明确仅计一次。 |
| excluded_products | 仅内河非海运或集装箱包装干货功能；货物制造炼制液化贸易；纯租赁独立储存加工 |
| representative_product | 限定完成海运液货气体船货物运输工作量 |
| production_route | 真实船舱保管船岸船船转移海港压载作业相态蒸气照护验收卸货及责任寿命 |
| market_state | 声明相态品质的合格验收沿海远洋散装液气货运工作量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 限定完成海运液货气体船货物运输工作量 |
| 数量（How much） | 1 tkm真实限定完成合格净散货海运区段工作量 |
| 质量（How well） | 真实货物相态组成围护温压品质及原验收运输义务 |
| 时间或周期（How long or cycle） | 真实航次保管海运区段港口期间及归属全部作业寿命 |
| reference_flow_link | qualified_tanker_work |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 限定完成海运液货气体船货物运输工作量 |
| 参考流属性 | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` |
| 参考单位组 | 质量*距离 `3620148f-c5db-48ce-9065-a10092089aca` |
| 参考单位 | tkm |
| 必需限定信息 | actual_coastal_ocean_specialtanker_bulkliquidgas_function; cargo_species_composition_phase_temperature_pressure_quality; vessel_tank_voyage_leg_port_STS_shipshore_responsibility; qualified_net_completed_cargo_mass_searoute_distance_W_tkm; original_acceptance_or_contemporaneous_amendedservice_no_failedscope_retrofit; ballast_empty_reposition_waiting_auxiliary_cargo_care_duty; cargo_BOG_fuelwithdrawal_native_upstream_once_no_cargo_manufacture_duplicate; vapour_return_retention_reliquefaction_fuel_abatement_vent_exclusivefates; cleaning_slop_bilge_ballast_chemical_water_species_receivers; native_asset_cohort_full_life_allusers_provider_coveredcells; tkm_equals_native_t_star_km_1000kgkm; actual_sources_models_uncertainty_substance_medium |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| eligible_work | marine_tanker | 实际原生兼容属性 | 实际原生单位 | W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。采用真实限定完成净货物部分及唯一合格海运区段实际距离，具原预设完成状态交接或独立当时记录的验收区段变更服务。后来失败损失或转作燃料货物早前航行不自动为成功货运工作量，不事后缩小失败范围。输出不含用作燃料货物、其他货物、船舶空船舱设备、载重容量、压载水、未交付底货、空驶调位锚泊靠泊循环及重复转运账单，但保留真实归属负荷。记录实际航路绕航质量相态品质可比分层，仅正值W有效，不套标称容量密度蒸发率，不仅由船移动产生输出。 |
| cargo_phase_stock | marine_tanker | 实际原生兼容属性 | 实际原生单位 | 客户货物为保管库存，不是新消耗整货制造投入。按真实物料物种货批舱期间，将期初、真实入界货物及外部返还蒸气收入，互斥闭合至验收外发交付、实际外发货物蒸气退回、转作燃料或销毁处理的保管提取、外发弃置货物污液组分、直接释放及期末液气保留底货库存。留底仅计期末，真实外发返回有唯一转移ID。相变蒸发气形成内部蒸气返回再液化原油洗舱循环本身不损失生产质量。组分账区分货物清洗水化学品惰性气；含水变化按各观测实测湿基w及M_dry=M_wet*(1-w)或有依据兼容换算，并纳入真实外部加水吸收排水蒸发各流水，不强制湿重相等。销毁燃烧提取按原货物物种质量计，化学改变尾气另作反应元素账，不要求CO2质量等于燃料质量。残留污液底货是状态，不是额外质量项。 |
| cargo_fuel | marine_tanker | 实际原生兼容属性 | 实际原生单位 | 购入船用辅助燃料与货物来源燃料分开。仅真实计量货物蒸发气提取并用于推进发电锅炉等真实能源作业的消耗量，作为相容原生燃料能源投入承担归属上游供应负荷一次，不因客户所有或早前采购免费。不输入原整货制造，也不将同一燃料同时计整货及新加注供应。按物种状态质量能量来源端口关联实际货物提取燃料清单，不用免费客户燃料自动替代信用标称蒸发率。返岸蒸气留存再液化货物真实放空真实火炬气体燃烧销毁及燃料燃烧去向互斥。无有用能气体燃烧火炬是实际销毁处理作业，不假定推进燃料或外供能源信用。按真实来源化学基接收介质区分未燃货物放空发动机甲烷逃逸燃烧CO2其他物种，甲烷不与总非甲烷VOC互换。 |
| native_units | marine_tanker | 实际原生兼容属性 | 实际原生单位 | tkm准确为独立核实原生t*km=1000kg*km拼写别名，同尺度功能，最终TIDAS用原生单位名t*km。真实海运距离以km表示，来源日志其他单位须记录兼容换算，不能将海里当公里。保留燃料物料资产原生单位及真实货物相态组成温压密度，无通用货物密度LNG质量能量因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实散货相态品质及船岸船舱保管端口 |
| starting_condition_role | 真实保管库存不是新整货制造或免费耗用燃料 |
| product_classification_scope | CPC 3.0 65212 |
| recursive_input_rule | 真实原生海运码头供应服务仅准确替换覆盖单元一次 |
| upstream_dataset_requirement | 真实燃料物料船设备供应原生身份单位端口及未覆盖全寿命 |
| disclosure | 真实货物相态工作量海港压载冷热作业BOG保管去向全部用户供应资产不确定性 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope | marine_tanker | 覆盖专用液货气体船沿海及远洋承运原油和其他散装液体气体，包括真实天然气甲烷LNG、LPG、成品油化学品及兼容食品其他散装液体。真实常温加热冷藏低温加压围护动力及船岸船船转运构型均为条件，不将全部液货船限为油或假定全部制冷。排除仅内河货运、罐式集装箱包装货物服务、干散货、独立管道陆空运输、货物生产炼制液化贸易、纯船租赁及独立浮动储存加工功能。本承运所需一体化调理保留，独立场站供应明确仅计一次。 | unsd-cpc3-65212 |
| marine_duties | marine_tanker | 声明真实船舱货物航段港口码头从保管装载到验收交接卸货责任，含实际船船接口。保留真实主推进辅助生活负荷操船航行锚泊靠泊等待货泵压缩机压排载空载压载调位失败绕航救援清洗换货作业，覆盖全部货物用户期间。实际航速吃水气象海况航路绕航机械拓扑决定测量审查模型，不设统一吨公里强度。船舶期程租、码头岸电热拖轮货物蒸气搬运处理供应仅按原生覆盖单元替换一次，独立储存再气化生产非海运货运另识别功能。 | imo-compendium-events-fuels; ghg-product-2011 |
| tanker_condition | marine_tanker | 各真实原油成品化学食品液体气体声明围护涂层分隔品质、装卸扫舱泵、温压及货物加热冷却制冷再液化蒸气惰化除气路线。岸热电本方锅炉发动机余热及购入或内部制惰气原生覆盖不同，不把回收热内部气再计第二购入投入。纳入真实舱软管歧管清洗前后货物批次、污液舱底压载捕集、洗涤减排、生活污水垃圾真实接收处理责任。货舱污液与压载舱底加注燃料仓分开。不为各服务假定惰气剂量蒸发放空冷热作业污染率强制预洗排放额度。 | imo-igc-overview; imo-voc-shipshore; imo-chemical-pollution; imo-oiltanker-operations; ghg-product-2011 |
| cargo_custody | marine_tanker | 客户货物为保管库存，不是新消耗整货制造投入。按真实物料物种货批舱期间，将期初、真实入界货物及外部返还蒸气收入，互斥闭合至验收外发交付、实际外发货物蒸气退回、转作燃料或销毁处理的保管提取、外发弃置货物污液组分、直接释放及期末液气保留底货库存。留底仅计期末，真实外发返回有唯一转移ID。相变蒸发气形成内部蒸气返回再液化原油洗舱循环本身不损失生产质量。组分账区分货物清洗水化学品惰性气；含水变化按各观测实测湿基w及M_dry=M_wet*(1-w)或有依据兼容换算，并纳入真实外部加水吸收排水蒸发各流水，不强制湿重相等。销毁燃烧提取按原货物物种质量计，化学改变尾气另作反应元素账，不要求CO2质量等于燃料质量。残留污液底货是状态，不是额外质量项。 | ghg-product-2011 |
| cargo_fuel_vapour | marine_tanker | 购入船用辅助燃料与货物来源燃料分开。仅真实计量货物蒸发气提取并用于推进发电锅炉等真实能源作业的消耗量，作为相容原生燃料能源投入承担归属上游供应负荷一次，不因客户所有或早前采购免费。不输入原整货制造，也不将同一燃料同时计整货及新加注供应。按物种状态质量能量来源端口关联实际货物提取燃料清单，不用免费客户燃料自动替代信用标称蒸发率。返岸蒸气留存再液化货物真实放空真实火炬气体燃烧销毁及燃料燃烧去向互斥。无有用能气体燃烧火炬是实际销毁处理作业，不假定推进燃料或外供能源信用。按真实来源化学基接收介质区分未燃货物放空发动机甲烷逃逸燃烧CO2其他物种，甲烷不与总非甲烷VOC互换。 | imo-compendium-events-fuels; imo-voc-shipshore; ghg-product-2011 |
| work_gate | marine_tanker | W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。采用真实限定完成净货物部分及唯一合格海运区段实际距离，具原预设完成状态交接或独立当时记录的验收区段变更服务。后来失败损失或转作燃料货物早前航行不自动为成功货运工作量，不事后缩小失败范围。输出不含用作燃料货物、其他货物、船舶空船舱设备、载重容量、压载水、未交付底货、空驶调位锚泊靠泊循环及重复转运账单，但保留真实归属负荷。记录实际航路绕航质量相态品质可比分层，仅正值W有效，不套标称容量密度蒸发率，不仅由船移动产生输出。 | ghg-product-2011 |
| water_waste_fates | marine_tanker | 实际海水其他压载吸入留存处理排出按场址海区品质盐度期间记录为环境转移，不是购入自来水或货运输出。记录处理电力化学资产及有证据的真实截留污泥释放物种生物。保留子介质物种，区分处理排水直接污染释放及接收收集废物，不自动零排或统一处理率生态收益信用。舱底污液洗涤生活污水同按实际捕集接收路线，不同时作外发废物及相同环境直排。 | imo-chemical-pollution; imo-oiltanker-operations; ghg-product-2011 |
| assets_providers | marine_tanker | 各真实海运液货气体船壳围护绝热涂层推进辅助锅炉货泵压缩再液化惰化清洗压载处理系统及泊位栈桥歧管储罐设施保留制造安装维护坞修更换退役拆解寿命。原生船设备制造仅覆盖核实端口，同队列数量按正值全部用户同资产有效服务总量分摊，未覆盖阶段补全一次，初装件总成分开。期程租供应已含船机能源寿命单元不再作前景自有资产。无通用船寿命坞修周期废钢回收信用或每航次整个码头。 | ghg-product-2011 |
| atomic | marine_tanker | 各真实加注货物来源燃料能源水惰气清洗化学资产供应污液残留废物污染物展开一真实状态端口原生单位方向类型接收行，具本过程协议来源模型核实UUID或行级待核身份。保留货物燃料区别、油气相及真实物种来源质量与C/N/S、空气水土海区子介质；温压密度换算须实际组成状态证据。真实测量身份缺失为不完整而非零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| marine_tanker | 沿海远洋液货气体船货运工作量 | required | 真实完整合格沿海远洋散装液气船承运 | foreground | qualified_tanker_work |

### 过程：沿海远洋液货气体船货运工作量 (`marine_tanker`)

#### 输入

##### 产品流

###### 完整海运罐船制造投入 (`vessel_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 各真实油成品化学食品气船构型制造端口已含部件，同船全部用户全寿命作业归属，未覆盖安装维护坞修更换退役另列，不是货运服务或重复整租供应。

- 选定流：完整海运罐船制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / W_tkm。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011


###### 柴油 (`diesel`)

仅真实匹配柴油牌号状态的海运辅助主机码头，不假定所有MGO/MDO/HFO皆同身份。各真实加注牌号另列原生行来源，数量真实消耗库存归属供应端口。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_diesel_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 交流电 (`purchased_ac`)

实际岸码头购入交流电按核实使用端口原生净热值MJ及真实电压供应损耗回收，本方发电已耗原生燃料，不再额外购电，直流另列。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_actual_AC_MJ / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 自来水 (`tap_water`)

仅真实兼容清洗生活照护购入自来水，核实工厂端口补未覆盖交付调理。原海水压载内部淡化水不同，本方淡化记真实能源化学环境流，不虚构购水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_tap_water_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_tank`
- 来源：ghg-product-2011

###### 洗涤剂 (`detergent`)

仅真实匹配非皂合成清洗剂配方原生供应端口；真实洗舱溶剂消毒食品兼容化学不同，声明污液内洗剂接收。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_detergent_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_tank`
- 来源：ghg-product-2011

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 限定完成海运液货气体船货物运输工作量 (`qualified_tanker_work`)

W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。采用真实限定完成净货物部分及唯一合格海运区段实际距离，具原预设完成状态交接或独立当时记录的验收区段变更服务。后来失败损失或转作燃料货物早前航行不自动为成功货运工作量，不事后缩小失败范围。输出不含用作燃料货物、其他货物、船舶空船舱设备、载重容量、压载水、未交付底货、空驶调位锚泊靠泊循环及重复转运账单，但保留真实归属负荷。记录实际航路绕航质量相态品质可比分层，仅正值W有效，不套标称容量密度蒸发率，不仅由船移动产生输出。

- 选定流：限定完成海运液货气体船货物运输工作量
- 流属性/单位：质量*距离 / tkm
- 数量规则：1 tkm
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_service`
- 来源：ghg-product-2011

##### 废物流

###### 废润滑油 (`used_oil`)

真实产生点单独收集废润滑油，明确海运资产接收未覆盖处理，不是全部油舱底污液或自动回收信用。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_used_oil_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅匹配实际已知来源空气未指明子介质的化石CO2，已知其他介质须自身核实身份。真实加注货物燃料燃烧气体销毁火炬来源分开，不假定整货成CO2或燃料kg等于CO2kg。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_fossil_CO2_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | marine_tanker | 按真实船舶航段货物舱港、主辅助推进及货物特定泵冷热蒸气清洗直接测量拆分。列明全部预期货运照护独立供应输出交接及货物用户，承运货物是保管而非新造共产品。 | ghg-product-2011 |
| causal | marine_tanker | 共享海运推进作业依真实物理排水载荷空间容量航况及审查模型测量论证，不用标称载重统一吨公里耗油。货物特定温压再液化蒸气清洗依真实设备时长状态吞吐因果，不套全吨公里份额。全部用户供应份额核对一次，物理因果不可得时论证测试替代。 | ghg-product-2011 |
| life_period | marine_tanker | 各真实海运液货气体船壳围护绝热涂层推进辅助锅炉货泵压缩再液化惰化清洗压载处理系统及泊位栈桥歧管储罐设施保留制造安装维护坞修更换退役拆解寿命。原生船设备制造仅覆盖核实端口，同队列数量按正值全部用户同资产有效服务总量分摊，未覆盖阶段补全一次，初装件总成分开。期程租供应已含船机能源寿命单元不再作前景自有资产。无通用船寿命坞修周期废钢回收信用或每航次整个码头。 | ghg-product-2011 |
| normalize | marine_tanker | 对正值合格W_tkm及参考1tkm，q_x = allocated_native_quantity_x / W_tkm。归属压载空载调位等待港口生活照护清洗失败销毁作业即使无合格货运工作仍保留负荷。归一化前拆分论证货物特定冷热蒸气清洗与共享船作业；等价货物状态品质路线真实分布约束比较。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | marine_tanker | 海运服务货物工作量原生供应 | collected_record | 船舱货物航次航段港码头船船ID；各段真实物种相品质质量；原完成验收交接；当时验收区段变更；实际航路km来源单位换算绕航；W_tkm；海港锚泊靠泊压载空载失败；共货全部用户；供应原生单位数量端口覆盖 | 关联真实货船码头保管校准质量距离航次事件验收日志，仅合格完成部分，不将后来失败燃料提取货物早前自动计工作或事后缩小失败范围。保持唯一船船航段全部真实港口空载支持。原生供应准确替换单元，因果分配后除正W一次。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | tkm; kg; km; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 校准货物航路日志原验收供应覆盖保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_energy | marine_tanker | 海运加注货物燃料机械能源排放 | collected_record | 船航段港机械作业ID；主辅炉泵冷热惰气GCU阶段；加注牌号组成原生数量库存期初采购转移燃烧泄漏期末；货物BOG提取物种质量原生能量上游来源覆盖；货物燃料GCU销毁蒸气返回再液化关联；岸交流直流热毛净损耗回收；真实航速吃水气象海况全部用户；排放物种因子实测化学基介质不确定性 | 采用真实校准加注能源库存及组分货物燃料转移记录，真实耗用部分原生上游来源端口数量不论所有采购计一次。本机燃料岸购能源分开，回收热内部惰气不双投，燃烧GCU放空来源分开。模型适用真实船机航况物种基介质捕集独立QA，全部用户分配一次再归一。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg; MJ; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 计量库存校准BOG燃料来源链真实机航模型QA保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_tank | marine_tanker | 货物相态保管蒸气清洗压载接收 | collected_record | 物料物种货批舱子区相态组成温压密度；货物期初装入蒸气入界外发交付退回燃料提取销毁废物直排期末液气底货；真实冷热再液化惰气泵扫舱；购水清洗化学气原生数量；各观测湿质量水分基干质量；真实加水吸收排水蒸发各流水；压载舱底污液洗涤生活污水海区品质吸入处理排出；捕集直排物种接收；前后批次供应覆盖 | 测真实相物种货物水库存品质，统一互斥保管去向实际船岸船船蒸气燃料转移。相变内部返回再液化循环不净生失质量，真实燃料提取GCU销毁量关联独立反应元素账。各含水观测以实测湿基M_dry=M_wet*(1-w)或有依据兼容换算，纳入真实净水变。追踪真实压载舱底污液洗涤生活污水捕集环境路线接收，不默认零去向或捕集直排双计。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg；实际原生单位实测状态 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 校准舱物种品质相态接收日志保管组分闭合保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | marine_tanker | 船设备海运设施全寿命 | collected_record | 资产船设备码头ID队列原生数量端口已含件；壳围护主辅炉泵再液化惰气压载系统；制造安装维护坞修更换退役拆解期间；正值同资产全部用户有效总量归属份额；租船供应覆盖单元；真实废物物料状态接收 | 真实制造端口构型部件表匹配同队列原生数量全部用户有效寿命期间及实际维护坞修更换退役，仅补未覆盖阶段租船供应单元一次，无总成初装前景供应重复或通用船龄废钢信用。核对真实废物捕集处理接收。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | Item(s); kg; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 原生资产部件表端口阶段坞修全部用户寿命供应废物覆盖保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_bunker | marine_tanker | 必须展开身份 other_bunker (inputs/product)：实际海运加注燃料独立热供应 | collected_record | requirement_id=other_bunker; process_id=marine_tanker; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各真实MGO/MDO/HFO/LNG/LPG/甲醇其他燃料热按组成状态原生端口单位机炉作业，无通用混配热值。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际海运加注燃料独立热供应）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_bunker_heat / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cargo_fuel | marine_tanker | 必须展开身份 cargo_fuel (inputs/product)：实际液货船服务消耗货物来源燃料 | collected_record | requirement_id=cargo_fuel; process_id=marine_tanker; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 购入船用辅助燃料与货物来源燃料分开。仅真实计量货物蒸发气提取并用于推进发电锅炉等真实能源作业的消耗量，作为相容原生燃料能源投入承担归属上游供应负荷一次，不因客户所有或早前采购免费。不输入原整货制造，也不将同一燃料同时计整货及新加注供应。按物种状态质量能量来源端口关联实际货物提取燃料清单，不用免费客户燃料自动替代信用标称蒸发率。返岸蒸气留存再液化货物真实放空真实火炬气体燃烧销毁及燃料燃烧去向互斥。无有用能气体燃烧火炬是实际销毁处理作业，不假定推进燃料或外供能源信用。按真实来源化学基接收介质区分未燃货物放空发动机甲烷逃逸燃烧CO2其他物种，甲烷不与总非甲烷VOC互换。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际液货船服务消耗货物来源燃料）。按该作业实际供应或提取的燃料启用。保留品级、收到状态、罐号或批次、接收、库存、内部移交、退回及实耗。客户所有或期初库存中的燃料提取保留供应责任，禁止重复记购入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 燃料按实测供应状态的属性与单位；能量当量使用相容热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核实燃料库存与实耗。仅以相容热值推算能量并记录热值来源和口径；仅凭收货不能确定燃烧量或排放量。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_native_cargo_fuel_consumed / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_inert_supply | marine_tanker | 必须展开身份 inert_supply (inputs/product)：实际液货船货物系统购入惰性气 | collected_record | requirement_id=inert_supply; process_id=marine_tanker; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_tank; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实跨界外购气组成温压原生单位；本方烟气制气氮机记能源物料资产排放，内部气不再第二购入产品。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际液货船货物系统购入惰性气）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_purchased_inert / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_tank；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_care_supply | marine_tanker | 必须展开身份 care_supply (inputs/product)：实际液货船调理清洗减排投入 | collected_record | requirement_id=care_supply; process_id=marine_tanker; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_tank; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 实际制冷剂补充溶剂碱杀生剂过滤吸附物料按独立状态原生端口数量展开，匹配食品气油货物需要，无虚构剂量；真实物种去向供应设备覆盖互斥。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际液货船调理清洗减排投入）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_tank_care_supply / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_tank；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_vessel_assembly | marine_tanker | 必须展开身份 vessel_assembly (inputs/product)：实际沿海远洋液货气体船完整总成 | collected_record | requirement_id=vessel_assembly; process_id=marine_tanker; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 各真实油成品化学食品气船构型制造端口已含部件，同船全部用户全寿命作业归属，未覆盖安装维护坞修更换退役另列，不是货运服务或重复整租供应。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：vessel_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_tanker_manufacture_items / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_tank_equipment | marine_tanker | 必须展开身份 tank_equipment (inputs/product)：实际独立供应液货船货物辅助设备 | collected_record | requirement_id=tank_equipment; process_id=marine_tanker; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实泵压缩再液化加热锅炉惰气压载处理围护队列原生数量端口，各行一资产，不重复船总成初装部件。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_equipment / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_infrastructure | marine_tanker | 必须展开身份 infrastructure (inputs/product)：实际海运码头泊位基础设施生命周期投入 | collected_record | requirement_id=infrastructure; process_id=marine_tanker; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实栈桥泊位歧管罐泵岸公用清洗接收设施及全部用户队列原生覆盖，不每航次整个码头或重复供应覆盖。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_infrastructure / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_maintenance_supply | marine_tanker | 必须展开身份 maintenance_supply (inputs/product)：实际船码头维护坞修更换投入 | collected_record | requirement_id=maintenance_supply; process_id=marine_tanker; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实钢涂层防污机绝热泵密封润滑更换逐项原生端口阶段日期来源，避免初装船舶供应重复。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际船码头维护坞修更换投入）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_maintenance / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_provider_service | marine_tanker | 必须展开身份 provider_service (inputs/product)：实际独立供应液货船海运码头服务 | collected_record | requirement_id=provider_service; process_id=marine_tanker; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 各真实带营运租船承运码头拖轮船船货物蒸气清洗岸公用接收处理原生单位数量端口覆盖单元，仅替换准确前景一次，不强制供应数量1tkm。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际独立供应液货船海运码头服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_provider / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_ballast_intake | marine_tanker | 必须展开身份 ballast_intake (inputs/elementary)：实际环境压载工艺水吸入 | collected_record | requirement_id=ballast_intake; process_id=marine_tanker; required_direction=inputs; required_flow_type=elementary; original_collection_protocol=cp_tank; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; water_source_or_receiver; water_state; meter_period; treatment_owner; water_mass; mixture_volume; conversion_evidence; balance_residual; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 实际海水其他压载吸入留存处理排出按场址海区品质盐度期间记录为环境转移，不是购入自来水或货运输出。记录处理电力化学资产及有证据的真实截留污泥释放物种生物。保留子介质物种，区分处理排水直接污染释放及接收收集废物，不自动零排或统一处理率生态收益信用。舱底污液洗涤生活污水同按实际捕集接收路线，不同时作外发废物及相同环境直排。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/elementary 的身份与交接点（实际环境压载工艺水吸入）。仅对从规定来源实际取入系统的水启用，核实仪表或采样区间及处理责任方。购水和收集污水是不同交换；水组分质量与混合废水体积分别核对，仅在需要换算时使用有证据且状态相容的密度。平衡缺项保留为未解决残差，不假设蒸发或零值。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 按来源或接收介质及实测状态计量水质量或体积 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核对环境交接点的取水或排放、相态与期间；质量体积换算须使用相容状态的实际密度。水组分与混合出水总量分别核算。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_water_intake_kg / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_tank；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_slop_residue | marine_tanker | 必须展开身份 slop_residue (outputs/waste)：实际外发液货船货物污液残留清洗废物 | collected_record | requirement_id=slop_residue; process_id=marine_tanker; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_tank; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅实际外发弃置混合物物料状态组成接收方。留底期末货物及作为货物返还蒸气不自动废物，污液水货物化学组分闭合，不重复另计废物质量或直排。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际外发液货船货物污液残留清洗废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_slop_waste_kg / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_tank；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_waste | marine_tanker | 必须展开身份 other_waste (outputs/waste)：实际船码头减排退役设备废物 | collected_record | requirement_id=other_waste; process_id=marine_tanker; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实过滤洗涤污泥涂层退件船材生活污水垃圾逐行接收状态，真实服务寿命端口，不重复供应终末捕集组分直排。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际船码头减排退役设备废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_other_waste / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_ballast_discharge | marine_tanker | 必须展开身份 ballast_discharge (outputs/elementary)：实际环境处理压载工艺水排出 | collected_record | requirement_id=ballast_discharge; process_id=marine_tanker; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_tank; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; water_source_or_receiver; water_state; meter_period; treatment_owner; water_mass; mixture_volume; conversion_evidence; balance_residual; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅实际向环境排出时按场址海区盐度品质温度水转移。溶颗粒化学生物用真实单独一致清单物种，不自动零或生态避免信用或淡水身份。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际环境处理压载工艺水排出）。仅对从系统实际排至规定受体的水启用，核实仪表或采样区间及处理责任方。购水和收集污水是不同交换；水组分质量与混合废水体积分别核对，仅在需要换算时使用有证据且状态相容的密度。平衡缺项保留为未解决残差，不假设蒸发或零值。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 按来源或接收介质及实测状态计量水质量或体积 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核对环境交接点的取水或排放、相态与期间；质量体积换算须使用相容状态的实际密度。水组分与混合出水总量分别核算。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_water_discharge_kg / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_tank；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cargo_vapour | marine_tanker | 必须展开身份 cargo_vapour (outputs/elementary)：实际货物来源蒸气泄漏物种释放 | collected_record | requirement_id=cargo_vapour; process_id=marine_tanker; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_tank; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实未燃货物蒸气放空泄漏按物种相来源接收介质分开，液气相变不自动释放。捕集返还再液化燃烧货物不是相同放空质量，不通绑甲烷VOC油混合物或假设损耗率。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际货物来源蒸气泄漏物种释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_cargo_species_medium_release_kg / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_tank；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_species | marine_tanker | 必须展开身份 other_species (outputs/elementary)：实际液货船码头燃烧处理维护污染物 | collected_record | requirement_id=other_species; process_id=marine_tanker; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实加注货物燃料燃烧甲烷逃逸氮硫氧化物颗粒或处理清洗涂层释放逐一物种来源介质及有依据模型，保留S与SO2、N与NOx、C与CO2及洗涤捕集比例空气水释放，不总量组分重复相加。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际液货船码头燃烧处理维护污染物）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_species_medium_release_kg / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| eligible_work | marine_tanker | W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。采用真实限定完成净货物部分及唯一合格海运区段实际距离，具原预设完成状态交接或独立当时记录的验收区段变更服务。后来失败损失或转作燃料货物早前航行不自动为成功货运工作量，不事后缩小失败范围。输出不含用作燃料货物、其他货物、船舶空船舱设备、载重容量、压载水、未交付底货、空驶调位锚泊靠泊循环及重复转运账单，但保留真实归属负荷。记录实际航路绕航质量相态品质可比分层，仅正值W有效，不套标称容量密度蒸发率，不仅由船移动产生输出。 | 真实合格完成净货物kg唯一合格海段km | W_tkm | ghg-product-2011 |
| normalize | marine_tanker | 对正值合格W_tkm及参考1tkm，q_x = allocated_native_quantity_x / W_tkm。归属压载空载调位等待港口生活照护清洗失败销毁作业即使无合格货运工作仍保留负荷。归一化前拆分论证货物特定冷热蒸气清洗与共享船作业；等价货物状态品质路线真实分布约束比较。 | 实际已归属的原生数量; 正的 W_tkm | 每声明1tkm原生数量 | ghg-product-2011 |
| cargo_phase_stock | marine_tanker | 客户货物为保管库存，不是新消耗整货制造投入。按真实物料物种货批舱期间，将期初、真实入界货物及外部返还蒸气收入，互斥闭合至验收外发交付、实际外发货物蒸气退回、转作燃料或销毁处理的保管提取、外发弃置货物污液组分、直接释放及期末液气保留底货库存。留底仅计期末，真实外发返回有唯一转移ID。相变蒸发气形成内部蒸气返回再液化原油洗舱循环本身不损失生产质量。组分账区分货物清洗水化学品惰性气；含水变化按各观测实测湿基w及M_dry=M_wet*(1-w)或有依据兼容换算，并纳入真实外部加水吸收排水蒸发各流水，不强制湿重相等。销毁燃烧提取按原货物物种质量计，化学改变尾气另作反应元素账，不要求CO2质量等于燃料质量。残留污液底货是状态，不是额外质量项。 | 真实组分物种库存转移提取相水 | 互斥货物燃料提取接收闭合 | ghg-product-2011 |
| cargo_fuel_once | marine_tanker | 购入船用辅助燃料与货物来源燃料分开。仅真实计量货物蒸发气提取并用于推进发电锅炉等真实能源作业的消耗量，作为相容原生燃料能源投入承担归属上游供应负荷一次，不因客户所有或早前采购免费。不输入原整货制造，也不将同一燃料同时计整货及新加注供应。按物种状态质量能量来源端口关联实际货物提取燃料清单，不用免费客户燃料自动替代信用标称蒸发率。返岸蒸气留存再液化货物真实放空真实火炬气体燃烧销毁及燃料燃烧去向互斥。无有用能气体燃烧火炬是实际销毁处理作业，不假定推进燃料或外供能源信用。按真实来源化学基接收介质区分未燃货物放空发动机甲烷逃逸燃烧CO2其他物种，甲烷不与总非甲烷VOC互换。 | 真实货物BOG燃料耗量原生状态上游覆盖 | 真实耗用燃料数量上游一次互斥去向 | ghg-product-2011 |
| asset_life | marine_tanker | attributed_asset = native_asset_quantity * attributed_same_asset_useful_duty / positive_total_all_user_same_asset_useful_duty；再除W_tkm，仅核实制造覆盖并补未覆盖全阶段一次。 | 真实同资产原生数量正全部用户作业 | 归属原生制造数量 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | evidence |
| --- | --- | --- | --- |
| strata | marine_tanker | 列明全部真实船舱货物相态品质温压动力路线港期间供应参与者，仅等价声明货物工作状态按真实权重分布汇总，不通用平均原油LNG食品化学或压载载货作业比较。 | 参与真实工作状态相态权重覆盖 |
| completeness | marine_tanker | 各真实加注货物来源燃料能源水惰气清洗化学资产供应污液残留废物污染物展开一真实状态端口原生单位方向类型接收行，具本过程协议来源模型核实UUID或行级待核身份。保留货物燃料区别、油气相及真实物种来源质量与C/N/S、空气水土海区子介质；温压密度换算须实际组成状态证据。真实测量身份缺失为不完整而非零。 | 真实行级原生来源覆盖库存去向账 |
| uncertainty | marine_tanker | 不虚构加注混配BOG放空逃逸捕集冷热惰剂压载装载航速气象船寿命排放因子范围。要求校准真实测量或审查适用船机货物路线模型物种化学基独立QA不确定性。来源给有界机理问题，不给通用默认或当前法律合规证明。 | 校准适用抽样独立核查敏感性 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_work | marine_tanker | 核对完整原油其他液气船沿海远洋范围真实相态品质全部船岸船船作业，海内河集装箱独立加工区分。W仅原验收完成货物部分或独立当时验收变更，不把后来燃料损失货物早前自动计工作，不计载重压载底货空驶重复输出。 | ghg-product-2011 |
| cargo_fuel_fates | marine_tanker | 核对耦合组分物种保管真实燃料能源账，货物提取上游不论所有采购计一次，无整货制造投入。相变返回再液化留存燃料销毁废物直排互斥，尾气化学元素账不同原燃料质量，甲烷逃逸非甲烷VOC介质真实。 | ghg-product-2011 |
| native_lifecycle_water | marine_tanker | 要求真实状态端口原生属性单位，最终TIDAS t*km别名同尺度，同资产全部用户全阶段供应覆盖仅一次。压载污液舱底处理水组分接收路线分开，实际海水不是自来水，捕集废物非相同直排。 | ghg-product-2011 |
| parity_quality | marine_tanker | 中英投影参考行规则公式真实条件路线来源限制对齐。真实测量审查适用模型须校准独立QA不确定性，不虚构因子数量范围，缺失不完整而非零。检查原生属性通过不等于服务UUID科学审查。 | ghg-product-2011 |
| atomic_marine_tanker | marine_tanker | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 限定真实沿海远洋液货气体船工作量供过程生命周期模型 |
| allowed_use | 具核实最终交换的等价真实货物相态品质路线港交接功能 |
| excluded_use | 货物制造炼制液化贸易、通用全航运集装箱内河或无依据相态工作比较 |
| required_metadata | actual_coastal_ocean_specialtanker_bulkliquidgas_function; cargo_species_composition_phase_temperature_pressure_quality; vessel_tank_voyage_leg_port_STS_shipshore_responsibility; qualified_net_completed_cargo_mass_searoute_distance_W_tkm; original_acceptance_or_contemporaneous_amendedservice_no_failedscope_retrofit; ballast_empty_reposition_waiting_auxiliary_cargo_care_duty; cargo_BOG_fuelwithdrawal_native_upstream_once_no_cargo_manufacture_duplicate; vapour_return_retention_reliquefaction_fuel_abatement_vent_exclusivefates; cleaning_slop_bilge_ballast_chemical_water_species_receivers; native_asset_cohort_full_life_allusers_provider_coveredcells; tkm_equals_native_t_star_km_1000kgkm; actual_sources_models_uncertainty_substance_medium |
| required_quality_disclosure | 真实货物工作BOG燃料相态作业原生供应全部用户寿命水接收不确定性待核 |
| update_trigger | 货物相态船技术路线港供应资产证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65212 | official_guidance | UNSD CPC3.0 code65212. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65212 | 官方完整专船原油其他散装液气范围，无LCA默认数值 |
| imo-igc-overview | official_guidance | IMO IGC Code publicoverview. https://www.imo.org/en/ourwork/safety/pages/igc-code.aspx | 仅条件气船低温加压围护问题，不用历史阈值日期或当前合规断言 |
| imo-voc-shipshore | official_guidance | IMO VOC Regulation15 publicoverview. https://www.imo.org/en/ourwork/environment/pages/volatile-organic-compounds-(voc)-%E2%80%93-regulation-15.aspx | 实际条件船岸蒸气控制返回留存接口，不普遍化甲烷VOC各港 |
| imo-chemical-pollution | official_guidance | IMO Carriageofchemicalsbyship publicoverview. https://www.imo.org/en/ourwork/environment/pages/chemicalpollution-default.aspx | 真实化学舱清洗排载残留污染去向问题，不采排放数量类别默认 |
| imo-oiltanker-operations | official_guidance | IMO Tankersafety publicoverview. https://www.imo.org/en/ourwork/safety/pages/oiltankers.aspx | 真实惰气分隔压载机理问题，不套历史船龄压载比例设计强制 |
| imo-compendium-events-fuels | official_guidance | IMOCompendium currenteventsandfuelcodes. https://imocompendium.imo.org/public/IMO-Compendium/Current/cd1.htm | 真实航次港船船锚泊事件及LNGBO货物燃料词义，不给默认数量方法因子 |
| ghg-product-2011 | standard | WRI/WBCSDProductLifeCycleAccountingandReportingStandard2011. https://ghgprotocol.org/product-standard | GHG生命周期分配数据质量框架。海运工作保管BOG燃料水资产方法为明确PCR选择，不是来源数值强制。 |

