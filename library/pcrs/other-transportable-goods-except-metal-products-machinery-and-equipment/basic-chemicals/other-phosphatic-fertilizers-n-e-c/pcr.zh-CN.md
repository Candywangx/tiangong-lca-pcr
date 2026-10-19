---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-phosphatic-fertilizers-n-e-c
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 未强化电熔钙镁磷肥粉

## 1. 范围与适用性

本方法仅覆盖一种实物产品和路线：原生磷矿与蛇纹石熔剂，必要时单独计量石英调质，经电炉熔融、迅速水淬、脱水、干燥、磨粉、筛分，放行未强化玻璃质钙镁磷肥粉。IFA第3.2.1.2节和全农图1–2支持熔融水淬结构，Yoorin生产者原件确认电熔商品磷肥产品族。产品是组成可变的磷酸盐硅酸盐玻璃基体，不是单一纯分子盐或纯氧化物干混物。原件证明方法可行性，不代表已调查配方、已审厂或当前SKU。(`ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`; `yoorin-phosphate-products`)

排除酸解普通过磷酸钙或重过磷酸钙、磷酸铵、N/P/K混肥、未经处理磷矿粉、炼钢碱性炉渣、制磷冶炼副产炉渣、污泥灰等二次原料熔融、高炉/旋风炉/平炉主熔融、另加硫硼锰等养分强化，以及粘结造粒或配方液体。此类变化涉及原料历史、气固平衡或配方，需要另评方法。具有实际粒径与溶解性规格的粉体变体可采用本方法，不宣称施肥量或作物产量等效。

前景以一个厂级单元覆盖实际接收、配料、电熔、水系统、后处理和污染控制。后处理天然气、搬运柴油、熟石灰处理、可更换电极炉衬和各包装组件均为实际存在时的计量交换，不是强制配方。增设燃料、化学品、包装、运输方式或污染物，必须先补独立原子行才能声称完整数据集。不假定外购蒸汽或热量；若实际供应，须另行采集压力状态回水、净热量平衡和供方参考基准，单列交换及公用工程单元。历史温度、能耗、矿品位、商品保证值、收率和排放限值均不作默认量。(`jrc-lvic-aaf-2007`; `jrc-cww-2016`)

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-phosphatic-fertilizers-n-e-c` |
| classification_refs | CPC 3.0 `34629`，建议`narrower`；分类叶另含其他磷肥，不定义本方法 |
| covered_products | 原生磷矿与蛇纹石电熔形成的未强化钙镁磷酸盐硅酸盐肥粉，可含实测必要石英调质 |
| excluded_products | 酸解肥；磷酸铵；N/P/K或养分强化混肥；原矿粉；冶金炉渣；二次原料熔融；燃料主熔融；粘结造粒；溶液 |
| representative_product | 一个实际合格未强化粉体SKU，具有玻璃基体、水分、粒径与养分实测分析，不设标准配方 |
| production_route | 接收配料→电熔→水淬脱水→干燥磨粉筛分→放行与实际包装；包含污染控制 |
| market_state | 实测商品水分的厂界玻璃质粉体；产品质量排除包装皮重，不排除供货中实际含水 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应上述未强化电熔磷肥粉 |
| How much | 1 kg 合格商品产品净重 |
| How well | 实际SKU总磷及可提取磷以P2O5表达的分析与试法，Ca/Mg/Si基准、氟与痕量污染物、水分、玻璃基体、细度及放行验收 |
| How long or cycle | 明确代表性周期的一次厂界放行，不宣称作物服务或寿命 |
| reference_flow_link | finished_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 磷肥 `9c196b01-6aad-4252-a6e8-f853853a830c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际SKU与批次；原生磷矿及蛇纹石来源矿物相；电熔主路线；无另加养分粘结剂及二次原料；玻璃基体；水分与商品质量基准；实际P2O5分析和提取法；Ca/Mg/Si/F痕量元素基准；粒径；产品验收；包装皮重；工厂周期；公用工程供方定义；水循环排口；共产品废物去向；分配与模型边界 |

具体数据包须明确全部限定信息。广义参考身份包含此物理子集，但不设配方或养分浓度；参考不是kg P、kg P2O5、纯磷酸钙或其他肥料路线。1 kg是归一化定义，不证明田间养分等效。仅一个最终产品输出使用此参考身份，阶段交接保留为内部计量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| measure_reference | finished_product | Mass | kg | 用校准秤称放行商品净重，扣包装皮重；在同周期核对合格批次及期初期末成品库存，不以每袋为分母。 |
| measure_material | ore; serpentine; quartz; lime; electrode; refractory; oil; diesel; film; thread; waste outputs | Mass | kg | 采集实际外部质量、状态、水分组成；湿父流、干或活性组分和载水仅为解释账，不能重复加总。 |
| measure_electricity | electricity | Net calorific value | MJ | 已核实电流属性名称为Net calorific value，具有能量基准；实测kWh乘3.6换为MJ，另采供方电压地域结构、交付及线损边界。 |
| measure_gas | gas | Volume | m3 | 仅按实测温压、干湿组成和压缩因子换至供方兼容气体体积，记录次级质量值不证明密度。定义不明不能声称完整链接。 |
| measure_sacks | bag | Number of items | Item(s) | 按实际兼容袋及损坏袋计件，身份限25 kg包装规格；实测皮重材料与装填量另入质量账，不假定25 kg装填或通用袋重。 |
| measure_road | transport | Goods transport (mass*distance) | t*km | 汇总实际货重吨乘路程千米，核对供方载荷回程边界，排除燃料运输或供方路段重复。 |
| measure_water_out | water_fresh | Volume | m3 | 按对应排口体积计量，只有实际状态组成及实测可追溯密度才能换水质量，不混同外购水和排出液体。 |
| measure_species | elementary outputs except water_fresh | Mass | kg | 核对物种、相态、来源及介质，保留干湿气温压和O2基准、兼容采样流量；汇总指标须先解析再声称物种数量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已交付原生磷矿、蛇纹石和实测辅助供应；供方数据覆盖其声明的开采选矿与交付 |
| starting_condition_role | 前景过程入口，不表示上游零负荷 |
| product_classification_scope | 实物未强化电熔粉体子集，分类上下文本身不赋予适用性 |
| recursive_input_rule | 内部水淬玻璃、收集粉尘、不合格料重熔是内部链接，送收端同量计量，不是新增外购参考产品 |
| upstream_dataset_requirement | 实际物料和能源兼容供方、数量状态基准及运输；缺供方如实披露 |
| disclosure | 工厂阶段周期；净放行；原料与商品水分；能源模式；控制设备；循环库存；直接或污水管道边界；残余物去向；分配及排除 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | fused_powder_unit | 纳入选定边界内实际接收破碎配料、电炉、水淬脱水、干燥磨粉筛分、存储出厂、维护与气水控制，独立保留阶段计量。 | `ifa-fertilizer-china-2009`; `zennoh-fused-phosphate` |
| boundary_supplies | external inputs | 链接上游实际开采选矿、电极炉衬制造、能源生成与入厂交付，记录共厂划分及各供方边界。 | `jrc-lvic-aaf-2007`; `jrc-cww-2016` |
| boundary_returns | physical links | 对熔体水淬玻璃、粉尘、不合格粉、水和回收热保留同量内部交接与库存；内部循环不是再次采购排放或自动替代信用。 | `jrc-lvic-aaf-2007` |
| boundary_outlets | environmental gates | 收集粉尘污泥实际出单元才作为外部残余物，空气量按控制后排放。各液体部分选择外送处理或实际环境排口，接收方载水及污染负荷仅计一次。 | `jrc-cww-2016` |
| boundary_downstream | supplied product | 田间施用、土壤反应、作物响应、下游养分混配与粘结造粒排除在生产数据集之外；生产者宣传的碳或作物收益不证明信用。 | `zennoh-fused-phosphate`; `yoorin-phosphate-products` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fused_powder_unit | 电熔磷肥粉生产及实际污染控制 | required | 明确原生磷矿蛇纹石电熔路线；后处理能源包装按实际设备供应存在 | foreground production | finished_product; 1 kg 净放行粉体 |

接收配料→电熔→水淬→脱水→干燥→磨粉筛分→放行出厂。电炉、干燥、搬运和磨机连接其实际气体控制，液体循环连接其实际收集回用处理排口。保留独立阶段质量、水、P/Ca/Mg/Si/F、碳与热账。阶段间同一未改性玻璃在本前景单元聚合，不把它列为第二产品输出。(`ifa-fertilizer-china-2009`; `jrc-lvic-aaf-2007`)

### 过程：电熔粉体工厂（`fused_powder_unit`）

#### 输入

##### 产品流

###### 磷矿原料 （`ore`）

记录该炉料实际接收的原生磷矿及其矿物相、水分、总磷和可提取磷、Ca/Mg/Si、氟、碳酸盐碳及痕量元素分析；上游数据另载实际选矿与供方地域，不预设矿品位或配比。

- 选定流：磷矿石 `f71b42aa-e220-4371-8fa4-9aa8946a6262`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`

###### 蛇纹石熔剂 （`serpentine`）

仅指实际蛇纹石矿石熔剂，不是分离温石棉或蛇形电阻元件；要求矿物与化学验收、纤维矿物筛查、水分和实际投料质量。

- 选定流：蛇纹石熔剂
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`

###### 石英调质原料 （`quartz`）

实际炉料需要时单列石英加入量，记录粒径、组成、质量与供方；不是石英玻璃，也不是蛇纹石的固定替代物。

- 选定流：石英 `ddee14c5-2a28-4224-9b84-68dc5956972f`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`

###### 外购交流电 （`electricity`）

分别计量电炉、输送、水淬泵、干燥、磨粉、筛分、除尘、水处理和包装，再汇总厂界用电；广义使用点流不预设电压、国家、电源结构或线损，必须核实供方基准。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 后处理供热天然气 （`gas`）

仅在实际干燥或辅助燃烧器使用管输气态天然气时计入，不作为电熔主热源或外购蒸汽；记录体积对应温压、干湿与组成、压缩因子、供方体积定义和分阶段热量。条件不明则背景链接不完整，记录次级质量系数不当密度。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 外购补水 （`water`）

计量水淬、冷却、洗涤、清洗和处理的净外购工业水及各支路；内部循环只入实物账，不再算外购。试剂载水另分账；自取水需补充已核实资源流及泵送处理边界。

- 选定流：工业用水 `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 熟石灰试剂 （`lime`）

仅在洗涤或废水中和沉淀实际使用工业固体熟石灰时计入，要求Ca(OH)2分析与投加计量；购入浆液须分清活性固体和载水，不把纯固体UUID用于整份浆液，不规定处理配方。

- 选定流：熟石灰 `0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 消耗石墨电极 （`electrode`）

对消耗电极的电炉记录安装石墨、存量、退出电极与同周期实际消耗量；区分氧化为气体和移出的残头，不假定全部投入都变成CO2。

- 选定流：电极 `c2c70bef-5b23-4f7c-8fc8-ae4b5a844396`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maintenance`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 烧成镁质炉衬更换 （`refractory`）

仅在使用实际烧结MgO炉衬砖时采用，核实品级、组成与供方路线；按服务生产周期记录实测更换，分别保留进入产品的磨损和移出固体，其他炉衬须另列原子身份。

- 选定流：烧成镁质砖 `251839cf-ed91-4e67-b17c-3eb546eecd40`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maintenance`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 矿物油基配方润滑油 （`oil`）

实际维护使用时记录含明确添加剂、品级和污染控制的完整润滑油；纯矿物油与限定PAO的记录均不能证明整份配方油身份，采集净消耗及库存变化。

- 选定流：矿物油基配方润滑油
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maintenance`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 厂内搬运柴油 （`diesel`）

厂内装载或搬运设备实际使用时记录柴油质量；若以升记录，须实测供方批次密度和温度后转换。运输数据集已含的外部货运燃料不得再次计入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 聚丙烯编织袋 （`bag`）

仅对符合记录所限25 kg包装规格的PP袋按Item(s)计量，不把25 kg当参考产品量或默认装填量；另称袋材质量入实物账。袋规格必须说明是否已含内衬和缝线，其他规格须有兼容身份。

- 选定流：聚丙烯编织袋 `9bfaad07-355e-467a-9bab-f95094e7c869`
- 流属性/单位：Number of items / Item(s)
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 独立聚乙烯内衬 （`film`）

实际独立供应PE薄膜内衬时计入，不代表PET或聚合物颗粒；若袋供货已含内衬则不再次采购计量。核实聚合物/CAS、品级、厚度、再生比例和质量。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 独立聚酯缝纫线 （`thread`）

未包括在包装袋供方边界的独立聚酯缝纫线才另计，明确聚合物、结构、整理剂及实测质量；不能用长丝、布或排除缝纫线的纱线代替。

- 选定流：独立聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 入厂公路货运服务 （`transport`）

按t*km记录磷矿、熔剂和其他供应的实际入厂公路段，排除已计入供应数据集的路段；采集货重、距离、车型载荷回程和供方边界。其他实际运输方式须另列，服务不代表车辆制造。

- 选定流：货车 `d55f1329-cd61-44c0-8000-9367d38d5634`
- 流属性/单位：Goods transport (mass*distance) / t*km
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行未强化电熔肥粉 （`finished_product`）

唯一计量参考：原生磷矿与蛇纹石电熔、必要时石英调质，水淬、脱水、干燥、磨粉筛分所得合格玻璃质磷肥粉净重；不覆盖另加N/K/S/微量养分、粘结造粒、二次炉渣或污泥灰原料，包装皮重不计参考质量。

- 选定流：磷肥 `9c196b01-6aad-4252-a6e8-f853853a830c`
- 流属性/单位：Mass / kg
- 数量规则：1 kg
- 数值来源模式：固定数量（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_product`
- 来源：`ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`

##### 废物流

###### 外运收集磷酸盐矿物粉尘 （`dust_waste`）

记录实际外运一股收集矿物粉尘的来源、组成、水分、危险性和接收方；内部返回粉尘只记内部账，饲料级粉尘与空气排放是不同交换。

- 选定流：外运收集磷酸盐矿物粉尘
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 脱水无机水淬及洗涤处理污泥 （`sludge`）

仅在实际合并时作为一股无机处理污泥，称湿输出并分析干固体、氟磷金属和接收验收；未混合的不同来源在数据集中分别列行，生物或油泥不属于此流。

- 选定流：脱水无机水淬及洗涤处理污泥
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 废烧结镁质炉衬 （`refractory_waste`）

实际移出MgO砖炉衬时记录污染和接收方，核对移出质量、入产品磨损、粉尘与剩余炉衬；铝工艺耐火废物或镁冶炼渣不可替代。

- 选定流：废烧结镁质炉衬
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 废润滑油 （`oil_waste`）

记录交付接收方的实际废润滑油污染、水分、质量及处理，不借用其他记录固定油水比例，也不假定焚烧或回收。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 外送处理水淬及洗涤废水 （`effluent`）

外送处理机构时按实测湿质量和组成记录液态废水；与同一液体直接排口的水及污染物行构成不同出口边界。接收方后续环境排放属于其处理数据集。

- 选定流：外送处理水淬及洗涤废水
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 外运不合格电熔磷酸盐玻璃 （`offspec`）

实际外运弃置电熔肥玻璃时记录组成、水分及接收状态；内部重熔是内部返回，不作为厂界废物或第二参考产品，浮法碎玻璃是不同物料。

- 选定流：外运不合格电熔磷酸盐玻璃
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 退出石墨电极残头 （`spent_electrode`）

实际移出的电极石墨记录污染和接收方，分别核算已氧化碳和内部电极存量；电池回收石墨不符合来源。

- 选定流：退出石墨电极残头
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

##### 基本流

###### 细颗粒物排入室外空气 （`pm25`）

计量原料搬运、电炉、干燥、磨粉、筛分或包装经实际控制后跨厂界PM2.5。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 中粒径颗粒物排入室外空气 （`pm10`）

仅计互斥PM2.5至PM10段，不把总PM10与PM2.5相加；保留可比粒径测试。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 大颗粒物排入室外空气 （`pmover10`）

仅计大于PM10且跨厂界颗粒，沉降收集物与内部返回不是此空气交换。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 氟化氢排入室外空气 （`hf`）

控制后的矿物熔融尾气中存在HF时按物种计量；以F计的总氟未经物种分析和换算不可填为kg HF。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：氟化氢 `08a91e70-3ddc-11dd-9804-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 四氟化硅排入室外空气 （`sif4`）

实际环境出口存在SiF4时计量，不再把同一氟重复计入HF或总氟。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：四氟化硅 `fe0acd60-3ddc-11dd-a706-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 化石源二氧化碳排入室外空气 （`co2`）

按实测或采集碳平衡记录化石气、柴油和石油或煤来源电极碳氧化为CO2；地质碳酸盐碳另设账和行。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 地质碳酸盐源二氧化碳排入室外空气 （`geogenic_co2`）

按实际原料分析和碳物种平衡记录矿物碳酸盐分解CO2，不假定化石燃料流或生物校正流证明其身份。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：地质碳酸盐源二氧化碳排入室外空气
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 化石源一氧化碳排入室外空气 （`co`）

计量化石源CO，区分电极或燃气氧化与碳酸盐碳，核对碳账。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 一氧化氮排入室外空气 （`no`）

计量电炉、后处理或搬运控制后的实际NO；仅有以NO2当量计NOx不能证明NO质量，须采集物种分配或披露缺口。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 二氧化氮排入室外空气 （`no2`）

计量实际NO2物种质量，不以总NOx替代；NO与NO2不得重复使用同一NOx负荷，N2O另列。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 二氧化硫排入室外空气 （`so2`）

存在时依据原料燃料硫与出口监测计量SO2，不以硫氧化物族近似，也不设通用硫至SO2转化率。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 化石甲烷排入室外空气 （`methane`）

实际燃气或燃料处理产生未燃或泄漏化石甲烷时计入，不采用延迟排放校正流。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 一氧化二氮排入室外空气 （`n2o`）

安装燃烧设备或其他已识别源实际产生N2O时计量，不并入NO/NO2负荷。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 水蒸气排入室外空气 （`water_air`）

计量水淬、干燥和冷却净水蒸气；分清产品脱水、试剂载水、燃烧水和实测进气湿度。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 镉排入室外空气 （`cadmium_air`）

矿物原料与出口测试识别相关Cd时按元素Cd质量及互斥气粒物种记录，不采用二硬脂酸镉。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：镉 `08a91e70-3ddc-11dd-9674-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 汞排入室外空气 （`mercury_air`）

实际相关Hg负荷须以物种和相态支持元素Hg表征，不用甲基汞化合物替代。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：汞 `fe0acd60-3ddc-11dd-a8c4-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 砷排入室外空气 （`arsenic_air`）

按明确元素As基准记录原料与出口识别的相关As；实测不兼容化合物另扩展列行。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：砷 `08a91e70-3ddc-11dd-91d7-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 铅排入室外空气 （`lead_air`）

按元素Pb基准记录实际相关Pb，四乙基铅不等于元素铅。 本行不设默认数量，介质为室外空气、子介质未特指。

- 选定流：铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 液态水排入淡水 （`water_fresh`）

仅计厂内处理后实际排向已证实淡水受体的液体体积，是排放而不是取水或外购水。 同一液体不得既算直接排放又算外送废水，存在时才采集数量。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：Volume / m3
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 氟离子排入淡水 （`fluoride`）

按F基准计直接排口实测溶解氟离子质量，F2、溶液HF或氟硅酸盐不能自动等同。 同一液体不得既算直接排放又算外送废水，存在时才采集数量。

- 选定流：氟化物 `08a91e70-3ddc-11dd-93fb-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 磷酸盐排入淡水 （`phosphate`）

按PO4质量记录实际磷酸盐物种负荷，采集物种并区分溶解、颗粒及其他磷；总磷分析不能证明全部P均为磷酸盐。 同一液体不得既算直接排放又算外送废水，存在时才采集数量。

- 选定流：磷酸盐 `08a91e70-3ddc-11dd-9787-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### 悬浮无机固体排入淡水 （`tss`）

按直接排口未溶固体质量计量，溶解固体和水介质未特指身份不能证明所需淡水悬浮固体匹配。 同一液体不得既算直接排放又算外送废水，存在时才采集数量。

- 选定流：悬浮无机固体排入淡水
- 流属性/单位：Mass / kg
- 数量规则：在声明单位采集实际存在的周期交换，除以cp_product同周期合格商品粉净重Q，未知不算零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-cww-2016`; `jrc-lvic-aaf-2007`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | all physical streams | 保留未分配实际产品、残余物、水气库存量及同量内部链接；产品和共产品实物输出绝不乘分配份额。 | `jrc-lvic-aaf-2007`; `jrc-cww-2016` |
| allocation_single | normal single-product unit | 仅一种商品肥料输出时，将其可归因实测生产与控制负荷计给产品，不虚造炉渣养分共产品或灰信用；回用粉尘玻璃水本身不构成外部产品功能。 | `epa-lca-principles-2006` |
| allocation_multi | actual additional valuable output | 确认实际产品废物状态、规格接收方及功能；若存在商品共产品，先补独立实测物理输出，再先用细分或有依据系统扩展，否则使用证实的因果物理关系，物理因果不可得时才论证同周期经济关系。不自动湿质量均分或设替代信用。 | `epa-lca-principles-2006` |
| allocation_ledger | product burden reporting | 与实物平衡分开的负荷账保留直接赋值、共用池、和为一的份额及敏感性；废物处理归产生路线，任何信用需明确系统接收证据且无重复信用。 | `epa-lca-principles-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | fused_powder_unit | 净放行产品 | measured_record | 批次SKU；毛皮净重；合格不合格量；库存；商品水分；总P2O5及明确提取剂可溶部分；Ca/Mg/Si/F；痕量元素；玻璃基体；细度；验收 | 校准出厂秤及批次代表性化验，明确提取和测试方法，核对库存实际供货状态，保留未分配净放行量Q。 | kg | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_material | fused_powder_unit | 独立原料和处理试剂 | measured_record | 行批次；供方；接收投料库存；湿干活性比例；矿物相；P/Ca/Mg/Si/F；碳酸盐碳；痕量金属；粒径；纤维矿物；接收方 | 校准称重和代表性原料试剂分析，不用文献配比，矿物脱出的结构水、原料自由水和购入载水分别记录。 | kg | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_energy | fused_powder_unit | 电力与厂内柴油 | measured_record | 阶段表计时间；kWh；交付电压；实际电源地域；线损边界；负载；柴油质量；体积密度温度；共用服务因果 | 积分校准阶段表，称实际柴油或用批次兼容密度换升量，按实测驱动因素划分共用服务，保留阶段数据。 | MJ; kg | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_gas | fused_powder_unit | 后处理管输燃气 | measured_record | 体积表量；温度绝压；湿度；组成；压缩因子；供方参考温压干湿；实际低高位热值；干燥辅助热量 | 计量各实际支路，保留体积定义及可追溯状态方程，热负荷和燃气质量另测；MJ单位或次级质量系数不证明交付基准。 | m3; MJ | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_water | fused_powder_unit | 外部补水与内部水账 | measured_record | 供水支路；补水；水淬冷却洗涤内部循环；原料试剂产品污泥含水；结构水；蒸发；排污；密度温度；凝液；库存 | 计量净外部供应及所有实际循环出口，供方记录来源处理；结构水和燃烧水为生成项，不算再次外购水。 | kg; m3 | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_maintenance | fused_powder_unit | 电极炉衬与配方润滑油 | measured_record | 实际品级组成；安装退出库存；服务周期产量；石墨化石碳；炉衬磨损；润滑添加剂；接收方 | 按服务周期称实际更换退出库存，区分氧化、磨损入产品及移出残余物，记录完整润滑规格。 | kg | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_pack | fused_powder_unit | 各实际袋内衬缝线 | measured_record | 供方含组件；袋规格；Item(s)；破损件数；实际装填皮重；PP/PE/PET品级整理；湿及材料质量；实际弃料；回用接收方 | 计袋并称代表性皮重组件及实际装填，每一采购组件只计一次；存在破损袋、内衬及线头弃料时补原子废物行并核对。 | Item(s); kg | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_transport | fused_powder_unit | 入厂公路段 | measured_record | 货重吨；实际千米；车型；载荷；回程；方式；供应数据运输边界 | 实际地磅票据路程记录，每公路段只计一次吨乘千米并证明服务供方兼容，其他实际方式另定义。 | t*km | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_waste | fused_powder_unit | 各独立外部残余物 | measured_record | 流来源；湿质量；干固体；水；F/P/C金属；油石墨炉衬组成；危险状态；接收方规格；实际处理；循环库存 | 在实际出口分别称样并保留签收处理证据，未混来源分开，内部返回不计外部总量。 | kg | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_air | fused_powder_unit | 各气体与颗粒排放 | measured_record | 源出口控制；流量采样周期；温压O2干湿基准；物种浓度；可比PM2.5/PM10总颗粒试验；氟物种；NO/NO2/N2O；碳来源；金属物种；检出限；无组织量 | 实际控制后匹配出口流量及相关物种代表性化验，覆盖正常启停；干料搬运磨粉包装无组织粉尘与收集固体分开，不因电加热推定零排放。 | kg; m3; concentration; time | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_effluent | fused_powder_unit | 各液体边界与排口物种 | measured_record | 来源；污水管或直接份额；受体；进出口体积密度；pH温度；TSS；氟物种；总溶解颗粒磷及磷酸盐物种；相关金属COD；样品检出限；污泥水 | 在预处理最终处理和真实排口匹配流量及代表样，明确环境受体或外部机构，不把外送废水当直接基本流，实际相关物种独立补行。 | kg; m3; concentration; time | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |
| cp_stage | fused_powder_unit | 未分配平衡与负荷核算 | measured_record | 阶段ID；对应转移；库存；外部进出；P/Ca/Mg/Si/F及痕量杂质；H/O水账；化石地质生物碳；电炉干燥热；共用因果；实际共产品价格状态 | 先保留实测实物阶段平衡及同量链接，再分配负荷；采集损失产品分析、碳酸盐分解、电极氧化、内部回用和回热；记录实际因果经济关系及不确定性，不编收率闭合。 | kg; MJ | 每批次交接；连续表积分；代表性出口监测 | 完整声明代表周期，含启停清洗库存核对 | 同一前景单元及实际供方接收边界 | 每 1 kg 参考流 | 校准试法物种检出限、票据样品时间覆盖及不确定性 |

保留同一路线、供货状态、等级及代表周期的未分配原始总量，纳入全部可归属的失败、零验收产出、启停、清洗、待机、退货和返工。核对期初期末在制品和成品库存及其累积清单负荷，记录期初转入和期末转出归属，避免负荷遗失或重复。Q为严格为正的最终验收商品净产量，与放行、发运和库存核对；排除最终拒收品，不重复计入退回、返工并再次验收的同一材料。每项核对后的原始交换总量仅应用一次normalize_campaign。逐行换算和计算描述，包括road_service中的除Q，均指同一次归一化，不得再除一次。完整周期Q <= 0时须论证更大的代表期间或报告未完整结果。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_campaign | all inventory rows | N = 同周期外部交换的声明单位数量 / Q；Q为cp_product同周期合格商品粉净重kg，保留分子Q库存与阶段计量。 保留同一路线、供货状态、等级及代表周期的未分配原始总量，纳入全部可归属的失败、零验收产出、启停、清洗、待机、退货和返工。核对期初期末在制品和成品库存及其累积清单负荷，记录期初转入和期末转出归属，避免负荷遗失或重复。Q为严格为正的最终验收商品净产量，与放行、发运和库存核对；排除最终拒收品，不重复计入退回、返工并再次验收的同一材料。每项核对后的原始交换总量仅应用一次normalize_campaign。逐行换算和计算描述，包括road_service中的除Q，均指同一次归一化，不得再除一次。完整周期Q <= 0时须论证更大的代表期间或报告未完整结果。 | cp_product; row-specific protocol | quantity per 1 kg reference flow | jrc-cww-2016 |
| material_components | wet feeds; lime; product; sludge | 组分质量=实测湿父流质量×实测质量分数；干活性物、自由载水及相关结构水为解释组分，不是追加父流采购。 | cp_material; cp_water; cp_product; cp_waste | physical component ledger | jrc-lvic-aaf-2007 |
| electricity_conversion | electricity | MJ=实测kWh×3.6；单位定义换算不是电炉干燥耗量默认值。 | cp_energy | compatible energy per reference kg |  |
| load_species | air and direct freshwater species | 先保留归一化前的原始周期物种质量。浓度与气液体积流率基准相容时，按明确单位积分浓度×体积流率×对应区间时长；若气液数量已是积分体积，仅累加浓度×对应体积，不得再次乘时长。所得原始周期负荷仅应用一次normalize_campaign。元素与化合物表达须有实测物种和明确摩尔质量比，总NOx或总氟磷不足以证明独立物种。 | cp_air; cp_effluent | normalize_campaign前原始周期物种质量 | jrc-cww-2016 |
| particle_bins | pm25; pm10; pmover10 | 细段=PM2.5；中段=可比PM10−PM2.5；大段=可比总颗粒−PM10；可用独立互斥粒径测试，负差或不可比须审查而非截零，不累加嵌套总量。 | cp_air | disjoint particle mass ledger | jrc-cww-2016 |
| gas_volume | gas | 用记录的实际及供方温度绝压、干湿组成和压缩因子定义，通过可追溯状态方程转换表量为供方兼容体积，不固定密度热值或默认修正。 | cp_gas | provider volume ledger and normalized m3 |  |
| carbon_balance | co2; geogenic_co2; co; methane; electrode | 各碳来源分别满足实测输入=产品残余碳+实际排放物种碳+库存变化，并载不确定性；仅分配到CO2的氧化化石电极碳用44/12，CO/CH4采用对应摩尔比；矿物碳酸盐及任何实际生物碳分开且不从LCI删除。 | cp_material; cp_maintenance; cp_air; cp_stage | origin-specific unallocated carbon ledger | jrc-lvic-aaf-2007 |
| phosphorus_basis | ore; finished_product; phosphate | P2O5为分析表达，不是纯氧化物投料，分别记录总量与提取可溶比例及湿干分母；只有确认磷酸盐部分后，其以P计负荷才按PO4/P摩尔质量比换算，不将全部总P当PO4。 | cp_material; cp_product; cp_effluent | analytical P ledger and speciated load | zennoh-fused-phosphate |
| water_energy_balance | stage links; water; water_air; water_fresh | 外部自由水、原料试剂水、结构水脱出及燃烧水，与产品污泥含水、水蒸气液体出口和库存核对；电炉后处理电燃料与实测有效热、冷却水淬热及损失核对，披露差额不编收率蒸发或蒸汽信用。 实际发生中和、沉淀或其他反应时，按实测化学形态和反应程度，保留有独立证据支持的水生成与消耗及干态物种生成与消耗项。完整边界的总质量和元素守恒，单个水或干态物种不必守恒；不能通过强行闭合残差、COD或假定化学式反推这些反应项。 | cp_water; cp_gas; cp_energy; cp_stage | physical water/H/O and energy ledgers | jrc-lvic-aaf-2007 |
| road_service | transport | 公路服务=各段货重kg/1000×实际km的和，再除Q；核实实际载荷回程供方基准，不重复上游已含路段。 | cp_transport; cp_product | t*km per reference kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | product and feeds | 要求实测未强化玻璃粉和原生磷矿蛇纹石电熔路线；分类或广义磷肥UUID不证明组成养分基准，矛盾CAS路线须先解决再链接。 | 实际SKU矿物分析和过程图 |
| dq_measurement | all rows | 校准单位、兼容供方接收基准、同周期Q及代表性时间覆盖，记录不确定性和独立阶段读数，不借纯度配方能耗收率或默认排放率。 | cp_product; cp_stage; 各行协议 |
| dq_balances | physical streams | 保留未分配质量、水H/O、P/Ca/Mg/Si/F痕量元素、碳来源和能量账，含粉尘收集、电极氧化、炉衬磨损、共产品、液体转移及库存，披露差额不确定性而非编闭合。 | cp_stage; jrc-lvic-aaf-2007 |
| dq_completeness | active actual exchanges | 覆盖正常启停、清洗维护、无组织粉尘及所有相关物种，实际其他化学品包装弃料滤材运输控制独立补行，缺计量身份保留未知而非零。 | 流登记; cp_air; cp_effluent |
| dq_source_scope | all sources | IFA为历史行业综合、全农为分销手册、Yoorin为生产者产品族，不提供通用数量；JRC一般平衡监测仅在声明范围使用，不移植其他肥料章节或法律限值；EPA为一般历史LCA指引，不声明当前标准符合。 | 原件章节与实际适用评估 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference and feeds | 证明原生磷矿蛇纹石电熔及未强化玻璃粉范围，广义磷肥名称不能豁免排除原料路线；完整商品kg与分析P/P2O5分开声明。 | `ifa-fertilizer-china-2009`; `zennoh-fused-phosphate` |
| validate_reference | finished_product | 恰一个完整最终参考产品输出，双语分母与采集聚合均为每1 kg净商品放行；内部交接同量保留实物阶段记录。 | `jrc-lvic-aaf-2007` |
| validate_supply | utilities and components | 核实实际能量体积件数属性、燃气条件、电力供方、包装所含组件与湿活性水基准；即使流身份有效，供方定义缺失仍不能声称完整背景链接。 | `jrc-cww-2016` |
| validate_species | elementary releases | 要求实际物种、碳来源及空气淡水介质；不用F2代HF氟离子、总NOx代NO/NO2、N2O代NOx、溶解固体代悬浮物或校正流代真实排放；粒径和收集排放量互斥，实际生物CO2保留LCI。 | `jrc-cww-2016` |
| validate_physical | balances and allocation | 先核对实物输出与同量内部链接再分配负荷，不减共产品实物、不让水消失、不编碳酸盐转换或重复粉尘废水负荷。 | `jrc-lvic-aaf-2007`; `epa-lca-principles-2006` |
| validate_completeness | concrete dataset | 每个实际活跃行须有数量证据、身份决定、属性单位、状态供方接收方及路线适用；身份未决、仅汇总物种分析、未知量或不支持转换均不能声称完整数据集；方法编写不是科学批准或场址核验。 | `jrc-cww-2016` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 指定未强化电熔粉体的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际兼容粉体供给明确评估的产品系统，商品和养分基准均有实测 |
| excluded_use | 所有磷肥通用平均；无明确分析转换的kg养分；排除的熔融酸解二次原料路线；直接田间影响或作物气候信用声明 |
| required_metadata | SKU原料来源分析、路线玻璃基体、水分细度验收、Q周期、供方能源定义、包装、处理排口、库存、共产品废物状态、分配及系统边界 |
| required_quality_disclosure | 实际计量不确定性、来源适用性、未知或缺失数量身份、背景兼容、平衡及差额、科学审查状态 |
| update_trigger | 原料路线品级能源包装控制接收方变化、新原始证据、已确认身份更正或数量实物兼容失败 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | [联合国统计司，CPC 3.0说明，2025年6月30日](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 印刷/PDF165–166：磷肥过磷酸钙及多养分层级，仅分类上下文，残余分类标签不是配方或整叶方法身份。 |
| ifa-fertilizer-china-2009 | handbook | [IFA，《中国化肥工业：回顾与展望》英文版，2009年5月](https://www.fertilizer.org/wp-content/uploads/2023/01/2009_ifa_fertilizerindustrychina.pdf) | 第3.2.1.2节印刷39/PDF57，翻译免责声明PDF4：矿物熔剂电熔水淬及后处理；历史国家工厂量和性能、矿品位阈值及其他炉路线不作默认。 |
| zennoh-fused-phosphate | handbook | [全农，肥料问答第2章：熔成磷肥（ようりん），出版者手册](https://www.zennoh.or.jp/operation/hiryou/pdf/02_yourin.pdf) | 印刷76–78/PDF1–3图1–2：熔融水淬后处理与玻璃网络身份，区分养分强化品级；不使含镁硅矿渣与原生蛇纹石互换，不强制手册品级保证值。 |
| yoorin-phosphate-products | handbook | [Yoorin，磷肥产品，生产者网页](https://www.yoorin.com.br/pt/nossas-solucoes/fosfatados-yoorin) | 产品族电熔说明及Mg/Master/S/B-Mag列表支持商品物理族与排除；农业气候宣传及产品配方不作默认信用，须实际SKU。 |
| jrc-lvic-aaf-2007 | official_guidance | [欧盟委员会JRC，大宗无机化学品氨酸肥料BREF，2007年8月](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf) | 第1.5.1–1.5.2节印刷33–34/PDF61–62：一般肥料厂质量水碳能源平衡和计量，不提供热熔配方，不移植酸解等特定章节限值。 |
| jrc-cww-2016 | official_guidance | [欧盟委员会JRC，化工行业废水废气处理管理BREF，2016，JRC103096](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf) | BAT2–4印刷543–544/PDF573–574：化工流登记及相关出口负荷监测，实际相关物种决定采样，不用BAT限值换LCI，不声明法律符合。 |
| epa-lca-principles-2006 | official_guidance | [美国EPA，《生命周期评价：原则与实践》，EPA/600/R-06/060，2006年5月](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1000L86.TXT) | 第3章分配印刷28–29：一般工业细分扩展、物理及其他经济关系层级，仅历史方法指引，无通用份额工厂配方或当前ISO符合声明。 |
