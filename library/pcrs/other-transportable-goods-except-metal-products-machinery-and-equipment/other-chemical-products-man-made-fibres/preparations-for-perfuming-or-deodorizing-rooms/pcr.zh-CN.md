---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.preparations-for-perfuming-or-deodorizing-rooms
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 氮气加压水性乙醇/DPnP室内增香气雾剂制造

## 1. 范围与适用性

本PCR仅覆盖一条较窄的物理制造路线：将分别接收的水、乙醇原料、二丙二醇正丙醚DPnP和外购香精油混合物混配，不另加表面活性剂或缓蚀剂；灌入印刷马口铁气雾罐，安装普通卷封阀，充入外购气态氮，安装PP喷头/保护盖和运输纸箱，再放行合格气雾成品。代表路线采用外购去离子水、电力服务及现场制压缩空气。实际配方、顺序、混配工况、氮纯度/压力、检验方法及罐体相容性须独立举证；专利比例、设备产能、单循环耗气或示例工况均不作为默认LCI值。[ep3481439-aerosol; zigler-nitrogen-filling]

独立方法需求来自留存气体、耐压容器制造/充填边界及实际DPnP助溶路线，而非室内用途标签。散装香精浓缩物是上游投入，不是制剂成品。若醇水型身体香水具有相同且已证实的物理路线，可经独立边界复核后在同一身份下条件复用或修订；双用途标签从不构成重复PCR理由。本方法不声称覆盖整个CPC35331叶。排除仅泵式香水、凝胶、浸渍基材、蜡烛/熏香、吸附块、囊阀、LPG/DME推进剂、其他助溶剂、现场香精/乙醇/氮合成及独立净化/消毒服务。实际其他组分或工序须明确补充原子交换并复核边界，不能为了符合代表路线而删去。[un-cpc3-2025]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.preparations-for-perfuming-or-deodorizing-rooms |
| classification_refs | CPC 3.0 35331; narrower |
| covered_products | 水/乙醇/DPnP/香精制剂，氮推进剂，普通马口铁气雾罐 |
| excluded_products | 散装香精；单独身体香水；凝胶/基材/蜡烛/吸附/BOV/LPG路线；净化服务 |
| representative_product | 一个实际SKU/配方及容器系统，唯一首次放行 |
| production_route | 外购组分混配；液体灌装；卷封阀；气体加压充填；实际检验包装；首次质量放行 |
| market_state | 加压气雾成品；净内容物包括留存氮，包装负荷另计但不删 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应合格室内增香气雾制剂 |
| How much | 1 kg |
| How well | 实际验收组成及耐压容器规格；不假定消毒效力、除臭等效性或净化服务 |
| How long or cycle | 一次首次生产质量放行事件；不设默认使用寿命、房间面积、剂量或货架期 |
| reference_flow_link | finished_aerosol |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 房间加香或去臭用品 `377fa3df-04b2-4d8c-8d71-27f049e0d10e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | SKU及配方版本; 完整供货原料/混合物组成; 实际助溶剂异构体/等级; 留存氮及充装状态; 耐压罐/阀材质与相容性; 净/毛/皮重方法; 首次质量放行门; 场址和期间; WIP及库存同批群谱系; 上游路线/地理/供方基准; 实际检验与排放物种; 截断 |

缺少必需限定信息使具体数据集参考定义不完整。工厂已制造成品的通用原生参考仅建立物理身份，其完整限制保留在finished_aerosol卡片。包装排除于参考质量，纳入生产负荷。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为匹配生产期间/同批群内唯一正值的首次新质量放行净内容物质量，包含留存推进剂和载水，排除全部容器/包装皮重。Q不是发运质量。 |
| single_basis | all inventory denominators | Mass | kg | 将完整可归属原始分子换算为各自单位，再以正值Q唯一归一；保留能量和排放单位。已积分气/液体积不得再乘时间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 配制/充填场址接收完整外购组分、供货气态氮、已制造空耐压包装及期初库存结转负荷 |
| starting_condition_role | 接收及物理混配/充填；上游制造不能作为无负荷投入省略 |
| product_classification_scope | CPC 3.0 35331; narrower |
| recursive_input_rule | 外购室内香氛预混液是带完整上游配制负荷的一项商业投入，不是无负荷同类捷径。它改变分别投料路线，须显式修订边界，不得重复采购其组分。 |
| upstream_dataset_requirement | 匹配完整实际供货形态、浓度、等级、路线、气态、地理和交付；保留上游化学合成、气体分离/压缩、包装制造/涂层/印刷及运输负荷 |
| disclosure | 分别声明生产放行门与仓储/发运、物理同批群、实际包装/检验/清洗、共用公用工程、储存/搬运、排除项、分配及完整期初末WIP/库存负荷 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | aerosol | 纳入接收/储存、混配、转移、罐装、卷封、氮充装、实际压力/泄漏/质量检验、包装首次放行、清洗、失败生产及全部上游负荷。若实际存在热/燃料/制冷剂/实验室耗材，须分别列原子交换；本代表电力路线不能授权省略。 | `ep3481439-aerosol`; `zigler-nitrogen-filling` |
| boundary_cohort | aerosol | 若纳入成品仓储/搬运/发运，须按同一放行群另建原始账。合并时抵消从生产接收的内部交接，保留实际可归属负荷，不得再将Q所属期末成品加作生产输出。放行kg与交付kg不自动相等。 |  |
| boundary_use | reference product | 使用阶段喷洒、室内暴露、装置电量、寿命、面积、除臭/消毒/净化功能及报废在本生产清单之外，须另证据和边界；实际制造检验喷放及包装不得移入被排除使用阶段。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| aerosol | 配制、加压充填与质量放行 | required | 选定普通氮气气雾路线，实际工序有记录 | foreground | finished_aerosol |

### 过程：配制、加压充填与质量放行（`aerosol`）

#### 输入

##### 产品流

###### 外购乙醇原料 (`ethanol`)

原生Product/Mass身份为乙醇CAS64-17-5，生产混合、工厂内，未指定浓度、等级、路线或地理。原生分类35499作为分类债务披露，不能据此推断另一分子或仅限未另列化学品的物理身份。整份外购乙醇供货仅记录一次，包括实际含水及已有变性剂，并核对完整组成与背景供方基准；含水或变性制剂不得悄然套用纯乙醇供方。供货内水和变性剂只是非加总组分子账。另行外购的变性剂须另列卡片。完整供货状态身份核实前，不将通用乙醇分子候选绑定到本整份商业溶液；此辅助缺口不改变成品参考。原生系数不是密度。

- 选定流： 供货乙醇原料溶液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_material`
- 来源： `ep3481439-aerosol`

###### DPnP助溶剂投料 (`dpnp`)

记录整份DPnP供货的实际异构体分布、含量、载体及杂质。DPM甲醚、未醚化二丙二醇、乙二醇醚和丙二醇正丙醚均为不同身份，不得替代。专利支持DPnP身份，不证明供方等级、密度或实际投料量。UUID未绑定。

- 选定流： 二丙二醇正丙醚
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_material`
- 来源： `ep3481439-aerosol`

###### 外购香精油复配物 (`fragrance`)

原生为Product/Mass、通用工厂内、外购香精油混合物，未给CAS、固定组成、等级、地理或参考Mass系数1之外的定量属性。整份混合物作为一项采购；其中组分不得再重复采购。为上游匹配、质量/元素守恒及实际排放物种识别，须取得完整供方组成和载体基准。香型名称不能提供这些信息。

- 选定流： 香精混合物 `2fb8cc73-e146-4ff5-a9c4-76a98611a010`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_material`
- 来源： `ep3481439-aerosol`

###### 另加配制水 (`formulation_water`)

原生Product/Mass、CAS7732-18-5、生产混合工厂内；名称路线限定离子交换或反渗透、纯净物。备注另提蒸馏及生产/消费供应，未指定数值质量标准或地理。本绑定仅适用于实际匹配的外购离子交换/反渗透去离子水。纯蒸馏水或现场制水须另核身份并保留完整制水清单。已包含在外购乙醇/香精中的水不得计入本项独立采购。

- 选定流： 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_material`
- 来源： `ep3481439-aerosol`

###### 气态氮推进剂供应 (`nitrogen`)

实测供气质量、纯度、压力、温度、交付与生产路线；保留管线充气、吹扫、失败充装及产品内留存推进剂。原生空分氮候选的参考Mass系数1.25，未有体积属性或密度条件；不采用，也绝不当作密度。灌装惰化补充/排空气不等同于本项留存推进剂供货。不预设液氮/汽化路线、充气量、压力或气液体积比。

- 选定流： 压缩氮气推进剂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_material`
- 来源： `zigler-nitrogen-filling`

###### 外购耐压罐体 (`can`)

一件完整供货的耐压马口铁罐体，包括一体供货的底盖、实际钢/锡、涂层及印刷。记录整件质量和上游制罐/印刷负荷，不再把其钢、锡、涂层组分质量重复采购。食品罐身份不证明耐压适用性。不设默认罐重或再生比例。

- 选定流： 印刷马口铁气雾罐体
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_packaging`
- 来源： `ep3481439-aerosol`

###### 外购气雾分配阀 (`valve`)

作为一件实际供货的阀总成，包含同件供货的吸管、阀杯及密封件；声明金属/聚合物/弹性体组成和上游组装。组分采购不再重复。此为普通阀而非囊阀；囊袋须另列材料并复核压力边界。

- 选定流： 气雾分配阀总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_packaging`
- 来源： `zigler-nitrogen-filling`

###### 外购喷头 (`actuator`)

记录此独立外购注塑喷头的实际树脂/添加剂、质量与制造。此路线的阀总成质量不包含它。若为其他聚合物或不可分供货整件，须修正身份及采购账。

- 选定流： 聚丙烯气雾喷头
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_packaging`

###### 外购保护盖 (`cap`)

一件独立供货的PP注塑保护盖，使用实际质量/组成及上游制造。保留废品和库存变化；不假设件重，也不重复计算树脂采购。

- 选定流： 聚丙烯气雾罐保护盖
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_packaging`

###### 瓦楞运输纸箱 (`carton`)

实际单件运输纸箱，包括随该件供货的整体印刷及封合结构；匹配纤维组成及加工负荷。若另购胶带、托盘、标签或拉伸膜，须各列原子卡片，不得隐藏在纸箱质量内。

- 选定流： 印刷瓦楞纸板运输箱
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_packaging`

###### 外购清洗及检验用水 (`cleaning_water`)

仅用另行计量的外购离子交换/反渗透去离子水，完整原生限制同formulation_water：Product/Mass、CAS7732-18-5、工厂生产混合、无固定质量标准/地理，备注还提蒸馏和消费供应。保留实际清洗与压力/泄漏检验补水及损失；内部循环不是再次采购。实际采用其他水质时须另列修正交换。

- 选定流： 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_services`

###### 场址电力 (`electricity`)

计量混配、泵送、通风、压缩空气制备、充压/检验、清洗、实验室、存放及搬运，并核对共用服务。原生低于1kV电网平均消费候选明确locationOfSupply为CN；实际地理/电压/组合未定，故不绑定，不强加这些条件。现场制压缩空气时压缩机电量在此计入，不再作为外购压缩空气重复计入。

- 选定流： 外购交流电
- 流属性/单位： Energy / kWh
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_services`

#### 输出

##### 产品流

###### 首次质量放行气雾罐净内容物 (`finished_aerosol`)

原生Product/Mass、已制造成品、工厂生产混合；未指定CAS、配方、相态、等级、地理或locationOfSupply，参考Mass系数1。本绑定仅为本项实测气雾成品的条件身份，不提供配方、背景供方、耐压等级或除臭性能。Q包含首次质量放行时的整份制剂及罐内留存氮气，排除所有包装皮重，但包装负荷保留。通用UUID也不能把散装中间物变成第二个终端参考。

- 选定流： 房间加香或去臭用品 `377fa3df-04b2-4d8c-8d71-27f049e0d10e`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_release`
- 来源： `ep3481439-aerosol`

##### 废物流

###### 移交处理的不合格散装残液 (`liquid_residue`)

一项实际单独收集的散装废液流，记录整份净质量、完整组成与接收处理接口。内部返工尚未离开边界时不作为外排废物；整份废液和另测组分含量不得重复加总。

- 选定流： 废水性乙醇DPnP香精制剂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_losses`

###### 收集清洗废水 (`wash_effluent`)

实际单独收集、外送处理的清洗/检验排水，表征载水、溶解化学物和固体。不得再把同一内含物种作为直接水排放。现场处理须补充完整处理清单和独立实测最终物种/介质。

- 选定流： 气雾制剂设备清洗废水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_losses`

###### 整件移交处理的不合格气雾罐 (`rejected_filled_can`)

仅在整件转交时作为一件弃置实物，包括实测留存内容物和容器，保留皮重/内容物/组分子账。若现场泄压或拆分，须用实际分别释放的气、液、分离废料及相应负荷替换整件交接；不得既记整件又重复记其内含质量。

- 选定流： 废弃已充填气雾罐
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_losses`

###### 分开收集的纸箱废品 (`carton_scrap`)

实际纸箱废料单独称重并转交已记录的接收方。回收不自动产生避免生产抵扣；其他分离包装废料须补充实际原子卡片。

- 选定流： 废瓦楞纸板箱
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_losses`

##### 基本流

###### 实际向空气释放的乙醇 (`ethanol_air`)

记录实际收集控制后独立测得的乙醇释放质量，包括转移逸散和废品/检验喷放；声明实际空气子介质及表征需要的化石/生物源。总VOC、COD或闭合残差不能识别乙醇；已捕集液体不在此重复计入。

- 选定流： 乙醇，向空气排放
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_losses`

###### 实际向空气释放的DPnP (`dpnp_air`)

采用独立证实的DPnP物种质量及空气介质，不以DPM/DPG代替或分配残差。实际向空气释放的香精组分须在供方/物种识别后逐项补充化学特定卡片；禁止通用香精排放打包。不因本代表清单而推断这些物种不存在。

- 选定流： 二丙二醇正丙醚，向空气排放
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_losses`

###### 实际排向空气的氮气 (`nitrogen_air`)

以独立气体组成和工况证据计量实际氮气吹扫/充气/检验损失；留存推进剂仍属于Q。现场气动装置通过的环境空气不能全部算成氮推进剂损失；另计其实测物理流通量，实际润滑油气溶胶须独立识别。产品氮UUID不是空气基本流UUID。

- 选定流： 氮，向空气排放
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_losses`

###### 实际蒸发向空气的水 (`water_air`)

由水量/通风实测独立确定蒸发水和介质，不得与未知溶剂出口共同拟合同一闭合残差。产品/废物携水仍保留于相应账。物理混合和气体溶解不产生化学计量反应水。

- 选定流： 水蒸气，向空气排放
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按第8节将实际可归属、换算后的原始期间数量除以正值首次新验收净内容物千克一次。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： process_output
- 证据类型： collected_record
- 采集协议： `cp_losses`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all inventory rows | 优先采用批群/批次直接计量。仅对真实共用负荷按实测因果驱动分配，披露总量、驱动单位与核对结果；不提供默认经济或质量比例。 |  |
| allocation_returns | aerosol | 失败及零产出生产、返工、退货保留实际负荷。内部回收不是外部共产品；已放行批次再验收不形成新Q。废物回收不自动获得避免生产抵扣。真实共产品须按实际质量、去向及分配单独披露。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | aerosol | 完整商业组分及氮气 | batch_material_records | owner: 物料保管责任人；期间；批群；批号；供方；完整身份/路线/等级/地理；供货质量；含量基准；完整组分比例；气压/温度/组成；密度来源及工况；期初末原料库；领料/退回；WIP负荷 | 使用经校准称量、接收/投料记录和供方组成。接收、未领料库及实际领料作为独立关联视图核对，不得加总为重复采购。氮气质量独立计量，不用目录系数，区分留存气和吹扫。完整制剂只采购一次；组分为非加总子账。 保留完整换算原始分子及可归属期初末结转负荷，采集端不作除法。仅period_normalization以Q除一次；卡片公式及aggregation_rule为同一次最终报告操作。Q=0保留完整原始/负荷池，不生成归一值。 | kg; mass fraction; m3 with actual gas conditions | 每次接收/领用及每批 | 完整实际期间及前后结转关联 | 同一物理路线/场址/SKU及批群 | 每 1 kg 参考流 | 校准；接收记录；证书；完整组成；库存核对 |
| cp_packaging | aerosol | 各独立供货包装件 | packaging_records | owner: 包装工程师；批号；组成清单；耐压规格；整件/皮重；独立采购件；废品；期初末库存；供方制造/印刷/涂层；相容性检验 | 称量实际代表包装件并保留不确定度，核对件数/质量、领用和废料。验证阀/罐/喷头接口、留存内容物及真实检验报废记录。实际额外标签、膜、胶带或托盘须各列交换。 保留完整换算原始分子及可归属期初末结转负荷，采集端不作除法。仅period_normalization以Q除一次；卡片公式及aggregation_rule为同一次最终报告操作。Q=0保留完整原始/负荷池，不生成归一值。 | kg; item count with measured mass conversion | 每包装批及充填批 | 完整实际期间和库存关联批群 | 同一物理路线/场址/SKU及批群 | 每 1 kg 参考流 | 皮重抽样；组成清单；相容性及耐压/检验记录 |
| cp_services | aerosol | 实际公用工程清洗检验搬运储存 | meter_and_service_records | owner: 公用工程师；表计期间；电压/地理/组合；压缩服务；水；实际热/燃料/制冷剂；检验/清洗/实验室/通风；共用驱动；失败；仓储/发运批群关联；期初末结转负荷 | 分表覆盖启动/空转/失败、压缩空气及若存在的真实热水检验。相同服务按外购压缩空气或现场压缩资源记录，不得两者重复。实际热/燃料/实验室投入逐项增列，不得假设电力代表清单完整。匹配成品批群的实际仓储/发运负荷另建关联账。 保留完整换算原始分子及可归属期初末结转负荷，采集端不作除法。仅period_normalization以Q除一次；卡片公式及aggregation_rule为同一次最终报告操作。Q=0保留完整原始/负荷池，不生成归一值。 | kWh; kg; original service units | 每表计期间/服务事件 | 包括零产出及仓储批群区间的完整实际期间 | 同场址及可归属实际产品路线/批群 | 每 1 kg 参考流 | 表计；发票；分配核对；仓储/搬运记录 |
| cp_release | aerosol | 唯一首次生产质量放行及库存 | quality_release_and_mass_records | owner: 独立质量责任人；期间；配方/容器版本；批/事件谱系；首次放行决定；毛/皮/净内容物及留存气；返工/退货；失败批；期初末未放行WIP；WIP结转负荷；另账已放行成品库存/发运记录 | 称量真实验收充填件并减去匹配实际包装皮重。Q仅为选定生产期间/批群中新首次质量放行的净内容物，须为正值且只计一次。旧库发运、内部交接、退货/复验/再验收均不形成Q。生产投料和期初未放行WIP对Q、期末未放行WIP及实际损失核对；已放行期末成品已经属于Q，不再增加输出。仓储账另核期初已放行库存加接收Q，对发运、期末库和损失；合并时抵消内部生产接收，保留匹配实际负荷。 保留完整换算原始分子及可归属期初末结转负荷，采集端不作除法。仅period_normalization以Q除一次；卡片公式及aggregation_rule为同一次最终报告操作。Q=0保留完整原始/负荷池，不生成归一值。 | kg | 每放行事件及截点 | 完整实际期间及关联期初末批群历史 | 同实际SKU/容器/路线及声明放行门 | 每 1 kg 参考流 | 独立放行证书；毛皮重校准；失败/返工谱系；WIP/仓储核对 |
| cp_losses | aerosol | 各物理废物及实际排放物种 | weighing_speciation_monitoring | owner: 环境计量责任人；实际期间/批群；整份废物/皮重/内容物；接收方；组成；捕集/释放物种；空气/水子介质；积分体积或流率/时间；气温/压力/干湿基；浓度；不确定度/检出限；期初末暂存废物及结转负荷 | 采用称重联单及独立验证的物种特定测量，包括失败/零产出、充填泄漏与实际检验喷放。通用VOC/香精打包、COD或质量残差不能确定实际物种。完整实测水及元素账与独立化学证据分别保留。积分体积不得再乘持续时间；整件废罐或其拆分出口只计一次。 保留完整换算原始分子及可归属期初末结转负荷，采集端不作除法。仅period_normalization以Q除一次；卡片公式及aggregation_rule为同一次最终报告操作。Q=0保留完整原始/负荷池，不生成归一值。 | kg; m3 with conditions; species kg/m3; h only for rate integration | 每废物移动及监测区间 | 包括失败/检验/清洗及结转负荷的完整期间 | 同物理场址/产品路线/批群 | 每 1 kg 参考流 | 废物联单；选择性测定；捕集/排气监测；不确定度；独立闭合调查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 将每项完整原始期间分子换算并归属，仅除以cp_release首次生产质量放行定义的正值Q一次。带入期初WIP负荷，带出有记录的期末未放行WIP负荷。保留失败、零产出、全部返工/退货以及匹配的真实检验、包装、存放、搬运/发运负荷。Q不是交付量；属于Q的期末已放行成品不是另一项生产输出，也不是再一次期末生产WIP扣减。仓储另账合并抵消内部交接并保留匹配负荷，不再归一已归一系数。Q=0保留完整原始/负荷池，不产生归一结果。 | cp_material; cp_packaging; cp_services; cp_release; cp_losses | 每 1 kg 参考流的交换数量 |  |
| raw_conversion | all inventory rows | 采用校准质量，或体积乘在匹配组成/工况下独立证实的密度；件数按实际测得件重换算。仅流率记录以流率乘实际持续时间积分。已积分气/液体积仅作浓度或有证据密度换算，不再乘时间。原生系数1.25或次级系数不是实测密度。 | cp_material; cp_packaging; cp_services; cp_losses | 归一前换算原始数量 |  |
| mixture_subledger | ethanol; fragrance; dpnp; nitrogen | 组分质量等于完整商业供货投入质量乘兼容的独立实测质量分数。载水、溶剂和杂质在该投入内核对，不另作采购。v/v不当作w/w。留存氮属于产品净内容物，气体总充入还包括实测损失。 | cp_material; cp_release | 非加总组分子账 |  |
| physical_balance | all inventory rows | 分别维护制剂/推进剂、包装、公用工程/环境空气物理账及独立元素/水子账。生产投料加期初未放行WIP等于Q加期末未放行WIP、实际废物/排放和有记录净转移；净内容物排除包装，因此包装对验收产品皮重及实际废料另行核对。整件不合格充填罐仅将分测内容物放入制剂/推进剂账、皮重放入包装账；不得在整件废物交换旁再次加总。内部循环抵消。成品仓储平衡独立，不重复增加Q所属期末库存。物理混合/气体溶解不证明反应收率或反应水。实际化学变化或物种/水生成消耗须独立举证，不得由COD或用一项残差拟合两个未知出口。 | cp_material; cp_packaging; cp_services; cp_release; cp_losses | 独立物理、元素、水及物种账 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | 实际数据集匹配保留完整原生名称、路线/等级/形态、地理及属性/单位限制。普通辅助UUID/供方缺口须后续核实绑定，不得替代化学品或计零负荷。 | 完整原生记录；供方证书；供方适用性 |
| period | all inventory rows | 完整匹配期间和唯一正Q；追溯失败批、退货、期初末WIP及全部结转负荷。区分首次放行与实际净交付，不删真实仓储/发运负荷。 | 批群谱系；完整原始账；仓储核对 |
| actual_product | reference product | 由实验室/质量责任人验证实际配方、相稳定性、罐/阀相容性、净内容物及真实压力/泄漏/放行准则。专利或设备示例不建立真实场址配方、认证安全性或香氛/消毒功能。 | 真实验证检验；组成；容器规格 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_aerosol | 双语唯一终端Product输出finished_aerosol须与参考UUID、Mass/kg及首次质量放行净内容物一致。共用通用UUID的中间物仍须可见，不得改名或隐藏以规避选择。 |  |
| validate_full_period | all inventory rows | 核对完整原始归属、WIP/成品库区分、结转负荷、失败/返工及唯一归一；物理/元素/水守恒与物种独立核查。未知排放或缺失工序作为问题保留，不得拟合残差或假定零。 |  |
| validate_scope | reference product | 确认真实氮气普通加压路线及包装。kg生产不建立面积、寿命、剂量、消毒效力、净化服务、默认配方/工况或普遍全叶映射。 | `ep3481439-aerosol`; `zigler-nitrogen-filling` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为边界明确室内增香气雾剂生命周期模型的生产清单投入 |
| allowed_use | 相同真实物理路线/制剂/容器状态及声明生产放行门，具有完整实测清单 |
| excluded_use | 通用香水/空气清新服务、散装浓缩物等效、交付门替换、剂量/寿命/面积或消毒/净化声称 |
| required_metadata | 参考限定信息；原生限制；实际配方/容器版本；场址/期间；Q门；原始账；WIP/库存谱系；上游供方及实际工序 |
| required_quality_disclosure | 未绑定辅助身份/供方；实测缺口；不确定度；来源限制；实际增补交换；排放物种完整性及分配 |
| update_trigger | 组成/助溶剂/推进剂、基材/容器/阀、路线/场址、门、供方基准、检验/质量准则或真实工序变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.171–172, 35323/35331. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类标题；不建立物理方法差异、接受映射边、配方或全叶覆盖。 |
| ep3481439-aerosol | literature | European Patent Office, EP3481439B1, Air freshening formulation, aerosol product and method of freshening the air, 7 June 2023, paragraphs0013–0038 and claims1–10, PDF pp.2–4. https://data.epo.org/publication-server/rest/v1.0/publication-dates/20230607/patents/EP3481439NWB1/document.pdf | 专利原件支持无表面活性剂水/乙醇/DPnP/香精及气体/容器路线选择。本项氮/马口铁路线是对这些选择的有界综合，不是报告的工厂配方或已证实场址。不采用比例、压力、体积比、粒径、时长、收率、能耗、缓蚀剂剂量、性能或法律批准。可选缓蚀剂不被预设；实际使用须加列具体交换。 |
| zigler-nitrogen-filling | handbook | ZIGLER, Semi-automatic CO2/N2 Filling Machine Z-2013, manufacturer PDF, snapshot 16 October 2026, PDF pp.1–2. https://zigler.eu/wp-content/uploads/2022/03/SEMI-AUTOMATIC_CO2N2_FILLING_MACHINE_Z-2013_EN.pdf | 设备原件证明通过卷封阀充入气态氮及气动服务技术可行，不假定真实工厂采用该型号。不将CO2/BOV相容性作为本产品路线。产能、充装压力、耗气、温度或供气规格均不作LCI默认值；实际现场压缩及检验负荷须实测。 |
