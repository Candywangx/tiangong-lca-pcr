---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.nickel-mattes-nickel-oxide-sinters-and-other-intermediate-products-of-nickel-metallurgy
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 镍锍、氧化镍烧结物及镍冶炼的其他中间产品

## 1. 范围与适用性

本 PCR 适用于镍锍、氧化镍烧结物以及其他含镍冶金中间产品从场址入口到场址出口的生产；这些中间产品的预期下一用途是进一步回收或精炼镍及伴生金属。覆盖的路线包括硫化物精矿熔炼、氧化型红土矿预处理及加硫熔炼、焙烧或烧结制取氧化物中间产品，以及湿法冶金沉淀制取中间产品。前景数据包必须选择一种实际产品和路线；若无分别报告的产量与组成数据，不得平均化产品状态不同的路线。

前景边界起于含镍矿石、精矿或明确识别的二次原料跨越生产场址入口。边界包括用于生产所声明中间产品的场内预处理、干燥、煅烧、焙烧、熔炼、吹炼、炉渣贫化、浸出或沉淀、产品粒化或脱水、场内烟气与废水处理，以及捕集粉尘和炉渣在场址出口前的管理。上游采矿与选矿、外购能源和试剂生产、资本品、场址入口前运输以及下游精炼为未锻轧镍或化学品，均以背景数据集表示，不属于前景过程。

本类别不包括未经冶金转化而销售的镍矿石与精矿、镍铁与镍生铁、未锻轧精炼镍、镍合金成品，以及作为最终化学产品而非已声明冶金中间产品销售的镍化学品。只有在包装跨越已声明产品门时才纳入包装，并必须将各包装材料拆分为原子交换行。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.nickel-mattes-nickel-oxide-sinters-and-other-intermediate-products-of-nickel-metallurgy |
| classification_refs | CPC 3.0：41421（精确分类语境）；HS 7501 术语佐证 |
| covered_products | 低冰镍或高冰镍；氧化镍烧结物；镍湿法冶炼中间品；其他可证明用于进一步镍冶炼的含镍中间产品 |
| excluded_products | 镍矿石或精矿；镍铁；镍生铁；未锻轧精炼镍；镍合金成品；作为最终产品销售的硫酸镍、碳酸镍或其他镍化学品 |
| representative_product | 生产场址出口处已声明的镍冶金中间产品 |
| production_route | 已声明的硫化物火法冶金、红土矿火法冶金、氧化物焙烧/烧结、湿法冶金沉淀或有专门文件说明的联合路线 |
| market_state | 出货状态的固体、粒料、烧结物、滤饼或浆料；按适用情况声明水分、干固体、镍含量、硫含量及伴生金属含量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供进一步回收或精炼镍及伴生金属的含镍冶金中间产品 |
| How much | 生产场址出口处 1,000 kg 已声明出货状态产品 |
| How well | 对所代表批次或生产周期的产品形态、干固体比例、镍含量、硫含量、主要伴生金属及关键杂质规格进行测量 |
| How long or cycle | 一个已声明生产周期或报告期，并将批次加权产量归一化为 1,000 kg |
| reference_flow_link | `out_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 镍冶金中间产品（UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品名称与形态；路线；矿石/原料类别；出货质量；干固体比例或水分；镍含量；硫含量；重要时的钴和铜含量；杂质规格；场址与地理范围；报告期；回收酸处理；炉渣和粉尘循环状态 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及以质量计量的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单归一化为 1,000 kg 出货状态产品；归一化前保留未取整的实测质量。 |
| `dry_mass_disclosure` | 产品及含镍原料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告出货状态质量和实测水分或干固体比例；计算干质量时不得暗中将参考流改为干产品。 |
| `contained_nickel` | 产品、原料、炉渣和粉尘 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg Ni | 用材料质量与代表性镍品位计算含镍量，并声明品位采用湿基还是干基。 |
| `gas_volume_conditions` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积及其温度、压力和干/湿气基准条件；不得合并基准条件不同的体积。 |
| `energy_conversion` | 交流电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始电能计量记录；如将 kWh 换算为 MJ，按 1 kWh = 3.6 MJ 并记录换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 含镍矿石、精矿或明确识别的二次原料在生产场址入口接收，并记录质量、水分、镍品位及路线相关组成 |
| starting_condition_role | 转化为已声明镍冶金中间产品的前景输入边界 |
| product_classification_scope | 镍锍、氧化镍烧结物及镍冶炼的其他中间产品；不包括矿石/精矿和精炼镍产品 |
| recursive_input_rule | 若某投入本身属于覆盖的镍冶金中间产品，则将该精确投入记录为单独产品交换并关联上游数据集；不得在本前景过程中递归纳入其先前生产。 |
| upstream_dataset_requirement | 跨越场址入口的每项外购原料、燃料、电力、氧气、水和试剂均需要与地理、技术和产品状态相适配的上游数据集。 |
| disclosure | 声明路线、原料类型、预处理状态、余热回收、制氧边界、烟气硫回收、炉渣贫化与循环、粉尘循环、水循环、废水处理、直接排放区室及排除的共享基础设施。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | 前景路线 | 纳入生产已声明中间产品所实际采用的预处理、热处理、湿法冶金、产品调理、烟气及水处理单元；不得用未实测路线的平均值替代。 | `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | 外购投入 | 前景边界止于场址入口；每项外购原料、能源载体、水、氧气和试剂均应关联上游数据集。 | `eu-jrc-nfm-bref-2017` |
| `boundary_direct_releases` | 大气和水排放 | 纳入场内治理后的实测或计算直接排放；不得将上游发电排放重复记录为前景排放。 | `eu-jrc-nfm-bref-2017` |
| `boundary_recovery_loops` | 炉渣、粉尘、硫及热量回收 | 将场内返回物建模为内部循环，只报告场址出口净交换；转移到其他场址的流按实际状态披露为技术圈输出或废物。 | `eu-jrc-nfm-bref-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `nickel_intermediate_production` | 镍中间产品生产及场内处理 | required | 纳入已声明路线的实测单元操作；路线特定行仅在该交换跨越所选前景边界时适用。 | 前景转化、产品调理、烟气处理、水处理和残余物管理 | 1,000 kg 已声明出货状态产品 |

### 过程：镍中间产品生产及场内处理（`nickel_intermediate_production`）

本合并过程避免路线与交换的笛卡尔积扩展。每张卡片仅代表一个原子交换。只应用满足所述路线条件的卡片；数据集发布前，应将场址实际存在的其他交换分别添加为原子行。

#### 输入

##### 产品流

###### 硫化镍精矿（`in_nickel_sulfide_concentrate`）

仅当路线接收经选矿的硫化含镍原料时记录本投入。

- 选定流：硫化镍精矿（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：跨越场址入口的精矿净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`eu-jrc-nfm-bref-2017`

###### 红土镍矿（`in_nickel_laterite_ore`）

仅当路线接收氧化型红土矿时记录本投入，并声明褐铁矿型或腐泥土型等状态。

- 选定流：红土镍矿（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：跨越场址入口的红土矿净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`eu-jrc-nfm-bref-2017`

###### 硅质熔剂（`in_silica_sand`）

已声明热处理路线使用硅砂作熔剂时记录。

- 选定流：硅砂 `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- 流属性/单位：Mass / kg
- 数量规则：装入的硅砂净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`eu-jrc-nfm-bref-2017`

###### 加入硫磺（`in_sulfur`）

仅当加入元素硫以形成硫化物镍锍或完成其他已声明冶金反应时记录。

- 选定流：硫磺 `36a73796-51c8-44d6-9615-c4bc338274ec`
- 流属性/单位：Mass / kg
- 数量规则：装入的元素硫净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`eu-jrc-nfm-bref-2017`

###### 冶金焦（`in_metallurgical_coke`）

仅当冶金焦作为还原剂或炉用燃料时记录。

- 选定流：冶金焦 `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- 流属性/单位：Mass / kg
- 数量规则：装入的冶金焦净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`eu-jrc-nfm-bref-2017`

###### 气态天然气（`in_natural_gas`）

记录在干燥机、回转窑、熔炉或辅助单元燃烧的外购气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：已声明基准条件下的天然气净计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas`
- 来源：`eu-jrc-nfm-bref-2017`

###### 交流电（`in_electricity`）

记录过程及辅助设备净输入的交流电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：外购电量减去单独计量的场址出口电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas`
- 来源：`eu-jrc-nfm-bref-2017`

###### 工业氧气（`in_industrial_oxygen`）

记录外购或跨围墙供应的工业氧气；只有制氧由单独上游数据集表示时，才从本前景过程排除场内制氧用电。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：已声明基准条件下的氧气净计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas`
- 来源：`eu-jrc-nfm-bref-2017`

###### 工艺用水（`in_process_water`）

扣除实测场内回用水后，记录工艺补充水净投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越场址入口的工艺用水净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 硫酸投入（`in_sulfuric_acid`）

仅当硫酸外购或转入湿法冶金路线时记录，不得与回收硫酸输出净额合并。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：硫酸溶液净实测质量，并声明浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reagent_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 氨水（`in_aqueous_ammonia`）

仅对氨浸出或沉淀路线记录氨水。

- 选定流：氨水 `058124f8-5e84-4070-b6c0-4bacac3a0024`
- 流属性/单位：Mass / kg
- 数量规则：氨水溶液净实测质量，并声明浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reagent_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 硫化氢试剂（`in_hydrogen_sulfide`）

仅当硫化氢作为沉淀试剂制取镍钴硫化物中间产品时记录。

- 选定流：硫化氢（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：硫化氢净实测质量，不包括载气质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reagent_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 氢氧化钠（`in_sodium_hydroxide`）

仅当氢氧化钠用于前景边界内的 pH 调节、沉淀、洗涤或水处理时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：氢氧化钠溶液或固体净实测质量，并声明浓度和物态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reagent_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

没有普遍必需的废物投入。接收特定含镍废物的场址必须添加该精确原子废物流，并记录实测质量、组成、处理作用和上游状态。

##### 基本流

没有普遍必需的基本流投入。外购材料和能源的资源开采应属于其上游数据集。

#### 输出

##### 产品流

###### 已声明镍冶金中间产品（`out_reference_product`）

本行为类别级参考产品。由于没有一个公开 UUID 覆盖全部纳入的中间产品，必须声明精确产品名称和状态。

- 选定流：镍冶金中间产品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：将已声明报告期的实测发运质量归一化为 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 已声明出货状态产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_dispatch`
- 来源：`un-cpc-3-0-structure-2025`、`china-mof-tariff-2013`、`eu-jrc-nfm-bref-2017`

###### 回收硫酸（`out_sulfuric_acid`）

将场内烟气制酸装置输出场址的硫酸记录为共产品；内部消耗的硫酸不得记录为总输出。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：跨越场址出口的硫酸溶液净实测质量，并声明浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_dispatch`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

###### 镍冶炼厂渣（`out_nickel_smelter_slag`）

扣除场内炉渣贫化与返回后，记录离开场址的镍冶炼厂渣净量，并声明回收或处置去向及镍品位。

- 选定流：镍冶炼厂渣 `4fcb4fe9-a429-4de3-aaf0-a0ed897fd4ce`
- 流属性/单位：Mass / kg
- 数量规则：跨越场址出口的炉渣净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 捕集的含镍烟气粉尘（`out_nickel_flue_gas_dust`）

扣除实测场内循环后，记录转移出场址的捕集含镍烟气粉尘净量。

- 选定流：含镍烟气粉尘（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：跨越场址出口的捕集粉尘净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 直接排入空气的化石源二氧化碳（`out_carbon_dioxide_fossil`）

记录场内燃烧及含碳还原剂氧化产生的直接化石源二氧化碳；不包括上游发电排放。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接前景排放源的烟气实测或碳平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

###### 直接排入空气的二氧化硫（`out_sulfur_dioxide_air`）

记录治理和制酸后的原子二氧化硫排放，接收区室为普通的“排放到空气，未指定”；不得以“硫氧化物”集合流替代。

- 选定流：二氧化硫，排放到空气，未指定（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：场内治理后的烟囱及无组织二氧化硫实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排入空气（未指定）的镍（`out_nickel_air`）

记录场内捕集后排入空气的镍实测总质量；只有在更具体接收区室不可得时才使用未指定空气区室。

- 选定流：镍 `08a91e70-3ddc-11dd-96c8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：治理后的烟囱镍排放与已量化无组织镍排放之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排入水体（未指定）的镍（`out_nickel_water`）

记录经场内处理后直接排水中的镍实测总质量；只有在接收水体类型不可得时才使用未指定水体区室。

- 选定流：镍 `08a91e70-3ddc-11dd-96ce-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：排水体积乘以场内处理后的流量加权镍浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已声明出货状态产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 单独计量的路线单元和输出 | 通过拆分单独计量的预处理、熔炼、浸出、烟气处理、制酸及残余物处理单元来避免分配。 | `eu-jrc-nfm-bref-2017` |
| `allocation_internal_returns` | 场内镍锍、炉渣、粉尘、水、酸和热量返回 | 将实测场内返回物作为内部循环；其处理负荷归于前景过程，仅报告场址出口净交换。 | `eu-jrc-nfm-bref-2017` |
| `allocation_coproducts` | 输出场址的硫酸或其他有价值共产品 | 优先采用有文件依据的物理因果关系，如转化为输出硫酸的硫；若不存在可辩护的因果关系，则采用收入分配，并披露价格期、币种及零抵扣处理的敏感性。 | `eu-jrc-nfm-bref-2017` |
| `allocation_recovered_metals` | 送往金属回收的炉渣、粉尘、滤饼或残余物 | 除非研究采用明确记录的替代模型，否则不得在前景清单内计入避免原生金属生产的抵扣；应分别披露可回收镍和伴生金属含量。 | `eu-jrc-nfm-bref-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `nickel_intermediate_production` | 原料、熔剂、硫和焦炭投入 | 地磅、皮带秤、配料单、发票及化验 | 毛重；皮重；水分；干固体；Ni；S；Co；Cu；物态；批次号 | 将校准后的接收及加料记录与库存变化核对 | kg 与质量分数 | 每批及每月核对 | 与产品输出相同报告期 | 全部纳入的场址单元 | 汇总净消耗质量并按发运产品归一化 | 秤校准、库存核对、取样方案、化验证书 |
| `cp_energy_and_gas` | `nickel_intermediate_production` | 天然气、电力和氧气投入 | 贸易结算表及分表记录 | 表计起止；输入；输出；压力；温度；气体条件；氧纯度；停运 | 将场址入口表计与路线单元分表核对 | m3 与 MJ | 连续或每结算周期 | 至少覆盖一个代表性生产周期及报告期 | 全部纳入的场址单元 | 净输入除以合格产品输出 | 表计校准、账单核对、缺失数据日志 |
| `cp_water_records` | `nickel_intermediate_production` | 工艺用水净投入 | 取水及回用水表记录 | 补充水；回用水；库存变化；来源；水质 | 采用校准表计建立水平衡 | kg | 每日或连续、每月核对 | 与产品输出相同报告期 | 前景水系统 | 场址入口补充水除以合格输出 | 表计校准及水平衡闭合 |
| `cp_reagent_records` | `nickel_intermediate_production` | 酸、氨水、硫化氢及氢氧化钠投入 | 储罐液位、流量计、配料单、发票、浓度化验 | 到货质量；期初/期末库存；浓度；纯度；物态；返回量 | 核对采购、库存变化和批次投加 | kg 溶液与质量分数 | 每次到货及每批、每月核对 | 与适用路线输出相同报告期 | 试剂储存及纳入路线单元 | 明确标注净纯物质或溶液质量，并按输出归一化 | 储罐校准、浓度证书、投加核对 |
| `cp_product_dispatch` | `nickel_intermediate_production` | 参考产品及输出硫酸 | 发运秤、储罐表、产品化验、库存 | 产品质量；酸质量；水分；干固体；Ni；S；Co；Cu；酸浓度；批次 | 核对生产量、库存变化和发运量 | kg 与质量分数 | 每批或每次转移 | 完整报告期 | 全部产品调理及发运点 | 批次加权质量与化验；将参考产品归一化为 1,000 kg | 秤校准、化验 QA/QC、库存核对 |
| `cp_waste_records` | `nickel_intermediate_production` | 炉渣及捕集粉尘输出 | 称量单、容器、库存、转移联单、化验 | 质量；Ni；Co；Cu；水分；来源；内部返回；去向；废物状态 | 核对产生、场内返回、储存及转移数量 | kg 与质量分数 | 每次转移、每月核对 | 与产品输出相同报告期 | 全部纳入的捕集及处理单元 | 扣除场内返回后报告场址出口净废物 | 联单、秤校准、代表性化验、库存核对 |
| `cp_air_emissions` | `nickel_intermediate_production` | 直接排放的二氧化碳、二氧化硫及镍 | 连续监测、烟囱测试、燃料/碳记录、无组织排放调查 | 气量；浓度；运行时数；燃料碳；焦炭碳；捕集硫；检出限 | 积分有效测量；只有二氧化碳缺测时采用有文件依据的碳平衡 | kg | 可行时连续并按要求测试 | 覆盖报告期内代表性运行状态 | 全部纳入的烟囱及量化无组织排放源 | 汇总治理后直接排放并按输出归一化 | 监测仪校准、有效数据覆盖率、烟囱测试报告、碳平衡闭合 |
| `cp_water_emissions` | `nickel_intermediate_production` | 排入水体的镍 | 排水表及流量比例取样 | 排水体积；Ni 浓度；检出限；旁路；接收水体 | 积分排水量乘以流量加权浓度 | kg | 连续流量并按许可要求取样 | 与产品输出相同报告期 | 全部直接前景排放口 | 汇总处理后直接排放并按输出归一化 | 实验室资质、空白样、平行样、表计校准、许可记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_output` | 全部清单行 | 归一化数量 = 报告期净交换量 / 报告期合格产品质量 × 1,000 kg | 净交换量；合格产品发运质量 | 每 1,000 kg 产品的交换量 |  |
| `calc_dry_mass` | 原料、产品、炉渣和粉尘 | 干质量 = 出货状态质量 ×（1 − 水分质量分数），或出货状态质量 × 实测干固体比例 | 出货状态质量；代表性水分或干固体比例 | 带基准标识的干质量 |  |
| `calc_contained_nickel` | 含镍材料 | 含镍量 = 与化验基准一致的材料质量 × 实测镍质量分数 | 材料质量；化验基准；Ni 分数 | kg Ni |  |
| `calc_gas_reference` | 天然气和氧气 | 只有记录温度、绝对压力、压缩因子处理及干/湿基准时才换算体积，并保留原始计量值。 | 计量体积及基准条件 | 已声明条件下可比的 m3 |  |
| `calc_direct_co2` | `out_carbon_dioxide_fossil` | 优先采用直接 CO2 实测；否则对消耗的化石燃料及还原剂碳采用有文件依据的碳平衡，并扣除产品或废物中的实测留存碳。 | 燃料和焦炭碳；留存碳；实测 CO2 | kg 直接化石源 CO2 | `eu-jrc-nfm-bref-2017` |
| `calc_nickel_water` | `out_nickel_water` | 镍排放量 = 各区间排水体积 × 该区间流量加权镍浓度之和；低于检出限的值按已声明实验室规则处理。 | 排水体积；镍浓度；检出限 | kg 排水镍 | `eu-jrc-nfm-bref-2017` |
| `calc_mass_balance` | Ni、S、Co 和 Cu 平衡 | 核对实测投入、产品、共产品、废物、排放和库存变化；发布前调查物料不平衡。 | 全部相关交换的化验与质量 | 元素平衡及闭合说明 | `eu-jrc-nfm-bref-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 产品形态及继续冶炼用途必须证明其纳入本 PCR，并排除矿石/精矿、镍铁和精炼镍类别。 | 产品规格、合同、过程说明及分类记录 |
| `dq_route` | 前景过程 | 路线、炉型或反应器类型、原料状态、预处理、产品调理及治理单元必须与报告的清单行一致。 | 工艺流程图及单元操作清单 |
| `dq_assay` | 含镍材料 | 对 Ni、S、Co、Cu、水分及杂质采用代表性取样和可追溯化验，并声明湿基或干基。 | 取样方案、实验室方法、证书、QA/QC 结果 |
| `dq_temporal` | 全部清单行 | 投入、输出、库存变化及排放记录必须对齐到同一期间，并披露停产、开停车、旁路和生产周期变化。 | 期间核对及运行日志 |
| `dq_completeness` | 场址边界 | 核对场址出入口表计、收料、发运、废物及直接排放，并解释排除流和缺失数据。 | 质量、元素、能源及水平衡校验 |
| `dq_background` | 上游数据集 | 匹配地理、技术、产品状态、浓度、电压/电网、制氧边界及气体体积条件。 | 数据集元数据及映射说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别 | 若数据集代表矿石/精矿、镍铁、镍生铁、未锻轧精炼镍或最终市场镍化学品，而非已声明冶金中间产品，则拒绝。 | `un-cpc-3-0-structure-2025`、`china-mof-tariff-2013` |
| `validate_reference` | 参考流 | 必须恰为 1,000 kg 出货状态参考产品，并具备全部必需产品、组成、路线、场址及期间限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_route_rows` | 清单 | 每个适用行必须匹配已声明路线；每项实际材料、能源、废物及直接排放交换必须由一个原子流表示。 | `eu-jrc-nfm-bref-2017` |
| `validate_uuid_semantics` | 带 UUID 的清单行 | 核对流类型、基础名称、属性、单位组、区室及物态；不得用宽泛物种组或另一条路线的特定产品替代。 |  |
| `validate_internal_loops` | 循环与回收 | 不得将场内返回的镍锍、炉渣、粉尘、水、酸或热量同时作为总输出和新投入而重复计算。 | `eu-jrc-nfm-bref-2017` |
| `validate_direct_emissions` | 大气和水输出 | 必须报告治理后的直接前景排放；外购电力和外购投入生产的排放不得列入直接排放行。 | `eu-jrc-nfm-bref-2017` |
| `validate_balances` | 物料核算 | 必须披露 Ni 和 S 平衡闭合；超过场址已定义测量不确定度的物料差异均须解释。 | `eu-jrc-nfm-bref-2017` |
| `validate_ranges` | 数量筛查 | 全部清单数量均采用前景值；在两个相互独立、经原文核验且边界兼容的来源支持前，不批准外部 QA 范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产数据集；所有未解决流身份和证据需求处理完毕后，可审查为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 需要已声明镍锍、氧化镍烧结物或其他镍冶金中间产品的产品系统 |
| allowed_use | 用于所报告的产品形态、路线、原料类别、场址地理、组成、技术、治理及报告期；或用于已披露全部差异且有依据的近似匹配 |
| excluded_use | 不得作为镍矿石/精矿、镍铁、镍生铁、精炼镍、最终市场镍化学品或无代表性说明的另一中间产品路线之替代数据 |
| required_metadata | PCR id 与版本；产品名称与形态；路线；场址与地理；报告期；原料类别；质量/水分/干固体；Ni/S/Co/Cu 化验；能源与制氧边界；炉渣/粉尘/水循环；直接排放区室；分配方法；上游数据集身份 |
| required_quality_disclosure | 时间与技术代表性；测量和化验方法；表计与实验室 QA/QC；数据完整性；质量与元素平衡闭合；缺失数据处理；分配敏感性；未解决 UUID 及范围证据状态 |
| update_trigger | 产品形态、原料类别、路线、炉型/反应器、能源或制氧边界、硫捕集、炉渣/粉尘循环、废水处理、分配方法变化，或质量/元素平衡发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，代码 41421。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | 英文正式类别身份及分类范围 |
| `china-mof-tariff-2013` | official_guidance | 中华人民共和国财政部，2013 年税则表，税则号列 75011000、75012010、75012090。https://gss.mof.gov.cn/gzdt/zhengcefabu/201306/P020130708509079068339.pdf（检索日期：2026-09-04） | 专业中文术语及 HS 7501 边界佐证 |
| `eu-jrc-nfm-bref-2017` | official_guidance | Cusano, G. 等，《有色金属工业最佳可行技术参考文件》，欧盟委员会联合研究中心，EUR 28648 EN，JRC107041，2017，doi:10.2760/8224。https://publications.jrc.ec.europa.eu/repository/handle/JRC107041（检索日期：2026-09-04） | 镍生产路线分解、前景交换、回收循环、直接排放边界、采集及质量规则 |
